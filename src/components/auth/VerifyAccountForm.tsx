"use client";

import { useRouter } from "next/navigation";
import CustomInput from "../ui/CustomInput";
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
        {/* <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      {step === 1 ? (
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                    </div> */}
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
          className="w-full cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
