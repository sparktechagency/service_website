/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiSlice } from "../api/apiSlice";
import { SuccessToast } from "@/helper/ValidationHelper";
import { SetContactError } from "./contactSlice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: "/dashboard/contact_us",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Message is sent successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          dispatch(SetContactError(message));
        }
      },
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
