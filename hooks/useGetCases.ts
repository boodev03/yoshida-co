import { app } from "@/configs/firebase.config";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

const db = getFirestore(app);

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ContentSection {
  id: string;
  type: "gallery" | "normal" | "text-content" | "video" | "rich-text";
  order: number;
  data: any; // Specific data for each section type
  createdAt: number;
  updatedAt: number;
}

export interface GalleryData {
  rows: Array<{
    id: string;
    images: Array<{
      id: string;
      src: string;
      alt: string;
    }>;
    imagesPerRow: number;
  }>;
}

export interface NormalContentData {
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "top" | "bottom";
}

export interface TextContentData {
  title: string;
  content: string;
  titleType?: "h1" | "h2" | "h3";
  image?: {
    src: string;
    alt: string;
    file?: File;
  };
  imagePosition?: "left" | "right";
}

export interface VideoData {
  url: string;
  title?: string;
}

export interface RichTextData {
  content: string; // TipTap HTML content
}

export interface Case {
  id?: string;

  // Basic Case Info
  title: string;
  category: string;
  cardDescription: string;
  thumbnail: string;

  // Flexible Content Sections (ordered)
  sections: ContentSection[];

  // SEO Fields
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  ogImage: string;
  ogTwitter: string;

  // Timestamps
  createdAt?: number;
  updatedAt?: number;
}

/**
 * Fetches all cases from the Firestore database with pagination
 * @param options Optional parameters for pagination and sorting
 * @returns Object containing cases array and pagination info
 */
const collectionName = "products";
export const getAllCases = async (options?: {
  pageSize?: number;
  lastDoc?: QueryDocumentSnapshot<DocumentData>;
}): Promise<{
  cases: Case[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  hasMore: boolean;
}> => {
  try {
    const casesCollection = collection(db, collectionName);
    let queryRef = query(casesCollection, orderBy("updatedAt", "desc"));

    // Apply pagination
    const pageSize = options?.pageSize || 10;
    queryRef = query(queryRef, limit(pageSize));

    // Start after the last document if provided (for pagination)
    if (options?.lastDoc) {
      queryRef = query(queryRef, startAfter(options.lastDoc));
    }

    const querySnapshot = await getDocs(queryRef);

    const cases: Case[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<Case, "id">;
      cases.push({ ...data, id: doc.id });
    });

    // Get the last document for pagination
    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1] || null;

    // Check if there are more documents
    const hasMore = querySnapshot.docs.length === pageSize;

    return {
      cases,
      lastDoc,
      hasMore,
    };
  } catch (error) {
    console.error("Error fetching cases:", error);
    throw error;
  }
};

/**
 * Hook to fetch cases with pagination using TanStack Query
 * @param pageSize Number of cases to fetch per page
 * @returns Query result with cases data and pagination info
 */
export const useGetCases = (pageSize: number = 10) => {
  return useQuery({
    queryKey: ["cases", pageSize],
    queryFn: () => getAllCases({ pageSize }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to fetch cases with infinite pagination using TanStack Query
 * @param pageSize Number of cases to fetch per page
 * @returns Infinite query result with cases data and pagination controls
 */
export const useGetCasesInfinite = (pageSize: number = 10) => {
  return useInfiniteQuery({
    queryKey: ["cases-infinite", pageSize],
    queryFn: ({
      pageParam,
    }: {
      pageParam: QueryDocumentSnapshot<DocumentData> | undefined;
    }) =>
      getAllCases({
        pageSize,
        lastDoc: pageParam as QueryDocumentSnapshot<DocumentData> | undefined,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.lastDoc : undefined;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
