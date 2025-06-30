"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import CompanySection from "@/components/employerDetail/CompanySection";
import ContactSection from "@/components/employerDetail/ContactSection";
import ProfileHeader from "@/components/employerDetail/ProfileHeader";
import EmployerLoading from "@/components/loader/EmployerLoading";
import { useGetEmployerDetailsQuery } from "@/redux/features/employer/employerApi";
import { useParams } from "next/navigation";

const EmployerDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetEmployerDetailsQuery(params.id);
  const employer = data?.data?.employer;

  if (isLoading) {
    return <EmployerLoading />;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }

  if (!isLoading && !isError && employer?.name) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto py-16">
            <ProfileHeader employer={employer} />

            <div className="px-4 sm:px-6 lg:px-8">
              <CompanySection employer={employer} />
              <ContactSection employer={employer} />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!isLoading && !isError && !employer?.name) {
    return <NotFoundCard title="Employer Not Found" />;
  }
};

export default EmployerDetailsPage;
