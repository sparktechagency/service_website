import type React from "react"
import Link from "next/link"
import { LayoutDashboardIcon, BriefcaseIcon, BookmarkIcon, BellIcon, SettingsIcon, LogOutIcon } from "lucide-react"

const Sidebar = () =>{
  return (
    <div className="h-full flex flex-col py-6">
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
    </div>
  )
}

export default Sidebar;



const SidebarLink = ({
  href,
  icon,
  label,
  active = false,
  badge,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
  badge?: string
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
        active ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
      {badge && <span className="ml-auto bg-gray-200 text-gray-800 text-xs px-1.5 py-0.5 rounded-md">{badge}</span>}
    </Link>
  )
}
