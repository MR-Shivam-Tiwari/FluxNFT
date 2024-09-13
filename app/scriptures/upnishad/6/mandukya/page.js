"use client";

import React, { Suspense, useEffect, useState } from "react";
import Data from "./mandukya.json";
import { useRouter, useSearchParams } from "next/navigation";

function MandukyaUpanishad() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedChapter, setSelectedChapter] = useState(1);

  useEffect(() => {
    // Initialize the selectedChapter from the URL or fallback to 1
    const chapterFromUrl = parseInt(searchParams.get("selectedChapter")) || 1;
    setSelectedChapter(chapterFromUrl);
  }, [searchParams]);

  const handleChapterSelect = (chapter) => {
    const chapterNum = parseInt(chapter);
    setSelectedChapter(chapterNum);

    // Update the URL with the selected chapter
    const params = new URLSearchParams(searchParams);
    params.set("selectedChapter", chapterNum);
    router.push(`${location.pathname}?${params.toString()}`, undefined, {
      shallow: true,
    });

    window.scrollTo(0, 0); // Scroll to the top when chapter changes
  };

  const chapters = [...new Set(Data.map((item) => item.Chapter))];

  const chapterData = Data.filter(
    (item) => item.Chapter === String(selectedChapter)
  );

  const formatDescription = (Text) => {
    if (!Text) return "";

    let formattedDescription = Text.replace(/\n/g, "<br /><br />");
    formattedDescription = formattedDescription.replace(
      /'([^']*)'/g,
      '<p style="color: black; text-align: center; font-size:28px; font-weight: bold;">$1</p> '
    );
    formattedDescription = formattedDescription.replace(
      /`([^`]*)`/g,
      '<div style="text-align: start; font-weight: bold; color:rgb(239 88 0); width:100%;  font-size:19px; line-height: 1.5;">$1</div>'
    );
    return formattedDescription;
  };

  const handlePrevious = () => {
    const prevChapter = Math.max(selectedChapter - 1, 1);
    handleChapterSelect(prevChapter);
  };

  const handleNext = () => {
    const nextChapter = Math.min(selectedChapter + 1, chapters.length);
    handleChapterSelect(nextChapter);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/epicimage/bgg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="min-h-screen mt-6 flex flex-col items-center">
          <div className="bg-orange-100 w-full fixed left-0  p-1 lg:px-7 gap-3 flex items-center justify-center">
            <div></div>
            <div
              className="flex container items-center space-x-2 overflow-x-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#c0c0c0 #f0f0f0",
                overflowX: "auto",
              }}
            >
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => handleChapterSelect(chapter)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-[4px] text-sm font-bold text-black ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2 ${
                    selectedChapter === parseInt(chapter)
                      ? "bg-orange-600"
                      : "bg-orange-200"
                  }`}
                >
                  Chapter {chapter}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center text-start mt-10 p-4 lg:px-40 pb-20 w-full">
            <div className="text-center w-full">
              {chapterData.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="text-[40px] josefin-sans-regular font-semibold mb-2">
                    Chapter {item.Chapter}
                  </div>
                  <div
                    className="text-md text-gray-600 whitespace-pre-wrap yatra-one-regular text-start break-words"
                    dangerouslySetInnerHTML={{
                      __html: formatDescription(item.Text),
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-orange-100 w-full p-2 lg:px-20 flex justify-between fixed bottom-0 left-0 right-0">
            <button
              onClick={handlePrevious}
              className="inline-flex items-center justify-center w-[120px] whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#374151] text-white"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
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
    </div>
  );
}

export default function Mandukya() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MandukyaUpanishad />
    </Suspense>
  );
}