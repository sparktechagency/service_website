import React from "react";
import Image from "next/image";
import { TEmployer } from "@/types/employer.type";
import { Globe } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface ProfileHeaderProps {
  employer: TEmployer;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ employer }) => {
  const imgSrc = employer.profile_image || "/images/profile_placeholder.png";

  return (
    <div className="relative w-full mb-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col bg-white shadow-sm rounded-md px-4 py-6 sm:flex-row items-start sm:items-end -mt-20 sm:-mt-16">
          <div className="relative">
            <Image
              src={imgSrc}
              alt={"employer_img"}
              height={600}
              width={600}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/profile_placeholder.png";
              }}
              className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-6 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {employer?.name}
                </h1>
                <p className="text-lg text-blue-600 font-medium">
                  {employer?.company?.employer_position}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
              <a
                href="https://www.facebook.com/"
                 target="_blank"
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-sm"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Website</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-sm"
              >
                <FaFacebook className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-sm"
              >
                <FaLinkedin className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700">LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors duration-200 text-sm"
              >
                <FaInstagram className="w-4 h-4 text-pink-600" />
                <span className="text-pink-700">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md px-4 sm:px-6 lg:px-8 mt-8 py-3">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About Employer
          </h2>
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: employer?.details as string }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
