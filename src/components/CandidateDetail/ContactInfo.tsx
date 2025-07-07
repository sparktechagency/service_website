"use client";
import React from 'react';
import { Mail, Phone, Download } from 'lucide-react';
import { useAppSelector } from '@/redux/hooks/hooks';

const ContactInfo: React.FC = () => {
  const { details } = useAppSelector((state) => state.candidate);

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = details?.resume as string;
    link.download = "document.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h2>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-700 group">
          <Mail size={18} className="mr-3 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
          <span className="hover:text-blue-600 transition-colors duration-300">
            {details?.email}
          </span>
        </div>
        
        <div className="flex items-center text-gray-700 group">
          <Phone size={18} className="mr-3 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
          <span className="hover:text-blue-600 transition-colors duration-300">
            {details?.phone_number}
          </span>
        </div>
        
      </div>
      
      <div className="mt-6">
        <button onClick={handleDownload} className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-opacity-50">
          <Download size={18} className="mr-2" />
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;