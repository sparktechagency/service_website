"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/form/CustomInput";
import { z } from "zod";
import { useUpdateCandidateProfileMutation } from "@/redux/features/user/userApi";
import { SetProfileError } from "@/redux/features/auth/authSlice";
import { CgSpinnerTwo } from "react-icons/cg";
import Error from "@/components/validation/Error";
import { candidateProfessionalSchema } from "@/schemas/candidate.schema";
import CustomSelect from "@/components/form/CustomSelect";
import { educationOptions, experienceOptions, typeOptions } from "@/data/job.options";

type TFormValues = z.infer<typeof candidateProfessionalSchema>;

const ProfessionalForm = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const [updateCandidateProfile, { isLoading }] =
    useUpdateCandidateProfileMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(candidateProfessionalSchema),
    // defaultValues: {
    //   name: user?.name as string,
    //   phone_number: user?.phone_number as string,
    //   address: user?.address===null ? "" : user?.address
    // },
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetProfileError(""));
    const formData = new FormData();
   

    // formData.append("name", data.name);
    // formData.append("phone_number", data.phone_number)
    // formData.append("address", data.address)
    updateCandidateProfile(formData)
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 mb-8">
        <div className="">
          <p className="text-lg mb-4">Update Professional Information</p>
          {ProfileError && <Error message={ProfileError} />}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg mt-4"
          >
            <div className="space-y-4">
              <CustomInput
                label="Job Title(multiple, comma separated)"
                name="job_title"
                type="text"
                control={control}
                placeholder="e.g.Manufacturing Associate, Process Technician"
              />

              <CustomInput
                label="Job Seeking Title(multiple, comma separated)"
                name="job_seeking"
                type="text"
                control={control}
                placeholder="Enter title"
              />
                 <CustomSelect
                  label="Education"
                  name="education"
                  control={control}
                  options={educationOptions}
                />
                <CustomSelect
                  label="Experience"
                  name="experience"
                  control={control}
                  options={experienceOptions}
                />
                <CustomSelect
                label="Availability"
                name="availability"
                control={control}
                options={typeOptions}
              />
              
              <CustomInput
                label="Skills(multiple, comma separated)"
                name="skill"
                type="text"
                control={control}
                placeholder="Enter your skills"
              />

            
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
      </div>

    </>
  );
};

export default ProfessionalForm;
