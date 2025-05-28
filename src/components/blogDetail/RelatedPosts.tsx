import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface RelatedPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

const RelatedPosts : React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Related Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={post.imageUrl} 
                  alt={post.title}
                  height={600}
                  width={600}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <a 
                    href={`#post-${post.id}`} 
                    className="inline-flex items-center text-teal-600 font-medium text-sm group"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;