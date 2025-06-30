/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Calendar, Tag, Eye } from "lucide-react";
import { BlogPost } from "@/types/blog.type";
import { useAppSelector } from "@/redux/hooks/hooks";
import getCategory from "@/utils/getCategory";
import getFormattedDate from "@/utils/getFormattedDate";



const BlogHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    const { blog } = useAppSelector((state) => state.blog);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <header className="relative w-full">
      {/* Hero Image with Parallax Effect */}
      {/* <div className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-3000"
          style={{ 
            backgroundImage: `url(${post.imageUrl})`,
            transform: isScrolled ? 'scale(1.05) translateY(-2%)' : 'scale(1) translateY(0)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
      </div> */}
      <div className="relative h-[35vh] md:h-[55vh] lg:h-[65vh] rounded-md overflow-hidden w-full bg-[url('/images/blogs/industry.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center px-4">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(17,24,39,0.7)] z-10"></div>
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
            {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">
                {post.author.charAt(0)}
              </div>
              <span>{post.author}</span>
            </div> */}

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-teal-400" />
                <span>{getFormattedDate(blog?.createdAt as string)}</span>
              </div>

              <div className="flex items-center">
                <Eye size={16} className="mr-2 text-teal-400" />
                <span>{20}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
