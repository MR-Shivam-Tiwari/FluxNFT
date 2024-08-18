"use client";

import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import gita from './bhagvad.json';

function BhagavadGitaContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialChapter = searchParams.get('chapter') ? parseInt(searchParams.get('chapter')) : 1;
  const initialShloka = searchParams.get('shloka') ? parseInt(searchParams.get('shloka')) : 1;

  const [selectedChapter, setSelectedChapter] = useState(initialChapter);
  const [selectedShloka, setSelectedShloka] = useState(initialShloka);
  const [selectedCommentary, setSelectedCommentary] = useState('Shankaracharya');

  useEffect(() => {
    const params = new URLSearchParams();

    params.set('chapter', selectedChapter);
    params.set('shloka', selectedShloka);

    router.push(`?${params.toString()}`, undefined, { shallow: true });
  }, [selectedChapter, selectedShloka]);

  const handleCommentaryClick = (commentary) => {
    setSelectedCommentary(commentary);
  };

  const handleChapterChange = (event) => {
    setSelectedChapter(parseInt(event.target.value, 10));
    setSelectedShloka(1); // Reset to first shloka on chapter change
  };

  const handleShlokaChange = (event) => {
    setSelectedShloka(parseInt(event.target.value, 10));
  };

  const formatText = (text) => {
    return text.split('\n').map((line, index) => {
      const parts = line.split(/(`[^`]+`)/g);
      return (
        <span key={index}>
          {parts.map((part, i) =>
            part.startsWith('`') && part.endsWith('`') ? (
              <span key={i} className='text-gray-500  text-[15px]'>{part.slice(1, -1)}</span>
            ) : (
              part
            )
          )}
          <br />
        </span>
      );
    });
  };

  const chapterData = gita.filter(shloka => shloka.Chapter === selectedChapter.toString());
  const shlokaData = chapterData.find(shloka => shloka.ShlokaNo === selectedShloka.toString());

  const uniqueChapters = [...new Set(gita.map(shloka => shloka.Chapter))];

  return (
    <div className='bg-orange-300 min-h-screen'>
      <div className="w-full max-w-7xl mx-auto py-4 pb-14 lg:py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <select
              value={selectedChapter}
              onChange={handleChapterChange}
              className="flex font-bold josefin-sans-bold h-10 items-center justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
            >
              {uniqueChapters.map((chapter, index) => (
                <option className='font-bold' key={index} value={chapter}>Chapter {chapter}</option>
              ))}
            </select>
            <select
              value={selectedShloka}
              onChange={handleShlokaChange}
              className="flex h-10 items-center p-5 josefin-sans-bold justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
            >
              {chapterData.map((shloka, index) => (
                <option className='font-bold ' key={index} value={shloka.ShlokaNo}>Shloka {shloka.ShlokaNo}</option>
              ))}
            </select>
          </div>
          <div className="mt-4 md:mt-0">
            <input className="flex h-10 w-full shadow-sm rounded-md border border-input bg-white-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Search" />
          </div>
        </div>
        {shlokaData && (
          <div className="bg-gray-100 lg:shadow-lg rounded-lg lg:p-8">
            <h2 className="text-3xl font-bold mb-4 py-3 text-center">Sanskrit Shloka</h2>
            <p className="text-3xl mb-7 text-center text-orange-700  annapurna-sil-bold" >{shlokaData.Shloka}</p>
            <h2 className="text-3xl font-bold mb-4  text-center">Translation (Hindi - English)</h2>
            <div className="space-y-2 lg:border lg:p-5 p-3  shadow rounded">
              <div className="flex flex-col items-center">
                <p className="text-lg border p-2 py-3 mb-2 bg-gray-300 rounded josefin-sans-bold text-center">
                  {formatText(shlokaData.Hindi)}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg border p-2 py-3 bg-yellow-300 josefin-sans-bold rounded text-center">
                  {formatText(shlokaData.English)}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center  justify-center lg:px-20 lg:gap-8 gap-4 mt-8">
          <button
            onClick={() => handleCommentaryClick('Shankaracharya')}
            className={`inline-flex items-center w-full justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Shankaracharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Shankaracharya Commentary
          </button>
          <button
            onClick={() => handleCommentaryClick('Ramanujacharya')}
            className={`inline-flex items-center w-full justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Ramanujacharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Ramanujacharya Commentary
          </button>
          <button
            onClick={() => handleCommentaryClick('Madhvacharya')}
            className={`inline-flex items-center w-full  justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Madhvacharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Madhvacharya Commentary
          </button>
        </div>
        <div className="my-8 martel-sans-black  p-4 mb-20 bg-orange-400 shadow-lg rounded-md">
          {selectedCommentary === 'Shankaracharya' && shlokaData?.Shankaracharya && <p>{shlokaData.Shankaracharya.English}</p>}
          {selectedCommentary === 'Ramanujacharya' && shlokaData?.Ramanujacharya && <p>{shlokaData.Ramanujacharya.English}</p>}
          {selectedCommentary === 'Madhvacharya' && shlokaData?.Madhvacharya && <p>{shlokaData.Madhvacharya.English}</p>}
          {!shlokaData && <p>Select a commentary to view details.</p>}
        </div>
        <div className="bg-orange-200 w-full p-2 lg:px-20 flex justify-between fixed bottom-0 left-0">
          <button
            onClick={() => setSelectedShloka(selectedShloka > 1 ? selectedShloka - 1 : selectedShloka)}
            className="inline-flex items-center shadow justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-6 w-[150px] py-2 bg-white hover:bg-gray-200 text-black"
          >
            Previous
          </button>
          <button
            onClick={() => setSelectedShloka(selectedShloka < chapterData.length ? selectedShloka + 1 : selectedShloka)}
            className="inline-flex items-center shadow justify-center whitespace-nowrap rounded-md text-sm font-bold hover:bg-orange-400 transition-colors   h-10 px-6 w-[150px] py-2 bg-orange-700  text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BhagavadGitaHindi() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BhagavadGitaContent />
    </Suspense>
  );
}
