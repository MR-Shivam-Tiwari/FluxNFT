"use client"

import { useState } from "react"
import { ArrowRight, TrendingUp, Users, Zap, Lock } from "lucide-react"

 

export default function Chains() {
  const [selectedChain, setSelectedChain] = useState(null)

  const chains = [
    {
      id: 1,
      name: "Ethereum",
      symbol: "ETH",
      tvl: "$2.4B",
      users: 1250000,
      avgGas: "45 Gwei",
      nfts: 450000,
      color: "from-blue-500 to-blue-600",
      icon: "Ξ",
    },
    {
      id: 2,
      name: "Solana",
      symbol: "SOL",
      tvl: "$1.8B",
      users: 890000,
      avgGas: "0.00025 SOL",
      nfts: 320000,
      color: "from-purple-500 to-purple-600",
      icon: "◎",
    },
    {
      id: 3,
      name: "PUSH",
      symbol: "PUSH",
      tvl: "$1.2B",
      users: 650000,
      avgGas: "0.5 Gwei",
      nfts: 180000,
      color: "from-blue-400 to-cyan-500",
      icon: "⬜",
    },
    {
      id: 4,
      name: "Polygon",
      symbol: "MATIC",
      tvl: "$950M",
      users: 520000,
      avgGas: "30 Gwei",
      nfts: 220000,
      color: "from-purple-400 to-pink-500",
      icon: "◆",
    },
    {
      id: 5,
      name: "Push Chain",
      symbol: "PUSH",
      tvl: "$680M",
      users: 380000,
      avgGas: "0.1 PUSH",
      nfts: 95000,
      color: "from-red-500 to-orange-500",
      icon: "⚡",
    },
    {
      id: 6,
      name: "Arbitrum",
      symbol: "ARB",
      tvl: "$1.1B",
      users: 420000,
      avgGas: "0.1 Gwei",
      nfts: 150000,
      color: "from-blue-600 to-cyan-600",
      icon: "→",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0F] pt-20 pb-20">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#7F5AF0] to-transparent rounded-full blur-3xl opacity-10 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-[#00E0FF] to-transparent rounded-full blur-3xl opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 animate-slide-in">
          <h1 className="text-5xl font-bold mb-4 gradient-text-cyan">Supported Chains</h1>
          <p className="text-gray-400 text-lg">Trade NFTs across multiple blockchains seamlessly</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total TVL", value: "$8.2B", icon: TrendingUp },
            { label: "Active Users", value: "4.1M", icon: Users },
            { label: "Total NFTs", value: "1.4M", icon: Zap },
            { label: "Chains", value: "6", icon: Lock },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="glass rounded-xl p-6 border border-[rgba(255,255,255,0.1)] animate-slide-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={20} className="text-[#00E0FF]" />
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            )
          })}
        </div>

        {/* Chains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {chains.map((chain, index) => (
            <div
              key={chain.id}
              onClick={() => setSelectedChain(chain)}
              className="glass rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] hover:border-[#00E0FF] transition-all cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${chain.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-all"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-2">{chain.icon}</div>
                  <h3 className="text-2xl font-bold">{chain.name}</h3>
                  <p className="text-sm opacity-90">{chain.symbol}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">TVL</span>
                  <span className="font-bold text-[#00E0FF]">{chain.tvl}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Users</span>
                  <span className="font-bold">{(chain.users / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Avg Gas</span>
                  <span className="font-bold text-[#7F5AF0]">{chain.avgGas}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">NFTs</span>
                  <span className="font-bold">{(chain.nfts / 1000).toFixed(0)}K</span>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 py-2 bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] rounded-lg font-semibold hover-glow transition-all flex items-center justify-center gap-2 group">
                  Explore
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chain Details Modal */}
        {selectedChain && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="glass rounded-2xl p-8 max-w-2xl w-full border bg-gray-900 border-[rgba(255,255,255,0.1)] animate-scale-in">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-5xl mb-2">{selectedChain.icon}</div>
                  <h2 className="text-3xl font-bold">{selectedChain.name}</h2>
                  <p className="text-gray-400">{selectedChain.symbol}</p>
                </div>
                <button
                  onClick={() => setSelectedChain(null)}
                  className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Total Value Locked</p>
                  <p className="text-2xl font-bold text-[#00E0FF]">{selectedChain.tvl}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Active Users</p>
                  <p className="text-2xl font-bold">{(selectedChain.users / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Average Gas Fee</p>
                  <p className="text-2xl font-bold text-[#7F5AF0]">{selectedChain.avgGas}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Total NFTs</p>
                  <p className="text-2xl font-bold">{(selectedChain.nfts / 1000).toFixed(0)}K</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] rounded-lg font-bold hover-glow transition-all">
                  Start Trading on {selectedChain.name}
                </button>
                <button
                  onClick={() => setSelectedChain(null)}
                  className="w-full py-3 glass rounded-lg font-bold hover:bg-[rgba(255,255,255,0.1)] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import { X } from "lucide-react"
