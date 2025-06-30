import React from 'react';
import { TBlog } from '@/types/blog.type';
import RecentBlogCard from '../blog/RecentBlogCard';


type Tprops = {
  blogs: TBlog[]
}

const RelatedPosts  = ({ blogs }: Tprops) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Related Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {blogs?.map((blog: TBlog, index: number) => (
              <RecentBlogCard key={index} blog={blog} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;