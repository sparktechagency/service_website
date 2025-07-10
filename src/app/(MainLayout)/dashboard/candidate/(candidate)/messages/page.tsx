"use client"
//import NewMessage from "@/components/EmployerMessage/NewMessage";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import dynamic from "next/dynamic";

const CandidateMessagePage = () => {
const { isLoading } = useGetMeQuery(undefined);
if(isLoading){
  return <h1>Loading...</h1>
}
 const NewMessage = dynamic(() => import('@/components/EmployerMessage/NewMessage'), {
    ssr: false, // This is critical - it prevents the component from loading during SSR
    loading: () => <h1>Loading</h1>
  });

  
  return (
    <>
      <NewMessage/>
    </>
  )
}

export default CandidateMessagePage;