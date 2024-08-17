"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import imageLoader from './imageLoader';
const booksData = [
    {
        id: 1,
        name: "Rigveda",
        src: "https://m.media-amazon.com/images/I/51mDE-WDILL.jpg",
        route: "/scriptures/Vedas/1",
    },
    {
        id: 2,
        name: "Samaveda",
        src: "https://nepalyogahome.com/wp-content/uploads/2021/05/samaveda.jpg",
        route: "/scriptures/Vedas/2",
    },
    {
        id: 3,
        name: "Yajurveda",
        src: "https://m.media-amazon.com/images/I/51fkgWsI+qL.jpg",
        route: "/scriptures/Vedas/3",
    },
    {
        id: 4,
        name: "Atharvaveda",
        src: "https://nepalyogahome.com/wp-content/uploads/2021/05/Atharvaveda.jpg",
        route: "/scriptures/Vedas/4",
    },
    {
        id: 5,
        name: "Ramayana Hindi",
        src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e855656449.webp",
        route: "/scriptures/Epics/1",
    },
    {
        id: 6,
        name: "Ramayana English",
        src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e84e4cbfce.webp",
        route: "/scriptures/Epics/2",
    },
    {
        id: 7,
        name: "Mahabharata Hindi",
        src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e855e7085d.webp",
        route: "/scriptures/Epics/3",
    },
    {
        id: 8,
        name: "Mahabharata English",
        src: "https://m.media-amazon.com/images/I/71s6IAl4QlL._AC_UF1000,1000_QL80_.jpg",
        route: "/scriptures/Epics/4",
    },
    {
        id: 9,
        name: "Mahabharata Bori-CE",
        src: "https://m.media-amazon.com/images/I/71s6IAl4QlL._AC_UF1000,1000_QL80_.jpg",
        route: "/scriptures/Epics/5",
    },
    {
        id: 10,
        name: "Isha Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books-2019/uak245.jpg",
        route: "/scriptures/Upanishad/1",
    },
    {
        id: 11,
        name: "Kena Upanishad",
        src: "https://sanatan.in/cdn/shop/products/68_1.jpg?v=1656756815",
        route: "/scriptures/Upanishad/2",
    },
    {
        id: 12,
        name: "Katha Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books/gpa057.jpg",
        route: "/scriptures/Upanishad/3",
    },
    {
        id: 13,
        name: "Prashna Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books/gpa044.jpg",
        route: "/scriptures/Upanishad/4",
    },
    {
        id: 14,
        name: "Mundaka Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books/gpa051.jpg",
        route: "/scriptures/Upanishad/5",
    },
    {
        id: 15,
        name: "Mandukya Upanishad",
        src: "https://m.media-amazon.com/images/I/A1o5c0y+tlL._AC_UF894,1000_QL80_.jpg",
        route: "/scriptures/Upanishad/6",
    },
    {
        id: 16,
        name: "Taittiriya Upanishad",
        src: "https://cdn.exoticindia.com/images/products/original/books/gpa049.jpg",
        route: "/scriptures/Upanishad/7",
    },
    {
        id: 17,
        name: "Aitareya Upanishad",
        src: "https://sanatan.in/cdn/shop/products/72-copy-2_1.jpg?v=1656336366",
        route: "/scriptures/Upanishad/8",
    },
    {
        id: 18,
        name: "Chandogya Upanishad",
        src: "https://m.media-amazon.com/images/I/51cz7ToCbZL._AC_UF1000,1000_QL80_.jpg",
        route: "/scriptures/Upanishad/9",
    },
    {
        id: 19,
        name: "Brihadaranyaka Upanishad",
        src: "https://m.media-amazon.com/images/I/41M3QpHxkCS._SY445_SX342_.jpg",
        route: "/scriptures/Upanishad/10",
    },
    {
        id: 20,
        name: "Shvetashvatara Upanishad",
        src: "https://sanatan.in/cdn/shop/products/73-copy-3.jpg?v=1651300907",
        route: "/scriptures/Upanishad/11",
    },
    {
        id: 21,
        name: "Bhagavad Gita",
        src: "https://admin.gitapress.org/assets/uploads/media-uploader/tatavavavacana-vashashhata-sasakaranae1644392839.webp",
        route: "/scriptures/geeta/1",
    },
    {
        id: 22,
        name: "Anu Gita Hindi",
        src: "https://cdn.exoticindia.com/images/products/original/books-2019/nas548.webp",
        route: "/scriptures/geeta/3",
    },
    {
        id: 23,
        name: "Anu Gita English",
        src: "https://cdn.exoticindia.com/images/products/original/books-2019/nas548.webp",
        route: "/scriptures/geeta/4",
    },
    {
        id: 24,
        name: "Astavakra Geeta Hindi",
        src: "https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg",
        route: "/scriptures/geeta/7",
    },
    {
        id: 25,
        name: "Astavakra Geeta English",
        src: "https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg",
        route: "/scriptures/geeta/8",
    },
    // Add more book objects here
];

function BookCard({ books }) {
    const router = useRouter();

    const handleClick = (route) => {
        router.push(route);
    };

    // Sort books alphabetically by name
    const sortedBooks = books.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedBooks.map((book) => (
                <div
                    key={book.id}
                    onClick={() => handleClick(book.route)}
                    style={{ cursor: 'pointer' }}
                    className="relative group bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="relative">
                        <Image
                            loader={imageLoader}
                            src={book.src}
                            alt={book.name}
                            width={200} priority={true}
                            height={300}
                            className="w-full lg:h-[350px]  object-cover rounded-t-md"
                            style={{ aspectRatio: '200 / 300', objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 rounded-t-md bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-white font-medium text-lg">Read Book</span>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{book.name}</h3>
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
