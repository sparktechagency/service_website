"use client";

import { useEffect } from "react";
import CustomInput from "../ui/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth.schema";
import PasswordStrength from "../validation/PasswordStrength";
import { z } from "zod";

type TFormValues = z.infer<typeof registerSchema>;

const EmplyerRegisterForm = () => {
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

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="Employer Name"
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
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              //checked={checked}
              //onChange
              required
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="right" className="font-medium text-gray-700">
              I confirm I am not a recruitment agency and understand this
              platform is for direct employers and candidates only.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default EmplyerRegisterForm;
