import React from "react";
import Image from 'next/image';
// import { useRouter } from 'next/router';
// import Footer from "../components/Footer/Footer"; // Adjust the path based on your directory structure

// Images stored in the public directory
import ExportEmage from "../public/Image/Explore_books.jpg";
import BhagvadGeeta from "../public/Image/GeetaGyan.PNG";
import virat from "../public/Image/ViratRoop.PNG";
import upnishad from "../public/Image/Designer.jpeg";
import vedas from "../public/Image/vedass.PNG";
import epic from "../public/Image/epic.jpeg";
import scripture from "../public/Image/ScriptureSearch.jpg";
import discussion from "../public/Image/Discussion.jpg";
import Link from "next/link";
import Footer from "./Footer";
const Home = () => {
  // const router = useRouter();

  return (
    <div className="josefin-sans-bold bg-white">
      <header className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={ExportEmage}
          alt="Hindu Scriptures"
          fill 
          priority={true}
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Explore the Wisdom of Hindu Scriptures
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Discover the timeless teachings and profound insights of the Hindu
            faith.
          </p>
        </div>
      </header>

      <main>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Discover the Wisdom of Hindu Scriptures
                </h2>
                <p className="mt-4 text-gray-500">
                  Explore the timeless teachings and profound insights of the
                  Hindu faith through our extensive collection of sacred
                  scriptures.
                </p>
                <div className="mt-8 flex gap-2">
                  <Link href="/scriptures/geeta">
                  <div
                    // onClick={() => router.push("/scriptures/geeta")}
                    className="inline-flex items-center cursor-pointer px-2.5 text-sm py-2 border border-transparent  font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    Explore Scriptures
                  </div>
                    </Link>
                    <Link href="/donation">
                  <div
                    className="inline-flex items-center cursor-pointer px-2.5 py-2 border text-sm border-gray-300  font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    // onClick={() => router.push("/donation")}
                    >
                    Support The Developer
                  </div>
                    </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={virat}
                    alt="Bhagavad Gita"
                    fill 
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Bhagavad Gita</h3>
                    <p className="text-sm">Explore the timeless wisdom</p>
                    <div
                      className="inline-flex items-center mt-2 cursor-pointer text-indigo-400 hover:text-indigo-500"
                    // onClick={() => router.push("/scriptures/geeta")}
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={upnishad}
                    alt="Upanishads"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill 
                    style={{ objectFit: 'cover' }} priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Upanishads</h3>
                    <p className="text-sm">Uncover the secrets of the universe</p>
                    <div
                      className="inline-flex items-center mt-2 cursor-pointer text-indigo-400 hover:text-indigo-500"
                    // onClick={() => router.push("/scriptures/Upanishad")}
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={vedas}
                    alt="Vedas"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill 
                    style={{ objectFit: 'cover' }} priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Vedas</h3>
                    <p className="text-sm">Explore the foundational texts</p>
                    <div
                      className="inline-flex items-center mt-2 cursor-pointer text-indigo-400 hover:text-indigo-500"
                    // onClick={() => router.push("/scriptures/Vedas")}
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={epic}
                    alt="Epics"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill 
                    style={{ objectFit: 'cover' }} priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Epics</h3>
                    <p className="text-sm">Discover the ancient stories</p>
                    <div
                      className="inline-flex items-center mt-2 text-indigo-400 hover:text-indigo-500"
                    // onClick={() => router.push("/scriptures/Epics")}
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Explore Our Interactive Tools
            </h2>
            <p className="mt-4 text-gray-500 text-center">
              Enhance your spiritual journey with our interactive tools and
              resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                  src={scripture}
                  alt="Discussion Forums"
                  width="400"
                  height="300" priority={true}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Scripture Search</h3>
                  <p className="mt-2 text-gray-500">
                    Easily find and explore specific verses, passages, and
                    teachings from the Hindu scriptures.
                  </p>
                  <div
                    className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"

                  >
                    Try it now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src={discussion}
                  alt="Discussion Forums"
                  width="400"
                  height="300"
                  priority={true}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Discussion</h3>
                  <p className="mt-2 text-gray-500">
                    Connect with like-minded individuals, share insights, and
                    engage in thought-provoking discussions.
                  </p>
                  <div
                    className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"

                  >
                    Join the Conversation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="Image/image.png" priority={true}
                  alt="Meditation Guides"
                  width="400"
                  height="300"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Meditation Guides</h3>
                  <p className="mt-2 text-gray-500">
                    Explore guided meditations and techniques to deepen your
                    spiritual practice and find inner peace.
                  </p>
                  <div
                    className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"

                  >
                    Start Meditating
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* <section className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-serif text-[#333] ">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#f5f5f5]  p-6 shadow-lg">
              <Image
                src="https://img.freepik.com/free-photo/young-girl-with-short-hair-wearing-polo-shirt-looking-camera-with-smile-face_141793-46444.jpg?t=st=1716402440~exp=1716406040~hmac=33accbe4f5587804b36c60a49063dbb49d65f0fa572718f55e4b5e2907241b2b&w=1380"
                alt="Testimonial 1"
                width="80"
                height="80" priority={true}
                className="rounded-full"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <blockquote className="mt-4 text-[#333] ">
                "The insights I've gained from studying the Upanishads have
                truly transformed my understanding of life and spirituality."
                <cite className="mt-4 block text-[#666] ">
                  - Anita, Spiritual Seeker
                </cite>
              </blockquote>
            </div>
            <div className="rounded-lg bg-[#f5f5f5]  p-6 shadow-lg">
              <Image
                alt="Testimonial 2"
                className="rounded-full"
                height="80" priority={true}
                src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?t=st=1716402442~exp=1716406042~hmac=0496aa220dc1c8faa5814758fccbb0593a7a174f68eb7c7ada4f03c4e38d651e&w=740"
                width="80"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <blockquote className="mt-4 text-[#333] ">
                "The Bhagavad Gita has become a constant companion, guiding me
                through the complexities of life with its timeless wisdom."
                <cite className="mt-4 block text-[#666] ">
                  - Raj, Philosopher
                </cite>
              </blockquote>
            </div>
            <div className="rounded-lg bg-[#f5f5f5]  p-6 shadow-lg">
              <Image
                alt="Testimonial 3"
                className="rounded-full"
                height="80" priority={true}
                src="https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186124.jpg?t=st=1716402445~exp=1716406045~hmac=fa148b63558a39a15f01d69c7ebcdb8b73f6aaf5b7a24cf9abf360e5cad3fb36&w=740"
                width="80"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <blockquote className="mt-4 text-[#333] ">
                "Studying the Vedas has been a profound and life-changing
                experience. The depth of knowledge and insight is truly
                remarkable."
                <cite className="mt-4 block text-[#666] ">
                  - Priya, Scholar
                </cite>
              </blockquote>
            </div>
          </div>
        </section> */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-3 font-bold tracking-tight">
              Daily Inspiration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/portrait-indian-man-celebrating-baisakhi-festival_23-2151216994.jpg?t=st=1716402742~exp=1716406342~hmac=1b764632906488ce9d050b9c3094d78af98fe8f8fc0ef251f54c9037a057bf0d&w=1380"
                  alt="Daily Quote" priority={true}
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <blockquote className="text-lg font-medium">
                    "The essence of all spiritual practice is your attitude,
                    your consciousness, your being. It is not what you do, but
                    how you do it."
                  </blockquote>
                  <cite className="block text-sm font-normal mt-2">
                    - Swami Vivekananda
                  </cite>
                </div>
              </div>

              <div
                id="9whzy9rbpp"
                className="bg-gray-300 border border-gray-300 rounded-lg p-6 space-y-4"
              >
                <h2 className="text-2xl font-bold text-gray-900">Newsletter</h2>
                <p className="text-gray-600">
                  Stay up-to-date with the latest news, insights, and events
                  from the world of Hindu scriptures. Sign up for our newsletter
                  and receive exclusive content delivered straight to your
                  inbox.
                </p>
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    className="inline-flex bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
