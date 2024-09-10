"use client";

import React, { useState, useEffect, Suspense } from "react";
import Vedas from "./aitareya.json";
import { useRouter, useSearchParams } from "next/navigation";

function MundakoUpnishad() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Initialize state based on URL search params
    const initialChapter = searchParams.get('Mundaka') ? parseInt(searchParams.get('Mundaka')) : 1;
    const initialKhanda = searchParams.get('Khanda') ? parseInt(searchParams.get('Khanda')) : 1;
    const initialShloka = searchParams.get('ShlokaNo') ? parseInt(searchParams.get('ShlokaNo')) : 1;

    const [selectedChapter, setSelectedChapter] = useState(initialChapter);
    const [selectedKhanda, setSelectedKhanda] = useState(initialKhanda);
    const [selectedShloka, setSelectedShloka] = useState(initialShloka);
    const [isOpen, setIsOpen] = useState(false);
    const [commentryopen, setcommentryopen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedLanguageCommentry, setSelectedLanguageCommentry] = useState(null);
    const [currentMantraIndex, setCurrentMantraIndex] = useState(0);

    useEffect(() => {
        const mantraNumber = parseInt(searchParams.get("ShlokaNo") || "1", 10);
        if (mantraNumber > 0 && mantraNumber <= Vedas.length) {
            setCurrentMantraIndex(mantraNumber - 1);
        } else {
            setCurrentMantraIndex(0);
        }
    }, [searchParams]);

    const handleChapterChange = (event) => {
        const newChapter = parseInt(event.target.value, 10);
        setSelectedChapter(newChapter);
        setSelectedKhanda(1);
        setSelectedShloka(1);
        updateURL(newChapter, 1, 1); // Update the URL when chapter changes
    };

    const handleKhandaChange = (event) => {
        const newKhanda = parseInt(event.target.value, 10);
        setSelectedKhanda(newKhanda);
        setSelectedShloka(1);
        updateURL(selectedChapter, newKhanda, 1); // Update the URL when khanda changes
    };

    const handleShlokaChange = (event) => {
        const newShloka = parseInt(event.target.value, 10);
        setSelectedShloka(newShloka);
        updateURL(selectedChapter, selectedKhanda, newShloka); // Update the URL when shloka changes
    };

    const handleNext = () => {
        const totalShlokasInKhanda = Vedas.filter(shlok => parseInt(shlok.Mundaka) === selectedChapter && parseInt(shlok.Khanda) === selectedKhanda).length;

        if (currentMantraIndex < Vedas.length - 1 && selectedShloka < totalShlokasInKhanda) {
            const nextIndex = currentMantraIndex + 1;
            const nextShloka = selectedShloka + 1;

            if (nextShloka > totalShlokasInKhanda) {
                let nextKhanda = selectedKhanda + 1;
                let nextChapter = selectedChapter;

                const totalKhandasInChapter = [...new Set(Vedas.filter(shlok => parseInt(shlok.Mundaka) === selectedChapter).map(shlok => parseInt(shlok.Khanda)))].length;

                if (nextKhanda > totalKhandasInChapter) {
                    nextKhanda = 1;
                    nextChapter = selectedChapter + 1;
                }

                setSelectedChapter(nextChapter);
                setSelectedKhanda(nextKhanda);
                setSelectedShloka(1);
                updateURL(nextChapter, nextKhanda, 1);
            } else {
                setSelectedShloka(nextShloka);
                updateURL(selectedChapter, selectedKhanda, nextShloka);
            }

            setCurrentMantraIndex(nextIndex);
        }
    };

    const handlePrevious = () => {
        if (currentMantraIndex > 0) {
            const prevIndex = currentMantraIndex - 1;
            const prevShloka = selectedShloka - 1;

            if (prevShloka <= 0) {
                let prevKhanda = selectedKhanda - 1;
                let prevChapter = selectedChapter;

                if (prevKhanda <= 0) {
                    prevChapter = selectedChapter - 1;
                    const totalKhandasInPrevChapter = [...new Set(Vedas.filter(shlok => parseInt(shlok.Mundaka) === prevChapter).map(shlok => parseInt(shlok.Khanda)))].length;
                    prevKhanda = totalKhandasInPrevChapter;
                }

                const totalShlokasInPrevKhanda = Vedas.filter(shlok => parseInt(shlok.Mundaka) === prevChapter && parseInt(shlok.Khanda) === prevKhanda).length;

                setSelectedChapter(prevChapter);
                setSelectedKhanda(prevKhanda);
                setSelectedShloka(totalShlokasInPrevKhanda);
                updateURL(prevChapter, prevKhanda, totalShlokasInPrevKhanda);
            } else {
                setSelectedShloka(prevShloka);
                updateURL(selectedChapter, selectedKhanda, prevShloka);
            }

            setCurrentMantraIndex(prevIndex);
        }
    };

    const handlecommentry = () => {
        setcommentryopen(!commentryopen);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const handleLanguageCommentry = (language) => {
        setSelectedLanguageCommentry(language);
    };

    const updateURL = (chapter, khanda, shloka) => {
        router.push(`?aitareya=${chapter}&Khanda=${khanda}&ShlokaNo=${shloka}`);
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

    const currentMantra = khandaData.find((shlok) => parseInt(shlok.ShlokaNo.trim()) === selectedShloka);

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
                                Aitareya Upanishad
                                </h2>
                            </div>
                            <div className="flex  items-center lg:mt-0 mt-2 lg:space-x-4 space-x-2">
                                <select
                                    value={selectedChapter}
                                    onChange={handleChapterChange}
                                    className="flex font-bold josefin-sans-bold lg:h-10 h-7 items-center justify-between rounded-md shadow border border-input bg-white lg:px-3 lg:py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-3 w-30  lg:text-xl lg:w-40"

                                >
                                    {uniqueChapters.map((chapter, index) => (
                                        <option className="font-bold" key={index} value={chapter}>
                                            Chapter {chapter}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={selectedKhanda}
                                    onChange={handleKhandaChange}
                                    className="flex font-bold josefin-sans-bold lg:h-10 h-7 items-center justify-between rounded-md shadow border border-input bg-white lg:px-3 lg:py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-3 w-30  lg:text-xl lg:w-40"

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
                                    className="flex font-bold josefin-sans-bold lg:h-10 h-7 items-center justify-between rounded-md shadow border border-input bg-white px-3 lg:py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-30  lg:text-xl lg:w-40"

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
                                                        Chapter {currentMantra.Mundaka} <svg
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
                                                        </svg> Khanda {currentMantra.Khanda}{" "}
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
                                                    Sanskrit Shloka
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
