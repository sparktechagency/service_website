
import CandidateSidebar from "@/components/CandidateSettings/CandidateSidebar/CandidateSidebar";
import CandidateRoute from "@/components/PrivateRoute/CandidateRoute";
import { ReactNode } from "react";

type TProps = {
  children:ReactNode;
};
const CandidateDashboardLayout = ({ children }: TProps) => {
  return (
    <>
      <CandidateRoute>
        <section className="flex flex-col h-[calc(100vh-90px)] md:flex-row max-w-7xl mx-auto bg-gray-50">
          <CandidateSidebar />
          {children}
        </section>
      </CandidateRoute>
    </>
  );
};

export default CandidateDashboardLayout;
