"use client";

import { useState } from "react";
import { Clock, Gavel, Filter, X, Plus } from "lucide-react";

export default function Auctions() {
  const [filter, setFilter] = useState("all");
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [auctions, setAuctions] = useState([
    {
      id: 1,
      name: "Cosmic Nebula #001",
      image: "/cosmic-nebula-nft.jpg",
      currentBid: 5.2,
      bids: 24,
      timeLeft: "2h 45m",
      creator: "ArtisticVision",
      chain: "Ethereum",
      status: "active",
    },
    {
      id: 2,
      name: "Digital Dreams",
      image: "/digital-dreams-nft.jpg",
      currentBid: 3.8,
      bids: 18,
      timeLeft: "5h 20m",
      creator: "CreativeMinds",
      chain: "Base",
      status: "active",
    },
    {
      id: 3,
      name: "Quantum Realm",
      image: "/quantum-realm-nft.png",
      currentBid: 8.5,
      bids: 42,
      timeLeft: "45m",
      creator: "FutureArt",
      chain: "Polygon",
      status: "ending",
    },
    {
      id: 4,
      name: "Ethereal Essence",
      image: "/ethereal-essence-nft.jpg",
      currentBid: 2.1,
      bids: 12,
      timeLeft: "1d 3h",
      creator: "SoulfulCreator",
      chain: "Solana",
      status: "active",
    },
    {
      id: 5,
      name: "Neon Nights",
      image: "/neon-nights-nft.jpg",
      currentBid: 6.7,
      bids: 31,
      timeLeft: "Ended",
      creator: "NeonArtist",
      chain: "Push Chain",
      status: "ended",
    },
    {
      id: 6,
      name: "Mystic Visions",
      image: "/mystic-visions-nft.jpg",
      currentBid: 4.3,
      bids: 19,
      timeLeft: "3h 15m",
      creator: "MysticMind",
      chain: "Ethereum",
      status: "active",
    },
  ]);

  // New auction form data (controlled inputs)
  const [newAuction, setNewAuction] = useState({
    name: "",
    image: "",
    currentBid: "",
    bids: 0,
    timeLeft: "",
    creator: "",
    chain: "Ethereum",
    status: "active",
  });

  const filteredAuctions = auctions.filter((auction) => {
    if (filter === "active") return auction.status === "active";
    if (filter === "ending") return auction.status === "ending";
    if (filter === "ended") return auction.status === "ended";
    return true;
  });

  // Handle new auction form change
  const handleNewAuctionChange = (e) => {
    const { name, value } = e.target;
    setNewAuction((prev) => ({ ...prev, [name]: value }));
  };

  // Submit new auction
  const handleCreateAuctionSubmit = (e) => {
    e.preventDefault();

    // Simple validation: require name, image and currentBid
    if (!newAuction.name || !newAuction.image || !newAuction.currentBid) return;

    const auctionToAdd = {
      ...newAuction,
      id: Date.now(),
      currentBid: Number(newAuction.currentBid),
      bids: Number(newAuction.bids),
      status: newAuction.status || "active",
    };

    setAuctions((prev) => [auctionToAdd, ...prev]);
    setShowCreateModal(false);

    // Reset form
    setNewAuction({
      name: "",
      image: "",
      currentBid: "",
      bids: 0,
      timeLeft: "",
      creator: "",
      chain: "Ethereum",
      status: "active",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A12] to-[#1B1B2A] pt-20 pb-20 relative overflow-hidden text-white">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-15 bg-gradient-to-r from-[#7F5AF0] to-transparent animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-15 bg-gradient-to-r from-[#00E0FF] to-transparent animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header & Create Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 animate-slide-in max-w-3xl mx-auto gap-6">
          <h1 className="text-5xl font-extrabold gradient-text-cyan drop-shadow-lg">Live Auctions</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold shadow-lg hover:brightness-110 transition"
          >
            <Plus size={20} />
            Create Auction
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-5 mb-12 flex-wrap animate-slide-in">
          {["all", "active", "ending", "ended"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all shadow-md ${
                filter === f
                  ? "bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] text-white shadow-[#00e0ff80]"
                  : "bg-gray-800 hover:bg-[#2c2c45] text-gray-400"
              }`}
            >
              <Filter size={18} />
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Auctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAuctions.map((auction, index) => (
            <div
              key={auction.id}
              className="glass rounded-3xl overflow-hidden border border-transparent hover:border-[#00E0FF] shadow-lg hover:shadow-2xl transition-all group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedAuction(auction)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedAuction(auction);
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 rounded-t-3xl shadow-inner shadow-black/40">
                <img
                  src={auction.image || "/placeholder.svg"}
                  alt={auction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Status Badge */}
                <div
                  className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-black/40 ${
                    auction.status === "active"
                      ? "text-green-400 bg-green-500/20"
                      : auction.status === "ending"
                      ? "text-yellow-400 bg-yellow-500/20"
                      : "text-gray-400 bg-gray-600/20"
                  }`}
                >
                  {auction.status.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E0FF] transition-colors truncate">
                  {auction.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">by {auction.creator}</p>

                {/* Bid Info */}
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between items-center text-gray-300 text-sm">
                    <span>Current Bid</span>
                    <span className="text-[#00E0FF] font-bold text-lg">{auction.currentBid} ETH</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-400 text-sm">
                    <span>{auction.bids} Bids</span>
                    <span>{auction.chain}</span>
                  </div>
                </div>

                {/* Time Left */}
                <div className="flex items-center gap-2 text-sm text-[#7F5AF0] mb-6">
                  <Clock size={16} />
                  <span>{auction.timeLeft}</span>
                </div>

                {/* Bid Button */}
                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] font-semibold text-white shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-3">
                  <Gavel size={20} />
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bid Modal */}
        {selectedAuction && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="glass max-w-md w-full bg-gray-900 rounded-3xl p-8 border border-[#00E0FF] shadow-lg animate-scale-in relative">
              <button
                onClick={() => setSelectedAuction(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#00E0FF]/20 transition"
                aria-label="Close modal"
              >
                <X size={24} className="text-[#00E0FF]" />
              </button>

              <h2 className="text-3xl font-extrabold mb-6 text-white">
                Place Your Bid
              </h2>

              <p className="text-gray-400 mb-4">
                {selectedAuction.name} — Current Bid:{" "}
                <span className="font-bold text-[#00E0FF]">
                  {selectedAuction.currentBid} ETH
                </span>
              </p>

              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Bid Amount (ETH)
              </label>
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder={`${(selectedAuction.currentBid + 0.1).toFixed(2)}`}
                step="0.01"
                min={(selectedAuction.currentBid + 0.01).toFixed(2)}
                className="w-full rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition"
              />

              <button
                className="w-full mt-6 py-3 bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] font-bold rounded-lg shadow-xl hover:brightness-110 transition"
                disabled={!bidAmount || Number(bidAmount) <= selectedAuction.currentBid}
              >
                Confirm Bid
              </button>
            </div>
          </div>
        )}

        {/* Create Auction Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6   ">
            <div className="glass rounded-3xl p-8 max-w-5xl  w-full relative border  bg-gray-900 border-[#00E0FF] shadow-lg animate-scale-in">
              <button
                onClick={() => setShowCreateModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#00E0FF]/20 transition"
                aria-label="Close create auction modal"
              >
                <X size={24} className="text-[#00E0FF]" />
              </button>

              <h2 className="text-3xl font-extrabold mb-6 text-white text-center">
                Create New Auction
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const newId = Date.now();
                  setAuctions((prev) => [
                    {
                      id: newId,
                      name: newAuction.name || `New Auction #${newId}`,
                      image: newAuction.image || "/placeholder.svg",
                      currentBid: Number(newAuction.currentBid) || 0,
                      bids: Number(newAuction.bids) || 0,
                      timeLeft: newAuction.timeLeft || "Unknown",
                      creator: newAuction.creator || "Anonymous",
                      chain: newAuction.chain || "Ethereum",
                      status: newAuction.status || "active",
                    },
                    ...auctions,
                  ]);
                  setShowCreateModal(false);
                  setNewAuction({
                    name: "",
                    image: "",
                    currentBid: "",
                    bids: 0,
                    timeLeft: "",
                    creator: "",
                    chain: "Ethereum",
                    status: "active",
                  });
                }}
                className="space-y-5 h-[600px]  overflow-y-auto pr-2"
              >
                {[
                  { label: "Name", name: "name", type: "text", required: true },
                  { label: "Image URL", name: "image", type: "url", required: true, placeholder: "https://example.com/image.jpg" },
                  { label: "Current Bid (ETH)", name: "currentBid", type: "number", required: true, step: "0.1" },
                  { label: "Number of Bids", name: "bids", type: "number", required: false },
                  { label: "Time Left", name: "timeLeft", type: "text", required: true, placeholder: "eg. 2h 30m" },
                  { label: "Creator", name: "creator", type: "text", required: true },
                  {
                    label: "Blockchain",
                    name: "chain",
                    type: "select",
                    options: ["Ethereum", "Base", "Polygon", "Solana", "Push Chain"],
                  },
                  {
                    label: "Status",
                    name: "status",
                    type: "select",
                    options: ["active", "ending", "ended"],
                  },
                ].map(({ label, name, type, required, placeholder, options }) => (
                  <div key={name}>
                    <label className="block text-sm font-semibold mb-1 text-gray-300">
                      {label} {required && <span className="text-red-500">*</span>}
                    </label>
                    {type === "select" ? (
                      <select
                        name={name}
                        value={newAuction[name]}
                        onChange={(e) =>
                          setNewAuction((prev) => ({ ...prev, [name]: e.target.value }))
                        }
                        className="w-full rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-4 py-3 text-white focus:outline-none focus:border-[#00E0FF] transition"
                        required={required}
                      >
                        {options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt.charAt(0).toUpperCase() + opt.slice(1)}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={type}
                        name={name}
                        value={newAuction[name]}
                        onChange={handleNewAuctionChange}
                        placeholder={placeholder}
                        step={type === "number" ? "0.01" : undefined}
                        className="w-full rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition"
                        required={required}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] text-white font-bold rounded-lg shadow-lg hover:brightness-110 transition"
                >
                  Create Auction
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
