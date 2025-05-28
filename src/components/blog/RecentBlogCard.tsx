/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Eye } from 'lucide-react';
import { IRecentBlog } from '@/types/blog.type';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  blog: IRecentBlog;
}

const RecentBlogCard : React.FC<BlogCardProps> = ({ blog }) => {
  const { title, excerpt, category, date, author, readTime, imageUrl } = blog;
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Industry Insights':
        return 'bg-blue-100 text-blue-800';
      case 'Career & Skills':
        return 'bg-emerald-100 text-emerald-800';
      case 'Business & Hiring':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl} 
          alt={title} 
          height={600}
          width={600}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <span className={`${getCategoryColor(category)} text-xs font-semibold px-3 py-1 rounded-full`}>
            {category}
          </span>
          <div className="flex items-center ml-3 text-gray-500 text-xs">
            <Eye className="h-3 w-3 mr-1" />
            <span>{10}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-blue-800 transition-colors">
          <a href={`/blog/${blog.id}`} className="hover:underline decoration-2 underline-offset-2">
            {title}
          </a>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">{author}</span> • {date}
          </div>
          <Link
            href={`/blog-list/details/${blog.id}`} 
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