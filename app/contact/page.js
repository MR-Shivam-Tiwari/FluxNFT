'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleReasonChange = (value) => {
    setFormData({ ...formData, reason: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);  // Ensure the form is passed correctly
    
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxwLKUmNKjTwUMuUoauAWrPk_bFKH6HumGtuTjDb7fj43ohGpaikP6yZnTlITS_QwI8Xw/exec',
        {
          method: 'POST',
          body: formData,
        }
      );
  
      if (response.ok) {
        alert('Form submitted successfully!');
        // Reset the form fields after submission
        setFormData({ name: '', email: '', phone: '', reason: '', message: '' });
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="w-full container mx-auto">
      {/* Section 1: Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-3xl font-bold sm:text-5xl">ShastraSangrah</h1>
            <p className="max-w-[900px] text-base md:text-xl">
              Discover the wisdom of Hindu scriptures. Explore our vast collection of sacred texts and deepen your understanding of ancient traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact form */}
      <section className="  mx-20 py-12  lg:py-22">
        <div className="container mx-auto px-4 md:px-6">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              People contact us for a variety of reasons, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Website and app development services</li>
              <li>Requesting new book additions to our collection</li>
              <li>Reporting bugs or issues with our platform</li>
              <li>General inquiries and feedback</li>
            </ul>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-medium">Reason for Contact</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={(e) => handleReasonChange(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select a reason</option>
                  <option value="website-app">Website and app development services</option>
                  <option value="new-book">Requesting new book additions to our collection</option>
                  <option value="bug-report">Reporting bugs or issues with our platform</option>
                  <option value="general">General inquiries and feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded min-h-[150px]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded hover:bg-gray-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          {/* <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-2xl font-bold">Contact Information</h3>
              <div className="space-y-2 text-gray-600">
                <p>ShastraSangrah<br />123 Main Street<br />Anytown, USA 12345</p>
                <p>Email: info@shastrasangrah.com<br />Phone: (123) 456-7890</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-2xl font-bold">Social Media</h3>
              <div className="flex gap-4">
                <a className="text-gray-600 hover:text-primary" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}
