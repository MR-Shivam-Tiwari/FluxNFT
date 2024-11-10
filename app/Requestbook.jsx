import React from "react";

function Requestbook() {
  return (
    <div className="container mx-auto px-5">
      <h2 className="text-3xl mb-3 font-bold tracking-tight">
        Request New Book
      </h2>{" "}
      <div
        id="9whzy9rbpp"
        className=" bg-gray-300 border  lg:h-64 border-gray-300 rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-900">Newsletter</h2>
        <p className="text-gray-600">
          Stay up-to-date with the latest news, insights, and events from the
          world of Hindu scriptures. Sign up for our newsletter and receive
          exclusive content delivered straight to your inbox.
        </p>
        <form className="flex space-x-2">
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="inline-flex bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Requestbook;
