import { apiSlice } from './apiSlice';

// Define the product-related endpoints
export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to fetch paginated products
    getAllProducts: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `products/getAllProducts?page=${page}&limit=${limit}`, // Append page and limit to the URL
        method: 'GET',
      }),
      transformResponse: (response) => {
        // Safely extract required data to prevent runtime errors
        return {
          data: response?.data || [], // Default to empty array if `data` is missing
          totalPages: response?.totalPages || 1, // Default to 1 if not provided
          currentPage: response?.currentPage || 1, // Default to 1 if not provided
        };
      },
    }),

    // Endpoint for adding a new product
    addNewProducts: builder.mutation({
      query: (newProductData) => ({
        url: 'products/addProducts', // API endpoint for adding products
        method: 'POST',
        body: newProductData, // Send new product details in the request body
      }),
    }),
  }),
  overrideExisting: false, // Do not override existing API endpoints
});

// Export the hooks for each product endpoint
export const { useGetAllProductsQuery, useAddNewProductsMutation } = productApi;
