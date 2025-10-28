"use client";
import { baseUrl } from "@/redux/features/api/apiSlice";
import { TBlog } from "@/types/blog.type";
import getBlogImgPath from "@/utils/getBlogImgPath";
import getCategory from "@/utils/getCategory";
import getCategoryColor from "@/utils/getCategoryColor";
import getFormattedDate from "@/utils/getFormattedDate";
import Image from "next/image";
import { useRouter } from "next/navigation";

type TProps = {
  blog: TBlog;
};

const BlogCard = ({ blog }: TProps) => {
  const router = useRouter();
  const imgPath =
    blog?.image?.length > 0
      ? baseUrl + getBlogImgPath(blog?.image[0])
      : "/images/placeholder.jpg";

  return (
    <>
      <div className="border rounded-lg overflow-hidden flex flex-col md:flex-row p-4 border-gray-200 hover:shadow-md">
        <div className="md:w-2/5 h-48 md:h-auto relative">
          <Image
            src={imgPath}
            alt="blog_img"
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/placeholder.jpg";
            }}
          />
        </div>
        <div className="p-4 md:p-6 md:w-3/5">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {getFormattedDate(blog?.createdAt)}
            <span
              className={`${getCategoryColor(
                blog.category
              )} text-xs font-semibold px-3 py-1 rounded-full`}
            >
              {getCategory(blog.category)}
            </span>
          </div>
          <h2 className="text-lg font-medium mb-2">{blog?.title}</h2>
          <div
            className="space-y-4 text-gray-600 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: blog?.descriptions }}
          ></div>
          <div
            onClick={() =>
              router.push(
                `/blog-list/details/${blog?._id}?title=${blog?.title}&image=${imgPath}`
              )
            }
            className="flex mt-1 items-center text-sm text-blue-500 cursor-pointer"
          >
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
