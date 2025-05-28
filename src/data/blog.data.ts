import { IBlog, IRecentBlog } from "@/types/blog.type";

export const blogPosts: IBlog[] = [
    {
      id: 1,
      title: "Proin sit amet massa eget odio consectetur ultricies.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog1.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 2,
      title: "Praesent tristique sagittis malesuada. Nulla vulputate pretium",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog2.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 3,
      title: "Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog3.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 4,
      title: "Praesent hendrerit diam ac metus finibus, id vehicula velit suscipit.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog4.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
    {
      id: 5,
      title: "Nullam et est vel eros sodales sollicitudin.",
      date: "Nov 12, 2021",
      comments: 25,
      image: "/images/blogs/blog1.png",
      excerpt:
        "Integer imperdiet mauris eget nisi ultricies, quis hendrerit est consequat. Vivamus et vulputat odio. Maecenas porta erat sed massa bibendum pellentesque.",
    },
  ]


 export const recentBlogs: IRecentBlog[] = [
  {
    id: 1,
    title: 'Top 10 Skills in Demand for Manufacturing Engineers in 2025',
    excerpt: 'Discover the most sought-after skills that manufacturing employers are looking for in today\'s competitive job market.',
    category: 'Manufacturing',
    date: 'May 15, 2025',
    author: 'Michael Chen',
    readTime: '8 min read',
    imageUrl: 'https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'How AI is Revolutionizing Engineering Job Recruitment',
    excerpt: 'Artificial intelligence is changing how companies find and hire top engineering talent. Learn how AI is transforming the recruitment landscape.',
    category: 'Technology',
    date: 'May 10, 2025',
    author: 'Sarah Johnson',
    readTime: '6 min read',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Sustainable Manufacturing: Jobs of the Future',
    excerpt: 'Explore how the push for sustainability is creating new roles and opportunities in the manufacturing industry.',
    category: 'Engineering',
    date: 'May 5, 2025',
    author: 'David Rodriguez',
    readTime: '10 min read',
    imageUrl: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];