"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wallet, Bell, ChevronDown } from "lucide-react";

export default function Navbar({ walletConnected, setWalletConnected }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chainDropdown, setChainDropdown] = useState(false);
  const [selectedChain, setSelectedChain] = useState("All Chains");

  const chains = ["All Chains", "Ethereum", "Solana", "Base", "Polygon", "Push Chain"];
  const navItems = [
    { label: "Explore", href: "/exploreNFTs" },
    { label: "Create", href: "/create" },
    { label: "Auctions", href: "/auctions" },
    { label: "Chains", href: "/chains" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="glass sticky top-0 z-50 border-b border-[rgba(255,255,255,0.1)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group select-none">
            {/* Custom NFT-style SVG Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 64 64"
              fill="none"
              className="transition-transform transform group-hover:scale-110"
            >
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#7F5AF0" offset="0%" />
                  <stop stopColor="#00E0FF" offset="100%" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="url(#logo-gradient)" opacity="0.2" />
              <path
                d="M18 20 L46 32 L18 44 Z"
                stroke="url(#logo-gradient)"
                strokeWidth="3"
                fill="url(#logo-gradient)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400 text-3xl font-extrabold">
              FluxNFT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-gray-300">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="relative group transition-colors hover:text-white"
              >
                <span>{label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 scale-x-0 transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Chain Dropdown */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => setChainDropdown(!chainDropdown)}
                className="glass px-3 py-2 rounded-xl flex items-center gap-1 text-sm hover:bg-[rgba(255,255,255,0.1)] transition-all select-none"
                aria-haspopup="true"
                aria-expanded={chainDropdown}
              >
                <span>{selectedChain}</span>
                <ChevronDown size={16} />
              </button>
              {chainDropdown && (
                <ul
                  className="absolute top-full mt-2 right-0 glass rounded-xl py-2 min-w-[160px] shadow-lg animate-slide-in z-20"
                  role="menu"
                  aria-label="Select Chain"
                >
                  {chains.map((chain) => (
                    <li key={chain}>
                      <button
                        onClick={() => {
                          setSelectedChain(chain);
                          setChainDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-[rgba(255,255,255,0.15)] font-medium ${
                          selectedChain === chain ? "text-[#00E0FF]" : "text-gray-300"
                        }`}
                        role="menuitem"
                      >
                        {chain}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Notification Button */}
            <button
              className="relative p-2 rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-all group"
              aria-label="Notifications"
            >
              <Bell size={20} className="text-gray-300 group-hover:text-[#00E0FF]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse ring ring-[#00E0FF]/60" />
            </button>

            {/* Wallet Button */}
            <button
              onClick={() => setWalletConnected && setWalletConnected(!walletConnected)}
              className="hidden sm:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl font-semibold text-white hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
              aria-label={walletConnected ? "Disconnect Wallet" : "Connect Wallet"}
            >
              <Wallet size={20} />
              {walletConnected ? "0x...3F9" : "Connect"}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#12121f] rounded-b-xl shadow-lg py-4 space-y-1 animate-slide-in">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-300 hover:bg-[rgba(255,255,255,0.1)] hover:text-white rounded-lg font-semibold transition"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
