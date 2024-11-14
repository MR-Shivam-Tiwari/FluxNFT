"use client";
import React, { useState } from "react";
import axios from "axios";

function Requestbook() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    bookName: "",
    authorName: "",
    hasData: "",
    wantsToHelp: "",
    additionalInfo: "",
  });

  const [showContactMessage, setShowContactMessage] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "hasData" && value === "yes") {
      setShowContactMessage(true);
    } else if (name === "hasData") {
      setShowContactMessage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      // Send the data to your backend API using axios
      const response = await axios.post(
        "http://localhost:5000/api/book-requests",
        formData
      );
      if (response.status === 200) {
        alert("Request submitted successfully!");
        closeModal();
      }
      closeModal();
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("There was an error submitting your request.");
    }
  };

  return (
    <div className="container mx-auto px-5">
      <h2 className="text-3xl mb-3 font-bold tracking-tight">
        Request New Book
      </h2>
      <div
        id="9whzy9rbpp"
        className="bg-gray-300 border lg:h-64 border-gray-300 rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-900">Request a Book</h2>
        <p className="text-gray-600">
          Explore our vast collection of Hindu scriptures. If you don’t find the
          book you’re looking for, you can request it to be added to our
          collection.
        </p>
        <div className="flex space-x-2">
          <button
            className="inline-flex mt-7 bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none w-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            onClick={openModal}
          >
            Request A Book
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Request a Book
              </h2>
              <div
                className="mb-4 border p-1 hover:bg-gray-300 bg-gray-200 cursor-pointer rounded"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="phone"
                  >
                    Your Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="bookName"
                  >
                    Book Name
                  </label>
                  <input
                    id="bookName"
                    name="bookName"
                    type="text"
                    value={formData.bookName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter the book name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="authorName"
                  >
                    Author Name
                  </label>
                  <input
                    id="authorName"
                    name="authorName"
                    type="text"
                    value={formData.authorName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter the author's name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Do you have data for this book?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasData"
                      value="yes"
                      className="text-blue-600 focus:ring-blue-500"
                      onChange={handleChange}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasData"
                      value="no"
                      className="text-blue-600 focus:ring-blue-500"
                      onChange={handleChange}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {showContactMessage && (
                  <p className="text-sm text-red-600 mt-2">
                    We may contact you via email or phone to collect more
                    information.
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Would you like to help provide information about the book?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="wantsToHelp"
                      value="yes"
                      className="text-blue-600 focus:ring-blue-500"
                      onChange={handleChange}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="wantsToHelp"
                      value="no"
                      className="text-blue-600 focus:ring-blue-500"
                      onChange={handleChange}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
                {formData.wantsToHelp === "yes" && (
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Please provide detailed information about the book"
                    rows="4"
                  />
                )}
              </div>
              <button
                className="w-full bg-blue-600 text-white p-2 rounded-lg"
                type="submit"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Requestbook;
