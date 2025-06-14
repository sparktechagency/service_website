"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardButton = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/dashboard/candidate/overview"
        className={`hover:text-secondary ${
          pathname === "/dashboard/candidate/overview"
            ? "text-secondary"
            : "text-white"
        }`}
      >
        Candidate-Dashboard
      </Link>
      <Link
        href="/dashboard/employer/overview"
        className={`hover:text-secondary ${
          pathname === "/dashboard/employer/overview"
            ? "text-secondary"
            : "text-white"
        }`}
      >
        Employer-Dashboard
      </Link>
    </>
  );
};

export default DashboardButton;
