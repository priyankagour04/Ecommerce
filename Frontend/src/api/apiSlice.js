import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice using RTK Query
export const apiSlice = createApi({
    reducerPath: 'api',  // Unique name for the slice
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/',  // API base URL (replace with your actual URL)
        prepareHeaders: (headers, { getState }) => {
         const token = localStorage.getItem('jwtToken'); // Access token from the Redux store
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);  // Add token to headers
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),  // Empty for now, since we have other slices for specific endpoints
});

// Export hooks for usage in components
export const {} = apiSlice;  // You can add endpoints here or in specific files
