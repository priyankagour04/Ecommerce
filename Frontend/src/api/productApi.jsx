import { apiSlice } from './apiSlice';

// Define the authentication-related endpoints
export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({


        getAllProducts: builder.query({
            query: () => ({
                url: 'products/getAllProducts',
                method: 'GET',
            }),
        }),

         // Endpoint for adding a new product
        addNewProducts: builder.mutation({
      query: (newProductData) => ({
        url: 'products/addProducts', // Update this URL as per your backend API
        method: 'POST',
        body: newProductData, // Send the data to be added to the product
      }),
    }),
       
    }),
    // overrideExisting: false, // Do not override existing API endpoints
});

// Export the hooks for each authentication endpoint
export const { useGetAllProductsQuery , useAddNewProductsMutation } = productApi;
