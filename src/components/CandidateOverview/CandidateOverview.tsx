"use client";

import OverviewHeader from "./OverviewHeader";
import OverviewStats from "./OverviewStats";
import ProfileCompletion from "./ProfileCompletion";
import RecentlyApplied from "./RecentlyApplied";

const CandidateOverview = () => {
  return (
    <>
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8">
          <OverviewHeader />
          <OverviewStats />
          <ProfileCompletion />
          <RecentlyApplied />
        </div>
      </main>
    </>
  );
};

export default CandidateOverview;
