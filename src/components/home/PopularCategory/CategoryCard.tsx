"use client"
import { baseUrl } from "@/redux/features/api/apiSlice";
import { ICategory } from "@/types/category.type";
import Image from "next/image";


type TProps = {
   category: ICategory
}

const CategoryCard = ({ category }: TProps) => {

  const icon = category ? (category?.image === null ? "/images/icon_placeholder.jpg" : baseUrl + category?.image) : "/images/icon_placeholder.jpg";


  return (
    <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="bg-white p-3 rounded-lg">
        <Image
          src={icon}
          alt={`Icon`}
          width={80}
          height={80}
          className="w-8 h-8 object-contain"
        />
      </div>
      <div>
        <h3 className="font-semibold text-[15px] text-gray-800">{category?.category}</h3>
        {/* <p className="text-sm text-gray-500">{positions} Open positions</p> */}
      </div>
    </div>
  );
};
export default CategoryCard;
