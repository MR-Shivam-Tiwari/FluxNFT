"use client";

import React, { Suspense, useEffect, useState } from "react";
import Data from "./astvakra.json";
import { useRouter, useSearchParams } from "next/navigation";

function Astvakrahindi() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. Initialize state from query param (or default to 1):
  const [selectedChapter, setSelectedChapter] = useState(() => {
    const chapterFromUrl = searchParams.get("selectedChapter");
    return chapterFromUrl ? parseInt(chapterFromUrl) : 1;
  });

  // 2. Sync state from URL if user navigates with a different 'selectedChapter':
  useEffect(() => {
    const chapterFromUrl = searchParams.get("selectedChapter");
    if (chapterFromUrl && parseInt(chapterFromUrl) !== selectedChapter) {
      setSelectedChapter(parseInt(chapterFromUrl));
    }
  }, [searchParams, selectedChapter]); // Note 'selectedChapter' added here

  // 3. Update URL & localStorage whenever 'selectedChapter' changes:
  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("selectedChapter", selectedChapter);
    router.replace(`?${newSearchParams.toString()}`);
    localStorage.setItem("selectedChapter", selectedChapter);
  }, [selectedChapter, router, searchParams]);

  // Collect all distinct chapters:
  const chapters = [...new Set(Data.map((item) => item.Chapter))];

  // Filter data by currently selected chapter:
  const chapterData = Data.filter(
    (item) => item.Chapter === String(selectedChapter)
  );

  // Handle changing chapters:
  const handleChapterSelect = (chapter) => {
    const chapterNum = parseInt(chapter);
    setSelectedChapter(chapterNum);
    window.scrollTo(0, 0); // Scroll to top
  };

  // Format string with line breaks and special color/size for certain text:
  const formatDescription = (Text) => {
    if (!Text) return "";
    let formattedDescription = Text.replace(/\n/g, "<br />");
    formattedDescription = formattedDescription.replace(
      /'([^']*)'/g,
      '</br></br><p style="color: #ea580c; font-size:21px; line-height: 1.5;">$1</p> '
    );
    formattedDescription = formattedDescription.replace(
      /`([^`]*)`/g,
      '<div style="color:gray; font-weight: bold; margin-top:5px; font-size:16px; line-height: 1.5;">$1</div></br><span style="color:#ea580c;">Translation</span>'
    );
    return formattedDescription;
  };

  // Optional styling for the horizontal scrollbar:
  const styles = {
    scrollbar: {
      scrollbarWidth: "thin",
      scrollbarColor: "#c0c0c0 #f0f0f0",
      overflowX: "auto",
    },
    customScrollbar: `
      .flex::-webkit-scrollbar {
        height: 10px;
      }
  
      .flex::-webkit-scrollbar-track {
        background: #f0f0f0;
      }
  
      .flex::-webkit-scrollbar-thumb {
        background-color: #c0c0c0;
        border-radius: 10px;
        border: 2px solid #f0f0f0;
      }
    `,
  };

  return (
    <div
      className="mt-6"
      style={{
        backgroundImage: 'url("/bgg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen flex flex-col items-center">
        {/* Chapter buttons row */}
        <div className="bg-orange-100 w-full p-2 lg:px-7 gap-3 flex items-center justify-center">
          <div className="flex container items-center space-x-2 overflow-x-auto" style={styles.scrollbar}>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-8 bg-orange-600 border px-3 py-1 text-white">
              Chapter
            </button>
            {chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => handleChapterSelect(chapter)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2 ${
                  selectedChapter === parseInt(chapter)
                    ? "bg-orange-600 text-white"
                    : "bg-orange-200"
                }`}
              >
                {chapter}
              </button>
            ))}
          </div>
        </div>

        {/* Main content: Chapter text */}
        <div className="flex-1 flex items-center text-start p-4 lg:px-40 pb-20">
          <div className="text-center">
            {chapterData.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="text-[40px] josefin-sans-regular font-semibold mb-2">
                  Chapter {item.Chapter}
                </div>
                <div
                  className="text-md text-gray-800 yatra-one-regular text-start"
                  dangerouslySetInnerHTML={{
                    __html: formatDescription(item.Text),
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Fixed bottom navigation buttons */}
        <div className="bg-orange-100 w-full p-2 lg:px-20 flex justify-between fixed bottom-0 left-0">
          <button
            onClick={() => handleChapterSelect(Math.max(selectedChapter - 1, 1))}
            className="inline-flex items-center justify-center w-[120px] whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#374151] text-white"
          >
            Previous
          </button>
          <button
            onClick={() =>
              handleChapterSelect(Math.min(selectedChapter + 1, chapters.length))
            }
            className={`inline-flex items-center justify-center w-[120px] whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 ${
              selectedChapter !== chapters.length
                ? "bg-[#a0522d] text-white"
                : "bg-[#a0522d] text-white pointer-events-none opacity-50"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Astvakra() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Astvakrahindi />
    </Suspense>
  );
}
