"use client";

import { Wallet, Send, CheckCircle, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Link your Web3 wallet to FluxNFT in seconds",
    },
    {
      icon: Send,
      title: "Browse & Select",
      description: "Explore NFTs across 5+ blockchains seamlessly",
    },
    {
      icon: Zap,
      title: "Instant Trade",
      description: "Buy, sell, or swap without bridges or wrapping",
    },
    {
      icon: CheckCircle,
      title: "Own Everywhere",
      description: "Your NFTs work on any chain automatically",
    },
  ];

  return (
    <section className="py-24 px-10 relative overflow-hidden bg-gradient-to-br from-[#0b0b0f] via-[#121829] to-[#0d1523] rounded-3xl shadow-lg max-w-8xl mx-auto">
      {/* Background orbs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#7F5AF0] rounded-full mix-blend-screen filter blur-3xl animate-float animate-pulse-slow"></div>
        <div
          className="absolute bottom-16 right-20 w-96 h-96 bg-[#00E0FF] rounded-full mix-blend-screen filter blur-3xl animate-float animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-20 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 gradient-text-cyan drop-shadow-lg">
            How It <span className="text-white">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-medium">
            Get started with FluxNFT in 4 simple steps. Own, trade, and explore NFTs across multiple chains seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative group rounded-3xl p-8 glass border border-[#00e0ff33] shadow-xl cursor-pointer hover:scale-105 hover:border-[#00e0ffcc] transition-all duration-500 ease-in-out"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Connector line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-[4px] bg-gradient-to-r from-[#7F5AF0] via-[#00E0FF] to-[#7F5AF0] opacity-30 rounded-lg translate-x-full"></div>
                )}

                {/* Icon circle with shadow and glowing animation */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#7F5AF0] to-[#00E0FF] text-white mb-6 shadow-lg shadow-[#00e0ff80] group-hover:shadow-[#7f5af080] group-hover:animate-pulse">
                  <Icon size={28} />
                </div>

                {/* Text content */}
                <h3 className="font-extrabold text-2xl mb-3 group-hover:text-[#00E0FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>

                {/* Step number bubble */}
                <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] flex items-center justify-center text-white text-2xl font-extrabold shadow-lg shadow-[#00e0ff99] group-hover:shadow-[#7f5af099] transition-shadow">
                  {idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
