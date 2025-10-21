'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

const NFTContext = createContext();

export function NFTProvider({ children }) {
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChain, setSelectedChain] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const chains = ["All", "Ethereum", "Solana", "Base", "Polygon", "Push Chain"];

  useEffect(() => {
    const mockNfts = [
      { id: 1, name: "CyberLion #45", image: "/cyberpunk-lion-nft.jpg", chain: "Ethereum", price: 2.5, creator: "0xA...", liked: false },
      { id: 2, name: "Quantum Realm #12", image: "/quantum-abstract-nft.jpg", chain: "Solana", price: 1.8, creator: "0xB...", liked: false },
      { id: 3, name: "Digital Dreams #89", image: "/digital-art-nft.png", chain: "Base", price: 3.2, creator: "0xC...", liked: false },
      { id: 4, name: "Neon Nights #23", image: "/neon-city-nft.jpg", chain: "Polygon", price: 1.2, creator: "0xD...", liked: false },
      { id: 5, name: "Cosmic Voyage #56", image: "/space-cosmic-nft.jpg", chain: "Push Chain", price: 4.1, creator: "0xE...", liked: false },
      { id: 6, name: "Aurora Borealis #34", image: "/aurora-lights-nft.jpg", chain: "Ethereum", price: 2.9, creator: "0xF...", liked: false },
      { id: 7, name: "Pixel Paradise #67", image: "/pixel-art-nft.png", chain: "Solana", price: 1.5, creator: "0xG...", liked: false },
      { id: 8, name: "Metaverse Mansion #11", image: "/metaverse-building-nft.jpg", chain: "Base", price: 5.3, creator: "0xH...", liked: false },
    ];
    setNfts(mockNfts);
    setFilteredNfts(mockNfts);
  }, []);

  useEffect(() => {
    let filtered = nfts;

    if (selectedChain !== "All") filtered = filtered.filter(nft => nft.chain === selectedChain);
    if (searchTerm.trim() !== '') filtered = filtered.filter(nft => nft.name.toLowerCase().includes(searchTerm.toLowerCase()));
    filtered = filtered.filter(nft => nft.price >= minPrice && nft.price <= maxPrice);

    setFilteredNfts(filtered);
  }, [searchTerm, selectedChain, minPrice, maxPrice, nfts]);

  const toggleLike = id => {
    setNfts(nfts.map(nft =>
      nft.id === id ? { ...nft, liked: !nft.liked } : nft
    ));
  };

  return (
    <NFTContext.Provider value={{
      nfts,
      filteredNfts,
      searchTerm,
      setSearchTerm,
      selectedChain,
      setSelectedChain,
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice,
      chains,
      toggleLike,
    }}>
      {children}
    </NFTContext.Provider>
  );
}

export function useNFT() {
  const context = useContext(NFTContext);
  if (!context) {
    throw new Error("useNFT must be used within NFTProvider");
  }
  return context;
}
