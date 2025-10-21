"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-4 my-3 relative overflow-hidden bg-gradient-to-br from-[#0b0b0f] via-[#121829] to-[#0d1523] rounded-3xl shadow-lg max-w-7xl mx-auto">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#7F5AF0] rounded-full mix-blend-screen filter blur-3xl animate-float animate-pulse-slow -translate-x-1/2 -translate-y-1/2"></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00E0FF] rounded-full mix-blend-screen filter blur-3xl animate-float animate-pulse-slow -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center mx-auto px-6 sm:px-10 max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 gradient-text-cyan drop-shadow-lg animate-slide-in">
          Ready to Trade <span className="text-white">Universally?</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-lg mx-auto font-medium animate-slide-in" style={{ animationDelay: "0.1s" }}>
          Join the revolution. Start trading NFTs across any chain with zero friction and maximum rewards.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <Link
            href="/exploreNFTs"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] font-extrabold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgb(0,224,255)] transition-transform duration-300 hover-glow shadow-md"
            aria-label="Start Trading NFTs"
          >
            Start Trading <ArrowRight size={26} />
          </Link>
          <button
            type="button"
            className="px-10 py-5 glass rounded-xl font-semibold text-white text-lg hover:bg-[rgba(255,255,255,0.15)] transition-colors shadow-inner shadow-cyan-500/30"
            onClick={() => alert('Learn more about OmniNFT coming soon!')}
            aria-label="Learn more about OmniNFT"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
