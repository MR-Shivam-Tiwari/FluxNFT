"use client"

import { usePathname, useRouter } from "next/navigation";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { EpubView } from "react-reader";
// import { userouter.push, useLocation } from "react-router-dom";

function MahabharataEnglish() {
  const [epubFile, setEpubFile] = useState("https://eventidcard.s3.us-east-1.amazonaws.com/1722853578550-KMGMB+18++VOL.epub");
  const [books, setBooks] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loc, setLocation] = useState(null);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const [pageNumberFilter, setPageNumberFilter] = useState(null);
  const [progress, setProgress] = useState(0);
  const renditionRef = useRef(null);
  const drawerRef = useRef(null);
  const router = useRouter();
  const location = usePathname();

  const query = new URLSearchParams(location.search);
  const initialLocation = query.get("loc");
  const initialBookIndex = query.get("bookIndex");

  useEffect(() => {
    if (initialLocation) {
      setLocation(initialLocation);
    }
    if (initialBookIndex) {
      setSelectedBookIndex(parseInt(initialBookIndex));
    }
  }, [initialLocation, initialBookIndex]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goToPage = (pageNumber) => {
    if (renditionRef.current && pageNumber) {
      renditionRef.current.display(pageNumber);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    readFile(file);
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setEpubFile(event.target.result);
    };
    reader.onerror = (error) => {
      console.error("Error reading file", error);
    };
    reader.readAsArrayBuffer(file);
  };

  const onLocationChanged = (loc) => {
    setLocation(loc);
    router.push(`?loc=${loc}&bookIndex=${selectedBookIndex}`, { replace: true }); // Update the URL with the new location and selected book index without adding a new entry to the history stack
  };

  const onTocLoaded = (toc) => {
    const books = toc.map((item, index) => ({
      label: item.label,
      href: item.href,
      index: index,
    }));
    setBooks(books);
    if (initialBookIndex !== null) {
      setSelectedBookIndex(parseInt(initialBookIndex));
    } else {
      setSelectedBookIndex(0);
    }
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
      setLoading(false); // EPUB file is rendered, stop loading
    });
  }, []);

  const nextPage = () => {
    if (renditionRef.current) {
      renditionRef.current.next();
    }
  };

  const prevPage = () => {
    if (renditionRef.current) {
      renditionRef.current.prev();
    }
  };

  const goToBook = (index) => {
    const book = books[index];
    if (book) {
      setLocation(book.href);
      setSelectedBookIndex(index);
      router.push(`?loc=${book.href}&bookIndex=${index}`); // Update the URL with the book's href and index
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target) && isDrawerOpen) {
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

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
          <div className="text-center">
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
            <div className="mt-4 text-lg font-medium text-blue-700">
              Loading...
            </div>
            <div className="text-sm font-medium text-orange-700">
              {progress}%
            </div>
          </div>
        </div>
      )}
      <div
        className={`bg-gray-200 min-h-screen mt-6 ${loading ? "hidden" : ""}`}
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="flex px-2 items-center justify-between lg:hidden">
          <div>
            <button
              className="flex bg-gray-400 h-9 my-2 items-center font-bold"
              onClick={toggleDrawer}
              style={{
                color: "black",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              <span className="mb-1" style={{ marginLeft: "5px" }}>
                Select Parva
              </span>
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="Search By page number"
              value={pageNumberFilter || ""}
              onChange={(e) => setPageNumberFilter(e.target.value)}
              id="first_name"
              className="bg-gray-50 w-[175px] h-10 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block px-2 py-2.5"
            />
            <button
              onClick={() => goToPage(pageNumberFilter)}
              style={{ cursor: "pointer" }}
              className="bg-[#8b4513] font-bold text-white p-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={drawerRef}
          className="z-20 lg:hidden lg:static lg:z-auto bg-gray-200"
          style={{
            position: "fixed",
            top: 0,
            left: isDrawerOpen ? 0 : "-250px",
            width: "250px",
            height: "100%",
            backgroundColor: "#fff",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
            transition: "left 0.3s ease",
          }}
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
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L7.293 8z" />
              </svg>
            </button>
          </div>
          <h3 className="font-bold mb-1">Select Parva</h3>
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
                    goToBook(index);
                    toggleDrawer();
                  }}
                  style={{
                    cursor: "pointer",
                    fontWeight: index === selectedBookIndex ? "bold" : "normal",
                    background: index === selectedBookIndex ? "black" : "",
                    color: index === selectedBookIndex ? "white" : "black",
                  }}
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 justify-start gap-2 text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                  {book.label}
                </button>
              ))}
            </ul>
          </div>
        </div>

        {epubFile ? (
          <>
            <div style={{ width: "100%" }}>
              <div
                className="hidden lg:block"
                style={{
                  padding: "5px",
                  textAlign: "left",
                  overflowY: "auto",
                }}
              >
                <div className="flex items-center justify-between lg:px-10">
                  <div>
                    <select
                      className="border-2 px-[20px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                      value={books[selectedBookIndex]?.label || ""}
                      onChange={(e) => {
                        const selectedLabel = e.target.value;
                        const selectedIndex = books.findIndex(
                          (book) => book.label === selectedLabel
                        );
                        setSelectedBookIndex(selectedIndex);
                        goToBook(selectedIndex);
                      }}
                      style={{
                        fontSize: "14px",
                        width: "220px",
                      }}
                    >
                      <option value="" disabled>
                        Select Parva
                      </option>
                      {books &&
                        books.map((book, index) => (
                          <option key={index} value={book.label}>
                            {index + 1}. {book.label}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="hidden bg-gray-200 lg:block">
                    <div className="flex gap-5 p-2 px- justify-end items-center">
                      <div className="flex items-center"></div>

                      <div className="flex gap-4 items-center">
                        <input
                          type="number"
                          placeholder="Search By page number"
                          value={pageNumberFilter || ""}
                          onChange={(e) => setPageNumberFilter(e.target.value)}
                          id="first_name"
                          className="bg-gray-50 w-[205px] h-10 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block  px-2 py-2.5"
                        />
                        <button
                          onClick={() => goToPage(pageNumberFilter)}
                          style={{ cursor: "pointer" }}
                          className="bg-[#8b4513] font-bold text-white  px-4  p-2 rounded"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-[100%] min-h-screen pb-20 bg-orange-200"
                style={{
                  flex: "1",
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "flex",
                }}
              >
                <EpubView
                  url={epubFile}
                  location={loc}
                  locationChanged={onLocationChanged}
                  tocChanged={onTocLoaded}
                  epubOptions={{ flow: "scrolled" }}
                  ref={renditionRef}
                  getRendition={handleRendition}
                  style={{ flex: "1", overflowX: "hidden" }}
                />
              </div>
            </div>
            <div className="bg-orange-100 w-full p-3 lg:px-20 flex justify-between fixed bottom-0 left-0">
              <button
                className="bg-gray-700 w-40 p-2 font-bold text-white px-4 rounded"
                onClick={prevPage}
              >
                Previous
              </button>
              <button
                className="bg-[#8b4513] w-40 font-bold text-white p-2 rounded"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div>
            <h3>Upload an EPUB file to read</h3>
            <input type="file" accept=".epub" onChange={handleFileUpload} />
          </div>
        )}
      </div>
    </>
  );
}

export default MahabharataEnglish;
