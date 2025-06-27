"use client"
import ServerErrorCard from "@/components/card/ServerErrorCard";
import CandidateTabs from "@/components/dashboard/candidate/settings/CandidateTabs";
import EmployerSettingsLoading from "@/components/loader/EmployerSettingsLoading";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";

const CandidateSettingsPage = () => {
  const { user } = useAppSelector((state) => state.user);
  const { isLoading, isError} = useGetMeQuery(undefined);

   if (isLoading) {
    return <EmployerSettingsLoading/>
  }

  if (!isLoading && user?.authId) {
    return (
      <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Settings
          </h1>
          <CandidateTabs />
        </div>
      </main>
    );
  }
  
   if(!isLoading && isError){
    return <ServerErrorCard/>
  }
};

export default CandidateSettingsPage;
