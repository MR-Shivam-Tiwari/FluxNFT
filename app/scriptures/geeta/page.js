import Link from 'next/link'; // Import Link for routing
import Layout from '../Layout'; // Adjust the path to your Layout component

// Example data, replace this with your actual data fetching logic
const GeetaData = {
    BhagavadGita: [
        {
            id: 1,
            name: "Bhagavad Gita",
            src: "https://admin.gitapress.org/assets/uploads/media-uploader/tatavavavacana-vashashhata-sasakaranae1644392839.webp",
        },
    ],
    AnuGeeta: [
        {
            id: 2,
            name: "Anu Gita Hindi",
            src: "https://cdn.exoticindia.com/images/products/original/books-2019/nas548.webp",
        },
        {
            id: 3,
            name: "Anu Gita English",
            src: "https://cdn.exoticindia.com/images/products/original/books-2019/nas548.webp",
        },
    ],
    AstavakraGeeta: [
        {
            id: 4,
            name: "Astavakra Geeta Hindi",
            src: "https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 5,
            name: "Astavakra Geeta English",
            src: "https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg",
        },
    ]
};

async function fetchData() {
    // Simulate fetching data
    return GeetaData;
}

export default async function Geeta() {
    const categories = await fetchData();

    const renderBooks = (category) => {
        const books = categories[category] || [];
        return books.map((book) => (
            <div className="flex items-center justify-center gap-2" key={book.id}>
                <Link href={`/scriptures/geeta/${book.id}`} className="relative rounded-lg overflow-hidden w-[160px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
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
                </Link>
            </div>
        ));
    };

    return (
        <Layout>
            <div className='mt-3'>
                <div className='flex'>
                    <h3 className="text-xl mb-3 bg-orange-300 px-2 rounded font-bold">
                        Bhagavad Gita
                    </h3>
                </div>
                <div className="grid border lg:py-10 py-3 px-3 mb-3 rounded bg-orange-100 grid-cols-2 gap-4 sm:grid-cols-4">
                    {renderBooks('BhagavadGita')}
                </div>
                <div className='flex'>
                    <h3 className="text-xl mb-3 bg-orange-300 px-2 rounded font-bold">
                        Anu Gita
                    </h3>
                </div>
                <div className="grid border lg:py-10 py-3 px-3 mb-3 rounded bg-orange-100 grid-cols-2 gap-4 sm:grid-cols-4">
                    {renderBooks('AnuGeeta')}
                </div>
                <div className='flex'>
                    <h3 className="text-xl mb-3 bg-orange-300 px-2 rounded font-bold">
                        Astavakra Geeta
                    </h3>
                </div>
                <div className="grid border lg:py-10 py-3 px-3 mb-3 rounded bg-orange-100 grid-cols-2 gap-4 sm:grid-cols-4">
                    {renderBooks('AstavakraGeeta')}
                </div>
            </div>
        </Layout>
    );
}
