"use client"
import PostJobLoading from "@/components/loader/PostJobLoading";
import { useCheckSubscriptionStatusQuery } from "@/redux/features/subscription/subscriptionApi";
import dynamic from "next/dynamic";


const PostJobPage = () => {
  const PostJobForm = dynamic(() => import('@/components/PostJobForm/PostJobForm'), {
    ssr: false, // This is critical - it prevents the component from loading during SSR
    loading: () => <PostJobLoading />
  });
  useCheckSubscriptionStatusQuery(undefined);


  return (
    <>
      <PostJobForm />
    </>
  )
}

export default PostJobPage;
