/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorToast } from "@/helper/ValidationHelper";
import TagTypes from "../../../constant/tagType.constant";
import type { IParam } from "../../../types/global.type";
import { apiSlice } from "../api/apiSlice";
import { SetBlog } from "./blogSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
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
          url: "/dashboard/get_all_blogs",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.blogs],
    }),
    getRecentBlogs: builder.query({
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
          url: "/dashboard/get_all_blogs",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.recentBlogs],
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/dashboard/blog_details/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: (result, error, arg) => [{ type: TagTypes.blog, id: arg }],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const blog = res?.data?.data?.blog;
          dispatch(SetBlog(blog));
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
  }),
});

export const { useGetBlogsQuery, useGetRecentBlogsQuery, useGetSingleBlogQuery } = blogApi;
