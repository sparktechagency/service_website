"use client";

import BlogDetail from "@/components/blogDetail/BlogDetail";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import BlogDetailLoading from "@/components/loader/BlogDetailLoading";
import { blogPost } from "@/data/blog.data";
import { useGetSingleBlogQuery } from "@/redux/features/blog/blogApi";
import { useParams } from "next/navigation";

const BlogDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleBlogQuery(params.id);

  if (isLoading) {
    return <BlogDetailLoading />;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }

  if (!isLoading && !isError && data?.data?.blog?.title) {
    return (
      <>
        {/* <EmployerSimpleJob job={data?.data?.blog} /> */}
        <div className="min-h-screen bg-gray-50">
          <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <BlogDetail post={blogPost} />
          </main>
        </div>
      </>
    );
  }

  if (!isLoading && !isError && !data?.data?.jobDetails?.title) {
    return <NotFoundCard title="Job Not Found" />;
  }
};

export default BlogDetailsPage;
