"use client"

import BlogDetail from "@/components/blogDetail/BlogDetail";
import { blogPost } from "@/data/blog.data";

const BlogDetailsPage = () => {
  


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
         <BlogDetail post={blogPost} />
      </main>
    </div>
  )
}

export default BlogDetailsPage;