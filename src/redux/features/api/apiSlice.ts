/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ErrorToast } from "../../../helper/ValidationHelper.js";
import { getToken } from "../../../helper/SessionHelper.js";
import TagTypes from "../../../constant/tagType.constant.js";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://10.0.60.118:5003",
  prepareHeaders: async (headers) => {
    if (getToken()) {
      headers.set("Authorization", `Bearer ${getToken() as string}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
      localStorage.clear();
      ErrorToast("Authorization Expired");
      window.location.href = "/";
    }
    return result;
  },
  tagTypes: Object.values(TagTypes), //TagS WhiteLists
  endpoints: (_builder) => ({}),
});
