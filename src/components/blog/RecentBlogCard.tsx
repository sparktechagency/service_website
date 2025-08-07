import React from 'react';
import { TBlog } from '@/types/blog.type';
import Image from 'next/image';
import Link from 'next/link';
import getCategory from '@/utils/getCategory';
import getFormattedDate from '@/utils/getFormattedDate';
import getCategoryColor from '@/utils/getCategoryColor';
import { baseUrl } from '@/redux/features/api/apiSlice';
import getBlogImgPath from '@/utils/getBlogImgPath';

interface BlogCardProps {
  blog: TBlog;
}

const RecentBlogCard : React.FC<BlogCardProps> = ({ blog }) => {
  const { title, category, createdAt, descriptions, image } = blog;
  const imgPath = image?.length > 0 ? baseUrl+ getBlogImgPath(blog?.image[0]) : "/images/placeholder.jpg";


  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imgPath}
          alt={title}
          height={600}
          width={600}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder.jpg";
          }}
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
            href={`/blog-list/details/${blog?._id}?title=${title}&image=${imgPath}`} 
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