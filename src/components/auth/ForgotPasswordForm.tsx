"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../ui/CustomInput";
import { z } from "zod";
import { forgotPasswordSendOtpSchema } from "@/schemas/auth.schema";

type TFormValues = z.infer<typeof forgotPasswordSendOtpSchema>;

const ForgotPasswordForm = () => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(forgotPasswordSendOtpSchema),
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
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
          className="w-full bg-primary cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
