import BlogCard from "../blog/BlogCard"
import { TBlog } from "@/types/blog.type"


type TProps = {
    blogs: TBlog[]
}


const BlogList = ({ blogs }: TProps) => {
  return (
    <>
      {blogs?.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </>
  );
}

export default BlogList