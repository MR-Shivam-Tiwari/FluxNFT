import Image from 'next/image';
import Layout from '../Layout'; // Adjust the path to your Layout component
import ramcharit from './cover.jpeg'; // Ensure this path is correct
import Link from 'next/link';
const Epics = {
    Ramayana: [
        {
            id: 1,
            name: "Ramayana Hindi",
            src: "/epicimage/ramahindi.jpg",
        },
        {
            id: 2,
            name: "Ramayana English",
            src: "/epicimage/rama.jpg",
        },
        {
            id: 3,
            name: "Ramcharitmanas",
            src: "/epicimage/ramcharit.jpg"
        },
    ],
    Mahabharata: [
        {
            id: 4,
            name: "Mahabharata Hindi",
            src: "/epicimage/maha.jpg",
        },
        {
            id: 5,
            name: "Mahabharata English",
            src: "/epicimage/mahae.jpg",
        },
        {
            id: 6,
            name: "Mahabharata Bori-CE",
            src: "/epicimage/mahab.jpg",
        },
    ],
};

async function fetchData() {
    // Simulate fetching data
    return Epics;
}

export default async function Geeta() {
    const categories = await fetchData();

    const renderBooks = (category) => {
        const books = categories[category] || [];
        return books.map((book) => (
            <div className="flex items-center justify-center gap-2" key={book.id}>
                <Link shallow href={`/scriptures/epics/${book.id}`} className="relative rounded-lg overflow-hidden  shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
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
            <div className="">
                <div className="flex">
                    <h3 className="text-xl  bg-orange-300 px-2 rounded font-bold">
                        Ramayana
                    </h3>
                </div>
                <div className="flex flex-wrap gap-10 border lg:px-10  lg:py-10 mt-3 py-7  px-6 mb-3 rounded bg-orange-100">
                    {renderBooks('Ramayana')}
                </div>
                <div className="flex">
                    <h3 className="text-xl  bg-orange-300 px-2 rounded font-bold">
                        Mahabharata
                    </h3>
                </div>
                <div className="flex flex-wrap gap-10 border lg:px-10  lg:py-10 mt-3 py-7 px-6 mb-3 rounded bg-orange-100">
                    {renderBooks('Mahabharata')}
                </div>
            </div>
        </Layout>
    );
}
