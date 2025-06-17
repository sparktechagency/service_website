"use client";

import { useRouter } from "next/navigation";
import CustomInput from "../form/CustomInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSendOtpSchema } from "@/schemas/auth.schema";
import { useVerifyAccountSendOtpMutation } from "@/redux/features/auth/authApi";
import { z } from "zod";
import { SetVerifyAccountError } from "@/redux/features/auth/authSlice";
import Error from "../validation/Error";
import { useEffect } from "react";

type TFormValues = z.infer<typeof forgotPasswordSendOtpSchema>;


const VerifyAccountForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { VerifyAccountError } = useAppSelector((state) => state.auth);
  const [verifyAccountSendOtp, { isLoading, isSuccess}] = useVerifyAccountSendOtpMutation();
  const { handleSubmit, control } = useForm({
      resolver: zodResolver(forgotPasswordSendOtpSchema),
  });
  
  
  useEffect(()=>{
    if(isSuccess){
      router.push("/verify-account-otp");
    }
  }, [isSuccess, router])
  
  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetVerifyAccountError(""));
    verifyAccountSendOtp(data);
  };




  return (
    <>
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">
          Verify Your Account
        </h1>
        <p className="text-gray-600">
          We will send a verification code to your email address
        </p>
      </div>
      {VerifyAccountError && <Error message={VerifyAccountError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <CustomInput label="Email" name="email" type="text" control={control} placeholder="Enter email address"/>
        
        {/* Send Code Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full cursor-pointer bg-primary text-white py-3 px-4 rounded-lg font-medium disabled:bg-gray-800 transition-all duration-200 transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending Code...</span>
            </div>
          ) : (
            "Send Verification Code"
          )}
        </button>
      </form>
    </>
  );
};

export default VerifyAccountForm;
