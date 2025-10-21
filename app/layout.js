import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NFTProvider } from "./NFTContext";

export const metadata = {
  title: "FluxNFT - Trade NFTs Across Any Chain",
  description: "Universal NFT Marketplace for Push Chain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B0F] text-white font-sans antialiased">
        <Navbar />
        <NFTProvider>

        <main>{children}</main>
        </NFTProvider>
        <Footer />
      </body>
    </html>
  );
}
