"use client"
import EmployerMessage from "@/components/EmployerMessage/EmployerMessage";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks/hooks";

const EmployerMessagePage = () => {
const { isLoading } = useGetMeQuery(undefined);


if(isLoading){
  return <h1>Loading...</h1>
}

  
  return (
    <>
      <EmployerMessage/>
    </>
  )
}

export default EmployerMessagePage;