import React, { useState } from "react";
import SignupImg from "../../assets/images/signupVisual.webp";
import { Link, replace, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../api/authApi";
import { handleError, handleSuccess } from "../../utils/Toastify.Utils"; // Adjust based on your utility functions

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signup, { isLoading,}] = useSignupMutation();  // Initializes signup as a mutation function from RTK Query and isLoading to track the loading state during the API call.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = signUpInfo;
    if (!name || !email || !password) {
      return handleError("Fields are required");
    }

    try {
      const response = await signup({ name, email, password }).unwrap();
      handleSuccess("Signup successful!");
      console.log("Response:", response);
        navigate("/", {replace:true})
        localStorage.setItem('Logged in user', data.name);

      // Redirect or handle further actions here
    } catch (error) {
      handleError(error?.data?.message );
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section: Image */}
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <img
          className="object-cover"
          src={SignupImg}
          alt="Login Visual"
        />
      </div>

      <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:px-16 bg-white">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
          <p className="text-gray-500 mb-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>

          {/* Form Fields */}
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                onChange={handleChange}
                value={signUpInfo.name}
                name="name"
                type="text"
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
                Email address
              </label>
              <input
                onChange={handleChange}
                value={signUpInfo.email}
                name="email"
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
                onChange={handleChange}
                value={signUpInfo.password}
                name="password"
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                I agree with Privacy Policy and Terms of Use
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className={`w-full bg-black text-white font-bold py-2 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
