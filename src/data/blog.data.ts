import { BlogPost, IBlog, IRecentBlog } from "@/types/blog.type";

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
    category: 'Industry Insights',
    date: 'May 15, 2025',
    author: 'Michael Chen',
    readTime: '8 min read',
    imageUrl: '/images/blogs/industry.jpg',
  },
  {
    id: 2,
    title: 'How AI is Revolutionizing Engineering Job Recruitment',
    excerpt: 'Artificial intelligence is changing how companies find and hire top engineering talent. Learn how AI is transforming the recruitment landscape.',
    category: 'Career & Skills',
    date: 'May 10, 2025',
    author: 'Sarah Johnson',
    readTime: '6 min read',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'Sustainable Manufacturing: Jobs of the Future',
    excerpt: 'Explore how th"e push for sustainability is creating new roles and opportunities in the manufacturing industry.',
    category: "Mindset & Growth",
    date: 'May 5, 2025',
    author: 'David Rodriguez',
    readTime: '10 min read',
    imageUrl: 'https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=600',
  }
];



export const blogPost: BlogPost = {
  id: 1,
  title: 'Top 10 Skills in Demand for Manufacturing Engineers in 2025',
  excerpt: 'Discover the most sought-after skills that manufacturing employers are looking for in today\'s competitive job market.',
  category: 'Industry Insights',
  date: 'May 15, 2025',
  author: 'Michael Chen',
  readTime: '8 min read',
  imageUrl: 'https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  content: `
    <p class="lead">The manufacturing landscape is evolving at an unprecedented pace. Industry 4.0, sustainability requirements, and global supply chain challenges are reshaping what employers expect from manufacturing engineers.</p>
    
    <p>As we move further into 2025, manufacturing engineers who possess the right combination of technical expertise and soft skills are finding themselves in high demand. Companies are increasingly seeking professionals who can navigate the complexities of modern manufacturing environments while driving innovation and efficiency.</p>
    
    <h2 id="skill-1">1. Advanced Automation and Robotics Integration</h2>
    <p>The ability to design, implement, and optimize automated manufacturing systems has become essential. Engineers who understand robotics programming, machine vision systems, and how to integrate these technologies into existing production lines are highly sought after.</p>
    <p>Companies are particularly interested in professionals who can identify opportunities for automation that maximize ROI while maintaining production quality and flexibility.</p>
    
    <h2 id="skill-2">2. Digital Twin Expertise</h2>
    <p>As virtual replicas of physical assets become standard practice, the ability to create and manage digital twins is increasingly valuable. Engineers who can develop accurate digital models of manufacturing processes are able to test changes virtually before implementing them on the factory floor.</p>
    <p>This expertise requires a combination of simulation skills, data analytics, and practical manufacturing knowledge.</p>
    
    <h2 id="skill-3">3. Sustainable Manufacturing Practices</h2>
    <p>With environmental regulations tightening globally, manufacturers need engineers who can develop sustainable processes that reduce waste, energy consumption, and carbon emissions.</p>
    <p>Experience with life cycle assessment, circular economy principles, and green manufacturing technologies are particularly valuable as companies work to meet their ESG (Environmental, Social, and Governance) goals.</p>
    
    <h2 id="skill-4">4. Advanced Data Analytics</h2>
    <p>The modern manufacturing environment generates vast amounts of data. Engineers who can leverage this data to improve processes, predict maintenance needs, and optimize production are in high demand.</p>
    <p>Skills in statistical analysis, machine learning, and data visualization are increasingly becoming core requirements rather than "nice-to-haves."</p>
    
    <h2 id="skill-5">5. Additive Manufacturing Knowledge</h2>
    <p>As 3D printing continues to mature, experience with various additive manufacturing technologies and materials is increasingly valuable. Engineers who understand when and how to apply these technologies for production (not just prototyping) have a distinct advantage.</p>
    <p>This includes knowledge of design for additive manufacturing (DfAM) principles and post-processing techniques.</p>
    
    <h2 id="skill-6">6. Supply Chain Optimization</h2>
    <p>Recent global disruptions have highlighted the importance of resilient supply chains. Manufacturing engineers with the ability to analyze and optimize supply networks, implement just-in-time manufacturing, and develop contingency plans are highly valued.</p>
    <p>This skill set often requires cross-functional knowledge spanning procurement, logistics, and inventory management.</p>
    
    <h2 id="skill-7">7. Cybersecurity Awareness</h2>
    <p>As manufacturing systems become more connected, they also become more vulnerable to cyber threats. Engineers who understand the security implications of industrial IoT devices and can implement appropriate safeguards are increasingly in demand.</p>
    <p>This doesn't mean every manufacturing engineer needs to be a cybersecurity expert, but a working knowledge of secure system design is becoming essential.</p>
    
    <h2 id="skill-8">8. Augmented Reality Applications</h2>
    <p>AR is transforming how products are designed, assembled, and maintained. Engineers who can develop and implement AR solutions for training, quality control, and maintenance procedures are seeing growing demand for their skills.</p>
    <p>This expertise typically combines 3D modeling capabilities with an understanding of AR platforms and human factors considerations.</p>
    
    <h2 id="skill-9">9. Collaborative Robotics Implementation</h2>
    <p>The rise of cobots (collaborative robots) requires engineers who understand how to design safe and effective human-robot collaboration. This includes knowledge of relevant safety standards, workflow design, and human factors engineering.</p>
    <p>Engineers who can successfully integrate cobots into existing workflows while maximizing both human and robot capabilities are particularly valuable.</p>
    
    <h2 id="skill-10">10. Cross-Disciplinary Communication</h2>
    <p>Perhaps the most underrated yet critical skill is the ability to communicate effectively across disciplines. Manufacturing engineers who can translate technical concepts for non-technical stakeholders and collaborate with IT, business, and design teams are invaluable.</p>
    <p>This skill becomes especially important as manufacturing becomes more integrated with other business functions and as teams become more diverse and global.</p>
    
    <h2 id="conclusion">Conclusion</h2>
    <p>The manufacturing engineers who will thrive in 2025 and beyond are those who combine deep technical expertise with adaptability and cross-functional skills. While specific technical requirements will vary by industry and company, these ten skill areas represent the broader trends shaping the profession.</p>
    <p>For professionals looking to advance their careers in manufacturing engineering, focusing development efforts on these areas will likely yield the greatest returns. For employers, building teams with these complementary skills will position your manufacturing operations for success in an increasingly complex and competitive landscape.</p>
  `
};

export const relatedPosts = [
  {
    id: 2,
    title: 'How AI is Transforming Quality Control in Manufacturing',
    excerpt: 'Explore how artificial intelligence is revolutionizing quality assurance processes.',
    category: 'Industry Insights',
    imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Sustainable Materials in Modern Manufacturing',
    excerpt: 'A deep dive into eco-friendly materials that are changing production processes.',
    category: 'Career & Skills',
    imageUrl: 'https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'The Rise of Micro-Factories: Small-Scale Manufacturing Trends',
    excerpt: 'How compact, agile production facilities are disrupting traditional manufacturing models.',
    category: 'Industry Trends',
    imageUrl: 'https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];