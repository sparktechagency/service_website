import CandidateSidebar from "@/components/dashboard/candidate/CandidateSidebar";

type TProps = {
  children: React.ReactNode;
};
const CandidateDashboardLayout = ({ children }: TProps) => {
  return (
    <>
      <section className="flex min-h-screen flex-col md:flex-row max-w-7xl mx-auto bg-gray-50">
        <CandidateSidebar />
        {children}
      </section>
    </>
  );
};

export default CandidateDashboardLayout;
