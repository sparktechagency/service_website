import getCategory from "@/utils/getCategory";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  selectedValues: string[];
  setSelectedValues: Dispatch<SetStateAction<string[]>>;
};

const FilterBlog = ({ selectedValues, setSelectedValues }: TProps) => {
  const categoryValues = [
    "industry_insights",
    "career_&_skills",
    "business_&_hiring",
    "mindset_&_growth",
    "real_stories",
  ];

  const handleCheckboxChange = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">Category</h2>
        </div>
        <div className={`mt-3 space-y-2`}>
          {categoryValues?.map((value, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                value={value}
                id={`category-${value}`}
                className="h-4 w-4 rounded cursor-pointer border-gray-300 text-yellow-500 focus:ring-yellow-500"
                defaultChecked={selectedValues.includes(value)}
                onChange={() => handleCheckboxChange(value)}
              />
              <label
                htmlFor={`category-${value}`}
                className={`ml-2 text-sm ${
                  selectedValues.includes(value) ? "font-medium" : ""
                }`}
              >
                {getCategory(value)}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterBlog;
