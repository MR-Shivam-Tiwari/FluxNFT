import React from "react";
import Donate from "./donate.jpg";
import Imaginate from "./imagination.jpg";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer";
function Donation() {
  return (
    <div>
      <div className="w-full bg-white">
        <div className="w-full">
          <div className="relative w-full">
            <Image
              src={Donate}
              alt="Hindu Scriptures"
              width="1920" priority={true}
              height="1080"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
            />
            <div className="relative z-10 bg-gradient-to-b from-black/50 to-black/80 py-32 px-4 md:px-6 lg:py-40">
              <div className="mx-auto max-w-4xl space-y-6 text-center text-white">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Support Our Mission to Provide Free Access to Hindu Scriptures
                </h1>
                <p className="text-lg md:text-xl">
                  Your generosity helps us maintain and expand our library of
                  sacred texts.
                </p>
                <Link href='/donation/donate'>
                <div
                  className="inline-flex items-center justify-center cursor-pointer rounded-md bg-[#f39c12] px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-[#e08e0b] focus:outline-none focus:ring-2 focus:ring-[#f39c12] focus:ring-offset-2"
                  rel="ugc"
                >
                  Donate Now
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600  leading-relaxed">
                  Our website is dedicated to providing free and open access to
                  a vast library of Hindu scriptures, including the Vedas,
                  Upanishads, Epics, and other sacred texts. We believe that
                  these ancient teachings hold immense wisdom and can enrich the
                  lives of people around the world. open access to a vast
                  library of Hindu scriptures, including the Vedas, Upanishads,
                  Epics, and other sacred texts. We believe that these ancient
                  teachings hold
                </p>
                <p className="text-gray-600  leading-relaxed mt-4">
                  Your donations help us maintain and expand our digital
                  library, ensuring that these invaluable resources remain
                  accessible to all. By supporting our mission, you are
                  contributing to the preservation and dissemination of Hindu
                  spiritual and cultural heritage.and our digital library,
                  ensuring
                </p>
              </div>
              <div>
                <Image
                  src={Imaginate}
                  alt="Hindu Illustration"
                  width="500"
                  height="400" priority={true}
                  className="mx-auto rounded-lg"
                  style={{ aspectRatio: "500/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

       
        <section className="bg-[#f39c12] text-black py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Donate Now
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-black mb-8">
              Your donation, no matter the amount, makes a significant impact on
              our mission to provide free access to Hindu scriptures. Help us
              continue this important work.
            </p>
            <Link href='/donation/donate'>
            <div  className="inline-flex items-center cursor-pointer text-black font-bold justify-center rounded-md bg-white px-6 py-3 text-lg  shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Donate Now
            </div>
            </Link>
          </div>
        </section>

        <section className="bg-gray-100  py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">
              Our Generous Donors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in mx-auto text-center">
              <div className="bg-white  rounded-lg shadow-md p-6 space-y-4 flex flex-col items-center">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16 border-4 border-[#e63946]">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    D1
                  </span>
                </span>
                <div className="text-center">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-600 ">Donated $100</p>
                </div>
              </div>
              <div className="bg-white  rounded-lg shadow-md p-6 space-y-4 flex flex-col items-center">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16 border-4 border-[#e63946]">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    D2
                  </span>
                </span>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-gray-600 ">Donated $50</p>
                </div>
              </div>
              <div className="bg-white  rounded-lg shadow-md p-6 space-y-4 flex flex-col items-center">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16 border-4 border-[#e63946]">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    D3
                  </span>
                </span>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-gray-600 ">Donated $75</p>
                </div>
              </div>
              <div className="bg-white  rounded-lg shadow-md p-6 space-y-4 flex flex-col items-center">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16 border-4 border-[#e63946]">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    D4
                  </span>
                </span>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Emily Davis</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

    </div>
  );
}

export default Donation;
