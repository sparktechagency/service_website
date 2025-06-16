"use client";
import { X } from "lucide-react";
import React from "react";

const DeleteAccount = () => {
  return (
    <>
      <div className="mt-12 border border-gray-200 rounded-md p-4">
        <h3 className="text-lg font-medium mb-2">Delete Your Account</h3>
        <p className="text-sm text-gray-600 mb-4">
          If you delete your account, all your personal information,
          including your email, password, profile details, and any saved
          preferences, will be permanently removed from our system. This action cannot be undone.
        </p>
        <button
          type="button"
          className="inline-flex items-center cursor-pointer px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-500 hover:bg-red-50 focus:outline-none transition-colors"
        >
          <X className="h-4 w-4 mr-2" />
          Close Account
        </button>
      </div>
    </>
  );
};

export default DeleteAccount;
