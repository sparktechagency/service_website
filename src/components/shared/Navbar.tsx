"use client"

import { useState } from "react"
import Link from "next/link";
import { Bell, Menu, X } from "lucide-react"
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 h-[88px] z-50 w-full bg-primary text-white shadow-md">
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
          {/* <Link
            href="/dashboard/employer/post-job"
            className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#1a2c4e] hover:bg-gray-100"
          >
            Post A Job
          </Link> */}
          <button className="relative rounded-full p-1 hover:bg-white/10">
            <Bell size={20} />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-full">
              <Image src="/images/avatar.png" alt="user" width={500} height={600}/>
            </div>
            <span className="text-sm">Andrew Ainsley</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-md p-2 hover:bg-white/10 cursor-pointer">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu setIsMenuOpen={setIsMenuOpen}/>
      )}
    </nav>
  )
}
