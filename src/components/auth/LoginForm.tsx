"use client";
import Link from "next/link";
import CustomInput from "../ui/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth.schema";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Error from "../validation/Error";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { CgSpinnerTwo } from "react-icons/cg";
import { SetLoginError } from "@/redux/features/auth/authSlice";



type TFormValues = z.infer<typeof loginSchema>

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { LoginError } = useAppSelector((state) => state.auth);
  const [login, { isLoading }] = useLoginMutation();

  const {handleSubmit, control } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues:{
          email: "tayebrayhan10@gmail.com",
          password: "12345678"
        }
  })



    const onSubmit: SubmitHandler<TFormValues> = (data) => {
      dispatch(SetLoginError(""))
      login(data)
    };

  return (
    <>
      {LoginError && <Error message={LoginError} />}
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
            "Sign In"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
