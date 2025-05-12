"use client"

import { useState } from "react"
import Link from "next/link";
import { Bell, Menu, X } from "lucide-react"
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 h-[88px] z-50 w-full bg-[#1a2c4e] text-white shadow-md">
      <div className="mx-auto h-full flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={70} height={70} />
        </Link>
          {/* <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-rose-500">Tradieez</span>
          </Link> */}

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/find-work" className="hover:text-gray-300">
            Find Work
          </Link>
          {/* <Link href="/employers" className="hover:text-gray-300">
            Employers
          </Link> */}
          {/* <Link href="/candidates" className="hover:text-gray-300">
            Candidates
          </Link> */}
           <Link href="/dashboard/candidate/overview" className="hover:text-gray-300">
            Candidate-Dashboard
          </Link>
           <Link href="/dashboard/employer/overview" className="hover:text-gray-300">
            Employer-Dashboard
          </Link>
          <Link href="/blog-list" className="hover:text-gray-300">
            Blogs
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link href="/login" className="rounded-md border border-white px-4 py-1.5 text-sm hover:bg-white/10">
            Sign In
          </Link>
          <Link
            href="/dashboard/employer/post-job"
            className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#1a2c4e] hover:bg-gray-100"
          >
            Post A Job
          </Link>
          <button className="relative rounded-full p-1 hover:bg-white/10">
            <Bell size={20} />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            <span className="text-sm">Andrew Ainsley</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-md p-2 hover:bg-white/10">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link href="/" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Home
            </Link>
            <Link href="/find-work" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Find Work
            </Link>
            {/* <Link href="/employers" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Employers
            </Link> */}
            <Link href="/candidates" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Candidates
            </Link>
            <Link href="/pricing" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Pricing Plans
            </Link>
            <Link href="/support" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Customer Supports
            </Link>
            <Link href="/blog" className="block rounded-md px-3 py-2 hover:bg-white/10">
              Blog
            </Link>
            <div className="my-3 border-t border-white/20 pt-3">
              <Link href="/signin" className="block rounded-md px-3 py-2 hover:bg-white/10">
                Sign In
              </Link>
              <Link href="/post-job" className="mt-2 block rounded-md bg-white px-3 py-2 text-center text-[#1a2c4e]">
                Post A Job
              </Link>
              <div className="mt-4 flex items-center gap-2 px-3">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                <span className="text-sm">Andrew Ainsley</span>
                <Bell size={20} className="ml-auto" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
