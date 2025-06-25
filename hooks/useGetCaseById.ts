import { app } from "@/configs/firebase.config";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { Case } from "./useGetCases";

const db = getFirestore(app);

/**
 * Fetches a single case by ID from the Firestore database
 * @param id The case ID to fetch
 * @returns Promise containing the case data or null if not found
 */
const collectionName = "products";
export const getCaseById = async (id: string): Promise<Case | null> => {
  try {
    const caseDoc = doc(db, collectionName, id);
    const docSnapshot = await getDoc(caseDoc);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data() as Omit<Case, "id">;
      return { ...data, id: docSnapshot.id };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching case by ID:", error);
    throw error;
  }
};

/**
 * Hook to fetch a single case by ID using TanStack Query
 * @param id The case ID to fetch
 * @returns Query result with case data
 */
export const useGetCaseById = (id: string) => {
  return useQuery({
    queryKey: ["case", id],
    queryFn: () => getCaseById(id),
    enabled: !!id, // Only run query if id is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
