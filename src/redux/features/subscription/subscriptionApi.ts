/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "../../../constant/tagType.constant";
import { ErrorToast, SuccessToast } from "../../../helper/ValidationHelper";
import { apiSlice } from "../api/apiSlice";

export const subscriptionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
      query: () => ({
        url: "/dashboard//get_all_subscriptions",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.subscriptions],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
  }),
});

export const { useGetSubscriptionsQuery } = subscriptionApi;
