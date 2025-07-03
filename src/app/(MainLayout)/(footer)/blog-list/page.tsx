"use client"
import BlogListLoading from "@/components/loader/BlogListLoading";
import { useGetBlogsQuery } from "@/redux/features/blog/blogApi";
import SearchBlogForm from "@/components/BlogList/SearchBlogForm";
import FilterBlog from "@/components/BlogList/FilterBlog";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import BlogList from "@/components/BlogList/BlogList";
import Pagination from "@/components/ui/Pagination";
import { useEffect, useState } from "react";




const BlogListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([
    "industry_insights",
  ]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, isError } = useGetBlogsQuery([
    { name: "page", value: currentPage },
    { name: "limit", value: 5 },
    { name: "searchTerm", value:searchTerm},
    { name: "category", value: selectedValues },
  ]);

  const blogs = data?.data?.data || [];
  const meta = data?.data?.meta || {};

  //debounced handle
  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let timeoutId;
    clearTimeout(timeoutId); //clear timeout after onChange
    timeoutId = setTimeout(() => {
      setSearchTerm(searchQuery);
    }, 600);
  }, [searchQuery]);



  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let content: React.ReactNode;

  if (isLoading) {
    content = <BlogListLoading />;
  }

  if (!isLoading && !isError && blogs?.length === 0) {
    content = <NotFoundCard title="There is no Blog" />;
  }

  if (!isLoading && !isError && blogs?.length > 0) {
    content = (
      <>
        <BlogList blogs={blogs} />
        {meta?.total > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={meta?.totalPage}
            onPageChange={handlePageChange}
          />
        )}
      </>
    );
  }

  if (!isLoading && isError) {
    content = <ServerErrorCard />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 space-y-6">
          <SearchBlogForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          <FilterBlog
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
          />

          {/* Recent Post */}
          {/* <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-medium mb-3">Recent Post</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={80}
                      height={60}
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">
                      {post.date} • {post.comments} Comments
                    </div>
                    <h3 className="text-sm leading-tight">{post.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Gallery */}
          {/* <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-medium mb-3">Gallery</h2>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div> */}

          {/* Popular Tag */}
          {/* <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-medium mb-3">Popular Tag</h2>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs px-3 py-1 rounded-full ${
                    tag === "Programming" ? "bg-yellow-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div> */}
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-6">{content}</div>
      </div>
    </div>
  );
}

export default BlogListPage;
