import React, { useState } from "react";
import ShippingDetails from "../../components/forms/ShippingDetails";
import PaymentMethod from "../../components/forms/PaymentMethod";

const CheckoutDetails = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [shippingAddress, setShippingAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleContactInfoChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod({
      ...paymentMethod,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto max-w-xl p-6 rounded-lg space-y-5">
      <form className="space-y-6 border border-gray-500 p-5 shadow-md rounded-md">
        {/* Contact Information Form */}
        <div className="border-b pb-6">
          <div className="text-2xl font-semibold">Contact Information</div>
          <div className="space-y-4 mt-3">
            <div className="xl:grid xl:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-semibold text-gray-500"
                  htmlFor="firstName"
                >
                  FIRST NAME
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={contactInfo.firstName}
                  onChange={handleContactInfoChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold text-gray-500"
                  htmlFor="lastName"
                >
                  LAST NAME
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={contactInfo.lastName}
                  onChange={handleContactInfoChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-500"
                htmlFor="phone"
              >
                PHONE NUMBER
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={contactInfo.phone}
                onChange={handleContactInfoChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-500"
                htmlFor="email"
              >
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={contactInfo.email}
                onChange={handleContactInfoChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter email address"
              />
            </div>
          </div>
        </div>
      </form>
  {/* Shipping Address Form */}
      <ShippingDetails/>
   
   {/* Payment Method Form */}
<PaymentMethod/>

      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
          Submit Order
        </button>
      </div>
     
    </div>
  );
};

export default CheckoutDetails;
