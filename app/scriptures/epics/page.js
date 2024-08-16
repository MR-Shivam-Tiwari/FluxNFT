import Layout from '../Layout'; // Adjust the path to your Layout component
import ramcharit from './cover.jpeg'; // Ensure this path is correct
import Link from 'next/link';
const Epics = {
    Ramayana: [
        {
            id: 1,
            name: "Ramayana Hindi",
            src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e855656449.webp",
        },
        {
            id: 2,
            name: "Ramayana English",
            src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e84e4cbfce.webp",
        },
        {
            id: 3,
            name: "Ramcharitmanas",
            src: "https://m.media-amazon.com/images/I/81+u9YrKkxL._SL1500_.jpg"
        },
    ],
    Mahabharata: [
        {
            id: 4,
            name: "Mahabharata Hindi",
            src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e855e7085d.webp",
        },
        {
            id: 5,
            name: "Mahabharata English",
            src: "https://m.media-amazon.com/images/I/71s6IAl4QlL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 6,
            name: "Mahabharata Bori-CE",
            src: "https://m.media-amazon.com/images/I/71s6IAl4QlL._AC_UF1000,1000_QL80_.jpg",
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
                <Link href={`/scriptures/epics/${book.id}`} className="relative rounded-lg overflow-hidden w-[160px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
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
            <div className="mt-3">
                <div className="flex">
                    <h3 className="text-xl mb-3 bg-orange-300 px-2 rounded font-bold">
                        Ramayana
                    </h3>
                </div>
                <div className="grid border lg:py-10 py-3 px-3 mb-3 rounded bg-orange-100 grid-cols-2 gap-4 sm:grid-cols-4">
                    {renderBooks('Ramayana')}
                </div>
                <div className="flex">
                    <h3 className="text-xl mb-3 bg-orange-300 px-2 rounded font-bold">
                        Mahabharata
                    </h3>
                </div>
                <div className="grid border lg:py-10 py-3 px-3 mb-3 rounded bg-orange-100 grid-cols-2 gap-4 sm:grid-cols-4">
                    {renderBooks('Mahabharata')}
                </div>
            </div>
        </Layout>
    );
}
