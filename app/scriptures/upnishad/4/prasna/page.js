"use client"

import React, { useState, useEffect, Suspense } from "react";
import Vedas from "./prasna.json";
import { useRouter, useSearchParams } from "next/navigation";

function PrashnaUpanishad() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const defaultKhanda = Vedas[0].Prashna;

    const [selectedKhanda, setSelectedKhanda] = useState(defaultKhanda);
    const [selectedMantra, setSelectedMantra] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [commentryopen, setcommentryopen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedLanguageCommentry, setselectedLanguageCommentry] = useState(null);
    const [currentMantraIndex, setCurrentMantraIndex] = useState(0);
    useEffect(() => {
        const Prashna = searchParams.get("Prashna") || defaultKhanda;
        const ShlokaNo = parseInt(searchParams.get("mantra") || "1", 10) - 1; // Adjust for 0-based index
    
        // Ensure that both Prashna and mantra are set properly on page load
        setSelectedKhanda(Prashna);
        setCurrentMantraIndex(ShlokaNo);
    }, [searchParams, defaultKhanda]); // Add defaultKhanda here
    

    useEffect(() => {
        // When currentMantraIndex or selectedKhanda changes, update the mantra and Prashna
        const currentMantra = filteredVedas[currentMantraIndex];
        if (currentMantra) {
            setSelectedMantra(currentMantraIndex);
        }
    }, [currentMantraIndex, selectedKhanda, filteredVedas]); // Add filteredVedas here
    

    const handleKhandaChange = (event) => {
        const newKhanda = event.target.value;
        setSelectedKhanda(newKhanda);
        setCurrentMantraIndex(0); // Reset mantra index to 0
        updateURL(newKhanda, 1); // Update the URL with the new Khanda and reset mantra to 1
    };

    const handleMantraChange = (event) => {
        const mantraIndex = parseInt(event.target.value, 10);
        setCurrentMantraIndex(mantraIndex);
        updateURL(selectedKhanda, mantraIndex + 1); // Update with the selected mantra index
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

    const updateURL = (Prashna, ShlokaNo) => {
        router.push(`?Prashna=${Prashna}&mantra=${ShlokaNo}`);
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
    // Filter Mantras based on selected Khanda
    const filteredVedas = Vedas.filter(
        (mantra) => mantra.Prashna === selectedKhanda
    );
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
    const uniqueKhandas = [...new Set(Vedas.map((mantra) => mantra.Prashna))];
    const uniqueMantras = filteredVedas.map((mantra, index) => ({ ShlokaNo: mantra.ShlokaNo, index }));

    const currentMantra = filteredVedas[currentMantraIndex] || filteredVedas[0];
    return (
        <div className="container mx-auto lg:px-20 mt-5">
            <div>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 lg:p-6 p-3">
                        <div className="mb-6 px-2 flex flex-wrap items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-bold yatra-one-regular">
                                    Prashna Upanishad
                                </h2>
                            </div>
                            <div className="flex items-center space-x-4">
                                <select
                                    value={selectedKhanda}
                                    onChange={handleKhandaChange}
                                    className="flex font-bold josefin-sans-bold h-10 items-center justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                                >
                                    {uniqueKhandas.map((Prashna, index) => (
                                        <option key={index} value={Prashna}>Prashna {Prashna}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedMantra}
                                    onChange={handleMantraChange}
                                    className="flex h-10 items-center p-5 josefin-sans-bold justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                                >
                                    {uniqueMantras.map(({ ShlokaNo, index }) => (
                                        <option key={index} value={index}>Sloka {ShlokaNo}</option>
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
                                                    <div className="mb-1 p-1 bg-blue-200 flex items-center shadow gap-1 px-3 h-5 text-xs border rounded-[3px] font-bold">
                                                        Prashna {currentMantra.Prashna}{" "}
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

                                                        Sloka {currentMantra.ShlokaNo}
                                                    </div>
                                                </div>
                                                <h2 className="lg:text-3xl text-xl font-bold mb-4 py-3 text-center">
                                                    Sanskrit Sloka
                                                </h2>
                                                <div className="font-bold text-center text-blue-600 mb-3 lg:text-2xl  leading-10 martel-black">
                                                    {currentMantra.shlok
                                                        .split("\n")
                                                        .map((line, index) => (
                                                            <React.Fragment key={index}>
                                                                {line}
                                                                <br />
                                                            </React.Fragment>
                                                        ))}
                                                </div>

                                                <h2 className="lg:text-3xl text-xl font-bold mb-4 text-center">
                                                    Translation (Hindi - English)
                                                </h2>
                                                <div className="space-y-2 lg:border lg:p-5 lg:shadow rounded">
                                                    <div className="flex flex-col items-center">
                                                        <p className="lg:text-lg border p-2 py-3 mb-2 bg-blue-200 rounded josefin-sans-bold text-center">
                                                            {formatText(currentMantra.translationHindi)}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <p className="lg:text-lg border p-2 py-3 bg-orange-400 josefin-sans-bold text-black rounded text-center">
                                                            {formatText(currentMantra.translationEnglish)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-state="closed" className="space-y-4">
                                        <button
                                            type="button"
                                            aria-controls="translation-card"
                                            aria-expanded={commentryopen}
                                            data-state={commentryopen ? "open" : "closed"}
                                            onClick={handlecommentry}
                                            className="flex w-full text-white items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors bg-gray-800 hover:bg-gray-700"
                                        >
                                            Adi Shankaracharya Commentary
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
                                                className={`h-5 w-5 transition-transform ${commentryopen ? "rotate-180" : ""
                                                    }`}
                                            >
                                                <path d="m6 9 6 6 6-6"></path>
                                            </svg>
                                        </button>
                                        {commentryopen && (
                                            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md">
                                                <div className="flex items-center justify-center gap-3">
                                                    <button
                                                        className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm annapurna-sil-regular rounded-lg hover:bg-gray-200"
                                                        onClick={() => handleLanguageCommentry("hindi")}
                                                    >
                                                        Hindi
                                                    </button>
                                                    <button
                                                        className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm annapurna-sil-regular rounded-lg hover:bg-gray-200"
                                                        onClick={() => handleLanguageCommentry("english")}
                                                    >
                                                        English
                                                    </button>
                                                </div>

                                                {selectedLanguageCommentry && (
                                                    <div className="mt-4">
                                                        <h3 className="text-lg annapurna-sil-regular font-semibold mb-2">
                                                            {selectedLanguageCommentry === "hindi"
                                                                ? "Hindi Commentary"
                                                                : "English Commentary"}
                                                        </h3>
                                                        <p className="martel-bold">
                                                            {selectedLanguageCommentry === "hindi"
                                                                ? currentMantra.commentaryHindi
                                                                    .split("\n")
                                                                    .map((line, index) => (
                                                                        <React.Fragment key={index}>
                                                                            {line}
                                                                            <br />
                                                                        </React.Fragment>
                                                                    ))
                                                                : currentMantra.commentaryEnglish}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div>Sloka not found.</div>
                            )}

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default function Katha() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PrashnaUpanishad />
        </Suspense>
    );
}
