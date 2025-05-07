"use client"
import {
  LayoutDashboardIcon,
  SettingsIcon,
  Bookmark,
  CirclePlus,
  BriefcaseBusiness,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const EmployerSidebar = () => {
  return (
    <>
      {/* <div className="h-full flex flex-col py-6 border-r border-gray-200">
      <div className="px-4 mb-6">
        <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Candidate Dashboard</h2>
      </div>

      <nav className="flex-1 space-y-1 px-2">
        <SidebarLink href="/overview" icon={<LayoutDashboardIcon className="h-5 w-5" />} label="Overview" />
        <SidebarLink href="/applied-jobs" icon={<BriefcaseIcon className="h-5 w-5" />} label="Applied Jobs" />
        <SidebarLink href="/favorite-jobs" icon={<BookmarkIcon className="h-5 w-5" />} label="Favorite Jobs" active />
        <SidebarLink href="/job-alert" icon={<BellIcon className="h-5 w-5" />} label="Job Alert" badge="08" />
        <SidebarLink href="/settings" icon={<SettingsIcon className="h-5 w-5" />} label="Settings" />
      </nav>

      <div className="mt-auto px-4">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 py-2">
          <LogOutIcon className="h-5 w-5" />
          <span>Log out</span>
        </button>
      </div>
    </div> */}

      <aside className="w-full py-6 border-r border-gray-200 bg-white md:w-64 lg:w-72">
        {/* <div className="p-4 md:p-6">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500">Candidate Dashboard</h2>
          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center space-x-3 rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
            >
              <BriefcaseIcon className="h-5 w-5 text-blue-700" />
              <span>Overview</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span>Applied Jobs</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <Bookmark className="h-5 w-5 text-gray-500" />
              <span>Favorite Jobs</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <span>Job Alert</span>
              </div>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">09</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <Settings className="h-5 w-5 text-gray-500" />
              <span>Settings</span>
            </a>
          </nav>
        </div> */}

        <div className="px-4 mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Employer Dashboard
          </h2>
        </div>

        <nav className="flex-1 space-y-1 px-2">
          <SidebarLink
            href="/dashboard/employer/overview"
            icon={<LayoutDashboardIcon className="h-5 w-5" />}
            label="Overview"
          />
          <SidebarLink
            href="/dashboard/employer/post-job"
            icon={<CirclePlus className="h-5 w-5" />}
            label="Post a job"
          />
          <SidebarLink
            href="/dashboard/employer/my-jobs"
            icon={<BriefcaseBusiness className="h-5 w-5" />} 
            label="My Jobs"
            active
          />
          <SidebarLink
            href="/dashboard/employer/saved-candidates"
            icon={<Bookmark className="h-5 w-5" />}
            label="Save Candidates"
            badge="08"
          />
          <SidebarLink
            href="/dashboard/employer/settings"
            icon={<SettingsIcon className="h-5 w-5" />}
            label="Settings"
          />
        </nav>
      </aside>
    </>
  );
};

export default EmployerSidebar;

const SidebarLink = ({
  href,
  icon,
  label,
 // active = false,
  badge,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}) => {


  const pathname = usePathname();
  const router = useRouter();
  const active = pathname === href;



  return (
    // <Link
    //   href={href}
    //   className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
    //     active
    //       ? "bg-[#E7F0FA] text-primary border-l-4 border-[#092443]"
    //       : "text-gray-600 hover:bg-gray-100"
    //   }`}
    // >
    //   {icon}
    //   <span>{label}</span>
    //   {badge && (
    //     <span className="ml-auto bg-gray-200 text-gray-800 text-xs px-1.5 py-0.5 rounded-md">
    //       {badge}
    //     </span>
    //   )}
    // </Link>
    <button
      onClick={()=>router.push(href)}
      className={`flex w-full cursor-pointer items-center space-x-2 px-3 py-2 rounded-md ${
        active
          ? "bg-[#E7F0FA] text-primary border-l-4 border-[#092443]"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
      {badge && (
        <span className="ml-auto bg-gray-200 text-gray-800 text-xs px-1.5 py-0.5 rounded-md">
          {badge}
        </span>
      )}
    </button>
  );
};
