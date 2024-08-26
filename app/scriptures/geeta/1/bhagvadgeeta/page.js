"use client";

import React, { useState, useEffect, Suspense } from "react";
import Vedas from "./bhagvad.json";
import { useRouter, useSearchParams } from "next/navigation";

function KathaUpanishad() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialChapter = searchParams.get("chapter") ? parseInt(searchParams.get("chapter")) : 1;
    const initialShloka = searchParams.get("shloka") ? parseInt(searchParams.get("shloka")) : 1;

    const [selectedShloka, setSelectedShloka] = useState(initialShloka);
    const [selectedChapter, setSelectedChapter] = useState(initialChapter);
    const [isOpen, setIsOpen] = useState(false);
    const [commentaryOpen, setCommentaryOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedLanguageCommentary, setSelectedLanguageCommentary] = useState(null);

    useEffect(() => {
        const chapter = searchParams.get("chapter") ? parseInt(searchParams.get("chapter")) : 1;
        const shloka = searchParams.get("shloka") ? parseInt(searchParams.get("shloka")) : 1;
        setSelectedChapter(chapter);
        setSelectedShloka(shloka);
    }, [searchParams]);

    const handleChapterChange = (event) => {
        const chapter = parseInt(event.target.value, 10);
        setSelectedChapter(chapter);
        setSelectedShloka(1); // Reset to first shloka on chapter change
        router.push(`?chapter=${chapter}&shloka=1`);
    };

    const handleShlokaChange = (event) => {
        const shloka = parseInt(event.target.value, 10);
        setSelectedShloka(shloka);
        router.push(`?chapter=${selectedChapter}&shloka=${shloka}`);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCommentaryToggle = () => {
        setCommentaryOpen(!commentaryOpen);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const handleLanguageCommentarySelect = (language) => {
        setSelectedLanguageCommentary(language);
    };

    const formatText = (text) => {
        return text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    const chapterData = Vedas.filter((shlok) => shlok.chapter.trim() === selectedChapter.toString());

    const currentMantra = chapterData.find((shlok) => shlok.ShlokaNo === selectedShloka.toString());

    const uniqueChapters = [...new Set(Vedas.map((shlok) => shlok.chapter.trim()))];

    const handlePrevious = () => {
        if (selectedShloka > 1) {
            setSelectedShloka(selectedShloka - 1);
            router.push(`?chapter=${selectedChapter}&shloka=${selectedShloka - 1}`);
        }
    };

    const handleNext = () => {
        if (selectedShloka < chapterData.length) {
            setSelectedShloka(selectedShloka + 1);
            router.push(`?chapter=${selectedChapter}&shloka=${selectedShloka + 1}`);
        }
    };

    return (
        <div className="container mx-auto lg:px-20 mt-5">
            <div>
                <div className="flex flex-col sm:flex-row">
                    <div className="flex-1 lg:p-6 p-3">
                        <div className="mb-6 px-2 flex items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="lg:text-2xl font-bold yatra-one-regular">Katha Upanishad</h2>
                            </div>
                            <div className="flex items-center space-x-4">
                                <select
                                    value={selectedChapter}
                                    onChange={handleChapterChange}
                                    className="flex font-bold josefin-sans-bold h-10 items-center justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                                >
                                    {uniqueChapters.map((chapter, index) => (
                                        <option className="font-bold" key={index} value={chapter}>
                                            Chapter {chapter}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={selectedShloka}
                                    onChange={handleShlokaChange}
                                    className="flex h-10 items-center p-5 josefin-sans-bold justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                                >
                                    {chapterData.map((shlok, index) => (
                                        <option className="font-bold" key={index} value={shlok.ShlokaNo}>
                                            Shlok {shlok.ShlokaNo}
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
                                                <h2 className="lg:text-2xl mt-3 text-lg yatra-one-regular tracking-wide">
                                                    {currentMantra.ShlokaNo}
                                                </h2>
                                                <div className="border-b mt-3"></div>
                                                <div className="lg:text-[20px] leading-8 space-y-3 text-md mt-6 yatra-one-regular">
                                                    {formatText(currentMantra.shlok)}
                                                </div>
                                            </div>
                                            {selectedLanguage === "hindi" && currentMantra.translationHindi && (
                                                <div>
                                                    <h2 className="lg:text-2xl text-lg font-bold text-center yatra-one-regular tracking-wide">
                                                        Translation in Hindi
                                                    </h2>
                                                    <div className="border-b mt-3"></div>
                                                    <div className="lg:text-[20px] leading-8 space-y-3 text-md mt-6 yatra-one-regular">
                                                        {formatText(currentMantra.translationHindi)}
                                                    </div>
                                                </div>
                                            )}
                                            {selectedLanguage === "english" && currentMantra.translationEnglish && (
                                                <div>
                                                    <h2 className="lg:text-2xl text-lg font-bold text-center yatra-one-regular tracking-wide">
                                                        Translation in English
                                                    </h2>
                                                    <div className="border-b mt-3"></div>
                                                    <div className="lg:text-[20px] leading-8 space-y-3 text-md mt-6 yatra-one-regular">
                                                        {formatText(currentMantra.translationEnglish)}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="bg-slate-200 lg:mt-3 p-2 rounded-md text-center flex justify-center">
                                                <button
                                                    onClick={handleToggle}
                                                    className="text-xs text-center text-gray-600 hover:text-black"
                                                >
                                                    {!isOpen ? (
                                                        <div className="flex">
                                                            Expand Detailed Translation
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-4 h-4 ml-1"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    ) : (
                                                        <div className="flex">
                                                            Collapse Detailed Translation
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-4 h-4 ml-1"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19.5 12h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </button>
                                            </div>
                                            {isOpen && (
                                                <div className="lg:text-[20px] p-5 leading-8 space-y-3 text-md mt-6 yatra-one-regular">
                                                    {formatText(currentMantra.DetailedTranslation)}
                                                </div>
                                            )}
                                            <div className="bg-slate-200 lg:mt-3 p-2 rounded-md text-center flex justify-center">
                                                <button
                                                    onClick={handleCommentaryToggle}
                                                    className="text-xs text-center text-gray-600 hover:text-black"
                                                >
                                                    {!commentaryOpen ? (
                                                        <div className="flex">
                                                            Expand Commentary by Adi Shankaracharya
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-4 h-4 ml-1"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    ) : (
                                                        <div className="flex">
                                                            Collapse Commentary by Adi Shankaracharya
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-4 h-4 ml-1"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M19.5 12h-15"
                                                                />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </button>
                                            </div>
                                            {commentaryOpen && selectedLanguageCommentary === "hindi" && currentMantra.commentaryHindi && (
                                                <div className="lg:text-[20px] p-5 leading-8 space-y-3 text-md mt-6 yatra-one-regular">
                                                    {formatText(currentMantra.commentaryHindi)}
                                                </div>
                                            )}
                                            {commentaryOpen && selectedLanguageCommentary === "english" && currentMantra.commentaryEnglish && (
                                                <div className="lg:text-[20px] p-5 leading-8 space-y-3 text-md mt-6 yatra-one-regular">
                                                    {formatText(currentMantra.commentaryEnglish)}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-10">
                                        <button
                                            onClick={handlePrevious}
                                            disabled={selectedShloka <= 1}
                                            className="disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                                        >
                                            Previous
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            disabled={selectedShloka >= chapterData.length}
                                            className="disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <p className="text-center text-gray-600">Shloka not found for the selected chapter.</p>
                            )}
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
            <KathaUpanishad />
        </Suspense>
    );
}
