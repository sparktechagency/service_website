import React from "react";
import { Calendar, Tag } from "lucide-react";
import getCategory from "@/utils/getCategory";
import getFormattedDate from "@/utils/getFormattedDate";
import { TBlog } from "@/types/blog.type";

type TProps = {
  blog: TBlog
}

const BlogHeader = ({ blog }: TProps) => {
  
  const imgPath = "/images/placeholder.jpg";


  return (
    <header className="relative w-full">
      <div style={{
          backgroundImage: `url(${imgPath})`
        }} className={`relative h-[35vh] md:h-[55vh] lg:h-[65vh] rounded-md overflow-hidden w-full bg-center bg-no-repeat bg-cover flex items-center justify-center px-4`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(17,24,39,0.3)] z-10"></div>
      </div>

      {/* Title and Meta Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white z-10 transform transition-transform duration-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-4 opacity-90">
            <Tag size={16} className="text-teal-400" />
            <span className="text-teal-400 font-medium text-sm">
              {getCategory(blog?.category as string)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
            {blog?.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-100 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-teal-400" />
                <span>{getFormattedDate(blog?.createdAt as string)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
