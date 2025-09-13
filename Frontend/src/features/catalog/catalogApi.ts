import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/product";
import { baseQueryWithErroHandling } from "../../app/api/baseApi";

// This creates react hooks we can use in our projects
export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQueryWithErroHandling,
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => ({ url: "products" }),
    }),
    fetchProductDetails: builder.query<Product, string>({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductDetailsQuery } =
  catalogApi;
