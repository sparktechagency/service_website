"use client"
import EmployerMessage from "@/components/EmployerMessage/EmployerMessage";
import useUserInfo from "@/hooks/useUserInfo";
import { useGetMeQuery } from "@/redux/features/user/userApi";

const EmployerMessagePage = () => {
const { isLoading } = useGetMeQuery(undefined);
const userInfo = useUserInfo();
  console.log(userInfo)


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