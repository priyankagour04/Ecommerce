import React from "react";
import Map from "../map/Map";
import { useFormik } from "formik";
import validationSchema from '../../schema/ContactFormSchema'

const ContactForm = () => {
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // Formik hook for form management
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-20 xl:px-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-col-2 md:grid-cols-1 md:mt-5 gap-12">
        {/* Form Section */}
        <form
          className="space-y-4"
          onSubmit={formik.handleSubmit}
        >
          {/* Full Name */}
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                formik.touched.fullName && formik.errors.fullName
                  ? "border-red-500"
                  : "focus:ring-gray-300"
              }`}
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "focus:ring-gray-300"
              }`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                formik.touched.address && formik.errors.address
                  ? "border-red-500"
                  : "focus:ring-gray-300"
              }`}
              {...formik.getFieldProps("address")}
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "focus:ring-gray-300"
              }`}
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
            )}
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
        <div className="w-full">
          <Map h={475} w={570} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
