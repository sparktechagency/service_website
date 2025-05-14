"use client";
import ApplicationList from "@/components/dashboard/employer/MyJobsList/ApplicationList";
import MyJobsList from "@/components/dashboard/employer/MyJobsList/MyJobsList";
import { useAppSelector } from "@/redux/hooks/hooks";

const MyJobsPage = () => {
  const { viewApplication } = useAppSelector((state) => state.job);
  return <>
       {viewApplication ? <ApplicationList /> : <MyJobsList />}
  </>;
};

export default MyJobsPage;
