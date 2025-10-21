"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, Wallet, Send } from "lucide-react";

export default function Dashboard() {
  const [userNFTs] = useState([
    { id: 1, name: "CyberLion #45", chain: "Ethereum", value: 2.5, image: "/cyberpunk-lion.jpg" },
    { id: 2, name: "Quantum Realm #12", chain: "Solana", value: 1.8, image: "/quantum-abstract.jpg" },
    { id: 3, name: "Digital Dreams #89", chain: "Base", value: 3.2, image: "/abstract-digital-composition.png" },
  ]);

  const totalValue = userNFTs.reduce((sum, nft) => sum + nft.value, 0);
  const floorPrice = Math.min(...userNFTs.map((nft) => nft.value));

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-[#0a0a0f] to-[#1c1c28] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 drop-shadow-lg">
          Your Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[{
            title: "Total Value",
            icon: <Wallet size={28} className="text-purple-400" />,
            value: `${totalValue.toFixed(2)} ETH`,
            subtitle: "+12.5% this month",
            valueClass: "text-4xl font-extrabold gradient-text",
          }, {
            title: "NFTs Owned",
            icon: <BarChart3 size={28} className="text-cyan-400" />,
            value: userNFTs.length,
            subtitle: "Across 3 chains",
            valueClass: "text-4xl font-extrabold",
          }, {
            title: "Floor Price",
            icon: <TrendingUp size={28} className="text-green-400" />,
            value: `${floorPrice.toFixed(2)} ETH`,
            subtitle: "Lowest value",
            valueClass: "text-4xl font-extrabold",
          }, {
            title: "Pending Offers",
            icon: <Send size={28} className="text-yellow-400" />,
            value: 3,
            subtitle: "Awaiting response",
            valueClass: "text-4xl font-extrabold",
          }].map(({ title, icon, value, subtitle, valueClass }) => (
            <div key={title} className="glass rounded-xl p-6 shadow-lg border border-transparent hover:border-cyan-400 transition duration-300 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-400 font-semibold text-sm">{title}</h3>
                {icon}
              </div>
              <p className={`${valueClass} mb-2`}>{value}</p>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          ))}
        </div>

        {/* NFT Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Your NFTs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userNFTs.map((nft) => (
              <div key={nft.id} className="glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer group">
                <div className="relative h-56 bg-gradient-to-br from-purple-500/30 to-cyan-400/30 overflow-hidden rounded-t-2xl">
                  <img
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 truncate">{nft.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 font-semibold">{nft.chain}</span>
                    <span className="font-extrabold text-lg gradient-text">{nft.value} ETH</span>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    Sell
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transaction History */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Recent Transactions</h2>
          <div className="glass rounded-2xl overflow-hidden shadow-lg border border-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-900">
                  <tr>
                    {["NFT", "Type", "Chain", "Price", "Date"].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-4 text-gray-400 font-semibold text-sm uppercase"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nft: "CyberLion #45", type: "Purchase", chain: "Ethereum", price: "2.5 ETH", date: "2 days ago" },
                    { nft: "Quantum Realm #12", type: "Bid", chain: "Solana", price: "1.8 ETH", date: "5 days ago" },
                    { nft: "Digital Dreams #89", type: "Purchase", chain: "Base", price: "3.2 ETH", date: "1 week ago" },
                  ].map((tx, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-cyan-900 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-sm">{tx.nft}</td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            tx.type === "Purchase"
                              ? "bg-green-600/30 text-green-400"
                              : "bg-yellow-600/30 text-yellow-400"
                          }`}
                        >
                          {tx.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{tx.chain}</td>
                      <td className="px-6 py-4 text-sm font-extrabold gradient-text">{tx.price}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
