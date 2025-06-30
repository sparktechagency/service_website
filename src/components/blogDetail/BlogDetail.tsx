import React from "react";
import { relatedPosts } from "@/data/blog.data";
import RelatedPosts from "./RelatedPosts";
import BlogContent from "./BlogContent";
import BlogHeader from "./BlogHeader";



const BlogDetail = () => {
  return (
    <div className="bg-white min-h-screen">
      <BlogHeader/>

      <BlogContent />

      <RelatedPosts posts={relatedPosts} />
    </div>
  );
};

export default BlogDetail;
