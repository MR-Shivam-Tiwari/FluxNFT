"use client";

import { Heart, ShoppingCart, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function NFTCard({ nft, onLike }) {
  // If nft is completely undefined, render nothing
  if (!nft) return null;

  const chainColors = {
    Ethereum: "bg-blue-600/30 text-blue-400",
    Solana: "bg-purple-600/30 text-purple-400",
    Base: "bg-cyan-600/30 text-cyan-400",
    Polygon: "bg-pink-600/30 text-pink-400",
    "Push Chain": "bg-green-600/30 text-green-400",
  };

  const nftId = nft?.id || "";
  const nftName = nft?.name || "Unnamed NFT";
  const nftImage = nft?.image || "/placeholder.svg";
  const nftCreator = nft?.creator || "Anonymous";
  const nftPrice = nft?.price ?? "0";
  const nftChain = nft?.chain || "Unknown";
  const nftExternalUrl = nft?.externalUrl || "#";
  const nftLiked = nft?.liked || false;

  return (
    <div className="group glass rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer select-none">
      {/* Image */}
      <div className="relative overflow-hidden h-64 rounded-t-xl bg-gradient-to-br from-[#7F5AF0]/30 to-[#00E0FF]/30">
        <img
          src={nftImage}
          alt={nftName}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay Buy button */}
        {nftId && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-5 transition-opacity duration-300">
            <Link
              href={`/exploreNFTs/buynft/${nftId}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <ShoppingCart size={18} />
              Buy Now
            </Link>
          </div>
        )}

        {/* Like button */}
        <button
          onClick={onLike}
          aria-label="Toggle Like"
          className="absolute top-4 right-4 p-2 rounded-full glass backdrop-blur-sm border border-transparent hover:border-[#00E0FF] transition-colors duration-300"
        >
          <Heart
            size={24}
            className={`transition-colors duration-300 ${
              nftLiked ? "fill-red-500 text-red-500" : "text-gray-300"
            }`}
          />
        </button>

        {/* Chain badge */}
        <div
          className={`absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold backdrop-blur-md border border-[#00e0ff55] ${
            chainColors[nftChain] || "bg-gray-600/30 text-gray-400"
          }`}
        >
          {nftChain}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1 truncate group-hover:text-[#00E0FF] transition-colors duration-300">
          {nftName}
        </h3>
        <p className="text-sm text-gray-400 mb-3 truncate">by {nftCreator}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-lg font-extrabold gradient-text">{nftPrice} ETH</p>
          </div>
          <button
            aria-label="External link"
            className="p-2 rounded-full glass backdrop-blur-md border border-transparent hover:border-[#00E0FF] transition-colors duration-300"
            onClick={() => window.open(nftExternalUrl, "_blank")}
          >
            <ExternalLink
              size={20}
              className="text-gray-300 hover:text-[#00E0FF] transition-colors duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
