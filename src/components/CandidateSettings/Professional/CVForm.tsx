"use client";
import UploadCVModal from "@/components/modal/UploadCVModal";
import {
  File,
  MoreVertical,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const CVForm = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-lg font-medium text-gray-900">Your CV/Resume</h1>

        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Resume Item */}
            <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded">
                    <File className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Product Designer
                    </p>
                    <p className="text-sm text-gray-500">4.7 MB</p>
                    <div className="h-1 w-1 bg-red-500 rounded-full mt-1"></div>
                  </div>
                </div>

                <button
                  onClick={toggleMenu}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-3 top-12 bg-white shadow-lg rounded-md border border-gray-200 w-40 z-10">
                  <div className="py-1">
                    <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 flex items-center gap-2">
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
           <UploadCVModal jobId={"1234"}/>
         </div>
        </div>
      </div>
    </>
  );
};

export default CVForm;
