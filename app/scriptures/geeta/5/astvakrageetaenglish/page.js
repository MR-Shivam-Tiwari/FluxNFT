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
  // const [epubFile, setEpubFile] = useState("https://ik.imagekit.io/6ih0ldnvx/astwakra%20(1).epub?updatedAt=1735040359480");
  const [locationState, setLocationState] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(
    parseInt(searchParams.get("selectedBookIndex") || "0")
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const renditionRef = useRef(null);
  const drawerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("selectedBookIndex", selectedBookIndex.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [selectedBookIndex, pathname, router]);

  useEffect(() => {
    const chapterFromUrl = searchParams.get("selectedBookIndex");
    if (chapterFromUrl && parseInt(chapterFromUrl) !== selectedBookIndex) {
      setSelectedBookIndex(parseInt(chapterFromUrl));
    }
  }, [searchParams]);



  useEffect(() => {
    if (books[selectedBookIndex]) {
      setLocationState(books[selectedBookIndex].href);
    }
  }, [selectedBookIndex, books]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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

  const onLocationChanged = (loc) => {
    setLocationState(loc);
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
    borderRadius: "2px",
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
      setLoading(true); // Set loading state to true when file reading starts
    };
    reader.onerror = (error) => {
      console.error("Error reading file", error);
    };
    reader.readAsArrayBuffer(file);
  };





  const onTocLoaded = (toc) => {
    const books = toc.map((item, index) => ({
      label: item.label,
      href: item.href,
      index: index,
    }));
    setBooks(books);
    setSelectedBookIndex(parseInt(searchParams.get("selectedBookIndex") || "0"));
  };

  const goToBook = (index) => {
    const book = books[index];
    if (book) {
      setLocationState(book.href);
      setSelectedBookIndex(index);
    }
  };

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

  const formatDescription = (Text) => {
    let formattedDescription = Text?.replace(/\n/g, '<br /><br />');
    formattedDescription = formattedDescription?.replace(/'([^']*)'/g, '<b>$1</b>');
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
          return Math.min(prevProgress + 0.5, 100); // Increment by 0.5
        } else {
          clearInterval(interval);
          setLoading(false); // Optionally, set loading to false when done
          return prevProgress;
        }
      });
    }, 100); // 100ms interval for slower progress

    return () => clearInterval(interval);
  }, []);

  const styles = {
    scrollbar: {
      scrollbarWidth: 'thin', /* For Firefox */
      scrollbarColor: '#c0c0c0 #f0f0f0', /* For Firefox */
      overflowX: 'auto',
    },
    customScrollbar: `
      .flex::-webkit-scrollbar {
        height: 8px;
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
      className="bg-gray-200 h-full mt-6"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="flex justify-center items-center gap-2 lg:hidden">
        <button
          className="flex w-[170px] text-center h-8 bg-orange-200  shadow border-1.5 border-orange-300 my-2 items-center justify-center font-bold"
          onClick={toggleDrawer}
          style={menuButtonStyle}
        >
          <span className="" style={{ marginLeft: "5px" }}>
            Select Chapter
          </span>
        </button>
      </div>

      <div
        ref={drawerRef}
        className="z-20 lg:flex mt-12 lg:static lg:hidden lg:z-auto bg-gray-200"
        style={drawerStyle}
      >
        <div className="flex pt-2 px-2 justify-end">
          <button
            className="lg:hidden font-bold mt-2 p-2 text-white text-lg bg-gray-400 rounded"
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
          className="flex-shrink-0 px-5 lg:px-0 lg:block"
          style={{
            flex: "0 0 250px",
            textAlign: "left",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
          }}
        >
          <ul className="mb-3">
            {books.map((book, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedBookIndex(index);
                  goToBook(index);
                  toggleDrawer();
                }}
                style={{
                  cursor: "pointer",
                  fontWeight: index === selectedBookIndex ? "bold" : "normal",
                  background: index === selectedBookIndex ? "#8b4513" : "",
                  color: index === selectedBookIndex ? "white" : "black",
                }}
                className="inline-flex items-center whitespace-nowrap rounded-md bg-orange-100 mb-2 ml-2 shadow border text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 justify-start gap-2 text-black"
              >
                {book.label.replace(/General | Alphabetical /g, '')}
              </button>
            ))}
          </ul>
        </div>
      </div>

      {epubFile ? (
        <>
          {loading && (
            <div className="w-full h-10 bg-gray-200 px-10">
              <div className="h-full" style={{ width: "100%", transition: "width 2s" }}>

                <div className="flex justify-between">
                  <span className="text-base text-lg font-medium text-blue-700">Loading...</span>
                  <span className="text-sm font-medium text-orange-700">{progress}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-orange-900 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>

              </div>
            </div>
          )}

          <div style={{ width: "100%" }}>
            <div
              className="hidden lg:block"
              style={{
                flex: "0 0 250px",
                textAlign: "left",
                overflowY: "auto",
              }}
            >
              <div className="flex items-center   lg:px-10 " >
                <div className="flex items-center  py-2 " style={styles.scrollbar}>
                  <h3 className="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-8 bg-orange-600 border px-3 py-1 text-white "> Select Chapter</h3>
                  <ul className=" flex justify-center">
                    {books.map((book, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedBookIndex(index);
                          goToBook(index);
                        }}
                        style={{
                          cursor: "pointer",
                          fontWeight:
                            index === selectedBookIndex ? "bold" : "normal",
                          background:
                            index === selectedBookIndex ? "#8b4513" : "",
                          color: index === selectedBookIndex ? "white" : "black",
                        }}
                        className="inline-flex items-center  rounded text-sm  h-8 px-3 font-bold border gap-4  bg-orange-100 py-1 mx-1.5 shadow  text-black"
                      >
                        {book.label.replace(/Chapter|- | – | General | Alphabetical /g, '')}
                      </button>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="w-[100%]  lg:rounded-md bg-orange-300"
              style={{
                flex: "1",
                overflowY: "auto",
                overflowX: "hidden",
                display: "flex",
              }}
            >
              <EpubView
                url={epubFile}
                location={locationState}
                locationChanged={onLocationChanged}
                tocChanged={onTocLoaded}
                epubOptions={{ flow: "scrolled" }}
                ref={renditionRef}
                getRendition={handleRendition}
                style={{ flex: "1", overflowX: "hidden" }}
              />
            </div>
            <div className="bg-orange-100 w-full p-2 px-4 lg:px-20 flex justify-between fixed bottom-0 left-0">
              <button
                className="bg-gray-700 p-2 font-bold text-white px-4 w-[130px] rounded"
                onClick={prevChapter}
              >
                Previous
              </button>
              <button
                className="bg-[#8b4513] font-bold text-white w-[130px] px-4 p-2 rounded"
                onClick={nextChapter}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h3>Upload an EPUB file to read</h3>
          <input type="file" accept=".epub" onChange={handleFileUpload} />
        </div>
      )}
    </div>
  );
}


export default function AstavakraGeeta() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AstavakraGeetaEnglish />
    </Suspense>
  );
}