"use client";

import { TApplication } from "@/types/application.type";
import getEducation from "@/utils/getEducation";
import getExperience from "@/utils/getExperience";
import getFormattedDate from "@/utils/getFormattedDate";
import { Download } from "lucide-react";
import Image from "next/image";

type TProps = {
  application: TApplication
}

const ApplicationItem = ({ application } : TProps) => {

   const handleDownload = () => {
    const link = document.createElement("a")
    link.href = application?.resume as string;
    link.download = "document.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <>
      <div className="p-4 shadow-sm rounded-md bg-white">
        <div className="flex items-start gap-3">
          {/* <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div> */}
          <Image
            src="/images/avatar.png"
            alt="profile"
            width={600}
            height={600}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{application?.userId?.name}</h3>
              {/* <div className="relative group">
                <DeleteApplicationModal />
              </div> */}
            </div>
            <p className="text-sm text-gray-500">
              {application?.userId?.job_title?.length > 0 &&
                application?.userId?.job_title[0]}
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-1 text-sm">
          <li className="flex items-start">
            <span className="text-gray-400 mr-2">•</span>
            <span>
              Experience: {getExperience(application?.userId?.experience)}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 mr-2">•</span>
            <span>
              Education: {getEducation(application?.userId?.education)}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-400 mr-2">•</span>
            <span>
              Applied: {getFormattedDate(application?.userId?.createdAt)}
            </span>
          </li>
        </ul>
        <button
          onClick={handleDownload}
          className="mt-3 text-blue-600 cursor-pointer hover:text-blue-800 flex items-center text-sm"
        >
          <Download className="h-4 w-4 mr-1" />
          Download CV
        </button>
      </div>
    </>
  );
}

export default ApplicationItem