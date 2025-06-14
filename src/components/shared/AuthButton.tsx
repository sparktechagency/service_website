"use client";
import { getToken, logout } from "@/helper/SessionHelper";
import Link from "next/link";

const AuthButton = () => {
  const token = getToken();

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
