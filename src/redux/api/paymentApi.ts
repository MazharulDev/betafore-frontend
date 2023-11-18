import { tagTypes } from "../tagTypes/tag-types";
import { baseApi } from "./baseApi";

const PAYMENT_URL = "/payments";
export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPaymentIntent: build.mutation({
      query: (price) => ({
        url: `${PAYMENT_URL}/create-payment-intent`,
        method: "POST",
        data: price,
      }),
      transformResponse: (response: any) => {
        return {
          clientSecret: response,
        };
      },
      invalidatesTags: [tagTypes.payment],
    }),
    postPayment: build.mutation({
      query: (paymentData) => ({
        url: `${PAYMENT_URL}`,
        method: "POST",
        data: paymentData,
      }),
      invalidatesTags: [tagTypes.payment],
    }),
    paymentById: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${PAYMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.payment],
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  usePostPaymentMutation,
  usePaymentByIdQuery,
} = paymentApi;
