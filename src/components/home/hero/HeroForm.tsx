"use client"

const HeroForm = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full max-w-4xl mx-auto">
        {/* Location Dropdown */}
        <select className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white text-gray-700 shadow focus:outline-none">
          <option value="">Select Location</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
        </select>
  
        {/* Category Dropdown */}
        <select className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white text-gray-700 shadow focus:outline-none">
          <option value="">Select Category</option>
          <option>Fence Setup</option>
          <option>Plumbing</option>
          <option>Roofing</option>
          <option>Painting</option>
        </select>
  
        {/* Search Button */}
        <button className="w-full md:w-auto px-6 py-3 cursor-pointer bg-primary text-white rounded-lg font-medium hover:bg-[#16324f] transition duration-200">
          Search
        </button>
      </div>
    );
  };
  
  export default HeroForm;
  