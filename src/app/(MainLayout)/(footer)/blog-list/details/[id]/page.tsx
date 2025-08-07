/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata } from "next";
import BlogDetailMain from "@/components/blogDetail/BlogDetailMain";

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    title?: string;
    image?: string;
  }>;
}

// ✅ FIXED: Both params and searchParams are now Promise types
export async function generateMetadata({
  params,
  searchParams,
}: BlogDetailsPageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const title = resolvedSearchParams.title || "Machmakers Blog";
  const imageUrl = resolvedSearchParams.image || "/images/placeholder.jpg";
  
  return {
    title,
    description: "This is Blog",
    openGraph: {
      title,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  return (
    <>
      <BlogDetailMain id={id} />
    </>
  );
};

export default BlogDetailsPage;
