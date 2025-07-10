/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";
import TagTypes from "../../../constant/tagType.constant";
import type { IParam } from "../../../types/global.type";
import { apiSlice } from "../api/apiSlice";

export const notificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
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
          url: "/notification/my-notifications",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.notifications],
    }),
    deleteNotification: builder.mutation({
      query: (id) => ({
        url: `/dashboard/delete-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.notifications];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Notification is deleted successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message || "Something went wrong";
          ErrorToast(message);
        }
      },
    }),
    updateNotification: builder.mutation({
      query: () => ({
        url: `/notification/update-notification`,
        method: "PATCH",
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.notifications];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          const message = err?.error?.data?.message || "Something went wrong";
          ErrorToast(message);
        }
      },
    }),
  }),
});

export const { useGetNotificationsQuery, useDeleteNotificationMutation, useUpdateNotificationMutation } = notificationApi;
