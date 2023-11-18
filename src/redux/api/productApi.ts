import { tagTypes } from "../tagTypes/tag-types";
import { baseApi } from "./baseApi";

const PRODUCT_URL = "/products";
export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (productData) => ({
        url: `${PRODUCT_URL}/add`,
        method: "POST",
        data: productData,
      }),
      invalidatesTags: [tagTypes.product],
    }),
    showAllProducts: build.query({
      query: () => {
        return {
          url: `${PRODUCT_URL}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.product],
    }),
  }),
});

export const { useCreateProductMutation, useShowAllProductsQuery } = productApi;
