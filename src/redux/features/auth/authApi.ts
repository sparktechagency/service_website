/* eslint-disable @typescript-eslint/no-explicit-any */
import TagTypes from "../../../constant/tagType.constant.ts";
import {
  getEmail,
  setEmail,
  setToken,
} from "../../../helper/SessionHelper.ts";
import { ErrorToast, SuccessToast } from "../../../helper/ValidationHelper.ts";
import { apiSlice } from "../api/apiSlice.ts";
import {
  SetChangePasswordError,
  SetForgotError,
  SetLoginError,
  SetResetPasswordError,
  SetVerifyOtpError,
} from "./authSlice.ts";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const token = res?.data?.data?.accessToken;
          const role = res?.data?.data?.user?.authId?.role;
          if (role === "ADMIN" || role === "SUPER_ADMIN") {
            setToken(token);
            SuccessToast("Login Success");
            setTimeout(() => {
              window.location.href = "/";
            }, 300);
          } else {
            dispatch(SetLoginError("You are not admin!"));
          }
        } catch (err: any) {
          const status = err?.error?.status;
          if (status === 404) {
            dispatch(SetLoginError("Could not Find this Email!"));
          }
          if (status === 400) {
            dispatch(SetLoginError("Wrong Password!"));
          }
          if (status === 500) {
            dispatch(SetLoginError("Something Went Wrong"));
          }
        }
      },
    }),
    forgotPasswordSendOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ email }, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          setEmail(email);
          SuccessToast("OTP is sent successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          if (status === 400) {
            dispatch(SetForgotError("Could not Find this Email!"));
          } else {
            dispatch(SetForgotError("Something Went Wrong"));
          }
        }
      },
    }),
    forgotPasswordVerifyOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Otp is verified successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message;
          if (status === 400) {
            if (message === "Account does not exist!") {
              dispatch(SetVerifyOtpError("Could not Find this Email!"));
            }
            if (message === "Invalid reset code!") {
              dispatch(SetVerifyOtpError("Invalid otp code"));
            }
          } else {
            dispatch(SetVerifyOtpError("Something Went Wrong"));
          }
        }
      },
    }),
    forgotPasswordReset: builder.mutation({
      query: (data) => ({
        url: `/auth/reset-password?email=${getEmail()}`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Password is reset successfully!");
          localStorage.clear();
          setTimeout(() => {
            window.location.href = "/login";
          }, 300);
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message;
          if (status === 400) {
            dispatch(SetResetPasswordError(message));
          } else {
            dispatch(SetResetPasswordError("Something Went Wrong"));
          }
        }
      },
    }),
    changeStatus: builder.mutation({
      query: (data) => ({
        url: `/auth/block`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.users];
        }
        return [];
      },
      async onQueryStarted({is_block}, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast(`User is ${is_block ? "blocked" : "activated"} successfully`)
        } catch (err:any) {
          const status = err?.error?.status;
          if (status === 404) {
            ErrorToast(err?.error?.data?.message);
          } else {
            ErrorToast("Something Went Wrong!");
          }
        }
      },
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Password is updated successfully");
          setTimeout(() => {
            localStorage.clear()
            window.location.href = "/login";
          }, 300);
        } catch (err:any) {
          const message = err?.error?.data?.message;
          if(message === "password is incorrect"){
            dispatch(SetChangePasswordError("Wrong Current Password"))
          }else{
            dispatch(SetChangePasswordError(message))
          }
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordSendOtpMutation,
  useForgotPasswordVerifyOtpMutation,
  useForgotPasswordResetMutation,
  useChangeStatusMutation,
  useChangePasswordMutation
} = authApi;
