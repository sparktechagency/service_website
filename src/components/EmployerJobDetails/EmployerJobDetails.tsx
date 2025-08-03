import { MapPin } from "lucide-react";
import { IFindJob } from "@/types/job.type";
import getFormattedDate from "@/utils/getFormattedDate";
import getExperience from "@/utils/getExperience";
import getEducation from "@/utils/getEducation";
import getType from "@/utils/getType";
import getRate from "@/utils/getRate";
import getTypeColor from "@/utils/getTypeColor";
import { IoPeople } from "react-icons/io5";
import getPattern from "@/utils/getJobPattern";

type TProps = {
  job: IFindJob;
};

const EmployerJobDetails = ({ job }: TProps) => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 bg-white">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl font-semibold">{job?.title}</h1>
                    <p
                      className={`px-2 text-sm rounded-md border ${getTypeColor(
                        job?.types
                      )}`}
                    >
                      {getType(job?.types)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div
                className="space-y-4 text-gray-600"
                dangerouslySetInnerHTML={{ __html: job?.descriptions }}
              ></div>
            </div>

            {/* Skillss */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Skill</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {job?.skill?.map((s, index) => (
                  <li key={index}> {s} </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job Overview Sidebar */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border border-gray-300 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Job Overview</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Posted */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">JOB POSTED:</p>
                    <p className="font-medium">
                      {getFormattedDate(job?.createdAt)}
                    </p>
                  </div>
                </div>

                {/* Job Expire In */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">JOB EXPIRE IN:</p>
                    <p className="font-medium text-red-500">
                      {getFormattedDate(job?.application_dateline)}
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">EDUCATION</p>
                    <p className="font-medium">
                      {getEducation(job?.education)}
                    </p>
                  </div>
                </div>

                {/* Salary */}
                {job?.salary && job?.rate && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                        <line x1="2" y1="10" x2="22" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">SALARY:</p>
                      <p className="font-medium">
                        £{`${job?.salary}`}/{" "}
                        <span className="lowercase">{`${getRate(
                          job?.rate
                        )}`}</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LOCATION:</p>
                    <p className="font-medium">{job?.address}</p>
                  </div>
                </div>

                {/* Vacancy */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                    <IoPeople size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Vacancy:</p>
                    <p className="font-medium">{job?.vacancies}</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">EXPERIENCE</p>
                    <p className="font-medium">
                      {getExperience(job?.experience)}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Job Pattern</p>
                    <p className="font-medium">
                      {getPattern(job?.job_pattern)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerJobDetails;
