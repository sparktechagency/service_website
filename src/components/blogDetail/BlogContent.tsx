import { useAppSelector } from "@/redux/hooks/hooks";
import React from "react";

const BlogContent = () => {
  const { blog } = useAppSelector((state) => state.blog);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-12 overflow-hidden">
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-800 prose-headings:mt-10 prose-headings:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-teal-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog?.descriptions as string }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
