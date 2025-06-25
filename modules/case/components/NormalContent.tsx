"use client";

import Image from "next/image";
import { NormalContentData } from "@/hooks/useGetCases";

interface NormalContentProps {
  data: NormalContentData;
}

export default function NormalContent({ data }: NormalContentProps) {
  const { content, imageUrl, imageAlt, imagePosition = "left" } = data;

  // Function to render content with custom styling for links and lists
  const renderContent = (text: string) => {
    // Check if content contains lists
    const hasLists = /<ul\s*[^>]*>|<ol\s*[^>]*>/i.test(text);

    return (
      <div className="mx-auto my-6 md:my-8 space-y-4">
        {hasLists && (
          <p className="text-jp-p2 font-normal text-[#0094FF] whitespace-pre-wrap">
            リンク
          </p>
        )}
        <div
          className="text-jp-p2 whitespace-pre-line text-web-dark font-normal [&_a]:text-[#0094FF] [&_ul]:list-disc [&_ul]:list-inside [&_ul]:pl-2 [&_ul_li]:text-jp-p2 [&_ul_li]:font-normal [&_ul_li]:text-black [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:pl-2 [&_ol_li]:text-jp-p2 [&_ol_li]:font-normal [&_ol_li]:text-black"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    );
  };

  if (!imageUrl) {
    // Text only content
    return <div className="container mx-auto">{renderContent(content)}</div>;
  }

  // Content with image
  return (
    <div className="container mx-auto mt-12 md:mt-20">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        {imagePosition === "left" ? (
          <>
            <div className="aspect-video relative md:w-1/2">
              <Image src={imageUrl} alt={imageAlt || ""} fill />
            </div>
            <div className="md:w-1/2">{renderContent(content)}</div>
          </>
        ) : (
          <>
            <div className="md:w-1/2">{renderContent(content)}</div>
            <div className="aspect-video relative md:w-1/2">
              <Image src={imageUrl} alt={imageAlt || ""} fill />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
