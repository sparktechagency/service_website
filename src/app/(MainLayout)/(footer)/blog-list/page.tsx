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
    "career_&_skills",
    "business_&_hiring",
    "mindset_&_growth",
    "real_stories",
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
      setCurrentPage(1);
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
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 space-y-6">{content}</div>
      </div>
    </div>
  );
}

export default BlogListPage;
