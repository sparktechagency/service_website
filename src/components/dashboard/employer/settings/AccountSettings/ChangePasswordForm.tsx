"use client";

import CustomInput from "@/components/ui/CustomInput";
import PasswordStrength from "@/components/validation/PasswordStrength";
import { changePasswordSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type TFormValues = z.infer<typeof changePasswordSchema>;

const ChangePasswordForm = () => {
  //const dispatch = useAppDispatch();
  //const [forgotPasswordReset, { isLoading }] = useForgotPasswordResetMutation();
  const { handleSubmit, control, watch, trigger } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  const newPassword = watch("newPassword");

  useEffect(() => {
    if (newPassword) {
      const confirmPassword = watch("confirmPassword");
      if (confirmPassword === newPassword) {
        trigger("confirmPassword");
      }
    }
  }, [newPassword, watch, trigger]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
    //dispatch(SetResetPasswordError(""));
    //forgotPasswordReset(data);
  };

  return (
    <>
      <h2 className="text-lg font-medium mb-6">Change Password</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <CustomInput
            label="Current Password"
            name="oldPassword"
            type="password"
            control={control}
            placeholder="Enter Current password"
          />
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
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-none transition-colors cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangePasswordForm;
