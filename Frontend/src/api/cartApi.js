// src/services/cartApi.js

import { apiSlice } from "../slices/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ userId, productId, quantity }) => ({
        url: "cart/add-to-cart",
        method: "POST",
        body: { userId, productId, quantity },
      }),
    }),
   
  }),
});

export const { useAddToCartMutation } = cartApi;
