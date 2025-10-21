"use client";

import Link from "next/link";
import { useNFT } from "../NFTContext";

export default function TrendingNFTs() {
  const { filteredNfts: nfts } = useNFT();

  if (!nfts || nfts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-[#1a0529] to-[#270746]">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-1/2 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-in max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 drop-shadow-md">
            Trending <span className="text-white">Now</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-lg mx-auto font-medium">
            Hot NFTs gaining momentum across all blockchains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {nfts.slice(0, 6).map((nft, idx) => (
            <Link
              key={nft.id}
              href={`/exploreNFTs/buynft/${nft.id}`}
              className="group rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgb(219_39_119_/_0.6)] bg-gradient-to-br from-[#2d0237] to-[#4c037a] border border-transparent hover:border-pink-500 transition-all duration-300 cursor-pointer animate-slide-in"
              style={{ animationDelay: `${idx * 100}ms` }}
              aria-label={`View NFT ${nft.name} details`}
            >
              <div className="relative overflow-hidden h-64 rounded-t-3xl">
                <img
                  src={nft.image || "/placeholder.svg"}
                  alt={nft.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-t-3xl" />
                <div className="absolute top-5 right-5 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-pink-600/60">
                  <svg className="animate-pulse" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2v9h9v2h-9v9h-2v-9H2v-2h9V2h2z"></path>
                  </svg>
                  Trending
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl font-semibold text-lg hover:brightness-110 transition">
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <p className="text-sm text-pink-300 mb-1 truncate">{nft.collection}</p>
                  <h3 className="font-extrabold text-2xl group-hover:text-pink-400 transition-colors truncate">{nft.name}</h3>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="px-4 py-1 bg-[rgba(219,39,119,0.2)] text-pink-500 rounded-md font-semibold">
                    {nft.chain}
                  </span>
                  <span className="text-pink-400 font-extrabold text-xl">{nft.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
