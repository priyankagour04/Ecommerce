import { apiSlice } from './apiSlice';

// Define the authentication-related endpoints
export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        signup: builder.mutation({
            query: (userData) => ({
                url: 'auth/signup',
                method: 'POST',
                body: userData,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            }),
        }),
    }),
    // overrideExisting: false, // Do not override existing API endpoints
});

// Export the hooks for each authentication endpoint
export const { useLoginMutation, useSignupMutation, useLogoutMutation } = authApi;
