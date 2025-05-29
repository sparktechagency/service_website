import React from 'react';
import Image from 'next/image';
import { IEmployer } from '@/types/employer.type';

interface ProfileHeaderProps {
  employer: IEmployer;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ employer }) => {
  return (
    <div className="relative w-full mb-8">
      {/* Banner background
      <div className="h-48 bg-gradient-to-r from-blue-900 to-blue-600 rounded-t-xl"></div> */}
      
      {/* Profile picture and name section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-20 sm:-mt-16">
          <div className="relative">
            <Image 
              src={employer.picture} 
              alt={employer.name}
              height={600}
              width={600}
              className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div className="mt-4 sm:mt-0 sm:ml-6 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {employer.name}
                </h1>
                <p className="text-lg text-blue-600 font-medium">
                  {employer.position}
                </p>
              </div>
              
              {/* <div className="mt-4 sm:mt-0 flex gap-3">
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span className="hidden sm:inline">Contact</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;