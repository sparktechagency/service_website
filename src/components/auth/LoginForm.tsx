"use client";
import Link from "next/link";
import CustomInput from "../ui/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth.schema";
import { z } from "zod";


type TFormValues = z.infer<typeof loginSchema>

const LoginForm = () => {
  const {handleSubmit, control } = useForm({
        resolver: zodResolver(loginSchema),
  })



    const onSubmit: SubmitHandler<TFormValues> = (data) => {
      console.log(data);
    };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput label="Email" name="email" type="text" control={control} placeholder="Enter email address"/>
        <CustomInput label="Password" name="password" type="password" control={control} placeholder="Enter your password"/>

        <div className="flex justify-between items-center">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2 cursor-pointer" /> Remember
            me
          </label>
          <Link
            href="/forgot-password"
            className="text-sm text-[#3AB0FF] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="w-full bg-primary cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100">
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
