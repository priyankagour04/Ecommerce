import React from "react";
import Map from "../map/Map";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col lg:flex-row lg:px-28 px-6 items-center gap-12">
      {/* Form Section */}
      <form
        className="w-full lg:w-1/2 max-w-lg"
        onSubmit={handleSubmit}
      >
       

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Type your message here"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Submit
        </button>
      </form>

      {/* Map Section */}
      <div className="w-full lg:w-1/2">
        <Map h={475} w={570} />
      </div>
    </div>
  );
};

export default ContactForm;
