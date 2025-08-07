"use client";

import Head from "next/head";
import BlogContent from "@/components/blogDetail/BlogContent";
import BlogHeader from "@/components/blogDetail/BlogHeader";
import RelatedPosts from "@/components/blogDetail/RelatedPosts";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import BlogDetailLoading from "@/components/loader/BlogDetailLoading";
import { useGetSingleBlogQuery } from "@/redux/features/blog/blogApi";
import { useParams } from "next/navigation";
import getBlogImgPath from "@/utils/getBlogImgPath";
import { baseUrl } from "@/redux/features/api/apiSlice";

const BlogDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleBlogQuery(params.id);
  const relatedBlogs = data?.data?.relatedBlogs || [];

  const blog = data?.data?.blog;
  const title = blog?.title || "Blog Post";
  const description =
    blog?.description || blog?.shortText || "Read the full article.";
  const image =
    blog?.image?.length > 0
      ? `${baseUrl}${getBlogImgPath(blog.image[0])}`
      : `${baseUrl}/images/placeholder.jpg`;
  const blogUrl = `${baseUrl}/blog-list/details/${
    params.id
  }?title=${encodeURIComponent(title)}`;

  if (isLoading) return <BlogDetailLoading />;
  if (isError) return <ServerErrorCard />;
  if (!blog?.title) return <NotFoundCard title="Job Not Found" />;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph Meta Tags for Facebook, LinkedIn, etc. */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:site_name" content="Your Site Name" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
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

export default BlogDetailsPage;
