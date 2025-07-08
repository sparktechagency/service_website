"use client";

import { baseUrl } from "@/redux/features/api/apiSlice";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.user);
  const { isLoading } = useGetMeQuery(undefined);
  const imgSrc = user?.profile_image ? baseUrl + user?.profile_image : "/images/profile_placeholder.png";
  //const imgSrc = "/images/profile_placeholder.png";



  if (isLoading) {
    return (
      <div className="h-full w-full bg-white/20 rounded-full"></div>
    );
  }

  if (!isLoading && user?.authId) {
    return (
      <>
        <Image
          src={imgSrc}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/profile_placeholder.png";
          }}
          alt="user"
          width={500}
          height={600}
          className="h-full w-full rounded-full"
        />
      </>
    );
  }
};

export default UserProfile;
