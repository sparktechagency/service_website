"use client"
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";

const EmplyerRegisterForm = () => {
 const [showPassword, setShowPassword] = useState<boolean>(false);
 
 
   return (
     <>
       
         {/* Input Fields */}
         <form className="space-y-4">
           <input
             type="text"
             placeholder="Employer Name"
             className="w-full px-4 py-2 border rounded-full outline-none"
           />
           <input
             type="email"
             placeholder="andrew101@gmail.com"
             className="w-full px-4 py-2 border rounded-full outline-none"
           />
           <div className="relative">
             <input
               type={showPassword ? "text" : "password"}
               placeholder="Password"
               className="w-full px-4 py-2 border rounded-full outline-none pr-10"
             />
             <span
               className="absolute right-4 top-2.5 cursor-pointer"
               onClick={() => setShowPassword(!showPassword)}
             >
               {showPassword ? <HiEyeOff /> : <HiEye />}
             </span>
           </div>
           <div className="relative">
             <input
               type="password"
               placeholder="Confirm Password"
               className="w-full px-4 py-2 border rounded-full outline-none"
             />
           </div>
 
           {/* Terms */}
           {/* <div className="flex items-start text-sm text-gray-700">
             <FaCheckCircle className="text-green-500 mr-2 mt-0.5" />
             I agree with{" "}
             <a href="#" className="text-red-400 underline mx-1">
               terms
             </a>
             of service and{" "}
             <a href="#" className="text-red-400 underline mx-1">
               privacy policy
             </a>
           </div> */}
 
           {/* Submit */}
           <button className="w-full bg-[#22385C] text-white py-2 rounded-full shadow-md hover:bg-[#1a2e4b] transition-colors font-semibold">
             Sign Up
           </button>
         </form>
     </>
   )
}

export default EmplyerRegisterForm