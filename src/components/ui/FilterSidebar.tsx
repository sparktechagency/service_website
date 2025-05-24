"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { EducationLevel, ExperienceRange } from '@/types/candidate.type';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex w-full justify-between items-center text-left font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isOpen && (
        <div className="mt-3 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface FilterSidebarProps {
  locationRadius: number;
  setLocationRadius: (radius: number) => void;
  selectedExperience: ExperienceRange | null;
  setSelectedExperience: (experience: ExperienceRange | null) => void;
  selectedEducation: EducationLevel;
  setSelectedEducation: (education: EducationLevel) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  locationRadius,
  setLocationRadius,
  selectedExperience,
  setSelectedExperience,
  selectedEducation,
  setSelectedEducation
}) => {
  const experienceOptions: { label: string; value: ExperienceRange }[] = [
    { label: '0 Years', value: '0' },
    { label: '1-2 Years', value: '1-2' },
    { label: '3-4 Years', value: '3-4' },
    { label: '5-7 Years', value: '5-7' },
    { label: '8-9 Years', value: '8-9' },
    { label: '10-15 Years', value: '10-15' },
    { label: '15+ Years', value: '15+' },
  ];

  const educationOptions: { label: string; value: EducationLevel }[] = [
    { label: 'All', value: 'all' },
    { label: 'High School', value: 'highSchool' },
    { label: 'Certification', value: 'certification' },
    { label: 'Associate Degree', value: 'associate' },
    { label: 'Bachelor Degree', value: 'bachelor' },
    { label: 'Master Degree', value: 'master' },
  ];

  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow p-5 h-fit">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
          Clear All
        </button>
      </div>
      
      <FilterSection title="Location Radius">
        <div className="px-1">
          <input
            type="range"
            min="1"
            max="50"
            value={locationRadius}
            onChange={(e) => setLocationRadius(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>1 mile</span>
            <span>{locationRadius} miles</span>
            <span>50 miles</span>
          </div>
        </div>
      </FilterSection>
      
      <FilterSection title="Experience">
        {experienceOptions.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`exp-${option.value}`}
              name="experience"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={selectedExperience === option.value}
              onChange={() => setSelectedExperience(option.value)}
            />
            <label htmlFor={`exp-${option.value}`} className="ml-2 block text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </FilterSection>
      
      <FilterSection title="Education">
        {educationOptions.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`edu-${option.value}`}
              name="education"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={selectedEducation === option.value}
              onChange={() => setSelectedEducation(option.value)}
            />
            <label htmlFor={`edu-${option.value}`} className="ml-2 block text-sm text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </FilterSection>
    </aside>
  );
};

export default FilterSidebar;