"use client";

import BlogContent from "@/components/blogDetail/BlogContent";
import BlogHeader from "@/components/blogDetail/BlogHeader";
import RelatedPosts from "@/components/blogDetail/RelatedPosts";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import BlogDetailLoading from "@/components/loader/BlogDetailLoading";
import { useGetSingleBlogQuery } from "@/redux/features/blog/blogApi";

type TProps = {
    id: string
}

const BlogDetailMain = ({id} : TProps) => {
 // const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleBlogQuery(id);
  const relatedBlogs = data?.data?.relatedBlogs || [];

  const blog = data?.data?.blog;


  if (isLoading) return <BlogDetailLoading />;
  if (isError) return <ServerErrorCard />;
  if (!blog?.title) return <NotFoundCard title="Blog Not Found" />;

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white min-h-screen">
            <BlogHeader blog={blog} />
            <BlogContent blog={blog} />
          </div>
          {relatedBlogs?.length > 0 && <RelatedPosts blogs={relatedBlogs} />}
        </main>
      </div>
    </>
  );
};

export default BlogDetailMain;
