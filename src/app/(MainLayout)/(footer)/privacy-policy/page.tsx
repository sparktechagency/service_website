"use client"

import NotFoundCard from "@/components/card/NotFoundCard";
import PolicyLoading from "@/components/loader/PolicyLoading";
import PrivacyPolicy from "@/components/Policy/PrivacyPolicy";
import { useGetPrivacyPolicyQuery } from "@/redux/features/policy/policyApi";

const PrivacyPolicyPage = () =>{
   const { data, isLoading, isError } = useGetPrivacyPolicyQuery(undefined);

   if (isLoading) {
      return <PolicyLoading />;
    }
  
    if (!isLoading && isError) {
      return <h1>Server Error Occured</h1>;
    }
  
    if (!isLoading && !isError && data?.data?._id) {
      return (
        <>
          <PrivacyPolicy description={data?.data?.description} />
        </>
      );
    }
  
    if (!isLoading && !isError && !data?.data?.jobDetails?.title) {
      return <NotFoundCard title="Privacy Policy Not Found" />;
    }
}


export default PrivacyPolicyPage;