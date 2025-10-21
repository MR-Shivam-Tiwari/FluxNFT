"use client"

import { useState } from "react"

export default function Stats() {
  const [stats, setStats] = useState([
    { label: "Total Volume", value: "$2.3M", change: "+45%" },
    { label: "Active Users", value: "12.5K", change: "+28%" },
    { label: "NFTs Listed", value: "45.2K", change: "+67%" },
    { label: "Chains Connected", value: "5", change: "100%" },
  ])

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-xl text-center hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 animate-slide-in group cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-gray-400 mb-2">{stat.label}</p>
              <span className="text-[#2CB67D] text-sm font-semibold">{stat.change} this month</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
