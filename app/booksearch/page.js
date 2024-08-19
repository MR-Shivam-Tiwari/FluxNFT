"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import imageLoader from './imageLoader';
const booksData = [
    {
        id: 1,
        name: "Rigveda",
        src: "/vedaimage/rigved.jpg",
        route: "/scriptures/vedas/1",
    },
    {
        id: 2,
        name: "Samaveda",
        src: "/vedaimage/samved.jpg",
        route: "/scriptures/vedas/2",
    },
    {
        id: 3,
        name: "Yajurveda",
        src: "/vedaimage/yajur.jpg",
        route: "/scriptures/vedas/3",
    },
    {
        id: 4,
        name: "Atharvaveda",
        src: "/vedaimage/atharv.jpg",
        route: "/scriptures/vedas/4",
    },
    {
        id: 5,
        name: "Ramayana Hindi",
        src: "/epicimage/rama.jpg",
        route: "/scriptures/epics/1",
    },
    {
        id: 6,
        name: "Ramayana English",
        src: "/epicimage/ramahindi.jpg",
        route: "/scriptures/epics/2",
    },
    {
        id: 7,
        name: "Mahabharata Hindi",
        src: "/epicimage/maha.jpg",
        route: "/scriptures/epics/4",
    },
    {
        id: 8,
        name: "Mahabharata English",
        src: "/epicimage/mahae.jpg",
        route: "/scriptures/epics/5",
    },
    {
        id: 9,
        name: "Mahabharata Bori-CE",
        src: "/epicimage/mahab.jpg",
        route: "/scriptures/epics/6",
    },
    {
        id: 10,
        name: "Isha Upanishad",
        src: "/upnishadimage/isha.jpg",
        route: "/scriptures/upnishad/1",
    },
    {
        id: 11,
        name: "Kena Upanishad",
        src: "/upnishadimage/kena.jpg",
        route: "/scriptures/upnishad/2",
    },
    {
        id: 12,
        name: "Katha Upanishad",
        src: "/upnishadimage/katha.jpg",
        route: "/scriptures/upnishad/3",
    },
    {
        id: 13,
        name: "Prashna Upanishad",
        src: "/upnishadimage/prashna.jpg",
        route: "/scriptures/upnishad/4",
    },
    {
        id: 14,
        name: "Mundaka Upanishad",
        src: "/upnishadimage/mundaka.jpg",
        route: "/scriptures/upnishad/5",
    },
    {
        id: 15,
        name: "Mandukya Upanishad",
        src: "/upnishadimage/mandukya.jpg",
        route: "/scriptures/upnishad/6",
    },
    {
        id: 16,
        name: "Taittiriya Upanishad",
        src: "/upnishadimage/taittiriya.jpg",
        route: "/scriptures/upnishad/7",
    },
    {
        id: 17,
        name: "Aitareya Upanishad",
        src: "/upnishadimage/aitareya.jpg",
        route: "/scriptures/upnishad/8",
    },
    {
        id: 18,
        name: "Chandogya Upanishad",
        src: "/upnishadimage/chandogya.jpg",
        route: "/scriptures/upnishad/9",
    },
    {
        id: 19,
        name: "Brihadaranyaka Upanishad",
        src: "/upnishadimage/brihad.jpg",
        route: "/scriptures/upnishad/10",
    },
    {
        id: 20,
        name: "Shvetashvatara Upanishad",
        src: "/upnishadimage/shveta.jpg",
        route: "/scriptures/upnishad/11",
    },
    {
        id: 21,
        name: "Bhagavad Gita",
        src: "/geetaimage/bhagvadgita.jpg",
        route: "/scriptures/geeta/1",
    },
    {
        id: 22,
        name: "Anu Gita Hindi",
        src: "/geetaimage/anuhin.png",
        route: "/scriptures/geeta/2",
    },
    {
        id: 23,
        name: "Anu Gita English",
        src: "/geetaimage/anu.png",
        route: "/scriptures/geeta/3",
    },
    {
        id: 24,
        name: "Astavakra Geeta Hindi",
        src: "/geetaimage/asht.png",
        route: "/scriptures/geeta/4",
    },
    {
        id: 25,
        name: "Astavakra Geeta English",
        src: "/geetaimage/ashteng.png",
        route: "/scriptures/geeta/5",
    },
    // Add more book objects here
];

function BookCard({ books }) {
    const router = useRouter();

    const handleClick = (route) => {
        router.push(route);
    };

    // Sort books alphabetically by name
    // const sortedBooks = books.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
                <div
                    key={book.id}
                    onClick={() => handleClick(book.route)}
                    style={{ cursor: 'pointer' }}
                    className="relative rounded-lg overflow-hidden  shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer"
                >
                    <div className=" relative group bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">

                        <Image
                            src={book.src}
                            alt={book.name}
                            width={250}
                            height={300} priority={true}
                            className="w-full lg:h-[350px] object-cover rounded-t-md"
                            style={{ aspectRatio: '250 / 300', objectFit: 'cover', objectPosition: 'top' }} // Added objectPosition: 'top'
                        // loading="lazy"
                        />

                        <div className="absolute inset-0 rounded-t-md bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-white font-medium text-lg">Read Book</span>
                        </div>
                        <div className="px-4 p-2">
                            <h3 className="text-[16px] font-bold  flex flex-wrap ">{book.name}</h3> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


function SearchBook() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(booksData);

    const handleSearch = () => {
        setFilteredBooks(
            booksData.filter((book) =>
                book.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center">
                <input
                    className="flex h-10 border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="Search for books..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 bg-orange-600 w-[150px] hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
                >
                    Search
                </button>
            </div>
            <BookCard books={filteredBooks} />
        </div>
    );
}

export default SearchBook;
