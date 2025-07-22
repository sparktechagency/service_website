"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageCircleMore, X } from "lucide-react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import DashboardButton from "./DashboardButton";
import useUserInfo from "@/hooks/useUserInfo";
import { logout } from "@/helper/SessionHelper";
import UserProfile from "./UserProfile";
import NotificationNav from "../notification/NotificationNav";

export default function Navbar() {
  const userInfo = useUserInfo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();





  return (
    <nav className="sticky top-0 h-[88px] z-50 w-full bg-primary text-white shadow-md">
      <div className="mx-auto h-full flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={120}
            height={120}
            priority
            style={{ height: "auto" }}
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className={`hover:text-secondary ${
              pathname === "/" ? "text-secondary" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/find-work"
            className={`hover:text-secondary ${
              pathname === "/find-work" ? "text-secondary" : "text-white"
            }`}
          >
            Find Work
          </Link>

          {userInfo?.authId && <DashboardButton />}
          <Link
            href="/blog-list"
            className={`hover:text-secondary ${
              pathname === "/blog-list" ? "text-secondary" : "text-white"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`hover:text-secondary ${
              pathname === "/contact" ? "text-secondary" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center space-x-4 md:flex">
          {userInfo?.authId ? (
            <>
              <button
                onClick={() => logout()}
                className="rounded-md border cursor-pointer border-white px-4 py-1.5 text-sm hover:bg-white/10"
              >
                Logout
              </button>
              <button
                onClick={() =>
                  router.push(
                    `/dashboard/${
                      userInfo?.role === "USER" ? "candidate" : "employer"
                    }/messages`
                  )
                }
                className="relative rounded-full p-1 cursor-pointer hover:bg-white/10"
              >
                <MessageCircleMore size={20} />
                {/* Notification count badge can be added here if needed */}
              </button>

              <NotificationNav/>

              <div
                onClick={() =>
                  router.push(
                    `/dashboard/${
                      userInfo?.role === "USER" ? "candidate" : "employer"
                    }/settings`
                  )
                }
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="h-8 w-8 rounded-full">
                  {userInfo?.authId && <UserProfile />}
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-md border border-white px-4 py-1.5 text-sm hover:bg-white/10"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-white px-4 py-1.5 text-sm text-primary"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 hover:bg-white/10 cursor-pointer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
}
