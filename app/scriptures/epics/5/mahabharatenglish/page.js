"use client"

import { usePathname, useRouter } from "next/navigation";
import React, { useState, useRef, useCallback, useEffect ,Suspense } from "react";
import { EpubView } from "react-reader";

function MahabharataEnglish() {
  const [epubFile, setEpubFile] = useState("https://eventidcard.s3.us-east-1.amazonaws.com/1722853578550-KMGMB+18++VOL.epub");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loc, setLocation] = useState(null);
  const [progress, setProgress] = useState(0);
  const [slowInternetMessage, setSlowInternetMessage] = useState(false);
  const renditionRef = useRef(null);
  const router = useRouter();
  const location = usePathname();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const initialLocation = query.get("loc");
    if (initialLocation) {
      setLocation(initialLocation);
    }
  }, []);

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
    router.push(`?loc=${loc}`, { replace: true }); // Update the URL with the new location without adding a new entry to the history stack
  };

  const onTocLoaded = (toc) => {
    const books = toc.map((item, index) => ({
      label: item.label,
      href: item.href,
      index: index,
    }));
    setBooks(books);
  };

  const handleRendition = useCallback((rendition) => {
    renditionRef.current = rendition;
    renditionRef.current.on("relocated", (location) => {
      setLocation(location.start.cfi);
      router.push(`?loc=${location.start.cfi}`, { replace: true });
    });
    renditionRef.current.on("displayError", (error) => {
      console.error("Display Error:", error);
    });
    renditionRef.current.on("rendered", () => {
      setLoading(false); // EPUB file is rendered, stop loading
    });
  }, [router]);

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
      router.push(`?loc=${book.href}`, { replace: true }); // Update the URL with the book's href
    }
  };

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

  useEffect(() => {
    const handlePopState = () => {
      router.back(); // Navigate back to the previous route when the browser back button is clicked, without leaving the website
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

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
            {slowInternetMessage && (
              <div className="mt-2 text-sm font-medium text-red-600">
                Your internet is slow. Please wait...
              </div>
            )}
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
        <div className="flex items-center pt-1 pb-0.5 " style={styles.scrollbar}>
          <ul className="flex gap-2 lg:px-5 px-1 justify-center">
            {books.map((book, index) => (
              <button
                key={index}
                onClick={() => goToBook(index)}
                style={{
                  cursor: "pointer",
                  fontWeight: loc === book.href ? "bold" : "normal",
                  color: loc === book.href ? "white" : "black",
                  padding: "10px",
                  borderRadius: "5px",
                  whiteSpace: "nowrap",
                }}
                className="hover:bg-gray-400 josefin-sans-bold bg-orange-500 transition-colors rounded-md text-md font-bold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-8 flex items-center px-4 py-2"
              >
                {book.label}
              </button>
            ))}
          </ul>
        </div>
        {epubFile ? (
          <>
            <div style={{ width: "100%" }}>
              <div
                className="w-[100%] min-h-screen pb-20 bg-orange-200"
                style={{
                  flex: "1",
                  overflowY: "auto",
                  overflowX: "auto",
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
            <h3>Upload an EPUB file to read</h3>
            <input type="file" accept=".epub" onChange={handleFileUpload} />
          </div>
        )}
      </div>
    </>
  );
}


export default function MahabharataEng() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MahabharataEnglish />
    </Suspense>
  );
}