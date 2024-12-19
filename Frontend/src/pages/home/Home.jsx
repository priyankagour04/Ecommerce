import React from "react";
import Carousal from "../../components/carousal/Carousal";
import Footer from "../../components/footer/Footer";
import HomeImg from "../../assets/images/HomeImg.png";
import ShopNow from "../../components/Buttons/ShopNow";
import Card from "../../components/Cards/Card";
import ServiceCards from "../../components/Cards/ServiceCards";
import NewsLetter from "../../components/newsLetter/NewsLetter";

const Home = () => {
  return (
    <>

      <Carousal />

      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2  container mx-auto px-8 py-12">
  <div className="text-4xl md:text-7xl p-5 font-semibold">
    Simply Unique / Simply Better.
  </div>
  <div className="text-gray-400 my-auto lg:px-16 md:px-6 px-6 text-base md:text-lg">
    <span className="text-black">3Elegance</span> is a gift & decorations
    store based in HCMC, Vietnam. Est since 2019.
  </div>
</div>




<Card/>
<ServiceCards/>

      <div className="bg-gray-100 my-8 md:my-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image Section */}
        <div className="">
          <img
            src={HomeImg}
            alt="Home"
            className="w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-lg xl:max-w-2xl"
          />
        </div>

        {/* Right Text Section */}
        <div className="px-4 sm:px-0 md:pl-12 flex flex-col justify-center ">
          <span className="text-blue-500 font-bold text-sm md:text-base lg:text-lg">
            SALE UP TO 35% OFF
          </span>
          <div className="mt-2">
            <p className="text-2xl md:text-2xl lg:text-4xl font-semibold leading-tight">
              HUNDREDS of
            </p>
            <p className="text-2xl md:text-2xl lg:text-4xl font-semibold leading-tight">
              New lower prices!
            </p>
          </div>
          <div className="mt-4 md:mt-3 text-gray-700">
            <p className="text-base">
              It’s more affordable than ever to give every
            </p>
            <p className="text-base">room in your home a stylish makeover.</p>
          </div>
          <div className="py-5 md:mt-0">
            <ShopNow />
          </div>
        </div>
      </div>
<NewsLetter/>
      <Footer />
    </>
  );
};

export default Home;
