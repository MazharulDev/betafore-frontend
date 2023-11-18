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
  }),
});

export const { useCreatePaymentIntentMutation } = paymentApi;
