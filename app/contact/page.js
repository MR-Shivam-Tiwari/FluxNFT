'use client'

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleReasonChange = (value) => {
    setFormData({ ...formData, reason: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contacts', { // Adjust the endpoint to match your backend server path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
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
    <div className="w-full martel-sans-bold container mx-auto">
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
      <section className="mx-20 py-12 lg:py-22">
        <div className="container mx-auto px-4 md:px-6">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              People contact us for a variety of reasons, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Website and app development services</li>
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
                  <option value="Website and app development services">Website and app development services</option>
                  <option value="General inquiries and feedback">General inquiries and feedback</option>
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
        </div>
      </section>
    </div>
  );
}
