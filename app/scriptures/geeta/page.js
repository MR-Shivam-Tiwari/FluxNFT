import Link from 'next/link'; // Import Link for routing
import Layout from '../Layout'; // Adjust the path to your Layout component
import Image from 'next/image';

// Example data, replace this with your actual data fetching logic
const GeetaData = {
    BhagavadGita: [
        {
            id: 1,
            name: "Bhagavad Gita",
            src: "/geetaimage/bhagvadgita.jpg",
        },
    ],
    AnuGeeta: [
        {
            id: 2,
            name: "Anu Gita Hindi",
            src: "/geetaimage/anuhin.png",
        },
        {
            id: 3,
            name: "Anu Gita English",
            src: "/geetaimage/anu.png",
        },
    ],
    AstavakraGeeta: [
        {
            id: 4,
            name: "Astavakra Geeta Hindi",
            src: "/geetaimage/asht.png",
        },
        {
            id: 5,
            name: "Astavakra Geeta English",
            src: "/geetaimage/ashteng.png",
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
                <Link href={`/scriptures/geeta/${book.id}`} className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
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
                            <h3 className="text-xl font-bold  flex flex-wrap ">{book.name}</h3>
                        </div>
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
                <div className="grid border lg:py-10 lg:px-10 py-7 px-3 mb-3 rounded bg-orange-100 lg:grid-cols-2 gap-4 grid-cols-1 lg:flex lg:flex-wrap ">
                    {renderBooks('BhagavadGita')}
                </div>
                <div className='flex'>
                    <h3 className="text-xl mb-3 bg-orange-300 px-2 rounded font-bold">
                        Anu Gita
                    </h3>
                </div>
                <div className="grid border lg:py-10 lg:px-10 py-7 px-3 mb-3 rounded bg-orange-100 lg:grid-cols-2 gap-4 grid-cols-1 lg:flex lg:flex-wrap lg:gap-20">
                    {renderBooks('AnuGeeta')}
                </div>
                <div className='flex'>
                    <h3 className="text-xl mb-3 bg-orange-300 px-2 rounded font-bold">
                        Astavakra Geeta
                    </h3>
                </div>
                <div className="grid border lg:py-10 lg:px-10 py-7 px-3 mb-3 rounded bg-orange-100 lg:grid-cols-2 gap-4 grid-cols-1 lg:flex lg:flex-wrap lg:gap-20">
                    {renderBooks('AstavakraGeeta')}
                </div>
            </div>
        </Layout>
    );
}
