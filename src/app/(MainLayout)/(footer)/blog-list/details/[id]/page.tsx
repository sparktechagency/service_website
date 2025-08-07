/* eslint-disable @typescript-eslint/no-unused-vars */
//import BlogDetailMain from "@/components/blogDetail/BlogDetailMain";
import BlogDetailMain from "@/components/blogDetail/BlogDetailMain";
import { Metadata } from "next";



// export const metadata: Metadata = {
//   title: "Machmakers Blog",
//   description: "This is Blog",
// };

interface BlogDetailsPageProps {
  params: {
    id: string;
  };
  searchParams: {
    title?: string;
  };
}

// 👇 This dynamically sets the <title> and <meta name="description" />
export function generateMetadata(
  { searchParams }: BlogDetailsPageProps
): Metadata {
  const title = searchParams.title || "Machmakers Blog";
  return {
    title,
    description: "This is Blog",
  };
}

const  BlogDetailsPage = ({ params, searchParams }: BlogDetailsPageProps) => {
  const { id } = params;
 
  return (
    <>
     <BlogDetailMain id={id}/>
    </>
  )
};

export default BlogDetailsPage;
