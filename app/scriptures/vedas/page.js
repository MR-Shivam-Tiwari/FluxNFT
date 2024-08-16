import Layout from '../Layout'; // Adjust the path to your Layout component
import Link from 'next/link';
// Example data, replace this with your actual data fetching logic
const vedas = [
    {
        id: 1,
        name: "Rigveda",
        src: "https://m.media-amazon.com/images/I/51mDE-WDILL.jpg",
    },
    {
        id: 2,
        name: "Samaveda",
        src: "https://nepalyogahome.com/wp-content/uploads/2021/05/samaveda.jpg",
    },
    {
        id: 3,
        name: "Yajurveda",
        src: "https://m.media-amazon.com/images/I/51fkgWsI+qL.jpg",
    },
    {
        id: 4,
        name: "Atharvaveda",
        src: "https://nepalyogahome.com/wp-content/uploads/2021/05/Atharvaveda.jpg",
    },
];

export default function Vedas() {
    const renderBooks = () => {
        return vedas.map((book) => (
            <div className="flex items-center justify-center gap-2" key={book.id}>
                <Link href={`/scriptures/vedas/${book.id}`} className="relative rounded-lg overflow-hidden w-[160px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
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
            <div>
                <div className="grid border lg:py-10 mt-10 py-3 px-3 mb-3 rounded bg-orange-100 grid-cols-2 gap-4 sm:grid-cols-4">
                    {renderBooks()}
                </div>
            </div>
        </Layout>
    );
}
