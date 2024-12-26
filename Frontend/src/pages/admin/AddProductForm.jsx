import React, { useState } from 'react';
import { useAddNewProductsMutation } from '../../api/productApi';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: null,
  });

  const [addNewProduct, { isLoading, isError, error, isSuccess }] = useAddNewProductsMutation(); // Hook for calling API

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();

    for (let key in formData) {
      productData.append(key, formData[key]);
    }

    // Call the API to add the new product
    try {
      const result = await addNewProduct(productData).unwrap();
      console.log('Product added successfully:', result); // Handle success
    } catch (err) {
      console.error('Error adding product:', err); // Handle error
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto m-8 p-6 shadow-md bg-gray-200 rounded-md"
    >
      <h1 className="text-2xl font-semibold mb-6">Add Product</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={formData.category}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Right Column */}
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={formData.price}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            onChange={handleChange}
            value={formData.stock}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4 col-span-2">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        <div className="mb-4 col-span-2">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-black font-semibold text-white rounded hover:bg-blue-600 transition mt-4"
      >
        {isLoading ? "Adding..." : "Add Product"}
      </button>

      {/* Display error message */}
      {isError && <p className="text-red-500 mt-4">Error: {error.message}</p>}

      {/* Optionally display success message */}
      {isSuccess && <p className="text-green-500 mt-4">Product added successfully!</p>}
    </form>
  );
};

export default AddProductForm;
