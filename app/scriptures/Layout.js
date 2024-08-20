"use client"

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Layout({ children }) {
    const router = useRouter();
  const pathname = usePathname();
    // console.log("pathname", pathname)
    // Initialize selected route based on localStorage or current pathname
    const [selected, setSelected] = useState(() => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('selectedRoute') || pathname;
      }
      return pathname;
    });
  
    // Update localStorage when selected route changes
    useEffect(() => {
      localStorage.setItem('selectedRoute', selected);
    }, [selected]);
  
    // Define links and labels
    const links = [
      { href: '/scriptures/geeta', label: 'Geeta' },
      { href: '/scriptures/upnishad', label: 'Upnishad' },
      { href: '/scriptures/vedas', label: 'Vedas' },
      { href: '/scriptures/epics', label: 'Epics' }
    ];
  
    return (
      <div className="min-h-screen flex flex-col annapurna-sil-bold">
        <header className="flex justify-center ">
          <div className="flex flex-wrap lg:gap-4 gap-3">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} passHref shallow>
                <div
                  onClick={() => setSelected(href)}
                  className={`px-5 py-1 pt-2 mt-5 lg:text-lg text-sm font-semibold  rounded-[4px] cursor-pointer transition-colors ${
                    pathname === href 
                      ? 'bg-orange-600 text-white '
                      : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
                >
                  {label}
                </div>
              </Link>
            ))}
          </div>
        </header>
        <main className="flex-1 lg:px-8 px-2">
          {children}
        </main>
      </div>
    );
  }