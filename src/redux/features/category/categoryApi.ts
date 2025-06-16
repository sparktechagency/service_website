/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast } from "@/helper/ValidationHelper";
import { SetCategoryOptions } from "./categorySlice";
import { ICategory } from "@/types/category.type";


export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/dashboard/all-category",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.categories],
      async onQueryStarted(_arg, { queryFulfilled, dispatch}) {
        try {
          const res = await queryFulfilled;
          const categories = res?.data?.data;
          const Options = categories?.map((category: ICategory) => ({
            value: category?._id,
            label: category?.category
          }));
          dispatch(SetCategoryOptions(Options));
        } catch (err:any) {
            console.log(err);
         ErrorToast("Server error is occured");
        }
      },
    }),
  }),
});


export const { useGetCategoriesQuery } = categoryApi;