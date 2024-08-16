import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer class="bg-gray-900 josefin-sans-regular text-white py-8 pt-12  ">
      <div class="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div class="space-y-4">
          <Link href="/">
            <div class="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-book"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
              <span class="text-2xl font-bold">Shastra Sangrah</span>
            </div>{" "}
          </Link>
          <p class="text-gray-400">
            Explore the rich Hindu scriptures and texts on Shastra Sangrah. Dive
            into the wisdom of the Vedas, Upanishads, Epics , and more.
          </p>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Popular Scriptures</h4>
          <ul class="space-y-2">
            <li>
              <Link href="/scriptures/Vedas">
                <div class="hover:text-indigo-500 cursor-pointer">Vedas</div>
              </Link>
            </li>
            <li>
              <Link href="/scriptures/Upanishad">
                <div class="hover:text-indigo-500 cursor-pointer">
                  Upanishads
                </div>
              </Link>
            </li>
            <li>
              <Link href="/scriptures/geeta">
                <div class="hover:text-indigo-500 cursor-pointer">
                  Bhagavad Gita
                </div>{" "}
              </Link>
            </li>

            <li>
              <Link href="/scriptures/Epics">
                <div class="hover:text-indigo-500 cursor-pointer">
                  Epics (Ramayana, Mahabharata)
                </div>{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Important Pages</h4>
          <ul class="space-y-2">
            <li>
              <Link href="/about">
                <div class="hover:text-indigo-500 cursor-pointer">About</div>{" "}
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div class="hover:text-indigo-500 cursor-pointer">Contact</div>{" "}
              </Link>
            </li>
            <li>
              <Link href="/privacypolicy">
                <div class="hover:text-indigo-500 cursor-pointer">
                  Privacy Policy
                </div>{" "}
              </Link>
            </li>
            <li>
              <div class="hover:text-indigo-500 cursor-pointer">
                Terms of Service
              </div>
            </li>
            <li>
              <Link href="/donation">
                <div class="hover:text-indigo-500 cursor-pointer">Donation</div>{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Follow Us</h4>
          <div class="flex space-x-4">
            <div class="text-gray-400 hover:text-indigo-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div class="text-gray-400 hover:text-indigo-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </div>
            <div class="text-gray-400 hover:text-indigo-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 border-t border-gray-800 pt-4 text-center  text-gray-500">
        <p>© 2024 ShastraSangrah. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
