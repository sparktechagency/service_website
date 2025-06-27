"use client";

import { useGetMeQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardButton = () => {
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
        <Link
          href="/find-candidates"
          className={`hover:text-secondary ${
            pathname === "/find-candidates" ? "text-secondary" : "text-white"
          }`}
        >
          Find-Candidates
        </Link>
        <Link
          href="/dashboard/employer/overview"
          className={`hover:text-secondary ${
            pathname === "/dashboard/employer/overview"
              ? "text-secondary"
              : "text-white"
          }`}
        >
          Dashboard
        </Link>
      </>
    );
  }

  if (!isLoading && user?.authId?.role === "USER") {
    return (
      <Link
        href="/dashboard/candidate/overview"
        className={`hover:text-secondary ${
          pathname === "/dashboard/candidate/overview"
            ? "text-secondary"
            : "text-white"
        }`}
      >
        Dashboard
      </Link>
    );
  }
};

export default DashboardButton;
