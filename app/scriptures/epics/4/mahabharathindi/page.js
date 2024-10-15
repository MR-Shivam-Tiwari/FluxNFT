"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { EpubView } from "react-reader";

function Ramcharitmanas() {
  const [epubFile, setEpubFile] = useState("https://eventidcard.s3.us-east-1.amazonaws.com/1722854056413-MB.epub");
  const [location, setLocation] = useState(null);
  const [books, setBooks] = useState([]);
  const [parvs, setParvs] = useState([]);
  const [uparvs, setUparvs] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedParv, setSelectedParv] = useState(null);
  const [selectedUparv, setSelectedUparv] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const renditionRef = useRef(null);
  const [slowInternetMessage, setSlowInternetMessage] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [pageNumberFilter, setPageNumberFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const loc = searchParams.get("loc");
    const bookIndex = searchParams.get("bookIndex");
    const parvHref = searchParams.get("parvHref");
    const uparvHref = searchParams.get("uparvHref");
    const chapterHref = searchParams.get("chapterHref");

    if (loc) setLocation(loc);
    if (bookIndex && books[parseInt(bookIndex)]) {
      const book = books[parseInt(bookIndex)];
      setSelectedBook(book);
      setParvs(book.parvs);
    }
    if (parvHref && parvs.length > 0) {
      const parv = parvs.find(p => p.href === parvHref);
      if (parv) {
        setSelectedParv(parv);
        setUparvs(parv.subitems || []);
      }
    }
    if (uparvHref && uparvs.length > 0) {
      const uparv = uparvs.find(u => u.href === uparvHref);
      if (uparv) {
        setSelectedUparv(uparv);
        setChapters(uparv.subitems || []);
      }
    }
    if (chapterHref && chapters.length > 0) {
      const chapter = chapters.find(c => c.href === chapterHref);
      if (chapter) setSelectedChapter(chapter);
    }
  }, [searchParams, books, parvs, uparvs, chapters]);

  const updateRoute = (newParams) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null) {
        current.delete(key);
      } else {
        current.set(key, value);
      }
    });
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const onTocLoaded = (toc) => {
    const booksData = toc.map((item, index) => ({
      label: item.label,
      href: item.href,
      parvs: item.subitems || [],
      index: index,
    }));
    setBooks(booksData);
  };

  const goToPage = (pageNumber) => {
    if (renditionRef.current && pageNumber) {
      renditionRef.current.display(pageNumber);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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

  const handleRendition = useCallback((rendition) => {
    renditionRef.current = rendition;
    renditionRef.current.on("relocated", (location) => {
      updateRoute({ loc: location.start.cfi });
    });
    renditionRef.current.on("displayError", (error) => {
      console.error("Display Error:", error);
    });
    renditionRef.current.on("rendered", () => {
      setLoading(false);
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

  const handleBookChange = (book) => {
    setSelectedBook(book);
    setParvs(book.parvs);
    setSelectedParv(null);
    setUparvs([]);
    setSelectedUparv(null);
    setChapters([]);
    setLocation(book.href);
    updateRoute({ bookIndex: book.index, loc: book.href, parvHref: null, uparvHref: null, chapterHref: null });
  };

  const selectParv = (event) => {
    const href = event.target.value;
    const parv = parvs.find((p) => p.href === href);
    setSelectedParv(parv);
    if (parv && parv.subitems && parv.subitems.length > 0) {
      setUparvs(parv.subitems);
      setSelectedUparv(null);
      setChapters([]);
    } else {
      setUparvs([]);
      setSelectedUparv(null);
      setChapters(parv ? parv.subitems || [] : []);
    }
    setLocation(href);
    updateRoute({ parvHref: href, uparvHref: null, chapterHref: null, loc: href });
  };

  const selectUparv = (event) => {
    const href = event.target.value;
    const uparv = uparvs.find((up) => up.href === href);
    setSelectedUparv(uparv);
    setChapters(uparv ? uparv.subitems || [] : []);
    setLocation(href);
    updateRoute({ uparvHref: href, chapterHref: null, loc: href });
  };

  const selectChapter = (event) => {
    const href = event.target.value;
    const chapter = chapters.find((c) => c.href === href);
    setSelectedChapter(chapter);
    setLocation(href);
    updateRoute({ chapterHref: href, loc: href });
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

  const drawerRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 90) {
          return Math.min(prevProgress + 1, 90); // Increment up to 90%
        } else {
          return prevProgress;
        }
      });
    }, 100); // 100ms interval for slower progress

    const timeout = setTimeout(() => {
      setSlowInternetMessage(true); // Show slow internet message after 45 seconds
    }, 25000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      setProgress(100); // Set progress to 100% when the book is fully loaded
      setSlowInternetMessage(false); // Hide slow internet message once loaded
    }
  }, [loading]);


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

  const closeButtonStyle = {
    bottom: "20px",
    width: "100%",
    marginTop: "10px",
    left: "20px",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <div className="bg-[#f0d1a2] mt-6">
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
              {slowInternetMessage && (
                <div className="mt-2 text-sm font-medium text-red-600">
                  Your internet is slow. Please wait...
                </div>
              )}
            </div>
          </div>
        )}
        <div
          className={`bg-gray-200 min-h-screen ${loading ? "hidden" : ""}`}
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
                style={menuButtonStyle}
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
            style={drawerStyle}
          >
            <div className="flex justify-end pt-2 px-2">
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
            <div
              className="flex-shrink-0 mt-6 lg:block"
              style={{
                flex: "0 0 250px",
                padding: "10px",
                textAlign: "left",
                maxHeight: "calc(100vh - 100px)",
                overflowY: "auto",
              }}
            >
              <h3 className="font-bold mb-1">Select Book</h3>
              <ul className="mb-3">
                {books.map((book, index) => (
                  <button
                    key={index}
                    onClick={() => handleBookChange(book)}
                    style={{
                      cursor: "pointer",
                      fontWeight: book === selectedBook ? "bold" : "normal",
                      background: book === selectedBook ? "black" : "",
                      color: book === selectedBook ? "white" : "black",
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
              {selectedBook && (
                <>
                  <h3 className="font-bold mb-1">Parva</h3>
                  <select
                    className="mb-3 border-2 rounded border-gray-400"
                    value={selectedParv ? selectedParv.href : ""}
                    onChange={selectParv}
                    style={{ width: "100%", padding: "5px", fontSize: "14px" }}
                  >
                    <option value="" disabled>
                      Select Parva
                    </option>
                    {parvs.map((parv, index) => (
                      <option key={index} value={parv.href}>
                        {parv.label}
                      </option>
                    ))}
                  </select>
                </>
              )}
              {selectedParv && uparvs.length > 0 && (
                <>
                  <h3 className="font-bold mb-1">UpParva</h3>
                  <select
                    className="mb-2 border-2 rounded border-gray-400"
                    value={selectedUparv ? selectedUparv.href : ""}
                    onChange={selectUparv}
                    style={{ width: "100%", padding: "5px", fontSize: "14px" }}
                  >
                    <option value="" disabled>
                      Select UpParva
                    </option>
                    {uparvs.map((uparv, index) => (
                      <option key={index} value={uparv.href}>
                        {uparv.label}
                      </option>
                    ))}
                  </select>
                </>
              )}
              <div>
                {(selectedUparv || (selectedParv && uparvs.length === 0)) &&
                  chapters.length > 0 && (
                    <div>
                      <h3 className="font-bold mb-1">Chapter</h3>
                      <select
                        className="border-2 py-2 rounded-[5px] border-gray-400"
                        value={selectedChapter ? selectedChapter.href : ""}
                        onChange={selectChapter}
                        style={{
                          width: "230px",
                          fontSize: "14px",
                        }}
                      >
                        <option value="" disabled>
                          Select Chapter
                        </option>
                        {chapters.map((chapter, index) => (
                          <option className="" key={index} value={chapter.href}>
                            {chapter.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
              </div>
              <button
                className="lg:hidden mt-[-30px] font-bold text-white text-lg bg-[#8b4513] rounded"
                onClick={toggleDrawer}
                style={closeButtonStyle}
              >
                Search
              </button>
            </div>
          </div>

          {epubFile ? (
            <>
              <div style={{ width: "100%" }}>
                <div
                  className="hidden lg:block"
                  style={{
                    padding: "4px",
                    textAlign: "left",
                    overflowY: "auto",
                  }}
                >
                  <div className="flex items-center justify-between px-5">
                    <div className="flex items-center gap-5">
                      <div>
                        <select
                          className="border-2 px-[10px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                          value={selectedBook ? selectedBook.label : ""}
                          onChange={(e) => {
                            const selectedLabel = e.target.value;
                            const selectedBook = books.find((book) => book.label === selectedLabel);
                            handleBookChange(selectedBook);
                          }}
                          style={{
                            fontSize: "14px",
                            width: "250px",
                          }}
                        >
                          <option value="" disabled>
                            Select Mahabharata Book

                          </option>
                          {books.map((book, index) => (
                            <option key={index} value={book.label}>
                              {book.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        {selectedBook && (
                          <>
                            <select
                              className="border-2 px-[30px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                              value={selectedParv ? selectedParv.href : ""}
                              onChange={selectParv}
                              style={{
                                width: "200px",
                                fontSize: "14px",
                              }}
                            >
                              <option value="" disabled>
                                Select Parva
                              </option>
                              {parvs.map((parv, index) => (
                                <option key={index} value={parv.href}>
                                  {parv.label}
                                </option>
                              ))}
                            </select>
                          </>
                        )}{" "}
                      </div>
                      <div>
                        {selectedParv && uparvs.length > 0 && (
                          <>
                            <select
                              className="border-2 px-[30px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                              value={selectedUparv ? selectedUparv.href : ""}
                              onChange={selectUparv}
                              style={{
                                width: "200px",
                                fontSize: "14px",
                              }}
                            >
                              <option value="" disabled>
                                Select UpParva
                              </option>
                              {uparvs.map((uparv, index) => (
                                <option key={index} value={uparv.href}>
                                  {uparv.label}
                                </option>
                              ))}
                            </select>
                          </>
                        )}
                      </div>
                      <div>
                        {(selectedUparv ||
                          (selectedParv && uparvs.length === 0)) &&
                          chapters.length > 0 && (
                            <div>
                              <select
                                className="border-2 px-[30px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                                value={
                                  selectedChapter ? selectedChapter.href : ""
                                }
                                onChange={selectChapter}
                                style={{
                                  width: "500px",
                                  fontSize: "14px",
                                }}
                              >
                                <option value="" disabled>
                                  Select Chapter
                                </option>
                                {chapters.map((chapter, index) => (
                                  <option
                                    className=""
                                    key={index}
                                    value={chapter.href}
                                  >
                                    {chapter.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="w-[100%] lg:pb-40 pt-5   py-13 pb-10 min-h-screen bg-orange-200"
                  style={{
                    flex: "1",
                    overflowY: "auto",
                    overflowX: "hidden",
                    display: "flex",
                  }}
                >
                  <EpubView
                    url={epubFile}
                    location={location}
                    // locationChanged={onLocationChanged}
                    tocChanged={onTocLoaded}
                    epubOptions={{ flow: "scrolled" }} // Ensure content is scrollable
                    ref={renditionRef}
                    getRendition={handleRendition}
                    style={{ flex: "1", overflowX: "hidden" }}
                  />
                </div>
              </div>
              <div className="bg-orange-100 w-full p-1.5 lg:px-20 flex justify-between fixed bottom-0 left-0">
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
              Please upload an EPUB file:
              <div style={{ marginTop: "20px" }}>
                <input
                  type="file"
                  accept=".epub"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                  id="fileInput"
                />
                <label
                  htmlFor="fileInput"
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                >
                  Upload EPUB
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ramcharitmanas;
