"use client";

import ApplicationItem from "./ApplicationItem";

const ApplicationList = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {array?.map((item: number) => (
          <ApplicationItem key={item} />
        ))}
      </div>
    </>
  );
};

export default ApplicationList;
