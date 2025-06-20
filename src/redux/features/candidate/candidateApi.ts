/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast } from "@/helper/ValidationHelper";
import { SetCandidateOverview } from "./candidateSlice";
import { IParam } from "@/types/global.type";


export const candidateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCandidateOverview: builder.query({
      query: () => ({
        url: "/jobs/candidate_overview",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.candidateOverview],
      async onQueryStarted(_arg, { queryFulfilled, dispatch}) {
        try {
          const res = await queryFulfilled;
          const data = res?.data?.data;
          dispatch(SetCandidateOverview(data))
        } catch (err:any) {
         ErrorToast("Server error is occured");
        }
      },
    }),
    getAppliedJobs: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/jobs/get_all_apply_candidate",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.appliedJobs],
    }),
    getFavouriteJobs: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/jobs/get_user_favorites_jobs",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.favouriteJobs],
    }),
    searchCandidates: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/jobs/search_candidate",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.candidates],
    }),
  }),
});


export const { useGetCandidateOverviewQuery, useGetAppliedJobsQuery, useGetFavouriteJobsQuery, useSearchCandidatesQuery } = candidateApi;