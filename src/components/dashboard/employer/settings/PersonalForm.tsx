"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/ui/CustomInput";
import { employerPersonalSchema } from "@/schemas/employer.schema";
import { z } from "zod";

type TFormValues = z.infer<typeof employerPersonalSchema>;

const PersonalForm = () => {
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    setLogoPreview(null);
  };

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { LoginError } = useAppSelector((state) => state.auth);
  //const [login, { isLoading }] = useLoginMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(employerPersonalSchema),
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    // dispatch(SetLoginError(""))
    //login(data)
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 md:p-6">
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Logo Upload */}
          <div className="col-span-1">
            <p className="text-lg mb-2">Upload Profile Picture</p>
            <div className="relative">
              <div className="bg-slate-400 max-h-[200px] w-full aspect-square rounded-md overflow-hidden">
                {logoPreview ? (
                  <Image
                    src={logoPreview || "/placeholder.svg"}
                    alt="Logo preview"
                    fill
                    className="object-cover h-full"
                  />
                ) : (
                  <label
                    htmlFor="logo-upload"
                    className="flex items-center justify-center h-full cursor-pointer"
                  >
                    <span className="sr-only">Upload logo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </label>
                )}
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoChange}
                />
              </div>
              {logo && (
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {(logo.size / (1024 * 1024)).toFixed(1)} MB
                  </span>
                  <div className="space-x-2">
                    <button
                      onClick={handleRemoveLogo}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Remove
                    </button>
                    <label
                      htmlFor="logo-upload"
                      className="text-xs text-blue-600 hover:underline cursor-pointer"
                    >
                      Replace
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg mt-4">
          <div className="space-y-4">
            <CustomInput
              label="Name"
              name="name"
              type="text"
              control={control}
              placeholder="Enter full name"
            />

            <CustomInput
              label="Phone Number(only UK)"
              name="phone_number"
              type="text"
              control={control}
              placeholder="Enter phone number"
            />

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  disabled
                  placeholder="Email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <button className="px-4 py-2 bg-primary hover:bg-[#2b4773] cursor-pointer text-white rounded-md focus:outline-none">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalForm;
