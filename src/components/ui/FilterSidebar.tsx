/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { EducationLevel, ExperienceRange } from '@/types/candidate.type';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}




const FilterSidebar = () => {
  
  const [filters, setFilters] = useState({
    skills: [],
    jobTitles: [],
    seeking: [],
    location: '',
    radius: 25
  });

   const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      radius: parseInt(e.target.value, 10)
    });
  };

  return (
    <aside className="w-full md:w-84 bg-white rounded-lg shadow p-5 h-fit">
      <div className="flex items-center justify-between mb-4">
        {/* <h2 className="text-lg font-semibold text-gray-900">Filters</h2> */}
        <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
          Clear All
        </button>
      </div>
        <div className="rounded-lg">
            <h2 className="font-medium mb-3">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="search by name, skill, location here..."
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 py-2 px-3 pl-8 text-sm"
                //value={searchQuery}
                //onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute left-2.5 top-2.5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

      <div className="space-y-4 mt-6">
        <h1>Location</h1>
          {/* <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              City, State or ZIP
            </label>
            <input
              id="location"
              type="text"
              value={filters.location}
              // onChange={handleLocationChange}
              placeholder="e.g. Chicago, IL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div> */}
          
          <div>
            <label htmlFor="radius" className="block text-sm font-medium text-gray-700 mb-1">
              Radius: {filters.radius} miles
            </label>
            <input
              id="radius"
              type="range"
              min="5"
              max="100"
              step="5"
              value={filters.radius}
              onChange={handleRadiusChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5 miles</span>
              <span>100 miles</span>
            </div>
          </div>
        </div>
{/*       
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
      </FilterSection> */}
      
      {/* <FilterSection title="Experience">
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
      </FilterSection> */}
      
      {/* <FilterSection title="Education">
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
      </FilterSection> */}
    </aside>
  );
};

export default FilterSidebar;