"use client";

import { useState } from "react"
import CustomInput from "@/components/ui/CustomInput";
import { useUpdateEmployerProfileMutation } from "@/redux/features/user/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks/hooks";
import { companySchema } from "@/schemas/employer.schema";


const CompanyInformation = () => {
  const [file, setFile] = useState<File | null>(null)
    const { user } = useAppSelector((state) => state.user);

  const [updateEmployerProfile, { isLoading }] =
      useUpdateEmployerProfileMutation();
    const { handleSubmit, control } = useForm({
      resolver: zodResolver(companySchema),
      defaultValues: {
        name: user?.name as string,
        employer_positions: user?.phone_number as string,
      },
    });

 



  return (
    <div className="max-w-4xl mx-auto bg-white p-4 md:p-6">
      <div className="mb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        </div>
      </div>

     <form>
       {/* Company Name */}
     <CustomInput
              label="Name"
              name="name"
              type="text"
              control={control}
              placeholder="Enter full name"
            />

       <div className="mb-6">
        <label htmlFor="company-name" className="block text-sm font-medium mb-2">
          Employer Position
        </label>
        <input
          type="text"
          id="company-name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="company-name" className="block text-sm font-medium mb-2">
          Company Website (optional)
        </label>
        <input
          type="text"
          placeholder="https://example.com/"
          id="company-name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Company Details */}
      <div className="mb-6">
        <label htmlFor="company-details" className="block text-sm font-medium mb-2">
          Company Details
        </label>
        <div className="">
          <textarea
            id="company-details"
            rows={3}
            placeholder="Write down about your company here. Let the candidate know who we are..."
            className="w-full border border-gray-300 rounded-md overflow-hidden p-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
      </div>

      {/* Save Button */}
      <div>
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-non"
        >
          Save Changes
        </button>
      </div>
     </form>
    </div>
  )
}

export default CompanyInformation;
