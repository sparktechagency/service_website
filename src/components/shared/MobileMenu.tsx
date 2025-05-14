"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu = ({ setIsMenuOpen }: TProps) => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);

    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="md:hidden bg-primary">
        <div className="space-y-1 px-4 pb-3 pt-2">
          <div
            onClick={() => handleNavigate("/")}
            className="block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => handleNavigate("/find-work")}
            className="block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer"
          >
            Find Work
          </div>
          {/* <Link href="/employers" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Employers
            </Link> */}
          {/* <button onClick={()=>handleNavigate("/")} className="block rounded-md px-3 py-2 hover:bg-white/10">
              Candidates
            </button> */}
          {/* <button href="/pricing" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Pricing Plans
            </button> */}
          <div
            onClick={() => handleNavigate("/blog-list")}
            className="block rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer"
          >
            Blogs
          </div>
          <div className="my-3 border-t border-white/20 pt-3">
            {/* <div onClick={()=>handleNavigate("//dashboard/employer/post-job")} className="mt-2 block rounded-md bg-white px-3 py-2 text-center text-[#1a2c4e]">
                Post A Job
              </div> */}
            <div
              onClick={() => handleNavigate("/dashboard/employer/post-job")}
              className="mt-2 cursor-pointer block rounded-md bg-white px-3 py-2 text-center text-[#1a2c4e]"
            >
              Sign In
            </div>
            <div className="mt-4 flex items-center gap-2 px-3">
              <div
                onClick={() => handleNavigate("/")}
                className="flex items-center gap-2"
              >
                <div className="h-8 w-8 rounded-full">
                  <Image
                    src="/images/avatar.png"
                    alt="user"
                    width={500}
                    height={600}
                  />
                </div>
                <span className="text-sm">Andrew Ainsley</span>
              </div>
              <Bell onClick={() => handleNavigate("/notifications")} size={20} className="ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
