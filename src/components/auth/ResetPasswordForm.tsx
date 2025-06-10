"use client";

import { z } from "zod";
import CustomInput from "../ui/CustomInput";
import { resetPasswordSchema } from "@/schemas/auth.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordStrength from "../validation/PasswordStrength";
import { useEffect } from "react";

type TFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const { handleSubmit, control, watch, trigger } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const newPassword = watch('newPassword');

  
    useEffect(() => {
      if (newPassword) {
        const confirmPassword = watch("confirmPassword");
        if (confirmPassword === newPassword) {
        trigger('confirmPassword');
      }
      }
    }, [newPassword, watch, trigger]);


  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="New Password"
          name="newPassword"
          type="password"
          control={control}
          placeholder="Enter new password"
        />
         {newPassword && <PasswordStrength password={newPassword} />}
        <CustomInput
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          control={control}
          placeholder="Enter new password"
        />

        <button
          type="submit"
          className="w-full bg-primary hover:bg-[#2b4773] cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100"
        >
          Set Password
        </button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
