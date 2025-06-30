"use client";

import BlogContent from "@/components/blogDetail/BlogContent";
import BlogHeader from "@/components/blogDetail/BlogHeader";
import RelatedPosts from "@/components/blogDetail/RelatedPosts";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import BlogDetailLoading from "@/components/loader/BlogDetailLoading";
import { useGetSingleBlogQuery } from "@/redux/features/blog/blogApi";
import { useParams } from "next/navigation";

const BlogDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleBlogQuery(params.id);
  const relatedBlogs = data?.data?.relatedBlogs || [];

  if (isLoading) {
    return <BlogDetailLoading />;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }

  if (!isLoading && !isError && data?.data?.blog?.title) {
    return (
      <>
        <div className="min-h-screen bg-gray-50">
          <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="bg-white min-h-screen">
              <BlogHeader blog={data?.data?.blog} />
              <BlogContent blog={data?.data?.blog}/>
            </div>
            {relatedBlogs?.length > 0 && <RelatedPosts blogs={relatedBlogs} />}
          </main>
        </div>
      </>
    );
  }

  if (!isLoading && !isError && !data?.data?.blog?.title) {
    return <NotFoundCard title="Job Not Found" />;
  }
};

export default BlogDetailsPage;
