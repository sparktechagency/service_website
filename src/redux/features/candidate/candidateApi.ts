/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast } from "@/helper/ValidationHelper";


export const candidateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCandidateOverview: builder.query({
      query: () => ({
        url: "/jobs/candidate_overview",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.me],
      async onQueryStarted(_arg, { queryFulfilled, dispatch}) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          //dispatch(SetUser(data))
        } catch (err:any) {
         ErrorToast("Server error is occured");
        }
      },
    })
  }),
});


export const { useGetCandidateOverviewQuery } = candidateApi;