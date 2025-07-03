"use client";

import { useGetMeQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { usePathname } from "next/navigation";

type TProps = {
  handleNavigate: (path: string) => void
}

const MobileDashboardButton = ({handleNavigate}: TProps) => {
  const { user } = useAppSelector((state) => state.user);
  const { isLoading } = useGetMeQuery(undefined);

  const pathname = usePathname();

  if (isLoading) {
    return (
      <div className="rounded-md border border-white/30 px-4 py-1.5 text-sm bg-white/5 animate-pulse">
        <div className="h-4 w-16 bg-white/20 rounded"></div>
      </div>
    );
  }

  if (!isLoading && user?.authId?.role === "EMPLOYER") {
    return (
      <>
        <div
          onClick={() => handleNavigate("/find-candidates")}
          className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
            pathname === "/find-candidates" ? "text-secondary" : "text-white"
          }`}
        >
          Find-Candidates
        </div>

        <div
          onClick={() => handleNavigate("/dashboard/employer/overview")}
          className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
            pathname === "/dashboard/employer/overview"
              ? "text-secondary"
              : "text-white"
          }`}
        >
          Dashboard
        </div>
      </>
    );
  }

  if (!isLoading && user?.authId?.role === "USER") {
    return (
      <div
        onClick={() => handleNavigate("/dashboard/candidate/overview")}
        className={`block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer ${
          pathname === "/dashboard/candidate/overview"
            ? "text-secondary"
            : "text-white"
        }`}
      >
        Dashboard
      </div>
    );
  }
};

export default MobileDashboardButton;
