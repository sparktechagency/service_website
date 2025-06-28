/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TBlog } from '@/types/blog.type';
import Image from 'next/image';
import Link from 'next/link';
import getCategory from '@/utils/getCategory';
import getFormattedDate from '@/utils/getFormattedDate';

interface BlogCardProps {
  blog: TBlog;
}

const RecentBlogCard : React.FC<BlogCardProps> = ({ blog }) => {
  const { title, category, createdAt, descriptions } = blog;
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'industry_insights':
        return 'bg-blue-100 text-blue-800';
      case 'career_&_skills':
        return 'bg-emerald-100 text-emerald-800';
      case 'business_&_hiring':
        return 'bg-purple-100 text-purple-800';
      case 'mindset_&_growth':
        return 'bg-cyan-100 text-cyan-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={"/images/blogs/blog2.png"} 
          alt={title} 
          height={600}
          width={600}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <span className={`${getCategoryColor(category)} text-xs font-semibold px-3 py-1 rounded-full`}>
            {getCategory(category)}
          </span>
          {/* <div className="flex items-center ml-3 text-gray-500 text-xs">
            <Eye className="h-3 w-3 mr-1" />
            <span>{10}</span>
          </div> */}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-blue-800 transition-colors">
          <a href={`/blog/${blog?._id}`} className="hover:underline decoration-2 underline-offset-2">
            {title}
          </a>
        </h3>
         <div className="space-y-4 text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: descriptions }}></div>
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
           <div className="text-sm text-gray-500">
             {getFormattedDate(createdAt)}
          </div>
          <Link
            href={`/blog-list/details/${blog?._id}`} 
            className="text-blue-800 font-medium text-sm hover:text-blue-600 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RecentBlogCard;