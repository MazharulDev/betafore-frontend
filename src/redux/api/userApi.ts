import { tagTypes } from "../tagTypes/tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/user";
export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userByEmail: build.query({
      query: (email: string | string[] | undefined) => ({
        url: `${USER_URL}/${email}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserByEmailQuery } = userApi;
