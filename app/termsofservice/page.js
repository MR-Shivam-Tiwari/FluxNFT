import Link from 'next/link'
import React from 'react'
import Footer from '../Footer'

function page() {
    return (
        <div><div class="bg-gray-100 mt-5 text-gray-800">
            <header class="bg-orange-600 text-white py-4">
                <div class="container mx-auto text-center">
                    <h1 class="text-2xl font-bold">Terms of Service</h1>
                    <p class="text-sm">Shastra Sangrah - Explore the Wisdom of Hindu Scriptures</p>
                </div>
            </header>

            <main class="container mx-auto px-4 py-6">
                <section class="bg-white shadow-md rounded-lg p-6">
                    <h2 class="text-2xl font-semibold mb-4">Terms of Service</h2>
                    <p class="mb-4">
                        Welcome to <strong>Shastra Sangrah</strong>. By using our website, you agree to comply with these terms.
                    </p>

                    <h3 class="text-xl font-medium mb-2">Use of Content</h3>
                    <p class="mb-4">
                        The scriptures and resources on this site are for personal, educational, and non-commercial use only. Reproduction or distribution of content without permission is prohibited.
                    </p>

                    <h3 class="text-xl font-medium mb-2">User Responsibilities</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li>Ensure your use of the website aligns with applicable laws.</li>
                        <li>Respect other users and refrain from sharing offensive or misleading content.</li>
                    </ul>

                    <h3 class="text-xl font-medium mb-2">Limitations of Liability</h3>
                    <p class="mb-4">
                        We strive to provide accurate and complete content but cannot guarantee its correctness. Use the website at your own risk.
                    </p>

                    <h3 class="text-xl font-medium mb-2">Changes to Terms</h3>
                    <p class="mb-4">
                        These terms may be updated periodically. Continued use of the website signifies acceptance of the updated terms.
                    </p>

                    <h3 class="text-xl font-medium mb-2">Contact Us</h3>
                    <p>
                        For questions regarding these terms, contact us at: <Link className='text-blue-500 font-bold' href='/contact'>Click Here</Link>.
                    </p>
                </section>
            </main>
            <Footer />

        </div></div>
    )
}

export default page