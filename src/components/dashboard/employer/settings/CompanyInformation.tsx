"use client";

import { useState } from "react";
import CustomInput from "@/components/ui/CustomInput";
import { useUpdateEmployerProfileMutation } from "@/redux/features/user/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks/hooks";
import { companySchema } from "@/schemas/employer.schema";
import { CgSpinnerTwo } from "react-icons/cg";
import { z } from "zod";
import CustomTextArea from "@/components/ui/CustomTextArea";
import Error from "@/components/validation/Error";
import EditCompanyPic from "./EditCompanyPic";

type TFormValues = z.infer<typeof companySchema>

const CompanyInformation = () => {
  const [file, setFile] = useState<File | null>(null);
  const { user } = useAppSelector((state) => state.user);
  const { ProfileError } = useAppSelector((state) => state.auth);

  const [updateEmployerProfile, { isLoading }] =
    useUpdateEmployerProfileMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: user?.company?.name as string,
      employer_position: user?.company?.employer_position as string,
    },
  });

    const onSubmit: SubmitHandler<TFormValues> = (data) => {
        // dispatch(SetLoginError(""))
        // login(data)
    };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 md:p-6">
      <div className="mb-8">
        <p className="text-lg mb-4">Update Company Information</p>
          {ProfileError && <Error message={ProfileError} />}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <EditCompanyPic setFile={setFile}/>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          label="Company Name"
          name="name"
          type="text"
          control={control}
          placeholder="Enter company name"
        />

        <CustomInput
          label="Employer Position"
          name="employer_position"
          type="text"
          control={control}
          placeholder="Enter your position"
        />
        <CustomTextArea
          label="Company Details"
          name="details"
          control={control}
          placeholder="write here..."
          rows={3}
        />

        {/* Save Button */}
        <div>
          <button
            type="submit"
            className="px-4 w-full md:w-64 md:justify-center py-2 flex gap-2 items-center bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-none transition-colors cursor-pointer"
          >
            {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
                Processing...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInformation;
