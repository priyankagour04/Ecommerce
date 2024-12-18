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

      <div className="">
        <div className="mt-12 px-28  w-2/3">
          <p className="text-5xl font-semibold ">
            We believe in sustainable decor. We’re passionate about life at
            home.
          </p>
          <p className="mt-8 ">
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>

        <div className="container mx-auto px-20">
          <div className="my-8 bg-gray-100  md:my-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image Section */}
            <div className="">
              <img
                src={HomeImg}
                alt="Home"
                className="w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-lg xl:max-w-2xl"
              />
            </div>

            {/* Right Text Section */}
            <div className="px-4  sm:px-0 md:pl-12 flex flex-col justify-center ">
              <span className=" font-semibold text-sm md:text-base lg:text-4xl">
                About Us
              </span>

              <div className="mt-4 md:mt-3 text-gray-700">
                <p className="text-base pr-16">
                  3legant is a gift & decorations store based in HCMC, Vietnam.
                  Est since 2019. Our customer service is always prepared to
                  support you 24/7
                </p>
              </div>
              <div className="py-5 md:mt-0">
                <ShopNow />
              </div>
            </div>
          </div>
        </div>

        <ContactCards />

       <ContactForm/>

      <div className="bg-gray-100 mt-20">
      <ServiceCards/>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
