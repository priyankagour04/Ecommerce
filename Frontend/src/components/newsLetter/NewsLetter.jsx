import React from 'react'
import NewsLetterImg from "../../assets/images/FooterImg.png";
const NewsLetter = () => {
  return (
  <>
     <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${NewsLetterImg})` }}
      >
        <div className="text-center space-y-2">
          <p className="text-3xl font-semibold"> Join Our Newsletter</p>
          <p className=" text-gray-500">Sign up for deals, new products and promotions</p>

          <hr className="border-t border-gray-400 px-6 sm:px-10 lg:px-16 sm:py-6 md:text-left"/>
        </div>
      </div>
  </>
  )
}

export default NewsLetter