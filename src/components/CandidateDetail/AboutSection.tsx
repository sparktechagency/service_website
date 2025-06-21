"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import React from "react";

const AboutSection: React.FC = () => {
  const { details } = useAppSelector((state) => state.candidate);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed">{details?.details}</p>
    </div>
  );
};

export default AboutSection;
