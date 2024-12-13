import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../api/authApi";
import { setCredentials } from "./authSlice";
import loginImg from "../../assets/images/LoginVisual.jpeg";
import { handleError, handleSuccess } from "../../utils/Toastify.Utils";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');
    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess && data) {
      console.log('%c [ data ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', data);

      if (data.success) {
        // Save token to local storage
        localStorage.setItem('jwtToken', data.token);
        
        // Save credentials in Redux store
        dispatch(setCredentials(data));
        
        handleSuccess(data.message);
        navigate("/", { replace: true });
      } else {
        setErrorMessage(data?.message);
        handleError(data?.message);
      }
    }

    if (error) {
      setErrorMessage(error.data?.message || 'An error occurred during login.');
      handleError(error.data?.message || 'An error occurred during login.');
    }
  }, [data, isSuccess, error, dispatch, navigate]);

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
            <Link
              to="/signup"
              className="text-green-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>

          {/* Form Fields */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
             Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

            {/* Display error message */}
            {errorMessage && (
              <p className="text-red-500 text-center mt-4">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
