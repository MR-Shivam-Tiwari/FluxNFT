"use client"

import React, { useState, useRef, useCallback, useEffect, Suspense } from "react";
import { EpubView } from "react-reader";
import mahabharataEpub from "./Astvakra-Gita.epub";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function AstavakraGeetaEnglish() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [epubFile, setEpubFile] = useState(mahabharataEpub);
  const [locationState, setLocationState] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(
    parseInt(searchParams.get("selectedBookIndex")) || 0
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const renditionRef = useRef(null);
  const drawerRef = useRef(null);
  const [pageNumberFilter, setPageNumberFilter] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!searchParams.get("selectedBookIndex")) {
      const params = new URLSearchParams(searchParams);
      params.set("selectedBookIndex", selectedBookIndex);
      router.push(`${pathname}?${params.toString()}`);
    }
  }, [selectedBookIndex, router, pathname, searchParams]);

  useEffect(() => {
    const chapterFromUrl = searchParams.get("selectedBookIndex");
    if (chapterFromUrl && parseInt(chapterFromUrl) !== selectedBookIndex) {
      setSelectedBookIndex(parseInt(chapterFromUrl));
    }
  }, [searchParams, selectedBookIndex]);

  useEffect(() => {
    if (books[selectedBookIndex]) {
      setLocationState(books[selectedBookIndex].href);
    }
  }, [selectedBookIndex, books]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goToPage = (pageNumber) => {
    if (renditionRef.current && pageNumber) {
      renditionRef.current.display(pageNumber);
    }
  };

  const drawerStyle = {
    position: "fixed",
    top: 0,
    left: isDrawerOpen ? 0 : "-250px",
    width: "250px",
    height: "100%",
    backgroundColor: "#fff",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
    transition: "left 0.3s ease",
  };

  const menuButtonStyle = {
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    readFile(file);
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setEpubFile(event.target.result);
      setLoading(true);
    };
    reader.onerror = (error) => {
      console.error("Error reading file", error);
    };
    reader.readAsArrayBuffer(file);
  };

  const onLocationChanged = (loc) => {
    setLocationState(loc);
  };

  const onTocLoaded = (toc) => {
    const books = toc.map((item, index) => ({
      label: item.label,
      href: item.href,
      index: index,
    }));
    setBooks(books);
    setSelectedBookIndex(parseInt(searchParams.get("selectedBookIndex")) || 0);
  };

  const handleRendition = useCallback((rendition) => {
    renditionRef.current = rendition;
    renditionRef.current.on("relocated", (location) => {
      console.log("Relocated to:", location);
    });
    renditionRef.current.on("displayError", (error) => {
      console.error("Display Error:", error);
    });
    renditionRef.current.on("rendered", () => {
      setLoading(false);
    });
  }, []);

  const nextChapter = () => {
    const nextIndex = selectedBookIndex + 1;
    if (nextIndex < books.length) {
      goToBook(nextIndex);
    }
  };

  const prevChapter = () => {
    const prevIndex = selectedBookIndex - 1;
    if (prevIndex >= 0) {
      goToBook(prevIndex);
    }
  };

  const goToBook = (index) => {
    const book = books[index];
    if (book) {
      setLocationState(book.href);
      setSelectedBookIndex(index);

      const params = new URLSearchParams(searchParams);
      params.set("selectedBookIndex", index);
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  const formatDescription = (Text) => {
    let formattedDescription = Text?.replace(/\n/g, "<br /><br />");
    formattedDescription = formattedDescription?.replace(/'([^']*)'/g, "<b>$1</b>");
    formattedDescription = formattedDescription?.replace(/`([^`]*)`/g, '<i style="color: #6b7280;">$1</i>');
    return formattedDescription;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        isDrawerOpen
      ) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return Math.min(prevProgress + 0.5, 100);
        } else {
          clearInterval(interval);
          setLoading(false);
          return prevProgress;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    h2: {
      fontSize: "24px",
      color: "black",
      lineHeight: "1.4",
      marginBottom: "0px",
      marginTop: "10px",
    },
    p: {
      color: "black",
      lineHeight: "1.8",
      textAlign: "justify",
      textAlignLast: "left",
    },
  };

  return (
    <div
      className="bg-gray-200 h-full"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="flex justify-center items-center gap-2 lg:hidden">
        <button
          className="flex w-[170px] text-center bg-orange-200 h-8 shadow border-1.5 border-orange-300 my-2 items-center justify-center font-bold"
          onClick={toggleDrawer}
          style={menuButtonStyle}
        >
          <span className="mb-1" style={{ marginLeft: "5px" }}>
            Select Chapter
          </span>
        </button>
      </div>

      <div
        ref={drawerRef}
        className="z-20 lg:flex lg:static lg:hidden lg:z-auto bg-gray-200"
        style={drawerStyle}
      >
        <div className="flex pt-2 px-2 justify-end">
          <button
            className="lg:hidden font-bold p-2 text-white text-lg bg-gray-400 rounded"
            onClick={toggleDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
        <div
          className="flex-shrink-0 px-5 lg:px-0"
          style={{ overflowY: "scroll", height: "100%" }}
        >
          <ul className="flex flex-col">
            {books.map((book, index) => (
              <li
                key={book.href}
                onClick={() => goToBook(index)}
                className={`lg:my-1 p-1 cursor-pointer text-sm font-medium rounded ${
                  index === selectedBookIndex
                    ? "bg-orange-400 text-white"
                    : "text-gray-700 hover:bg-orange-200"
                }`}
              >
                <p className="lg:text-md mb-0 text-left">
                  {index + 1}. {book.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-2">
          <div className="h-1 w-[80%] bg-gray-300 rounded-lg">
            <div
              className="h-full bg-orange-400 rounded-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center overflow-hidden">
          <div className="flex-grow w-full relative bg-white">
            <EpubView
              url={epubFile}
              location={locationState}
              tocChanged={onTocLoaded}
              locationChanged={onLocationChanged}
              epubOptions={{ flow: "scrolled", spread: "auto" }}
              renditionChanged={handleRendition}
              styles={styles}
            />
          </div>
        </div>
      )}

      <div className="flex justify-center mt-2 mb-4 gap-2">
        <button
          className="bg-orange-200 px-4 py-2 font-semibold text-sm text-black rounded shadow-md"
          onClick={prevChapter}
        >
          Previous Chapter
        </button>
        <button
          className="bg-orange-200 px-4 py-2 font-semibold text-sm text-black rounded shadow-md"
          onClick={nextChapter}
        >
          Next Chapter
        </button>
      </div>
    </div>
  );
}


export default function Astvakra() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AstavakraGeetaEnglish />
    </Suspense>
  );
}