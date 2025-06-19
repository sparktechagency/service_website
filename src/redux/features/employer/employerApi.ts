/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast } from "@/helper/ValidationHelper";
import { IParam } from "@/types/global.type";
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
    getAllJobs: builder.query({
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
      providesTags: [TagTypes.appliedJobs],
    })
  }),
});


export const { useGetEmployerOverviewQuery, useGetAllJobsQuery } = employerApi;