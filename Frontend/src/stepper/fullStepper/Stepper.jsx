import React, { useState } from "react";
import ShoppingCart from "../StepsComponents/ShoppingCart";
import CheckoutDetails from "../StepsComponents/CheckoutDetails";
import Complete from "../StepsComponents/Complete";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Shopping Cart", "Checkout", "Complete"];

  // Navigate to the next step
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Navigate to the previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <>
      <div className="text-4xl font-semibold text-center mt-16">Cart</div>
      <div className="min-h-screen flex flex-col items-center pt-10">
        {/* Stepper Indicators */}
        <div className="flex items-center w-full  max-w-2xl mx-auto relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative"
            >
             <div className="xl:flex lg:flex lg:gap-3 md:flex md:gap-3 xl:items-center flex gap-2  ">
                 {/* Circle */}
              <div
                className={`w-5 h-5  xl:w-9 xl:h-9 lg:w-9 lg:h-9 md:w-8 md:h-8  flex items-center justify-center  rounded-full ${
                  currentStep === index + 1
                    ? "bg-gray-900 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </div>
              {/* Step Text */}
              <div
                className={`text-sm md:text-lg font-medium  ${
                  currentStep === index + 1 ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {step}
              </div>
             </div>
              {/* Underline (Full Width Below Step) */}
              <span
                className={`absolute w-full h-0.5 top-full mt-5 ${
                 currentStep === index + 1
                    ? "bg-gray-900 text-white"
                    : ""
                }`}
              ></span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className=" container mx-auto max-w-full p-5 mt-10 rounded-lg ">
        {currentStep === 1 && <ShoppingCart handleNext={handleNext} />}
          {currentStep === 2 && <CheckoutDetails />}
          {currentStep === 3 && <Complete />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-96 max-w-lg mt-5">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300 disabled:bg-gray-100"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </button>
         
        </div>
      </div>
    </>
  );
};

export default Stepper;
