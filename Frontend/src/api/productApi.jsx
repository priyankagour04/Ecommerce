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
       
    }),
    // overrideExisting: false, // Do not override existing API endpoints
});

// Export the hooks for each authentication endpoint
export const { useGetAllProductsQuery  } = productApi;
