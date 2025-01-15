import React, { useState } from 'react'

const ShippingDetails = () => {

const [shippingAddress, setShippingAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });


  const handleShippingChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  return (
   <>
   <form className="space-y-6 border border-gray-500 p-5 shadow-md rounded-md">

        {/* Shipping Address Form */}
        <div className="border-b pb-6">
          <div className="text-2xl font-semibold">Shipping Address</div>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-semibold text-gray-500"
                htmlFor="addressLine1"
              >
               Street Address
              </label>
              <input
                id="addressLine1"
                name="addressLine1"
                type="text"
                value={shippingAddress.addressLine1}
                onChange={handleShippingChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter address line 1"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-500"
                htmlFor="addressLine2"
              >
             Country
              </label>
              <input
                id="addressLine2"
                name="addressLine2"
                type="text"
                value={shippingAddress.addressLine2}
                onChange={handleShippingChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter address line 2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-500" htmlFor="city">
                 Town / City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={shippingAddress.city}
                  onChange={handleShippingChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-500" htmlFor="state">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={shippingAddress.state}
                  onChange={handleShippingChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter state"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-500" htmlFor="zipCode">
                ZIP Code
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                value={shippingAddress.zipCode}
                onChange={handleShippingChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter ZIP code"
              />
            </div>
          </div>
        </div>
        </form>
   </>
  )
}

export default ShippingDetails