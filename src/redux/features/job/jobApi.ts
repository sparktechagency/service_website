/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";
import { IParam } from "@/types/global.type";
import { SetRecentJobs } from "./jobSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployerJobs: builder.query({
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
          url: "/jobs/all/employer",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.employerJobs],
    }),
    getRecentPostedJobs: builder.query({
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
          url: "/jobs/all/employer",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.recentPostedJobs],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const jobs = res?.data?.data?.result || [];
          dispatch(SetRecentJobs(jobs));
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    createJob: builder.mutation({
      query: (data) => ({
        url: "/jobs/create-jobs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [TagTypes.employerJobs, TagTypes.recentPostedJobs];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Job is posted successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `/jobs/details?jobId=${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [{ type: TagTypes.job, id: arg }],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/update-jobs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [
            TagTypes.employerJobs,
            TagTypes.recentPostedJobs,
            { type: TagTypes.job, id: arg.id },
          ];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Job is updated successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    makeActiveExpireJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/jobs/make_expire_jobs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => {
        console.log(arg);
        if (result?.success) {
          return [TagTypes.employerJobs, { type: TagTypes.job, id: arg.id }];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Update success");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    searchJobs: builder.query({
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
          url: "/jobs/get_search_filter",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.jobs],
    }),
    addRemoveFavouriteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/toggle_favorite/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, arg) => {
        if (result?.success) {
          return [
            TagTypes.jobs,
            TagTypes.favouriteJobs,
            { type: TagTypes.job, id: arg },
          ];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const msg = res?.data?.message;
          SuccessToast(msg);
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
  }),
});

export const { useGetEmployerJobsQuery, useCreateJobMutation, useGetSingleJobQuery, useUpdateJobMutation, useMakeActiveExpireJobMutation, useGetRecentPostedJobsQuery, useSearchJobsQuery, useAddRemoveFavouriteJobMutation } = jobApi;
