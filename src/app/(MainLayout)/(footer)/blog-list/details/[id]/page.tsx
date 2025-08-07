import type { Metadata } from "next";
import BlogDetailMain from "@/components/blogDetail/BlogDetailMain";



export const metadata: Metadata = {
  title: "Machmakers Blog",
  description: "This is Blog",
};

const BlogDetailsPage = () => {

  return (
    <>
     <BlogDetailMain/>
    </>
  )

  // return (
  //   <>
  //     <Head>
  //       <title>{title}</title>
  //       <meta name="description" content={description} />

  //       {/* Open Graph Meta Tags for Facebook, LinkedIn, etc. */}
  //       <meta property="og:type" content="article" />
  //       <meta property="og:title" content={title} />
  //       <meta property="og:description" content={description} />
  //       <meta property="og:image" content={image} />
  //       <meta property="og:url" content={blogUrl} />
  //       <meta property="og:site_name" content="Your Site Name" />

  //       {/* Twitter Card Meta Tags */}
  //       <meta name="twitter:card" content="summary_large_image" />
  //       <meta name="twitter:title" content={title} />
  //       <meta name="twitter:description" content={description} />
  //       <meta name="twitter:image" content={image} />
  //     </Head>  
  //   </>
  // );
};

export default BlogDetailsPage;
