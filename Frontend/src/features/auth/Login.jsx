import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../api/authApi";  // Import the login mutation hook
import { setCredentials } from "./authSlice";  // Import action to save credentials
import loginImg from "../../assets/images/LoginVisual.jpeg";
import { handleError } from "../../utils/Toastify.Utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Local state for email and password input fields
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();  // RTK Query hook for login mutation
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Trigger login mutation
      const { data } = await login({ email, password });
      console.log('%c [ data ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', data)
      
      // Check if the response is successful
      if (data.success) {
        // Save the user's credentials (token/user data) in Redux store
        dispatch(setCredentials(data));
        navigate("/", { replace: true });
      } else {
        // Set error message for invalid credentials
        handleError(data.message);
      }
    } catch (error) {
      console.log(error);
      return handleError(error.message);  // Show a toast in case of unexpected errors
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section: Image */}
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <img className="h-full object-cover" src={loginImg} alt="Login Visual" />
      </div>

      {/* Right Section: Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:px-16 bg-white">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">Sign In</h1>
          <p className="text-gray-500 mb-6">
            Don’t have an account yet?{" "}
            <a href="#" className="text-green-600 font-medium hover:underline">
              Sign Up
            </a>
          </p>

          {/* Form Fields */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Your username or email address
              </label>
              <input
                type="email"
                id="email"
                value={email}  // Bind email state
                onChange={(e) => setEmail(e.target.value)}  // Update email state on change
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                placeholder="Enter your email"
                required
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
                value={password}  // Bind password state
                onChange={(e) => setPassword(e.target.value)}  // Update password state on change
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-green-200 focus:border-green-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
              // disabled={isLoading}  // Disable button while loading
            >
             Sign In
            </button>

            {/* Display error message if login fails */}
            {error && (
              <p className="text-red-500 text-center mt-4">
                {error.message || "Login failed. Please try again."}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
