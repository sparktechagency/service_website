/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect } from "react";
import CustomInput from "../ui/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import PasswordStrength from "../validation/PasswordStrength";
import CustomCheckbox from "../ui/CustomCheckbox";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { SetRegisterError } from "@/redux/features/auth/authSlice";
import { CgSpinnerTwo } from "react-icons/cg";
import Error from "../validation/Error";
import { useRouter } from "next/navigation";

type TFormValues = z.infer<typeof registerSchema>;

const CandidateRegisterForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { RegisterError } = useAppSelector((state) => state.auth);
  const [register, { isLoading, isSuccess }] = useRegisterMutation();
  const { handleSubmit, control, watch, trigger } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const password = watch("password");

  useEffect(() => {
    if (password) {
      // Only trigger validation if confirmPassword has been entered
      const confirmPassword = watch("confirmPassword");
      if (confirmPassword) {
        trigger("confirmPassword");
      }
    }
  }, [password, watch, trigger]);

  //if register is success
  useEffect(() => {
    if (isSuccess) {
      router.push("/verify-account-otp");
    }
  }, [isSuccess, router]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    const { terms, ...rest } = data;
    dispatch(SetRegisterError(""));
    register({
      ...rest,
      role: "USER",
    });
  };

  return (
    <>
      {RegisterError && <Error message={RegisterError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="Candidate Name"
          name="name"
          type="text"
          control={control}
          placeholder="Enter full name"
        />
        <CustomInput
          label="Email"
          name="email"
          type="text"
          control={control}
          placeholder="Enter email address"
        />
        <CustomInput
          label="Phone Number(only UK)"
          name="phone_number"
          type="text"
          control={control}
          placeholder="Enter phone number"
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          control={control}
          placeholder="Enter password"
        />
        {password && <PasswordStrength password={password} />}
        <CustomInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          control={control}
          placeholder="Enter confirm password"
        />

        <CustomCheckbox
          name="terms"
          label="I confirm that I have the Right to Work in the UK."
          control={control}
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
            "Sign Up"
          )}
        </button>
      </form>
    </>
  );
};

export default CandidateRegisterForm;
