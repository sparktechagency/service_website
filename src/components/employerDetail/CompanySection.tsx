"use client"
import React from 'react';
import { Building2, Link } from 'lucide-react';
import Image from 'next/image';
import { TEmployer } from '@/types/employer.type';

interface CompanySectionProps {
  employer: TEmployer;
}

const CompanySection: React.FC<CompanySectionProps> = ({ employer }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Building2 className="text-blue-600\" size={20} />
        Company Information
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-40 h-40 overflow-hidden rounded-lg shadow-md">
            {/* <Image 
              src={employer.company.logo} 
              alt={`${employer.company.name} logo`}
              height={600}
              width={600}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            /> */}
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {employer?.company?.name}
            </h3>
            <p className="text-gray-600 mt-1">
              Industry leader in innovative technology solutions
            </p>
          </div>
          
          <div className="space-y-3">
            {/* <p className="text-gray-700">
              {employer.name} holds the position of {employer.position} at {employer.company.name}, 
              where they lead product strategy and development initiatives.
            </p> */}
            
            <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <Link size={16} />
              <a href="#" className="font-medium">
                Visit company website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;