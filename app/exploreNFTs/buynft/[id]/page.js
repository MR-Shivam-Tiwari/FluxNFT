"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BuyNFT() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const [nft, setNft] = useState(null);

  useEffect(() => {
    if (!id) return;
    const mockNfts = [
      { id: "1", name: "CyberLion #45", image: "/cyberpunk-lion-nft.jpg", price: 2.5, chain: "Ethereum", creator: "0xA..." },
      { id: "2", name: "Quantum Realm #12", image: "/quantum-abstract-nft.jpg", price: 1.8, chain: "Solana", creator: "0xB..." },
      { id: "3", name: "Digital Dreams #89", image: "/digital-art-nft.png", price: 3.2, chain: "Base", creator: "0xC..." },
      { id: "4", name: "Neon Nights #23", image: "/neon-city-nft.jpg", price: 1.2, chain: "Polygon", creator: "0xD..." },
      { id: "5", name: "Cosmic Voyage #56", image: "/space-cosmic-nft.jpg", price: 4.1, chain: "Push Chain", creator: "0xE..." },
      { id: "6", name: "Aurora Borealis #34", image: "/aurora-lights-nft.jpg", price: 2.9, chain: "Ethereum", creator: "0xF..." },
      { id: "7", name: "Pixel Paradise #67", image: "/pixel-art-nft.png", price: 1.5, chain: "Solana", creator: "0xG..." },
      { id: "8", name: "Metaverse Mansion #11", image: "/metaverse-building-nft.jpg", price: 5.3, chain: "Base", creator: "0xH..." },
    ];

    const currentNft = mockNfts.find((item) => item.id === id);
    setNft(currentNft || null);
  }, [id]);

  if (!nft) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl select-none">
        NFT details not found
      </div>
    );
  }

  return (
    <div className=" py-24 my-4 px-6 max-w-6xl mx-auto bg-gradient-to-br from-[#121829] via-[#0B0B0F] to-[#040506] rounded-3xl shadow-2xl border border-[#282f3a]">
      <div className="md:flex gap-12 p-10">
        <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-lg border border-[#3a4555]">
          <img
            src={nft.image}
            alt={nft.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 rounded-3xl hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-extrabold gradient-text-cyan mb-6 select-text">{nft.name}</h1>
            <p className="mb-4 text-gray-400 text-lg">Collection: <span className="text-white">{nft.chain}</span></p>
            <p className="mb-8 text-gray-300 text-lg">Creator: <span className="text-white">{nft.creator || "Anonymous"}</span></p>

            <div className="mb-10">
              <span className="block text-3xl font-black mb-4 gradient-text">
                {nft.price} ETH
              </span>

              <button className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] font-semibold text-lg shadow-lg hover:brightness-110 transition duration-300 hover:shadow-2xl active:scale-95">
                Confirm Purchase
              </button>
            </div>
          </div>

          <Link
            href="/exploreNFTs"
            className="block text-sm underline text-[#00E0FF] hover:text-[#7F5AF0] self-start select-text"
          >
            ← Back to Explore NFTs
          </Link>
        </div>
      </div>
    </div>
  );
}
