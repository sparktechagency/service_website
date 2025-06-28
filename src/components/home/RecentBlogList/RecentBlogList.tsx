"use client";

import RecentBlogCard from "@/components/blog/RecentBlogCard";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import RecentBlogLoading from "@/components/loader/RecentBlogLoading";
import { useGetRecentBlogsQuery } from "@/redux/features/blog/blogApi";
import { TBlog } from "@/types/blog.type";

const RecentBlogList = () => {
  const { data, isLoading, isError } = useGetRecentBlogsQuery([
    { name: "page", value: 1 },
    { name: "limit", value: 3 },
  ]);

  const blogs = data?.data?.data || [];

  
  let content: React.ReactNode;

  if (isLoading) {
    return <RecentBlogLoading />;
  }

  if (!isLoading && !isError && blogs?.length === 0) {
    content = <NotFoundCard title="There is no Blog" />;
  }

  if (!isLoading && !isError && blogs?.length > 0) {
    content = (
      <>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs?.map((blog: TBlog, index: number) => (
              <RecentBlogCard key={index} blog={blog} />
            ))}
          </div>
      </>
    );
  }

  if (!isLoading && isError) {
    content = <ServerErrorCard />;
  }


  return (
    <>
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto px:2 sm:px-4">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Recent Blogs
          </h2>
          {content}
        </div>
      </section>
    </>
  );
};

export default RecentBlogList;
