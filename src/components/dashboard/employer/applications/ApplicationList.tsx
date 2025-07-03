"use client";

import { TApplication } from "@/types/application.type";
import ApplicationItem from "./ApplicationItem";

type TProps = {
  applications: TApplication[]
}

const ApplicationList = ({ applications }: TProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {applications?.map((item, index) => (
          <ApplicationItem key={index} application={item}/>
        ))}
      </div>
    </>
  );
};

export default ApplicationList;
