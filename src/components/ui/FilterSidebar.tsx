"use client";
import React, { useState } from "react";



const FilterSidebar = () => {
  const [radius, setRadius] = useState<number>(5)

  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(parseInt(e.target.value, 10));
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

        <div>
          <label
            htmlFor="radius"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Radius: {radius} miles
          </label>
          <input
            id="radius"
            type="range"
            min="5"
            max="100"
            step="5"
            value={radius}
            onChange={handleRadiusChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5 miles</span>
            <span>100 miles</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            type="submit"
            className="px-4 py-1.5 w-full text-white bg-secondary cursor-pointer rounded-md focus:outline-none"
          >
            Search
          </button>
        </div>
    </aside>
  );
};

export default FilterSidebar;
