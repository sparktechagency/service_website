"use client";


import OverviewHeader from "./OverviewHeader";
import OverviewStats from "./OverviewStats";
import ProfileCompletion from "./ProfileCompletion";
import RecentPostedJobs from "./RecentPostedJobs";

const EmployerOverview = () => {
  return (
    <>
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
          <OverviewHeader />
          <OverviewStats />
          <ProfileCompletion />
          <RecentPostedJobs />
        </div>
      </main>
    </>
  );
};

export default EmployerOverview;
