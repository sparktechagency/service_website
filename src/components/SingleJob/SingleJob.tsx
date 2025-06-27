import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ApplyModal from "@/components/modal/ApplyModal";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import FavouriteCard from "@/components/FindWork/FavouriteCard";
import { IFindJob } from "@/types/job.type";
import getFormattedDate from "@/utils/getFormattedDate";
import getExperience from "@/utils/getExperience";
import getEducation from "@/utils/getEducation";
import getType from "@/utils/getType";
import getRate from "@/utils/getRate";

type TProps = {
  job: IFindJob;
};



const SingleJob = ({ job }: TProps) => {
   const router = useRouter();
   const userInfo = useUserInfo();


  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 bg-white">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center">
                  <FaInstagram className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-2xl font-semibold">{job?.title}</h1>
                    <Badge
                      variant="outline"
                      className="bg-blue-100 text-blue-600 border-blue-200"
                    >
                      Part time
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
                <div className="flex gap-x-3 justify-end md:justify-start">
                  {userInfo?.authId && userInfo.role === "USER" && (
                    <FavouriteCard jobId={"3243544"} />
                  )}
                  <span
                    onClick={() => router.push(`/employer-details/4`)}
                    className="text-sm underline text-blue-500 cursor-pointer"
                  >
                    View Employer
                  </span>
                </div>
                {/*  */}
                <ApplyModal />
              </div>
            </div>

            <div className="text-right text-sm text-gray-500 mb-6">
              Job expire in:{" "}
              <span className="text-red-500">
                {getFormattedDate(job?.application_dateline)}
              </span>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Integer aliquet pretium consequat. Donec et sapien id leo
                  accumsan pellentesque eget maximus tellus. Duis et est ac leo
                  rhoncus tincidunt vitae vehicula augue. Donec in suscipit
                  diam.
                </p>
                <p>
                  Pellentesque quis justo sit amet arcu commodo sollicitudin.
                  Integer finibus blandit condimentum. Vivamus sit amet ligula
                  ullamcorper, pulvinar ante id, tristique erat. Quisque sit
                  amet aliquam urna. Maecenas blandit felis id massa sodales
                  finibus. Integer bibendum eu nulla eu sollicitudin.
                </p>
                {/* <p>
                  Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit
                  augue quis turpis auctor, dapibus euismod ante ultricies. Ut
                  non felis lacinia turpis feugiat euismod at id magna. Sed ut
                  orci arcu. Suspendisse sollicitudin faucibus aliquet.
                </p>
                <p>
                  Nam dapibus consectetur erat in euismod. Cras urna augue,
                  mollis venenatis augue sed, porttitor aliquet nibh. Sed
                  tristique dictum elementum. Nulla imperdiet sit amet quam eget
                  lobortis. Etiam in neque sit amet orci interdum tincidunt.
                </p> */}
              </div>
            </div>

            {/* Responsibilities */}
            {/* <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Quisque semper gravida est et consectetur.</li>
                <li>
                  Curabitur blandit lorem velit, vitae pretium leo placerat
                  eget.
                </li>
                <li>Morbi mattis in ipsum ac tempus.</li>
                <li>
                  Curabitur eu vehicula libero. Vestibulum sed purus
                  ullamcorper, lobortis lectus nec.
                </li>
                <li>
                  vulputate turpis. Quisque ante odio, iaculis a porttitor sit
                  amet.
                </li>
                <li>lobortis vel lectus. Nulla at risus ut diam.</li>
                <li>
                  commodo feugiat. Nullam laoreet, diam placerat dapibus
                  tincidunt.
                </li>
                <li>
                  odio metus posuere lorem, id condimentum erat velit nec neque.
                </li>
                <li>dui sodales ut. Curabitur tempus augue.</li>
              </ul>
            </div> */}
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
                    <p className="font-medium">
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
                  {job?.salary && job?.rate && (
                    <div>
                      <p className="text-sm text-gray-500">SALARY:</p>
                      <p className="font-medium">
                        ${`${job?.salary}`}/ <span className="lowercase">{`${getRate(job?.rate)}`}</span>
                      </p>
                    </div>
                  )}
                </div>

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

                {/* Job Type */}
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
                    <p className="text-sm text-gray-500">JOB TYPE:</p>
                    <p className="font-medium">{getType(job?.types)}</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3 col-span-1 md:col-span-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleJob