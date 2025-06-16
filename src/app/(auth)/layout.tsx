import PublicRoute from "@/components/PublicRoute/PublicRoute";
import React from "react";

type TProps = {
  children: React.ReactNode;
};
const PublicLayout = ({ children }: TProps) => {
  return (
    <>
    <PublicRoute>
      {children}
    </PublicRoute>
    </>
  );
};

export default PublicLayout;
