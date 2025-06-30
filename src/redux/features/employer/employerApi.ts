/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast } from "@/helper/ValidationHelper";
import { SetEmployerOverview } from "./employerSlice";


export const employerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployerOverview: builder.query({
      query: () => ({
        url: "/jobs/total_count_employer",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.employerOverview],
      async onQueryStarted(_arg, { queryFulfilled, dispatch}) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          dispatch(SetEmployerOverview(data))
        } catch (err:any) {
         ErrorToast("Server error is occured");
        }
      },
    }),
    getEmployerDetails: builder.query({
      query: (id) => ({
        url: `/dashboard/employer_details/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [{ type: TagTypes.employerDetails, id: arg }],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
  }),
});


export const { useGetEmployerOverviewQuery, useGetEmployerDetailsQuery} = employerApi;