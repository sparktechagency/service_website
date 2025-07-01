"use client"
import React from 'react';
import { Building2, Link } from 'lucide-react';
import Image from 'next/image';
import { TEmployer } from '@/types/employer.type';
import { baseUrl } from '@/redux/features/api/apiSlice';

interface CompanySectionProps {
  employer: TEmployer;
}

const CompanySection: React.FC<CompanySectionProps> = ({ employer }) => {
    const companyLogoSrc = employer?.company ? (employer?.company?.company_logo ? baseUrl+employer?.company?.company_logo: "/images/placeholder.jpg"  ) : "/images/placeholder.jpg";
  

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Building2 className="text-blue-600\" size={20} />
        Company Information
      </h2>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-40 h-40 overflow-hidden rounded-lg shadow-md">
            <Image
              src={companyLogoSrc}
              alt={`company logo`}
              height={600}
              width={600}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/placeholder.jpg";
              }}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {employer?.company?.name}
            </h3>
          </div>

          <div className="space-y-3">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: employer?.company?.details as string,
              }}
            ></div>

            {employer?.company?.website_link && (
              <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <Link size={16} />
                <a
                  //href="https://facebook.com/techsolutions"
                  href="https://osmangoni.netlify.app/"
                  target="_blank"
                  className="font-medium"
                >
                  Visit company website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;