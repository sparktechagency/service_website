/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "@/constant/tagType.constant";
import { apiSlice } from "../api/apiSlice";
import { ErrorToast, SuccessToast } from "@/helper/ValidationHelper";

export const paymentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createPaymentIntent: builder.mutation({
            query: (data) => ({
                url: "/payment/create_checkout_session",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(_arg, { queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    SuccessToast("Checkout Session is created Successfully");
                    if (res?.data?.data?.url) {
                        window.location.href = res?.data?.data?.url;
                    }
                } catch (err: any) {
                    const message = err?.error?.data?.message;
                    ErrorToast(message);
                }
            },
        }),
        saveToPayments: builder.query({
            query: (sessionId) => ({
                url: `/payment/stripe-webhooks/session_id=${sessionId}`,
                method: "GET",
            }),
            keepUnusedDataFor: 600,
            providesTags: [TagTypes.payments],
            async onQueryStarted(_arg, { queryFulfilled }) {
                try {
                   const res = await queryFulfilled;
                   console.log(res)
                } catch{
                    ErrorToast("Server error is occured");
                }
            },
        }),
    }),
});

export const { useCreatePaymentIntentMutation, useSaveToPaymentsQuery } = paymentApi;
