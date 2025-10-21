"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";

export default function CrossChainFeed() {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const mockFeed = [
      {
        id: 1,
        user: "0xA...3F9",
        action: "bought",
        nftName: "CyberLion #45",
        chain: "Solana",
        price: 2.5,
        timestamp: "2 mins ago",
        type: "buy",
      },
      {
        id: 2,
        user: "0xB...2E1",
        action: "placed bid on",
        nftName: "Quantum Realm #12",
        chain: "Ethereum",
        price: 1.8,
        timestamp: "5 mins ago",
        type: "bid",
      },
      {
        id: 3,
        user: "0xC...7K4",
        action: "listed",
        nftName: "Digital Dreams #89",
        chain: "Base",
        price: 3.2,
        timestamp: "8 mins ago",
        type: "list",
      },
      {
        id: 4,
        user: "0xD...9M2",
        action: "bought",
        nftName: "Neon Nights #23",
        chain: "Polygon",
        price: 1.2,
        timestamp: "12 mins ago",
        type: "buy",
      },
      {
        id: 5,
        user: "0xE...5L8",
        action: "placed bid on",
        nftName: "Cosmic Voyage #56",
        chain: "Push Chain",
        price: 4.1,
        timestamp: "15 mins ago",
        type: "bid",
      },
    ];
    setFeedItems(mockFeed);
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case "buy":
        return "text-green-400";
      case "bid":
        return "text-yellow-400";
      case "list":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  const getChainColor = (chain) => {
    const colors = {
      Ethereum: "bg-blue-500/20 text-blue-300",
      Solana: "bg-purple-500/20 text-purple-300",
      Base: "bg-cyan-500/20 text-cyan-300",
      Polygon: "bg-pink-500/20 text-pink-300",
      "Push Chain": "bg-green-500/20 text-green-300",
    };
    return colors[chain] || "bg-gray-500/20 text-gray-300";
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="text-[#00E0FF]" size={28} />
            <h1 className="text-4xl font-bold gradient-text-cyan">Cross-Chain Feed</h1>
          </div>
          <p className="text-gray-400">Real-time transactions across all blockchains</p>
        </div>

        {/* Feed Items */}
        <div className="space-y-4">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="glass p-6 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-all animate-slide-in"
              style={{ animationDelay: `${item.id * 0.1}s` }}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* Left Content */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] rounded-full"></div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold text-white">{item.user}</span>
                      <span className={` ${getTypeColor(item.type)} font-semibold`}> {item.action}</span>
                    </p>
                    <p className="text-lg font-bold text-white truncate">{item.nftName}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getChainColor(item.chain)}`}>
                        {item.chain}
                      </span>
                      <span className="text-xs text-gray-500">{item.timestamp}</span>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Price</p>
                    <p className="text-xl font-bold gradient-text">{item.price} ETH</p>
                  </div>
                  <ArrowRight className="text-[#00E0FF] flex-shrink-0" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 glass rounded-lg font-semibold hover:bg-[rgba(255,255,255,0.1)] transition-all">
            Load More Transactions
          </button>
        </div>
      </div>
    </div>
  );
}
