import Image from 'next/image';
import Layout from '../Layout'; // Adjust the path to your Layout component
import Link from 'next/link';
// import IshaImage from '@/public/Image/';
// Example data, replace this with your actual data fetching logic
const Upanishads = [
  {
    id: 1,
    name: "Isha Upanishad",
    src: '/upnishadimage/isha.jpg'
  },
  {
    id: 2,
    name: "Kena Upanishad",
    src: "/upnishadimage/kena.jpg",
  },
  {
    id: 3,
    name: "Katha Upanishad",
    src: "/upnishadimage/katha.jpg",
  },
  {
    id: 4,
    name: "Prashna Upanishad",
    src: "/upnishadimage/prashna.jpg",
  },
  {
    id: 5,
    name: "Mundaka Upanishad",
    src: "/upnishadimage/mundaka.jpg",
  },
  {
    id: 6,
    name: "Mandukya Upanishad",
    src: "/upnishadimage/mandukya.jpg",
  },
  {
    id: 7,
    name: "Taittiriya Upanishad",
    src: "/upnishadimage/taittiriya.jpg",
  },
  {
    id: 8,
    name: "Aitareya Upanishad",
    src: "/upnishadimage/aitareya.jpg",
  },
  {
    id: 9,
    name: "Chandogya Upanishad",
    src: "/upnishadimage/chandogya.jpg",
  },
  {
    id: 10,
    name: "Brihadaranyaka Upanishad",
    src: "/upnishadimage/brihad.jpg",
  },
  {
    id: 11,
    name: "Shvetashvatara Upanishad",
    src: "/upnishadimage/shveta.jpg",
  },
];

export default function Upnishad() {
  const renderBooks = () => {
    return Upanishads.map((book) => (
      <div className="flex items-center justify-center gap-2" key={book.id}>
        <Link shallow href={`/scriptures/upnishad/${book.id}`} className="relative rounded-lg overflow-hidden  shadow-xl hover:scale-105 hover:shadow-3xl transform duration-500 cursor-pointer">
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
      <div>
        <div className="flex flex-wrap gap-10 border lg:px-10 justify-center lg:py-10  py-7 px-6 mb-3 rounded bg-orange-100">
          {renderBooks()}
        </div>
      </div>
    </Layout>
  );
}
