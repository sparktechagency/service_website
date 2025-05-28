import RecentBlogCard from "@/components/blog/RecentBlogCard"
import { recentBlogs } from "@/data/blog.data"

const RecentBlogList = () => {
  return (
    <>
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto px:2 sm:px-4">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
           Recent Blogs
          </h2>
           {/* <div className="w-full md:w-3/4 space-y-6"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentBlogs.map(blog => (
            <RecentBlogCard key={blog.id} blog={blog} />
          ))}
        {/* </div> */}
        </div>
        </div>
      </section>
    </>
  )
}

export default RecentBlogList