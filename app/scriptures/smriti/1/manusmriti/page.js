"use client";
import React, { useState, useEffect, Suspense } from "react";
import Vedas from "./manu.json";
import { useSearchParams, useRouter } from "next/navigation";

function KenaUpnishad() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const defaultKhanda = Vedas[0].Part;

  const [selectedKhanda, setSelectedKhanda] = useState(defaultKhanda);
  const [selectedMantra, setSelectedMantra] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [commentryopen, setcommentryopen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLanguageCommentry, setselectedLanguageCommentry] = useState(null);
  const [currentMantraIndex, setCurrentMantraIndex] = useState(0);


  useEffect(() => {
    const Chapter = searchParams.get("Chapter") || defaultKhanda;
    const mantraNumber = parseInt(searchParams.get("mantra") || "1", 10) - 1;
    setSelectedKhanda(Chapter);
    setCurrentMantraIndex(mantraNumber);
  }, [searchParams]);

  useEffect(() => {
    // When currentMantraIndex changes, update selectedMantra and selectedKhanda
    const currentMantra = filteredVedas[currentMantraIndex];
    if (currentMantra) {
      // setSelectedKhanda(currentMantra.Part); // Update Chapter
      setSelectedMantra(currentMantraIndex); // Update mantra
    }
  }, [currentMantraIndex, selectedKhanda]); // Add selectedKhanda as dependency

  const handleKhandaChange = (event) => {
    const newKhanda = event.target.value;
    setSelectedKhanda(newKhanda);
    setSelectedMantra(''); // Reset Shlokawhen Chapter changes
    updateURL(newKhanda, 1); // Reset to first Shlokafor the new Khanda
    setCurrentMantraIndex(0); // Reset Shlokaindex to 0
  };
  const handlecommentry = () => {
    setcommentryopen(!commentryopen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleLanguageCommentry = (language) => {
    setselectedLanguageCommentry(language);
  };

  const handleMantraChange = (event) => {
    const mantraIndex = parseInt(event.target.value, 10);
    setCurrentMantraIndex(mantraIndex);
    updateURL(selectedKhanda, mantraIndex + 1); // Update with the selected Shlokaindex
  };

  const formatText = (text) => {
    const safeText = typeof text === 'string' ? text : '';
    return safeText.split('\n').map((line, index) => {
      const parts = line.split(/(`[^`]+`)/g);
      return (
        <React.Fragment key={index}>
          {parts.map((part, i) =>
            part.startsWith('`') && part.endsWith('`') ? (
              <span key={i} className='text-gray-500 text-[15px]'>{part.slice(1, -1)}</span>
            ) : (
              part
            )
          )}
          <br />
        </React.Fragment>
      );
    });
  };

  const handleNext = () => {
    if (currentMantraIndex < filteredVedas.length - 1) {
      const nextIndex = currentMantraIndex + 1;
      setCurrentMantraIndex(nextIndex);
      updateURL(selectedKhanda, nextIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentMantraIndex > 0) {
      const prevIndex = currentMantraIndex - 1;
      setCurrentMantraIndex(prevIndex);
      updateURL(selectedKhanda, prevIndex + 1);
    }
  };

  const updateURL = (Chapter, mantraNumber) => {
    router.push(`?Chapter=${Chapter}&mantra=${mantraNumber}`);
  };

  // Filter Mantras based on selected Khanda
  const filteredVedas = Vedas.filter(
    (mantra) => mantra.Part === selectedKhanda
  );

  const uniqueKhandas = [...new Set(Vedas.map((mantra) => mantra.Part))];
  const uniqueMantras = filteredVedas.map((mantra, index) => ({ mantraNumber: mantra.mantraNumber, index }));

  const currentMantra = filteredVedas[currentMantraIndex] || filteredVedas[0]; // Ensure valid Shlokafor current Chapter

  return (
    <div className="container mx-auto mt-4 lg:px-20">
      <div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 lg:p-6 p-3">
            <div className="mb-6 flex items-center px-2 flex-wrap justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl lg:mb-0 mb-3 font-bold yatra-one-regular">
                  Manusmriti Hindi

                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedKhanda}
                  onChange={handleKhandaChange}
                  className="flex font-bold josefin-sans-bold h-10 items-center justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                >
                  {uniqueKhandas.map((Chapter, index) => (
                    <option key={index} value={Chapter}>Chapter {Chapter}</option>
                  ))}
                </select>
                <select
                  value={selectedMantra}
                  onChange={handleMantraChange}
                  className="flex h-10 items-center p-5 josefin-sans-bold justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                >
                  {uniqueMantras.map(({ mantraNumber, index }) => (
                    <option key={index} value={index}>Shloka {mantraNumber}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-6 overflow-y-auto pb-20">
              {currentMantra ? (
                <>
                  <div className="rounded-lg border-2 bg-white p-3 shadow-lg border-gray-300">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center">
                          <div className="mb-2 p-1 bg-gray-300 flex items-center px-3 h-5 gap-1 text-xs border rounded-[3px] font-bold">
                            Chapter{currentMantra.Part}{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              fill="currentColor"
                              className="bi bi-chevron-double-right"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                              />
                              <path
                                fillRule="evenodd"
                                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                              />
                            </svg>{" "}
                            Shloka{currentMantra.mantraNumber}
                          </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 py-3 text-center">
                          Sanskrit Shloka
                        </h2>
                        <div className="font-bold text-center text-blue-600 mb-6 lg:text-xl leading-10 martel-black">
                          {currentMantra.shlok.line1
                            .split("\n")
                            .map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                {/* <br /> */}
                              </React.Fragment>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold mb-4 text-center">
                          Translation (Hindi)
                        </h2>
                        <div className="space-y-2 lg:border lg:p-5  lg:shadow rounded">
                          <div className="flex flex-col items-center">
                            <p className="text-lg border p-2 py-3 mb-2 bg-orange-400 rounded josefin-sans-bold text-center">
                              {formatText(currentMantra.translationHindi)}
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="bg-gray-300 w-full p-2 px-3 lg:px-20 flex justify-between fixed bottom-0 left-0">
                    <button
                      onClick={handlePrevious}
                      disabled={currentMantraIndex === 0}
                      className="inline-flex items-center justify-center whitespace-nowrap w-[140px] rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 h-10 px-4 py-2 bg-gray-100 border shadow text-black"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentMantraIndex === Vedas.length - 1}
                      className={`inline-flex items-center justify-center bg-gray-800 w-[140px] text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-600 h-10 px-4 py-2`}
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-center text-gray-500">No Shlokafound.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Kena() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <KenaUpnishad />
    </Suspense>
  );
}
