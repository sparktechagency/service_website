"use client"
import { getToken, logout } from "@/helper/SessionHelper";
import Link from "next/link";

const AuthButton = () => {
  const token = getToken();

  // const dispatch = useAppDispatch()
  // const { isLoading, isInitialized } = useAppSelector((state) => state.auth);

  //  // শুধুমাত্র প্রথমবার loading দেখাবে
  // if (!isInitialized && isLoading) {
  //   return (
  //     <div className="rounded-md border border-white/30 px-4 py-1.5 text-sm bg-white/5 animate-pulse">
  //       <div className="h-4 w-16 bg-white/20 rounded"></div>
  //     </div>
  //   )
  // }

  return (
    <>
      {token ? (
        <button onClick={()=>logout()} className="rounded-md border cursor-pointer border-white px-4 py-1.5 text-sm hover:bg-white/10">
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="rounded-md border border-white px-4 py-1.5 text-sm hover:bg-white/10"
        >
          Sign In
        </Link>
      )}
    </>
  );
};

export default AuthButton;
