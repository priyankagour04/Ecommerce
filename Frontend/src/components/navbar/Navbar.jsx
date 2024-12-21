import React, { useState } from "react";
import { SiApachespark } from "react-icons/si";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 xl:px-16 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div
            className="text-2xl flex items-center font-bold text-gray-800 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <SiApachespark className="text-3xl" />
            3Elegance
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-10 text-gray-400 font-medium">
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

          {/* Desktop Icons Section */}
          <div className="hidden md:flex items-center text-xl space-x-8">
            <button className="text-gray-400 hover:text-gray-900">
              <FaSearch />
            </button>
            <button className="text-gray-400 hover:text-gray-900">
              <FaRegUserCircle />
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center text-xl space-x-4">
            <button className="text-gray-400 hover:text-gray-900">
              <FaSearch />
            </button>
            <button className="text-gray-400 hover:text-gray-900">
              <FaRegUserCircle />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="flex flex-col space-y-4 text-gray-400 font-medium">
              <button
                onClick={() => {
                  navigate("/");
                  toggleMenu();
                }}
                className="hover:text-gray-900 transition"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/shop");
                  toggleMenu();
                }}
                className="hover:text-gray-900 transition"
              >
                Shop
              </button>
              <button
                onClick={() => {
                  navigate("/products");
                  toggleMenu();
                }}
                className="hover:text-gray-900 transition"
              >
                Product
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  toggleMenu();
                }}
                className="hover:text-gray-900 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
