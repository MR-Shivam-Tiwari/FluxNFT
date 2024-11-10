"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const quotes = [
  {
    id: 1,
    name: "Swami Dayanand Saraswati",
    quote:
      "I am a sage so even due to your bad behavior I will never think bad of you. Go, god will give you right power to think.",
    src: "/quotes/Saraswati.jpg",
  },
  {
    id: 2,
    name: "Swami Vivekananda",
    quote: "Arise, awake, and stop not until the goal is achieved.",
    src: "/quotes/viveka.jpg",
  },
  {
    id: 3,
    name: "Rabindranath Tagore",
    quote:
      "You can’t cross the sea merely by standing and staring at the water.",
    src: "/quotes/ravi.jpg",
  },
  {
    id: 4,
    name: "Adi Shankaracharya",
    quote: "Sickness is not cured by saying 'Medicine,' but by drinking it;",
    src: "/quotes/shankara.jpg",
  },
  {
    id: 5,
    name: "Adi Shankaracharya",
    quote: "When your last breath arrives, Grammar can do nothing.",
    src: "/quotes/shankara.jpg",
  },
];

function Quote() {
  const [currentQuote, setCurrentQuote] = useState(null);

  // Function to select a random quote
  const selectRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    // Select a quote when the component mounts
    selectRandomQuote();

    // Change the quote every 10 minutes
    const interval = setInterval(() => {
      selectRandomQuote();
    }, 600000); // 600,000 ms = 10 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (!currentQuote) return null; // Wait for the first quote to be set

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-3 font-bold tracking-tight">
            Daily Inspiration
          </h2>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={currentQuote.src}
              alt={currentQuote.name}
              priority={true}
              className="object-cover h-full w-full object-top" // Adjusts position to focus the top part slightly lower
              layout="fill"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <blockquote className="text-lg font-medium">
                "{currentQuote.quote}"
              </blockquote>
              <cite className="block text-sm font-normal text-end me-7 mt-2">
                - {currentQuote.name}
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quote;
