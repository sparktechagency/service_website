import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBlogForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
    
  return (
    <>
      <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="font-medium mb-3">Search</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 py-2 px-3 pl-8 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoMdSearch className="h-4 w-4 absolute left-2.5 top-2.5 text-gray-400" />
        </div>
      </div>
    </>
  );
};

export default SearchBlogForm;
