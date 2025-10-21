"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Zap, TrendingUp, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ["#00E0FF", "#7F5AF0", "#2CB67D"][i % 3],
      size: [2, 3, 4][i % 3]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 bg-gradient-to-br from-[#0B0B0F] via-[#1a2637] to-[#0b1423]">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-80 h-80 bg-[#7F5AF0] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-56 right-20 w-80 h-80 bg-[#00E0FF] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-28 left-1/2 w-80 h-80 bg-[#2CB67D] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "4s" }}></div>
        {/* Animated Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-80 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 3}px`,
              height: `${particle.size * 3}px`,
              background: particle.color,
              filter: "blur(1.2px)",
              animationDelay: `${particle.id * 0.05}s`
            }}
          ></div>
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block">
          <div className="glass px-6 py-2 rounded-full flex items-center gap-2 text-base text-[#00E0FF] animate-slide-in shadow-md">
            <Zap size={18} className="animate-bounce" />
            <span className="font-semibold">Powered by Push Chain & Cross-Chain API</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-slide-in" style={{ animationDelay: "0.1s" }}>
          Trade NFTs Across
          <br />
          <span className="gradient-text-cyan text-6xl md:text-8xl block mt-2">Any Chain — Instantly</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: "0.18s" }}>
          No bridges. No wrapping. Just truly universal NFTs. <br />{" "}
          <span className="text-[#00E0FF] font-bold">Own everywhere. Trade anywhere. Earn rewards.</span>
        </p>
        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-14 animate-slide-in"
          style={{ animationDelay: "0.22s" }}
        >
          <Link
            href="/exploreNFTs"
            className="px-10 py-5 bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] rounded-xl font-extrabold flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-200 focus:ring-2 focus:ring-[#00E0FF] animate-pulse"
          >
            <ArrowRight size={24} />
            Explore NFTs
          </Link>
          <Link
            href="/create"
            className="px-10 py-5 glass rounded-xl font-extrabold text-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200 border-2 border-[#00E0FF] animate-spin-slow"
          >
            List Your NFT
          </Link>
        </div>
        {/* Stats Block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-in" style={{ animationDelay: "0.28s" }}>
          <div className="glass p-6 rounded-xl flex flex-col items-center shadow-lg border-b-4 border-[#00E0FF]">
            <TrendingUp size={32} className="mb-2 text-[#7F5AF0] animate-pulse" />
            <div className="text-3xl font-extrabold gradient-text">12.5K+</div>
            <div className="text-base text-gray-400 font-semibold mt-1">NFTs Listed</div>
          </div>
          <div className="glass p-6 rounded-xl flex flex-col items-center shadow-lg border-b-4 border-[#2CB67D]">
            <Trophy size={32} className="mb-2 text-[#00E0FF] animate-bounce" />
            <div className="text-3xl font-extrabold gradient-text">$3.1M+</div>
            <div className="text-base text-gray-400 font-semibold mt-1">Trade Volume</div>
          </div>
          <div className="glass p-6 rounded-xl flex flex-col items-center shadow-lg border-b-4 border-[#7F5AF0]">
            <ArrowRight size={32} className="mb-2 text-[#7F5AF0] animate-spin-slow" />
            <div className="text-3xl font-extrabold gradient-text">5 Chains</div>
            <div className="text-base text-gray-400 font-semibold mt-1">Connected</div>
          </div>
          <div className="glass p-6 rounded-xl flex flex-col items-center shadow-lg border-b-4 border-[#00E0FF]">
            <Users size={32} className="mb-2 text-[#00E0FF] animate-bounce" />
            <div className="text-3xl font-extrabold gradient-text">8.2K+</div>
            <div className="text-base text-gray-400 font-semibold mt-1">Active Traders</div>
          </div>
        </div>
      </div>
    </div>
  );
}
