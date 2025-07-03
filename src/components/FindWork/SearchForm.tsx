"use client";

import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(15);

  useEffect(() => {
    const initialSearchTerm = searchParams.get("searchTerm");
    const initialDistance = searchParams.get("distance");

    if (initialSearchTerm) {
      setSearchTerm(initialSearchTerm);
    }
    if (initialDistance) {
      setSelected(parseInt(initialDistance));
    }
  }, [searchParams]);

  

  const [isOpen, setIsOpen] = useState(false);

  const options = [5, 10, 15, 25, 50, 100];

  const handleSelect = (value: number) => {
    setSelected(value);
    setIsOpen(false);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("searchTerm", searchTerm);
    params.set("distance", selected.toString());
    router.push(`/find-work?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-2 md:gap-4 bg-white p-4 rounded-lg shadow-sm"
      >
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
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
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search by job title, skills, keywords, city, postcode..."
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="relative flex-1">
          <div className="relative w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="w-full flex items-center justify-between p-2 border border-gray-300 rounded bg-white"
            >
              <span className="text-gray-700">Location</span>
              <div className="flex items-center gap-2">
                <span>{selected} miles</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-sm z-40">
                {options.map((value) => (
                  <li
                    key={value}
                    onClick={() => handleSelect(value)}
                    className={`p-2 cursor-pointer hover:bg-gray-50 ${
                      selected === value ? "bg-blue-50" : ""
                    }`}
                  >
                    {value} miles
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-secondary cursor-pointer rounded-md focus:outline-none"
          >
            Find Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
