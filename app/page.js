import React from "react";
import Image from 'next/image';
// import { useRouter } from 'next/router';
// import Footer from "../components/Footer/Footer"; // Adjust the path based on your directory structure

import Link from "next/link";
import Footer from "./Footer";
import Quote from "./Quote";
import Requestbook from "./Requestbook";
const Home = () => {
  // const router = useRouter();

  return (
    <div className="josefin-sans-bold bg-white">
      <header className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/homeimage/esplore.jpg"
          alt="Hindu Scriptures"
          fill
          priority={true}
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fadeInSlideUp">
            Explore the Wisdom of Hindu Scriptures
          </h1>
          <p className="mt-4 text-lg sm:text-xl animate-fadeInSlideUp delay-500">
            Discover the timeless teachings and profound insights of the Hindu faith.
          </p>
        </div>

      </header>

      <main>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" gap-8">
              <div className="container text-center mx-auto mb-20 ">
                <h2 className="text-3xl font-bold tracking-tight">
                  Discover the Wisdom of Hindu Scriptures
                </h2>
                <p className="mt-4 text-gray-500">
                  Explore the timeless teachings and profound insights of the
                  Hindu faith through our extensive collection of sacred
                  scriptures.
                </p>
                <div className="mt-8 grid grid-cols-1 lg:flex gap-7 justify-center ">
                  <Link href="/scriptures/geeta" shallow>
                    <div
                      // onClick={() => router.push("/scriptures/geeta")}
                      className="inline-flex w-full lg:w-[250px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 justify-center items-center cursor-pointer px-2.5 text-lg font-bold py-2 border border-transparent rounded-md  text-white bg-orange-600 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Explore Scriptures
                    </div>
                  </Link>
                  <Link href="/donation" shallow>
                    <div
                      className="inline-flex items-center w-full shadow-xl hover:scale-105 hover:shadow-2xl  transform duration-500 lg:w-[250px] justify-center cursor-pointer px-2.5 py-2 border text-lg  border-gray-300  font-bold rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    // onClick={() => router.push("/donation")}
                    >
                      Support The Developer
                    </div>
                  </Link>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 ">
                <Link
                  href="/scriptures/geeta" shallow
                  className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer"
                >
                  <div className="relative group rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full h-40"> {/* Reduced height */}
                      <Image
                        src="/homeimage/krishna.jpg"
                        alt="Bhagavad Gita"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg  font-bold">All Geeta</h3>
                      <span className="text-[11px]">(Bhagavad Geeta, Anu Geeta, Astavakra Geeta)</span>
                      <p className="text-sm">Explore the timeless wisdom</p>
                      <div className="inline-flex items-center mt-2 cursor-pointer text-sm text-indigo-400 hover:text-indigo-500">
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
                </Link>


                <Link
                  href="/scriptures/vedas" shallow
                  className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer"
                >
                  <div className="relative group rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full h-40">
                      <Image
                        src="/homeimage/vadash.jpg"
                        alt="Vedas"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }} priority={true}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Vedas
                          <p className="text-[11px]">(Rigveda, Yajurveda, Samaveda, and Atharvaveda)</p></h3>
                        <p className="text-sm">Explore the foundational texts</p>
                        <div
                          className="inline-flex items-center mt-2 cursor-pointer text-sm text-indigo-400 hover:text-indigo-500"
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
                    </div> </div> </Link>
                <Link
                  href="/scriptures/upnishad" shallow
                  className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer"
                >
                  <div className="relative group rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full h-40">
                      <Image
                        src="/homeimage/upnishad.jpeg"
                        alt="Upanishads"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        style={{ objectFit: 'cover' }} priority={true}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Upanishads <span className="text-[11px]">(11 Prime Upanishad)</span></h3>
                        <p className="text-sm">Uncover the secrets of the universe</p>
                        <div
                          className="inline-flex items-center mt-2 cursor-pointer text-sm text-indigo-400 hover:text-indigo-500"
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
                  </div>
                </Link>

                <Link
                  href="/scriptures/epics" shallow
                  className="relative rounded-lg overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer"
                >
                  <div className="relative group rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full h-40">
                      <Image
                        src="/homeimage/asa.jpg"
                        alt="Epics"
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        style={{ objectFit: 'cover' }} priority={true}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Epics <span className="text-[11px]">(Ramayan and Mahabharat)</span></h3>
                        <p className="text-sm">Discover the ancient stories</p>
                        <div
                          className="inline-flex items-center mt-2 text-sm text-indigo-400 hover:text-indigo-500"
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
                  </div> </Link>
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
              <div className="bg-white rounded-lg  overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl  transform duration-500">
                <Image
                  src="/homeimage/search.jpg"
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
                  <Link href='/booksearch' shallow>
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
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg  overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl  transform duration-500">
                <Image
                  src="/homeimage/discuss.jpg"
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
                  <Link href='/discussion' shallow>
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
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg  overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl  transform duration-500">
                <Image
                  src="/homeimage/download.jpg" priority={true}
                  alt="Meditation Guides"
                  width="400"
                  height="300"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Download Sacred Scriptures
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Explore the divine knowledge and download the complete scripture in PDF format for your study and reflection.


                  </p>
                  <Link href='/shastradownload' shallow>
                    <div
                      className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"

                    >
                      Start Downloading
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
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white grid lg:grid-cols-2 items-center">
          <Quote />
          <Requestbook />
        </section>
        <section className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-serif text-[#333] ">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#f5f5f5]  p-6 shadow-lg">
              <Image
                src='/quotes/user.jpg'
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
                src='/quotes/user.jpg'
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
                src='/quotes/user.jpg' width="80"
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
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
