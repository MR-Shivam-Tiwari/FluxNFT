"use client"

import React, { useState, useEffect, Suspense } from "react";
import Vedas from "./svetasvatara.json";
import { useRouter, useSearchParams } from "next/navigation";

function Shvetashvatara() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialChapter = searchParams.get('chapter') ? parseInt(searchParams.get('chapter')) : 1;
    const initialShloka = searchParams.get('shlok') ? parseInt(searchParams.get('shlok')) : 1;
    const [selectedShloka, setSelectedShloka] = useState(initialShloka);
    const [selectedChapter, setSelectedChapter] = useState(initialChapter);
    const [isOpen, setIsOpen] = useState(false);
    const [commentryopen, setcommentryopen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedLanguageCommentry, setselectedLanguageCommentry] =
        useState(null);
    const [currentMantraIndex, setCurrentMantraIndex] = useState(0);
    const handleChapterChange = (event) => {
        setSelectedChapter(parseInt(event.target.value, 10));
        setSelectedShloka(1); // Reset to first shloka on chapter change
    };
    useEffect(() => {
        const mantraNumber = parseInt(searchParams.get("mantra") || "1", 10);
        if (mantraNumber > 0 && mantraNumber <= Vedas.length) {
            setCurrentMantraIndex(mantraNumber - 1);
        } else {
            setCurrentMantraIndex(0);
        }
    }, [searchParams]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
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

    const handleNext = () => {
        if (currentMantraIndex < Vedas.length - 1) {
            const nextIndex = currentMantraIndex + 1;
            setCurrentMantraIndex(nextIndex);
            updateURL(nextIndex + 1);
            resetStates();
        }
    };
    const handleShlokaChange = (event) => {
        setSelectedShloka(parseInt(event.target.value, 10));
    };
    const handlePrevious = () => {
        if (currentMantraIndex > 0) {
            const prevIndex = currentMantraIndex - 1;
            setCurrentMantraIndex(prevIndex);
            updateURL(prevIndex + 1);
            resetStates();
        }
    };

    const handleSelectMantra = (event) => {
        const index = parseInt(event.target.value, 10);
        setCurrentMantraIndex(index);
        updateURL(index + 1);
        resetStates();
    };

    const updateURL = (mantraNumber) => {
        router.push(`?mantra=${mantraNumber}`);
    };

    const resetStates = () => {
        setIsOpen(false);
        setcommentryopen(false);
        setSelectedLanguage(null);
        setselectedLanguageCommentry(null);
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

    const chapterData = Vedas.filter((shlok) => shlok.chapter.trim() === selectedChapter.toString());

    const currentMantra = chapterData.find((shlok) => shlok.ShlokaNo === selectedShloka.toString());

    const uniqueChapters = [...new Set(Vedas.map((shlok) => shlok.chapter.trim()))];

    return (
        <div className="container mx-auto lg:px-20 mt-5">
            <div>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 lg:p-6 p-3">
                        <div className="mb-6 px-2 flex items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="lg:text-2xl font-bold yatra-one-regular">
                                    Prashna Upanishad
                                </h2>
                            </div>
                            <div className="flex items-center space-x-4">
                                <select
                                    value={selectedChapter}
                                    onChange={handleChapterChange}
                                    className="flex font-bold josefin-sans-bold h-10 items-center justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                                >
                                    {uniqueChapters.map((chapter, index) => (
                                        <option className='font-bold' key={index} value={chapter}>Prashna {chapter}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedShloka}
                                    onChange={handleShlokaChange}
                                    className="flex h-10 items-center p-5 josefin-sans-bold justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                                >
                                    {chapterData.map((shloka, index) => (
                                        <option className='font-bold ' key={index} value={shloka.ShlokaNo}>Mantra {shloka.ShlokaNo}</option>
                                    ))}
                                </select>
                            </div>
                            {/* <div className="flex items-center space-x-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-600 font-bold">
                                        <div className="lg:block hidden">Select Mantra</div>
                                        <select
                                            value={currentMantraIndex}
                                            onChange={handleSelectMantra}
                                            className="flex h-10 items-center gap-1 justify-between bg-gray-800 text-white font-bold rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground cursor-pointer disabled:opacity-50 lg:w-[230px]"
                                        >
                                            {Vedas.map((mantra, index) => (
                                                <option key={index} value={index}>
                                                    Part {mantra.Part} - Valli {mantra.Valli} - Mantra{" "}
                                                    {mantra.mantraNumber}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="space-y-6 overflow-y-auto pb-20">
                            {currentMantra ? (
                                <>
                                    <div className="rounded-lg border-2 bg-white p-3 shadow-lg border-gray-300">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex items-center">
                                                    <div className="mb-1 p-1 bg-blue-200 flex items-center shadow gap-1 px-3 h-5 text-xs border rounded-[3px] font-bold">
                                                        Prashna {currentMantra.chapter}{" "}
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
                                                <h2 className="text-3xl font-bold mb-4 py-3 text-center">
                                                    Sanskrit Shloka
                                                </h2>
                                                <div className="font-bold text-center text-blue-600 mb-3 text-2xl  leading-10 martel-black">
                                                    {currentMantra.shlok
                                                        .split("\n")
                                                        .map((line, index) => (
                                                            <React.Fragment key={index}>
                                                                {line}
                                                                <br />
                                                            </React.Fragment>
                                                        ))}
                                                </div>

                                                <h2 className="text-3xl font-bold mb-4 text-center">
                                                    Translation (Hindi - English)
                                                </h2>
                                                <div className="space-y-2 lg:border lg:p-5 lg:shadow rounded">
                                                    <div className="flex flex-col items-center">
                                                        <p className="text-lg border p-2 py-3 mb-2 bg-blue-200 rounded josefin-sans-bold text-center">
                                                            {formatText(currentMantra.translationHindi)}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <p className="text-lg border p-2 py-3 bg-orange-400 josefin-sans-bold text-black rounded text-center">
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
                                             Commentary
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
                                                                ? "Adi Shankaracharya Hindi Commentary"
                                                                : "T.N.Sethumadhavan English Commentary"}
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
                                <div>Mantra not found.</div>
                            )}

                            <div className="bg-gray-300 w-full p-2 px-10 lg:px-20 flex justify-between fixed bottom-0 left-0">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentMantraIndex === 0}
                                    className="inline-flex items-center justify-center whitespace-nowrap w-[100px] rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 h-10 px-4 py-2 bg-gray-100 border shadow text-black"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={currentMantraIndex === Vedas.length - 1}
                                    className={`inline-flex items-center justify-center bg-gray-800 w-[100px] text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-600 h-10 px-4 py-2`}
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



export default function Svetas() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Shvetashvatara />
        </Suspense>
    );
}
