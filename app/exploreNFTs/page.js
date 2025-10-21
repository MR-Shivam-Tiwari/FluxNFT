"use client";

import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import NFTCard from "../nftCard/page";

export default function ExploreNFTs() {
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChain, setSelectedChain] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [showFilters, setShowFilters] = useState(false);

  const chains = ["All", "Ethereum", "Solana", "Base", "Polygon", "Push Chain"];

  useEffect(() => {
    const mockNfts = [
      { id: 1, name: "CyberLion #45", image: "/cyberpunk-lion-nft.jpg", chain: "Ethereum", price: 2.5, creator: "0xA...", liked: false },
      { id: 2, name: "Quantum Realm #12", image: "/quantum-abstract-nft.jpg", chain: "Solana", price: 1.8, creator: "0xB...", liked: false },
      { id: 3, name: "Digital Dreams #89", image: "/digital-art-nft.png", chain: "Base", price: 3.2, creator: "0xC...", liked: false },
      { id: 4, name: "Neon Nights #23", image: "/neon-city-nft.jpg", chain: "Polygon", price: 1.2, creator: "0xD...", liked: false },
      { id: 5, name: "Cosmic Voyage #56", image: "/space-cosmic-nft.jpg", chain: "Push Chain", price: 4.1, creator: "0xE...", liked: false },
      { id: 6, name: "Aurora Borealis #34", image: "/aurora-lights-nft.jpg", chain: "Ethereum", price: 2.9, creator: "0xF...", liked: false },
      { id: 7, name: "Pixel Paradise #67", image: "/pixel-art-nft.png", chain: "Solana", price: 1.5, creator: "0xG...", liked: false },
      { id: 8, name: "Metaverse Mansion #11", image: "/metaverse-building-nft.jpg", chain: "Base", price: 5.3, creator: "0xH...", liked: false },
    ];
    setNfts(mockNfts);
    setFilteredNfts(mockNfts);
  }, []);

  useEffect(() => {
    let filtered = nfts;

    if (selectedChain !== "All") filtered = filtered.filter((nft) => nft.chain === selectedChain);
    if (searchTerm.trim() !== "") filtered = filtered.filter((nft) => nft.name.toLowerCase().includes(searchTerm.toLowerCase()));
    filtered = filtered.filter((nft) => nft.price >= minPrice && nft.price <= maxPrice);

    setFilteredNfts(filtered);
  }, [searchTerm, selectedChain, minPrice, maxPrice, nfts]);

  const toggleLike = (id) => {
    setNfts(
      nfts.map((nft) =>
        nft.id === id ? { ...nft, liked: !nft.liked } : nft
      )
    );
  };

  return (
    <section className="min-h-screen pt-20 pb-20 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold gradient-text-cyan mb-2">Explore NFTs</h1>
          <p className="text-gray-400 max-w-lg mx-auto">Discover unique digital assets across all chains</p>
        </header>

        {/* Search & Filter */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search NFTs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-[#00E0FF] placeholder-gray-600 text-sm md:text-base transition duration-300"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 glass px-5 py-3 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition duration-300"
            >
              <Filter size={20} /> Filters
            </button>
          </div>

          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="glass p-6 rounded-lg space-y-8">
              {/* Chain Filter */}
              <div>
                <h3 className="font-semibold mb-5 text-sm md:text-base">Blockchain</h3>
                <div className="flex flex-wrap gap-3">
                  {chains.map((chain) => (
                    <button
                      key={chain}
                      onClick={() => setSelectedChain(chain)}
                      className={`text-sm md:text-base px-5 py-3 rounded-xl transition ${
                        selectedChain === chain
                          ? "bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] text-white shadow-lg"
                          : "glass hover:bg-[rgba(255,255,255,0.12)] text-gray-400"
                      }`}
                    >
                      {chain}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold mb-5 text-sm md:text-base">Price Range (ETH)</h3>
                <div className="flex gap-4 items-center">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={minPrice}
                    onChange={(e) => {
                      const val = Math.min(Number(e.target.value), maxPrice);
                      setMinPrice(val);
                    }}
                    className="flex-1 rounded-lg bg-[#121823] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00E0FF]"
                    placeholder="Min Price"
                  />
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={maxPrice}
                    onChange={(e) => {
                      const val = Math.max(Number(e.target.value), minPrice);
                      setMaxPrice(val);
                    }}
                    className="flex-1 rounded-lg bg-[#121823] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00E0FF]"
                    placeholder="Max Price"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NFTs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredNfts.length > 0 ? (
            filteredNfts.map((nft) => <NFTCard key={nft.id} nft={nft} onLike={() => toggleLike(nft.id)} />)
          ) : (
            <p className="text-gray-500 font-semibold text-center col-span-full mt-20">No NFTs match the selected criteria</p>
          )}
        </div>
      </div>
    </section>
  );
}
