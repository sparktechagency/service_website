"use client";
import React from "react";
import { Calendar } from "lucide-react";
import { useAppSelector } from "@/redux/hooks/hooks";
import { TWorkExperience } from "@/types/candidate.type";


const WorkExperience: React.FC = () => {
  const { details } = useAppSelector((state) => state.candidate);
  const experiences: TWorkExperience[] = details?.work_experience || [];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Work Experience</h2>

      <div className="space-y-8">
        {experiences?.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-8 group">
            {/* Timeline connector */}
            {index < experiences?.length - 1 && (
              <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200 group-hover:bg-blue-200 transition-colors duration-300"></div>
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <Calendar
                size={14}
                className="text-blue-500 group-hover:text-white transition-colors duration-300"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {exp?.job_title}
              </h3>
              <div className="flex flex-wrap gap-x-2 text-sm text-gray-600 mt-1">
                <span className="font-medium">{exp?.company_name}</span>
                <span>•</span>
                <span>{exp?.location}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {new Date(exp?.start_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}{" "}
                -{" "}
                {exp?.currently_work
                  ? "Present"
                  : exp?.end_date
                  ? new Date(exp?.end_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })
                  : "Present"}
              </div>
              <p className="mt-2 text-gray-700">{exp?.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
