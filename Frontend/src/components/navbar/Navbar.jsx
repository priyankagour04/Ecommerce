import React from "react";
import { SiApachespark } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <nav className="bg-white ">
      <div className="container mx-auto px-4 xl:px-16 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div
            className="text-2xl flex items-center font-bold text-gray-800 cursor-pointer"
            onClick={() => navigate("/")} // Navigate to home on logo click
          >
            <SiApachespark className="text-3xl" />
            3Elegance
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10 text-gray-400 text-xl font-medium">
            <button
              onClick={() => navigate("/")}
              className="hover:text-gray-900 transition"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="hover:text-gray-900 transition"
            >
              Shop
            </button>
            <button
              onClick={() => navigate("/products")}
              className="hover:text-gray-900 transition"
            >
              Product
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="hover:text-gray-900 transition"
            >
              Contact Us
            </button>
          </div>

          {/* Icons Section */}
          <div className="hidden md:flex items-center text-xl space-x-8">
            <button className="text-gray-400 hover:text-gray-900">
              <FaSearch />
            </button>
            <button className="text-gray-400 hover:text-gray-900">
              <FaRegUserCircle />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
