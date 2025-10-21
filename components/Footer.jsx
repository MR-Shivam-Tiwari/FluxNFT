"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.12)] py-16 mx-3 px-6 bg-[rgba(11,11,15,0.85)] backdrop-blur-lg rounded-t-3xl shadow-xl max-w-8xl mx-auto mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-gray-300">
        <div>
          <h3 className="font-extrabold text-2xl mb-5 gradient-text-cyan drop-shadow-lg">
            FluxNFT
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Universal NFT marketplace powered by Push Chain, connecting collectors and creators seamlessly across all blockchains.
          </p>
        </div>

        <nav>
          <h4 className="font-semibold mb-6 text-lg text-white">Product</h4>
          <ul className="space-y-3 text-sm tracking-wide">
            {[
              { label: "Explore", href: "/exploreNFTs" },
              { label: "Create", href: "/create" },
              { label: "Sell", href: "/sell" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:text-[#00E0FF] transition-colors duration-300 font-medium" tabIndex={0}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h4 className="font-semibold mb-6 text-lg text-white">Community</h4>
          <ul className="space-y-3 text-sm tracking-wide">
            {[
              { label: "Discord", href: "https://discord.gg/yourdiscord" },
              { label: "Twitter", href: "https://twitter.com/yourtwitter" },
             
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover:text-[#00E0FF] transition-colors duration-300 font-medium"
                  tabIndex={0}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="font-semibold mb-6 text-lg text-white">Follow Us</h4>
          <div className="flex gap-6">
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-[#00E0FF] transition-colors duration-300 shadow-md hover:shadow-[#00e0ffcc] rounded-full p-2 bg-gradient-to-tr from-[#004d9b] to-[#00e0ff80] hover:scale-110 transition-transform duration-300"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-[#00E0FF] transition-colors duration-300 shadow-md hover:shadow-[#00e0ffcc] rounded-full p-2 bg-gradient-to-tr from-[#444444cc] to-[#88888880] hover:scale-110 transition-transform duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#00E0FF] transition-colors duration-300 shadow-md hover:shadow-[#00e0ffcc] rounded-full p-2 bg-gradient-to-tr from-[#0a66c2cc] to-[#66a6ff80] hover:scale-110 transition-transform duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@fluxnft.com"
              aria-label="Email"
              className="text-gray-400 hover:text-[#00E0FF] transition-colors duration-300 shadow-md hover:shadow-[#00e0ffcc] rounded-full p-2 bg-gradient-to-tr from-[#cc3300cc] to-[#ff886680] hover:scale-110 transition-transform duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.12)] pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-light text-gray-400 tracking-wide select-none">
        <p>© 2025 FluxNFT. All rights reserved.</p>
        <div className="flex gap-8 mt-5 md:mt-0">
          <Link
            href="/privacy-policy"
            tabIndex={0}
            className="hover:text-[#00E0FF] transition-colors duration-300 font-medium"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            tabIndex={0}
            className="hover:text-[#00E0FF] transition-colors duration-300 font-medium"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
