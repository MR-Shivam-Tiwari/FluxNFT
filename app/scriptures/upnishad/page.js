import Layout from '../Layout'; // Adjust the path to your Layout component

// Example data, replace this with your actual data fetching logic
const Upanishads = [
    {
      id: 1,
      name: "Isha Upanishad",
      src: "https://cdn.exoticindia.com/images/products/original/books-2019/uak245.jpg",
    },
    {
      id: 2,
      name: "Kena Upanishad",
      src: "https://sanatan.in/cdn/shop/products/68_1.jpg?v=1656756815",
    },
    {
      id: 3,
      name: "Katha Upanishad",
      src: "https://cdn.exoticindia.com/images/products/original/books/gpa057.jpg",
    },
    {
      id: 4,
      name: "Prashna Upanishad",
      src: "https://cdn.exoticindia.com/images/products/original/books/gpa044.jpg",
    },
    {
      id: 5,
      name: "Mundaka Upanishad",
      src: "https://cdn.exoticindia.com/images/products/original/books/gpa051.jpg",
    },
    {
      id: 6,
      name: "Mandukya Upanishad",
      src: "https://m.media-amazon.com/images/I/A1o5c0y+tlL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 7,
      name: "Taittiriya Upanishad",
      src: "https://cdn.exoticindia.com/images/products/original/books/gpa049.jpg",
    },
    {
      id: 8,
      name: "Aitareya Upanishad",
      src: "https://sanatan.in/cdn/shop/products/72-copy-2_1.jpg?v=1656336366",
    },
    {
      id: 9,
      name: "Chandogya Upanishad",
      src: "https://m.media-amazon.com/images/I/51cz7ToCbZL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 10,
      name: "Brihadaranyaka Upanishad",
      src: "https://m.media-amazon.com/images/I/41M3QpHxkCS._SY445_SX342_.jpg",
    },
    {
      id: 11,
      name: "Shvetashvatara Upanishad",
      src: "https://sanatan.in/cdn/shop/products/73-copy-3.jpg?v=1651300907",
    },
  ];

export default function Upnishad() {
    const renderBooks = () => {
        return Upanishads.map((book) => (
            <div className="flex items-center justify-center gap-2" key={book.id}>
                <div>
                    <div className="relative rounded-lg overflow-hidden w-[160px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                        <img
                            src={book.src}
                            alt={book.name}
                            className="rounded-md"
                            style={{
                                aspectRatio: "90/140",
                                objectFit: "cover",
                                width: "160px",
                            }}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-2 text-white text-sm font-semibold">
                            {book.name}
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <Layout>
            <div>
                <div className="grid border lg:py-10 mt-10 py-3 px-3 mb-3 rounded bg-orange-100 grid-cols-2 gap-4 sm:grid-cols-4">
                    {renderBooks()}
                </div>
            </div>
        </Layout>
    );
}
