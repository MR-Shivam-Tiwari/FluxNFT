"use client";

import { useState } from "react";
import { Upload, X, Zap } from "lucide-react";

export default function Create() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    collection: "",
    category: "",
    tags: "",
    properties: [],
    chain: "Ethereum",
    price: "",
    royalty: "10",
    supply: "1",
    external_url: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [createdNFTs, setCreatedNFTs] = useState([]);

  const chains = ["Ethereum", "Solana", "Base", "Polygon", "Push Chain"];
  const collections = ["Art", "Gaming", "Music", "Photography", "Virtual Worlds", "Collectibles"];
  const categories = ["Art", "Photography", "Gaming", "Metaverse", "Collectible", "Utility"];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add sample property (trait) for NFT
  const addProperty = () => {
    setFormData((prev) => ({
      ...prev,
      properties: [...prev.properties, { trait_type: "", value: "" }],
    }));
  };

  // Update trait inputs
  const updateProperty = (index, key, val) => {
    const newProps = [...formData.properties];
    newProps[index][key] = val;
    setFormData((prev) => ({ ...prev, properties: newProps }));
  };

  // Remove trait
  const removeProperty = (index) => {
    const newProps = [...formData.properties];
    newProps.splice(index, 1);
    setFormData((prev) => ({ ...prev, properties: newProps }));
  };

  // Handle submit (simulated API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNFT = {
      ...formData,
      id: Date.now(), // simple unique id
      previewImage: preview,
    };
    setCreatedNFTs((prev) => [newNFT, ...prev]);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      description: "",
      collection: "",
      category: "",
      tags: "",
      properties: [],
      chain: "Ethereum",
      price: "",
      royalty: "10",
      supply: "1",
      external_url: "",
      image: null,
    });
    setPreview(null);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] pt-20 pb-20 relative">
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
          <h1 className="text-5xl font-bold mb-4 gradient-text-cyan">Create Your NFT</h1>
          <p className="text-gray-400 text-lg">Mint and list your digital asset on FluxNFT</p>
        </div>

        {/* Creation Form */}
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-[rgba(255,255,255,0.1)] space-y-8 animate-scale-in">
          {/* Image Upload and Inputs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold mb-4 text-gray-300">NFT Image</label>
              <div className="relative">
                {preview ? (
                  <div className="relative group">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-xl border border-[rgba(0,224,255,0.3)]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null);
                        setFormData((prev) => ({ ...prev, image: null }));
                      }}
                      className="absolute top-2 right-2 p-2 bg-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                      aria-label="Remove image"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-[rgba(0,224,255,0.3)] rounded-xl cursor-pointer hover:border-[#00E0FF] transition-all group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload size={32} className="text-[#7F5AF0] mb-2 group-hover:text-[#00E0FF] transition-all" />
                      <p className="text-sm text-gray-400">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  </label>
                )}
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">NFT Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter NFT name"
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition-all"
                  required
                />
              </div>

              {/* Collection */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Collection *</label>
                <select
                  name="collection"
                  value={formData.collection}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-all"
                  required
                >
                  <option value="">Select collection</option>
                  {collections.map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-all"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Blockchain */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Blockchain *</label>
                <select
                  name="chain"
                  value={formData.chain}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:outline-none focus:border-[#00E0FF] transition-all"
                >
                  {chains.map((chain) => (
                    <option key={chain} value={chain}>
                      {chain}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Tags (comma separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g. art, collectible, pixel"
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition-all"
                />
              </div>

              {/* External URL */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">External URL</label>
                <input
                  type="url"
                  name="external_url"
                  value={formData.external_url}
                  onChange={handleChange}
                  placeholder="https://"
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your NFT..."
              rows={4}
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition-all resize-none"
            />
          </div>

          {/* Properties / Traits */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-300">Properties</h3>
              <button
                type="button"
                onClick={addProperty}
                className="text-[#00E0FF] hover:text-[#7F5AF0] transition-colors font-semibold"
              >
                + Add Property
              </button>
            </div>
            {formData.properties.length === 0 && (
              <p className="text-gray-500 text-sm mb-4 select-none">
                You can add traits/properties for your NFT.
              </p>
            )}
            {formData.properties.map((prop, idx) => (
              <div key={idx} className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Trait Type"
                  value={prop.trait_type}
                  onChange={(e) => updateProperty(idx, "trait_type", e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-[#00E0FF] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00E0FF] placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={prop.value}
                  onChange={(e) => updateProperty(idx, "value", e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-[#00E0FF] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00E0FF] placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => removeProperty(idx)}
                  className="text-red-500 hover:text-red-600 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Price (ETH) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Supply</label>
              <input
                type="number"
                name="supply"
                value={formData.supply}
                onChange={handleChange}
                placeholder="1"
                min="1"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-300">Royalty %</label>
              <input
                type="number"
                name="royalty"
                value={formData.royalty}
                onChange={handleChange}
                placeholder="10"
                min="0"
                max="50"
                className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#7F5AF0] to-[#00E0FF] rounded-lg font-bold text-lg hover-glow transition-all flex items-center justify-center gap-2 group"
          >
            <Zap size={20} className="group-hover:animate-pulse" />
            Create NFT
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className="fixed bottom-8 right-8 glass px-6 py-4 rounded-lg border border-[#00E0FF] animate-slide-in">
            <p className="text-[#00E0FF] font-semibold">NFT created successfully! 🎉</p>
          </div>
        )}

        {/* Created NFTs List */}
        {createdNFTs.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8">Your Created NFTs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[600px] overflow-y-auto pr-4">
              {createdNFTs.map((nft) => (
                <div
                  key={nft.id}
                  className="glass rounded-2xl shadow-lg flex flex-col cursor-default select-none"
                >
                  {nft.previewImage ? (
                    <img
                      src={nft.previewImage}
                      alt={nft.name}
                      className="h-48 w-full object-cover rounded-t-2xl"
                    />
                  ) : (
                    <div className="h-48 bg-gray-800 rounded-t-2xl flex items-center justify-center text-gray-600">
                      No Image
                    </div>
                  )}
                  <div className="p-5 flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-white truncate">{nft.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{nft.category || "Uncategorized"}</p>
                    <p className="text-sm text-gray-300 truncate">{nft.description || "No description provided."}</p>
                    <div className="mt-2 flex justify-between items-center text-white font-semibold">
                      <span>Price: {nft.price || "-" } ETH</span>
                      <span>Supply: {nft.supply || "-"}</span>
                    </div>
                    {nft.chain && (
                      <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-[#00E0FF]/30 text-[#00E0FF] w-max font-semibold">
                        {nft.chain}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
