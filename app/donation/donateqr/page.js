"use client"

import { useState } from 'react'
import Image from 'next/image';
export default function DonationPage() {
    const [isQRModalOpen, setQRModalOpen] = useState(false)
    const [copySuccess, setCopySuccess] = useState(false)

    const UPI_ID = "shivam.133@superyes"

    const copyUPIToClipboard = () => {
        navigator.clipboard.writeText(UPI_ID)
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 flex items-center justify-center  lg:p-8 ">
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 sm:p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Support Our Cause</h1>
                <p className="text-gray-600 mb-6 text-center">Your generosity fuels our mission. Thank you for making a difference!</p>

                <div className="mb-6 text-center">
                    <div
                        className="inline-block relative cursor-pointer group"
                        onClick={() => setQRModalOpen(true)}
                    >
                        <Image
                            src="/donation/donataion_qr.png"
                            alt="QR Code for Donation"
                            width={200}  // Set an appropriate width
                            height={200}  // Set an appropriate height
                            className="rounded-lg"  // Use Tailwind CSS classes for styling if needed
                            style={{ objectFit: 'contain' }}
                            // className="w-48 h-48 mx-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Click on QR to enlarge</p>
                    <p className="text-sm text-gray-500 mt-2">Scan to Donate</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-between bg-gray-100 rounded-lg p-3">
                        <span className="text-gray-800 font-medium">{UPI_ID}</span>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                            onClick={copyUPIToClipboard}
                        >
                            Copy UPI
                        </button>
                    </div>
                    {copySuccess && (
                        <p className="text-green-500 text-sm mt-2 text-center">UPI ID copied to clipboard!</p>
                    )}
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">How to Donate:</h2>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2">
                        <li>Open your preferred UPI app</li>
                        <li>Scan the QR code or use the UPI ID</li>
                        <li>Enter the amount you wish to donate</li>
                        <li>Complete the transaction</li>
                    </ol>
                </div>

                <p className="text-gray-600 text-sm italic text-center">
                    Your support means the world to us. Together, we can make a lasting impact!
                </p>
            </div>

            {isQRModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                    onClick={() => setQRModalOpen(false)}
                >
                    <div
                        className="bg-white p-6 rounded-xl max-w-sm w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setQRModalOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Image
                            src="/donation/donataion_qr.png"  // Ensure correct path to public folder
                            alt="donation"
                            width={500}  // Set an appropriate width
                            height={500}  // Set an appropriate height
                            className="rounded-lg"  // Use Tailwind CSS classes for styling if needed
                            style={{ objectFit: 'contain' }}  // This ensures the image keeps its aspect ratio without stretching
                        />
                        
                    </div>
                </div>
            )}
        </div>
    )
}

