"use client"
import { ICategory } from "@/types/category.type";
import Image from "next/image";
import Link from "next/link";


type TProps = {
   category: ICategory
}

const CategoryCard = ({ category }: TProps) => {

  const icon = category.image || "/images/icon_placeholder.jpg";


  return (
    <Link href={`/jobs-by-category/${category?._id}`} className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
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
      </div>
    </Link>
  );
};
export default CategoryCard;
