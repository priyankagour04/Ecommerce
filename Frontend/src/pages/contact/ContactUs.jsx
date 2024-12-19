import React from "react";
import CommonButton from "../../components/Buttons/CommonButton";
import HomeImg from "../../assets/images/HomeImg.png";
import ShopNow from "../../components/Buttons/ShopNow";
import ContactCards from "../../components/Cards/ContactCards";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/forms/ContactForm";
import ServiceCards from "../../components/Cards/ServiceCards";

const ContactUs = () => {
  // const handleClick = () => {
  //   localStorage.clear("jwtToken")
  // };
  return (
    <>
      <div>
        {/* <CommonButton onClick={handleClick} variant="primary">
        Primary Button
      </CommonButton> */}
      </div>

      <div className="container mx-auto">
      <div className="mt-12 px-6 sm:px-12 md:px-6 lg:px-20 xl:px-20 w-full xl:w-2/3 lg:2/3">
  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
    We believe in sustainable decor. We’re passionate about life at home.
  </p>
  <p className="mt-4 sm:mt-6 md:mt-8 ">
    Our features timeless furniture, with natural fabrics, curved lines,
    plenty of mirrors and classic design, which can be incorporated into
    any decor project. The pieces enchant for their sobriety, to last
    for generations, faithful to the shapes of each period, with a touch
    of the present.
  </p>
</div> 


<div className=" px-6 sm:px-8 md:px-6 lg:px-20  xl:px-20 ">
  <div className="my-8 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left Image Section */}
    <div className="flex justify-center">
      <img
        src={HomeImg}
        alt="Home"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
      />
    </div>

    {/* Right Text Section */}
    <div className="px-4 sm:px-8 md:pl-8 lg:pl-12 flex flex-col justify-center">
      <span className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl">
        About Us
      </span>

      <div className="mt-4 md:mt-3 text-gray-700">
        <p className="text-sm sm:text-base pr-4 sm:pr-8 lg:pr-16">
          3legant is a gift & decorations store based in HCMC, Vietnam. Est
          since 2019. Our customer service is always prepared to support you
          24/7.
        </p>
      </div>
      <div className="mt-6 md:mt-5">
        <ShopNow />
      </div>
    </div>
  </div>
</div>


        <ContactCards />

       <ContactForm/>

      <div className=" mt-20">
      <ServiceCards/>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
