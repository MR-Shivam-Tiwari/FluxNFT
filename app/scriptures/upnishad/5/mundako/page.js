"use client";

import React, { useState, useEffect, Suspense } from "react";
import Vedas from "./mundako.json";
import { useRouter, useSearchParams } from "next/navigation";

function MundakoUpnishad() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Initialize state
    const [selectedChapter, setSelectedChapter] = useState(1);
    const [selectedKhanda, setSelectedKhanda] = useState(1);
    const [selectedShloka, setSelectedShloka] = useState(1);
    const [currentMantraIndex, setCurrentMantraIndex] = useState(0);
    const [commentryopen, setcommentryopen] = useState(false);
    const [selectedLanguageCommentry, setSelectedLanguageCommentry] = useState(null);

    useEffect(() => {
        const mantraNumber = parseInt(searchParams.get("ShlokaNo") || "1", 10);
        if (mantraNumber > 0 && mantraNumber <= Vedas.length) {
            setCurrentMantraIndex(mantraNumber - 1);
        } else {
            setCurrentMantraIndex(0);
        }
    }, [searchParams]);
    useEffect(() => {
        const chapter = parseInt(searchParams.get('Mundaka')) || 1;
        const khanda = parseInt(searchParams.get('Khanda')) || 1;
        const shloka = parseInt(searchParams.get('ShlokaNo')) || 1;

        setSelectedChapter(chapter);
        setSelectedKhanda(khanda);
        setSelectedShloka(shloka);
        
        // Update current mantra index based on Shloka
        const mantraIndex = Vedas.findIndex((shlok) => 
            parseInt(shlok.Mundaka) === chapter &&
            parseInt(shlok.Khanda) === khanda &&
            parseInt(shlok.ShlokaNo) === shloka
        );
        setCurrentMantraIndex(mantraIndex >= 0 ? mantraIndex : 0);

    }, [searchParams]);
    const updateURL = (chapter, khanda, shloka) => {
        router.push(`?Mundaka=${chapter}&Khanda=${khanda}&ShlokaNo=${shloka}`);
    };

    const handleChapterChange = (event) => {
        const newChapter = parseInt(event.target.value, 10);
        updateURL(newChapter, 1, 1);
    };

    const handleKhandaChange = (event) => {
        const newKhanda = parseInt(event.target.value, 10);
        updateURL(selectedChapter, newKhanda, 1);
    };

    const handleShlokaChange = (event) => {
        const newShloka = parseInt(event.target.value, 10);
        updateURL(selectedChapter, selectedKhanda, newShloka);
    };

    const handleNext = () => {
        const totalShlokasInKhanda = Vedas.filter(shlok => parseInt(shlok.Mundaka) === selectedChapter && parseInt(shlok.Khanda) === selectedKhanda).length;
        if (selectedShloka < totalShlokasInKhanda) {
            updateURL(selectedChapter, selectedKhanda, selectedShloka + 1);
        } else {
            const totalKhandasInChapter = [...new Set(Vedas.filter(shlok => parseInt(shlok.Mundaka) === selectedChapter).map(shlok => parseInt(shlok.Khanda)))].length;
            if (selectedKhanda < totalKhandasInChapter) {
                updateURL(selectedChapter, selectedKhanda + 1, 1);
            } else {
                updateURL(selectedChapter + 1, 1, 1);
            }
        }
    };
    const handlePrevious = () => {
        if (selectedShloka > 1) {
            updateURL(selectedChapter, selectedKhanda, selectedShloka - 1);
        } else if (selectedKhanda > 1) {
            const prevKhandaShlokas = Vedas.filter(shlok => parseInt(shlok.Mundaka) === selectedChapter && parseInt(shlok.Khanda) === selectedKhanda - 1).length;
            updateURL(selectedChapter, selectedKhanda - 1, prevKhandaShlokas);
        } else if (selectedChapter > 1) {
            const totalKhandasInPrevChapter = [...new Set(Vedas.filter(shlok => parseInt(shlok.Mundaka) === selectedChapter - 1).map(shlok => parseInt(shlok.Khanda)))].length;
            const prevChapterLastKhandaShlokas = Vedas.filter(shlok => parseInt(shlok.Mundaka) === selectedChapter - 1 && parseInt(shlok.Khanda) === totalKhandasInPrevChapter).length;
            updateURL(selectedChapter - 1, totalKhandasInPrevChapter, prevChapterLastKhandaShlokas);
        }
    };
    const currentMantra = Vedas.find(
        (shlok) => parseInt(shlok.Mundaka.trim()) === selectedChapter && 
                   parseInt(shlok.Khanda.trim()) === selectedKhanda && 
                   parseInt(shlok.ShlokaNo.trim()) === selectedShloka
    );
    const handlecommentry = () => {
        setcommentryopen(!commentryopen);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const handleLanguageCommentry = (language) => {
        setSelectedLanguageCommentry(language);
    };

  
    const resetStates = () => {
        setIsOpen(false);
        setcommentryopen(false);
        setSelectedLanguage(null);
        setSelectedLanguageCommentry(null);
    };

    const formatText = (text) => {
        return text.split("\n").map((line, index) => {
            const parts = line.split(/(`[^`]+`)/g);
            return (
                <React.Fragment key={index}>
                    {parts.map((part, i) =>
                        part.startsWith("`") && part.endsWith("`") ? (
                            <span key={i} className="text-gray-500 text-[15px]">
                                {part.slice(1, -1)}
                            </span>
                        ) : (
                            part
                        )
                    )}
                    <br />
                </React.Fragment>
            );
        });
    };

    const chapterData = Vedas.filter(
        (shlok) => parseInt(shlok.Mundaka.trim()) === selectedChapter
    );

    const khandaData = chapterData.filter(
        (shlok) => parseInt(shlok.Khanda.trim()) === selectedKhanda
    );

  

    const uniqueChapters = [...new Set(Vedas.map((shlok) => shlok.Mundaka.trim()))];
    const uniqueKhandas = [...new Set(chapterData.map((shlok) => shlok.Khanda.trim()))];

    return (
        <div className="container mx-auto lg:px-20 mt-5">
            <div>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 lg:p-6 p-3">
                        <div className="mb-6 px-2 flex flex-wrap items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="text-xl  font-bold yatra-one-regular">
                                    Mundaka Upanishad
                                </h2>
                            </div>
                            <div className="flex  items-center lg:mt-0 mt-2 lg:space-x-4 space-x-2">
                                <select
                                    value={selectedChapter}
                                    onChange={handleChapterChange}
                                    className="flex font-bold josefin-sans-bold lg:h-10 h-7 items-center justify-between rounded-md shadow border border-input bg-white lg:px-3 lg:py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-3 w-30  lg:text-lg lg:w-40"

                                >
                                    {uniqueChapters.map((chapter, index) => (
                                        <option className="font-bold" key={index} value={chapter}>
                                            Mundaka {chapter}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={selectedKhanda}
                                    onChange={handleKhandaChange}
                                    className="flex font-bold josefin-sans-bold lg:h-10 h-7 items-center justify-between rounded-md shadow border border-input bg-white lg:px-3 lg:py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-3 w-30  lg:text-lg lg:w-40"

                                >
                                    {uniqueKhandas.map((khanda, index) => (
                                        <option className="font-bold" key={index} value={khanda}>
                                            Khanda {khanda}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={selectedShloka}
                                    onChange={handleShlokaChange}
                                    className="flex font-bold josefin-sans-bold lg:h-10 h-7 items-center justify-between rounded-md shadow border border-input bg-white px-3 lg:py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-30  lg:text-lg lg:w-40"

                                >
                                    {khandaData.map((shloka, index) => (
                                        <option className="font-bold " key={index} value={shloka.ShlokaNo}>
                                            Mantra {shloka.ShlokaNo}
                                        </option>
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
                                                        Prashna {currentMantra.Mundaka} - Khanda {currentMantra.Khanda}{" "}
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
                                                        Mantra {currentMantra.ShlokaNo}
                                                    </div>
                                                </div>
                                                <h2 className="lg:text-3xl  font-bold mb-4 py-3 text-center">
                                                    Sanskrit Mantra
                                                </h2>
                                                <div className="font-bold text-center text-blue-600 mb-3 lg:text-2xl text-sm leading-10 martel-black">
                                                    {currentMantra.shlok.split("\n").map((line, index) => (
                                                        <React.Fragment key={index}>
                                                            {line}
                                                            <br />
                                                        </React.Fragment>
                                                    ))}
                                                </div>

                                                <h2 className="lg:text-3xl font-bold mb-4 text-center">
                                                    Translation (Hindi - English)
                                                </h2>
                                                <div className="space-y-2 lg:border lg:p-5 lg:shadow rounded">
                                                    <div className="flex flex-col items-center">
                                                        <p className="lg:text-lg text-sm border p-2 py-3 mb-2 bg-blue-200 rounded josefin-sans-bold text-center">
                                                            {formatText(currentMantra.translationHindi)}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <p className="lg:text-lg text-sm border p-2 py-3 bg-orange-400 josefin-sans-bold text-black rounded text-center">
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
                                                className={`h-5 w-5 transition-transform ${commentryopen ? "rotate-180" : ""}`}
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
                                                        <h3 className="text-lg josefin-sans-bold font-semibold mb-2">
                                                            {selectedLanguageCommentry === "hindi" ? "Hindi Commentary" : "English Commentary"}
                                                        </h3>
                                                        <p className=" josefin-sans-bold">
                                                            {selectedLanguageCommentry === "hindi"
                                                                ? currentMantra.commentaryHindi.split("\n").map((line, index) => (
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
                                <div>Mantra not found.</div>
                            )}

                            <div className="bg-gray-300 w-full p-2 px-3 lg:px-20 flex justify-between fixed bottom-0 left-0">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentMantraIndex === 0}
                                    className="inline-flex items-center justify-center whitespace-nowrap w-[140px] rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 h-9 px-4 py-2 bg-gray-100 border shadow text-black"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={!currentMantra || currentMantraIndex >= Vedas.length - 1 || selectedShloka >= khandaData.length}
                                    className={`inline-flex items-center justify-center bg-gray-800 w-[140px] text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-600 h-9 lg:px-4 py-2`}
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

export default function Mundako() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MundakoUpnishad />
        </Suspense>
    );
}
