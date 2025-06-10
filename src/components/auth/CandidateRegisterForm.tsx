"use client";

import { useEffect} from "react";
import CustomInput from "../ui/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import PasswordStrength from "../validation/PasswordStrength";
import CustomCheckbox from "../ui/CustomCheckbox";

type TFormValues = z.infer<typeof registerSchema>;


const CandidateRegisterForm = () => {
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
       
        <CustomCheckbox name="terms" label="I confirm that I have the Right to Work in the UK." control={control}/>

        <button className="w-full bg-primary cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default CandidateRegisterForm;
