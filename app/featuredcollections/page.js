"use client";

import { Star, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FeaturedCollections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections([
      {
        id: 1,
        name: "Cyber Legends",
        image: "/cyberpunk-nft-collection.jpg",
        floor: "2.5 ETH",
        volume: "125K ETH",
        items: "5,234",
        verified: true,
      },
      {
        id: 2,
        name: "Digital Dreams",
        image: "/abstract-digital-art.jpg",
        floor: "1.8 ETH",
        volume: "89K ETH",
        items: "3,891",
        verified: true,
      },
      {
        id: 3,
        name: "Pixel Paradise",
        image: "/pixel-art-nft.jpg",
        floor: "0.95 ETH",
        volume: "45K ETH",
        items: "8,234",
        verified: true,
      },
      {
        id: 4,
        name: "Metaverse Mints",
        image: "/metaverse-virtual-world.jpg",
        floor: "3.2 ETH",
        volume: "234K ETH",
        items: "2,156",
        verified: true,
      },
    ]);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#08080c]">
      {/* Section Title */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400">
          Featured Collections
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Explore the top NFT collections with the best floor prices and volumes.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {collections.map((collection, i) => (
          <div
            key={collection.id}
            className="bg-gradient-to-tr from-[#1a1a25] to-[#0c0c13] rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden group"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="relative h-56 overflow-hidden rounded-t-3xl shadow-md">
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white truncate">{collection.name}</h3>
                {collection.verified && (
                  <Star size={20} className="text-pink-500" fill="currentColor" />
                )}
              </div>

              <div className="space-y-3 text-gray-300 text-sm font-semibold">
                <div className="flex justify-between">
                  <span>Floor Price</span>
                  <span className="text-white">{collection.floor}</span>
                </div>
                <div className="flex justify-between items-center text-pink-500">
                  <span>Volume Traded</span>
                  <span className="flex items-center gap-1">
                    <TrendingUp size={16} />
                    {collection.volume}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span className="text-white">{collection.items}</span>
                </div>


                
              </div>

              <button className="w-full py-3 rounded-xl bg-pink-600 text-white font-semibold shadow-lg hover:bg-pink-700 transition-colors duration-300">
                View Collection
              </button>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
