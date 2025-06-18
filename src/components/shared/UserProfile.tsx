"use client";

import { baseUrl } from "@/redux/features/api/apiSlice";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.user);
  const { isLoading } = useGetMeQuery(undefined);



  if (isLoading) {
    return (
        <div className="h-full w-full bg-white/20 rounded-full"></div>
    );
  }

  if (!isLoading && user?.authId) {
    return (
      <Image
        src={user?.profile_image === null ? "/images/profile_placeholder.png" : baseUrl+user?.profile_image }
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/images/profile_placeholder.png";
        }}
        alt="user"
        width={500}
        height={600}
        className="h-full w-full rounded-full"
      />
    );
  }
};

export default UserProfile;
