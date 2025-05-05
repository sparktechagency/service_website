"use client";

import { MdEmail } from "react-icons/md";

const ForgotPasswordForm = () => {
  return (
    <>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg">
              <MdEmail />
            </span>
            <input
              type="email"
              id="email"
              className="block w-full border border-gray-300 rounded-md shadow-sm pl-10 pr-4 py-2"
              placeholder="enter your email here"
            />
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-[#2b4773] cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100">
          Continue
        </button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
