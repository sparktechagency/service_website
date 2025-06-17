"use client";

import { Globe } from "lucide-react";
import { ImFacebook2, ImLinkedin2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import CustomSocialInput from "@/components/form/CustomSocialInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useUpdateEmployerProfileMutation } from "@/redux/features/user/userApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { SetProfileError } from "@/redux/features/auth/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { socialLinkSchema } from "@/schemas/employer.schema";
import { z } from "zod";
import Error from "@/components/validation/Error";
import { CgSpinnerTwo } from "react-icons/cg";

type TFormValues = z.infer<typeof socialLinkSchema>;

const SocialLinkForm = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const { ProfileError } = useAppSelector((state) => state.auth);
  const [updateEmployerProfile, { isLoading }] =
    useUpdateEmployerProfileMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(socialLinkSchema),
    defaultValues: {
      website: user?.socialMedia?.website,
      facebook: user?.socialMedia?.facebook,
      linkedin: user?.socialMedia?.linkedin,
      instagram: user?.socialMedia?.instagram,
    },
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetProfileError(""));
    const formData = new FormData();
    formData.append("socialMedia", JSON.stringify(data));
    updateEmployerProfile(formData);
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      {ProfileError && <Error message={ProfileError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <CustomSocialInput name="website" control={control}>
            <Globe className="h-4 w-4 mr-2 text-purple-500" />
            Website
          </CustomSocialInput>
          <CustomSocialInput name="facebook" control={control}>
            <ImFacebook2 className="h-4 w-4 mr-2 text-blue-500" />
            Facebook
          </CustomSocialInput>
          <CustomSocialInput name="linkedin" control={control}>
            <ImLinkedin2 className="h-4 w-4 mr-2 text-[#1DA1F2]" />
            Linkedin
          </CustomSocialInput>
          <CustomSocialInput name="instagram" control={control}>
            <FaInstagram className="h-4 w-4 mr-2 text-[#E1306C]" />
            Instagram
          </CustomSocialInput>

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
      </form>
    </div>
  );
};

export default SocialLinkForm;
