import React from 'react'
import Footer from '../Footer'
import Link from 'next/link'

function page() {
    return (
        <div>
            <div class="bg-gray-100 mt-5 text-gray-800">
                <header class="bg-orange-600 text-white py-4">
                    <div class="container mx-auto text-center">
                        <h1 class="text-2xl font-bold">Privacy Policy</h1>
                        <p class="text-sm">Shastra Sangrah - Explore the Wisdom of Hindu Scriptures</p>
                    </div>
                </header>

                <main class="container mx-auto px-4 py-6">
                    <section class="bg-white shadow-md rounded-lg p-6">
                        <h2 class="text-2xl font-semibold mb-4">Our Commitment to Your Privacy</h2>
                        <p class="mb-4">
                            At <strong>Shastra Sangrah</strong>, we are committed to protecting your privacy. This policy explains how we handle your information to ensure a safe and enriching experience as you explore Hindu scriptures.
                        </p>

                        <h3 class="text-xl font-medium mb-2">Information We Collect</h3>
                        <ul class="list-disc list-inside mb-4">
                            <li><strong>Personal Information:</strong> If you contact us, subscribe to updates, or participate in discussions, we may collect your name, email address, and message content.</li>
                            <li><strong>Usage Data:</strong> Non-personal data like your device type, browser information, and browsing behavior is collected to improve user experience.</li>
                        </ul>

                        <h3 class="text-xl font-medium mb-2">How We Use Your Information</h3>
                        <p class="mb-4">
                            We use collected information for the following purposes:
                        </p>
                        <ul class="list-disc list-inside mb-4">
                            <li>To improve website functionality and content delivery.</li>
                            <li>To communicate updates or respond to inquiries.</li>
                            <li>To analyze traffic patterns and optimize performance.</li>
                        </ul>

                        <h3 class="text-xl font-medium mb-2">Cookies</h3>
                        <p class="mb-4">
                            We use cookies to remember user preferences and enhance browsing experience. You can disable cookies in your browser settings, but this may affect website functionality.
                        </p>

                        <h3 class="text-xl font-medium mb-2">Data Protection</h3>
                        <p class="mb-4">
                            We take appropriate measures to safeguard your data. However, no method of transmission or storage is 100% secure, so we cannot guarantee absolute security.
                        </p>

                        <h3 class="text-xl font-medium mb-2">Your Rights</h3>
                        <ul class="list-disc list-inside mb-4">
                            <li>You can request access to or deletion of your personal information.</li>
                            <li>You have the right to opt out of receiving communications from us.</li>
                        </ul>

                        <h3 class="text-xl font-medium mb-2">Contact Us</h3>
                        <p>
                            If you have questions or concerns about this policy, please reach out at: <Link className='text-blue-500 font-bold' href='/contact'>Click Here</Link>.
                        </p>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default page