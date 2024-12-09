"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Layout({ children }) {
  const pathname = usePathname();

  // Initialize selected route based on localStorage or current pathname
  const [selected, setSelected] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("selectedRoute") || pathname;
    }
    return pathname;
  });

  // Update localStorage when selected route changes
  useEffect(() => {
    localStorage.setItem("selectedRoute", selected);
  }, [selected]);

  // Define links and labels
  const links = [
    { href: "/scriptures/geeta", label: "Geeta" },
    { href: "/scriptures/upnishad", label: "Upnishad" },
    { href: "/scriptures/vedas", label: "Vedas" },
    { href: "/scriptures/epics", label: "Epics" },
    { href: "/scriptures/smriti", label: "Smriti" },
  ];

  return (
    <div className="min-h-screen flex flex-col mt-[60px]">
      <header className="fixed top-[55px] w-full z-20 bg-white shadow-lg">
        <div
          className="flex items-center lg:justify-center gap-3 px-4 py-2 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        >
          {links.map(({ href, label }) => (
            <Link key={href} href={href} passHref shallow>
              <div
                onClick={() => setSelected(href)}
                className={`px-5 py-2 text-sm lg:text-base font-semibold rounded-md cursor-pointer transition ${
                  pathname === href
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {label}
              </div>
            </Link>
          ))}
        </div>
      </header>
      <main className="flex-1 mt-16 lg:px-8 px-2">{children}</main>
    </div>
  );
}
