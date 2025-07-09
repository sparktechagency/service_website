import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";


export const policyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTermsConditions: builder.query({
      query: () => {
        return {
          url: `/dashboard/get-rules`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.termsConditions],
    }),
    getPrivacyPolicy: builder.query({
      query: () => {
        return {
          url: `/dashboard/get-privacy-policy`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.privacyPolicy],
    }),
    getAboutUs: builder.query({
      query: () => {
        return {
          url: `/dashboard/about_us`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.aboutUs],
    }),
  }),
});

export const {
  useGetTermsConditionsQuery,
  useGetPrivacyPolicyQuery,
  useGetAboutUsQuery
} = policyApi;
