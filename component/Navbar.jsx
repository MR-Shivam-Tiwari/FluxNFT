"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
const modalStyles = {
  overlay: {
    position: "fixed",
    inset: "0",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // bg-black bg-opacity-50
  },
  container: {
    position: "relative",
    padding: "1rem",
    width: "100%",
    maxWidth: "32rem", // max-w-2xl
  },
  modal: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "0.5rem", // rounded-lg
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    borderBottom: "1px solid #E5E7EB", // border-b
    borderTopLeftRadius: "0.5rem", // rounded-t
    borderTopRightRadius: "0.5rem", // rounded-t
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "0.5rem", // rounded-lg
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    width: "0.75rem", // w-3
    height: "0.75rem", // h-3
  },
  content: {
    padding: "1rem",
    overflowY: "auto",
    height: "400px", // lg:h-[400px]
    maxHeight: "calc(100vh - 2rem)", // Ensures content is scrollable on smaller screens
  },
  form: {
    display: "grid",
    gap: "1.5rem",
  },
  inputContainer: {
    display: "grid",
    gap: "1.5rem",
  },
  input: {
    height: "2.5rem", // h-10
    width: "100%",
    borderRadius: "0.375rem", // rounded-md
    border: "1px solid #D1D5DB", // border-input
    padding: "0.5rem",
    fontSize: "0.875rem", // text-sm
    backgroundColor: "#F9FAFB", // bg-background
    boxSizing: "border-box",
  },
  fileInput: {
    width: "100%",
    border: "1px solid #D1D5DB", // border-gray-200
    borderRadius: "0.375rem", // rounded-lg
    padding: "0.5rem",
    backgroundColor: "#E5E7EB", // file:bg-gray-300
  },
  textarea: {
    width: "100%",
    minHeight: "100px",
    borderRadius: "0.375rem", // rounded-md
    border: "1px solid #D1D5DB", // border-input
    padding: "0.5rem",
    fontSize: "0.875rem", // text-sm
    backgroundColor: "#F9FAFB", // bg-background
  },
  submitButton: {
    display: "inline-flex",
    justifyContent: "center",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.375rem", // rounded-md
    color: "white",
    backgroundColor: "#4F46E5", // bg-indigo-600
    fontSize: "0.875rem", // text-sm
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // shadow-sm
  },
};
function Navbar() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showslidebar, setslidebarl] = useState(false);
  const [hovered, setHovered] = useState(null);
  const { pathname } = router;
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const togglesidebar = () => {
    setslidebarl(!showslidebar);
  };

  const [activePage, setActivePage] = useState("");

  const handleNavigate = (path) => {
    setActivePage(path);
    router.push(path);
  };

  const isActive = (path) => pathname === path;
  return (
    <div>
      <header
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          background: "#d1d5db",
          padding: "28px",
          alignItems: "center",
          fontFamily: "Josefin Sans, sans-serif",
          fontWeight: "bold",
          flexShrink: 0,
        }}
      >
        {/* Uncomment this section if the sidebar toggle is needed */}
        {/* <div
    style={{
      marginBottom: "1rem",
      cursor: "pointer",
    }}
    onClick={togglesidebar}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  </div> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            marginRight: "0.75rem",
            marginLeft: "0.5rem",
            cursor: "pointer",
          }}
          //   onClick={() => router.push("/")}
        >
          {/* Uncomment this section if the logo image is needed */}
          {/* <img
      src={logo}
      alt=""
      style={{
        height: "2.25rem",
        width: "2.25rem",
        marginBottom: "0.5rem",
        border: "1px solid #d1d5db",
        borderRadius: "50%",
      }}
    /> */}
          <span
            style={{
              fontWeight: "bold",
              color: "#8b4513",
              fontSize: "30px",
            }}
          >
            ShastraSangrah
          </span>
          <nav
            className={styles.navContainer}
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
          >
            <div style={{ position: "relative" }}>
              <ul
                className={styles.menuList}
                data-orientation="horizontal"
                dir="ltr"
              >
                <li
                  className={`${styles.menuItem} ${
                    isActive("/") ? styles.active : ""
                  }`}
                  onClick={() => router.push("/")}
                >
                  Home
                </li>
                <li
                  className={`${styles.menuItem} ${
                    isActive("/scriptures/geeta") ? styles.active : ""
                  }`}
                  onClick={() => router.push("/scriptures/geeta")}
                >
                  Scriptures
                </li>
                <li
                  className={`${styles.menuItem} ${
                    isActive("/about") ? styles.active : ""
                  }`}
                  onClick={() => router.push("/about")}
                >
                  About Us
                </li>
                <li
                  className={`${styles.menuItem} ${
                    isActive("/contact") ? styles.active : ""
                  }`}
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </li>
                <li
                  className={`${styles.menuItem} ${
                    isActive("/donation") ? styles.active : ""
                  }`}
                  onClick={() => router.push("/donation")}
                >
                  Donation
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginLeft: "auto",
          }}
        >
          {/* Hidden on small screens */}
          <div>
            <button
              onClick={() => router.push("/search-book")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#f97316",
                border: "1px solid #f97316",
                color: "black",
                fontWeight: "bold",
                padding: "0.4rem 1rem", // Adjusted for better padding
                borderRadius: "0.25rem",
                transition: "background-color 0.2s, color 0.2s",
                fontSize: "17px",
                lineHeight: "1.5rem",
              }}
            >
              Scripture
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>

          {/* Visible button */}
          <button
            onClick={toggleModal}
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "white",
              justifyContent: "center",
              borderRadius: "0.25rem",
              transition: "background-color 0.2s, color 0.2s",
              border: "1px solid #d1d5db",
              height: "2.5rem", // Adjusted height for better visibility
              padding: "0.5rem 1rem", // Adjusted for better padding
              fontSize: "1rem",
              lineHeight: "1.5rem",
              color: "#8b4513",
            }}
          >
            Report Bug
          </button>
        </div>
      </header>

      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.container}>
            <div style={modalStyles.modal}>
              <div style={modalStyles.header}>
                <div>
                  <h1
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#111827",
                    }}
                  >
                    Report a Bug
                  </h1>
                  <p
                    style={{
                      marginTop: "0.4rem",
                      fontSize: "0.9rem",
                      color: "#6B7280",
                    }}
                  >
                    Help us improve by reporting any issues you encounter.
                  </p>
                </div>
                <button
                  type="button"
                  style={modalStyles.closeButton}
                  onClick={toggleModal}
                >
                  <svg
                    style={modalStyles.closeIcon}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span style={{ display: "none" }}>Close modal</span>
                </button>
              </div>
              <div style={modalStyles.content}>
                <form style={modalStyles.form}>
                  <div style={modalStyles.inputContainer}>
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#4B5563",
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        style={modalStyles.input}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#4B5563",
                        }}
                      >
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        style={modalStyles.input}
                        required
                      />
                    </div>
                  </div>
                  <div style={{ display: "grid", gap: "1.5rem" }}>
                    <div>
                      <label
                        htmlFor="phone"
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#4B5563",
                        }}
                      >
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your Phone"
                        style={modalStyles.input}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="multiple_files"
                        style={{
                          display: "block",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#111827",
                        }}
                      >
                        Upload a Screenshot of Bug
                      </label>
                      <input
                        type="file"
                        id="file-input"
                        style={modalStyles.fileInput}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      Bug Description
                    </label>
                    <textarea
                      id="description"
                      placeholder="Describe the bug you encountered"
                      style={modalStyles.textarea}
                      required
                    ></textarea>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button type="submit" style={modalStyles.submitButton}>
                      Submit Bug Report
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showslidebar && (
        <div className="fixed inset-0 z-50  w-full h-full bg-black bg-opacity-500">
          <div className=" p-4 w-full  ">
            <div className="relative bg-white rounded-lg shadow h-[600px] ">
              <div className="flex items-center justify-between p-4 md:p-5">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center  "
                  onClick={togglesidebar}
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="w-full  px-4">
                <div>
                  <ul
                    data-orientation="horizontal"
                    className="group list-none space-y-5"
                    dir="ltr"
                  >
                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/" ? "bg-[#e0e0e0] text-[#8b4513]" : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/");
                        togglesidebar();
                      }}
                    >
                      Home
                    </div>

                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/scriptures/geeta"
                          ? "bg-[#e0e0e0] text-[#8b4513]"
                          : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/scriptures/geeta");
                        togglesidebar();
                      }}
                    >
                      Scriptures
                    </div>

                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/about"
                          ? "bg-[#e0e0e0] text-[#8b4513]"
                          : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/about");
                        togglesidebar();
                      }}
                    >
                      About Us
                    </div>

                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/contact"
                          ? "bg-[#e0e0e0] text-[#8b4513]"
                          : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/contact");
                        togglesidebar();
                      }}
                    >
                      Contact Us
                    </div>

                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/donation"
                          ? "bg-[#e0e0e0] text-[#8b4513]"
                          : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/donation");
                        togglesidebar();
                      }}
                    >
                      Donation
                    </div>
                  </ul>
                </div>
                <button
                  // onClick={toggleModal}
                  onClick={() => {
                    router.push("/search-book");
                    togglesidebar();
                  }}
                  className="inline-flex items-center lg:hidden w-full mt-20 text-2xl    gap-12 bg-orange-500 border-orange-500 shadow font-bold    justify-center whitespace-nowrap rounded-[4px] h-10 md:rounded-md lg:rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground  lg:h-10 md:h-10  px-2 md:px-4 lg:px-4  py-3 text-md lg:text-lg md:text-lg "
                >
                  Scripture
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
