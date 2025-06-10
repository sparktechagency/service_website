"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../ui/CustomInput";
import { z } from "zod";
import { forgotPasswordSendOtpSchema } from "@/schemas/auth.schema";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useForgotPasswordSendOtpMutation } from "@/redux/features/auth/authApi";
import { SetForgotError } from "@/redux/features/auth/authSlice";
import Error from "../validation/Error";
import { CgSpinnerTwo } from "react-icons/cg";

type TFormValues = z.infer<typeof forgotPasswordSendOtpSchema>;

const ForgotPasswordForm = () => {
  const dispatch = useAppDispatch();
  const { ForgotError } = useAppSelector((state) => state.auth);
  const [forgotPasswordSendOtp, { isLoading }] =
    useForgotPasswordSendOtpMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(forgotPasswordSendOtpSchema),
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetForgotError(""));
    forgotPasswordSendOtp(data);
  };

  return (
    <>
      {ForgotError && <Error message={ForgotError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="Email"
          name="email"
          type="text"
          control={control}
          placeholder="Enter email address"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center cursor-pointer justify-center gap-2 bg-primary text-white py-2 rounded-md hover:bg-dis transition disabled:bg-gray-800 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Processing...
            </>
          ) : (
            "Continue"
          )}
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
