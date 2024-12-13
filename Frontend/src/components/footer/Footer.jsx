import React from "react";
import FooterImg from "../../assets/images/FooterImg.png";

const Footer = () => {
  return (
    <footer>
      {/* Section with background image */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${FooterImg})` }}
      >
        <div className="text-center space-y-2">
          <p className="text-3xl font-semibold"> Join Our Newsletter</p>
          <p className=" text-gray-500">Sign up for deals, new products and promotions</p>

          <hr className="border-t border-gray-400 px-6 sm:px-10 lg:px-16 sm:py-6 md:text-left"/>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-black h-52 text-gray-400 flex items-center justify-center text-center">
        <div className="flex items-center">
          <div className="text-white text-lg font-bold">3legant.</div>
          <p>Gift & Decoration Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
