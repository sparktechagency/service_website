"use client";

import CompanySection from "@/components/employerDetail/CompanySection";
import ContactSection from "@/components/employerDetail/ContactSection";
import ProfileHeader from "@/components/employerDetail/ProfileHeader";
import { employerData } from "@/data/employer.data";

const EmployerDetailsPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto py-16">
        <ProfileHeader employer={employerData} />
        
        <div className="px-4 sm:px-6 lg:px-8">
          <CompanySection employer={employerData} />
          <ContactSection employer={employerData} />
        </div>
      </div>
    </div>
    </>
  )
}

export default EmployerDetailsPage