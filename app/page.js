"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/app/hero/page";

import TrendingNFTs from "@/app/trendingNFTs/page";
import HowItWorks from "@/app/howitworks/page";
import Stats from "@/app/stats/page"; 
import CTA from "@/components/CTA";
import Footer from "@/components/Footer"; 
import FeaturedCollections from "./featuredcollections/page";

export default function Home() { 
  return (
    <div className="min-h-screen bg-[#0B0B0F]">
     
      <Hero /> 
      <FeaturedCollections />
      <TrendingNFTs />
      <HowItWorks />
      <Stats /> 
      <CTA />
      
    </div>
  );
}
