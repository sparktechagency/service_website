import { useAppSelector } from '@/redux/hooks/hooks';
import { ProfileData } from '@/types/profile.type';
import React from 'react';


const Skills = () => {
  const { details } = useAppSelector((state) => state.candidate);
  

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 uppercase mb-4">Skills:</h2>
      <ul className="space-y-2">
        {details?.skill.map((skill, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-blue-500 mt-1">•</span>
            <span className="text-gray-600">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;