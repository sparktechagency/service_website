"use client";
 
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
 type TProps = {
   children: React.ReactNode;
 };

const PrivateRoute = ({ children }: TProps) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [isLoadingToken, setIsLoadingToken] = useState(true);



 
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
      setIsLoadingToken(false);
    }
  }, []);
 
  useEffect(() => {
    if (!isLoadingToken && !token) {
      router.replace("/login");
    }
  }, [isLoadingToken, token, router]);
 
  if (isLoadingToken) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#E6F8F7]">
        <h1>Loading...</h1>
      </div>
    );
  }
 
  if (token) {
    return <>{children}</>;
  }
  return null;
};
 
export default PrivateRoute;