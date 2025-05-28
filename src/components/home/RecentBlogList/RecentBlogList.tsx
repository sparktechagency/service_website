
const RecentBlogList = () => {
  return (
    <>
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto px:2 sm:px-4">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
           Recent Blogs
          </h2>
           <div className="w-full md:w-3/4 space-y-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
        </div>
      </section>
    </>
  )
}

export default RecentBlogList