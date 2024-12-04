import React from "react";
import SignupImg from "../assets/images/Paste image.png";
const SignUp = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left Section: Image */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <img
            className=" object-cover"
            // src={SignupImg}
            src="https://smarthome.co.in/cdn/shop/files/SOFA106_1__20231226_10938451.jpg?v=1703684725"
            alt="Login Visual"
          />
        </div>

        <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:px-16 bg-white">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
            <p className="text-gray-500 mb-6">
              Already have an account?{" "}
              <a
                href="#"
                className="text-green-600 font-medium hover:underline"
              >
                Sign In
              </a>
            </p>

            {/* Form Fields */}
            <form>
              <div className="mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    id="username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                    placeholder="Enter your username"
                  />
                </div>

                <label
                  className="block text-gray-700 text-sm  font-semibold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-gray-600">
                  <input type="checkbox" className="mr-2" />I agree with Privacy
                  Policy and Terms of Use
                </label>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
