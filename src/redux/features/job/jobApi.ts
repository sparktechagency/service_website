/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiSlice } from "../api/apiSlice";
import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (data) => ({
        url: "/jobs/create-jobs",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Job is posted successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message)
        }
      },
    }),
  }),
});

export const { useCreateJobMutation } = jobApi;
