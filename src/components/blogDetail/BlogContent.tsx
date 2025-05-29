import React from "react";

// import TableOfContents from './TableOfContents';
import { BlogPost } from "@/types/blog.type";
import { TableOfContents } from "lucide-react";

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-12 overflow-hidden">
          <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-800 prose-headings:mt-10 prose-headings:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-teal-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline">
            <p className="text-xl md:text-2xl font-light text-gray-700 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            {/*             
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            /> */}
            <div className="text-justify text-gray-600">
              <p>
                The manufacturing landscape is evolving at an unprecedented
                pace. Industry 4.0, sustainability requirements, and global
                supply chain challenges are reshaping what employers expect from
                manufacturing engineers.
              </p>
              <p>
                As we move further into 2025, manufacturing engineers who
                possess the right combination of technical expertise and soft
                skills are finding themselves in high demand. Companies are
                increasingly seeking professionals who can navigate the
                complexities of modern manufacturing environments while driving
                innovation and efficiency.
              </p>
              <h2 id="skill-1">
                1. Advanced Automation and Robotics Integration
              </h2>
              <p>
                The ability to design, implement, and optimize automated
                manufacturing systems has become essential. Engineers who
                understand robotics programming, machine vision systems, and how
                to integrate these technologies into existing production lines
                are highly sought after.
              </p>
              <p>
                Companies are particularly interested in professionals who can
                identify opportunities for automation that maximize ROI while
                maintaining production quality and flexibility.
              </p>
              <h2 id="skill-2">2. Digital Twin Expertise</h2>
              <p>
                As virtual replicas of physical assets become standard practice,
                the ability to create and manage digital twins is increasingly
                valuable. Engineers who can develop accurate digital models of
                manufacturing processes are able to test changes virtually
                before implementing them on the factory floor.
              </p>
              <p>
                This expertise requires a combination of simulation skills, data
                analytics, and practical manufacturing knowledge.
              </p>
              <h2 id="skill-3">3. Sustainable Manufacturing Practices</h2>
              <p>
                With environmental regulations tightening globally,
                manufacturers need engineers who can develop sustainable
                processes that reduce waste, energy consumption, and carbon
                emissions.
              </p>
              <p>
                Experience with life cycle assessment, circular economy
                principles, and green manufacturing technologies are
                particularly valuable as companies work to meet their ESG
                (Environmental, Social, and Governance) goals.
              </p>
              <h2 id="skill-4">4. Advanced Data Analytics</h2>
              <p>
                The modern manufacturing environment generates vast amounts of
                data. Engineers who can leverage this data to improve processes,
                predict maintenance needs, and optimize production are in high
                demand.
              </p>
              <p>
                Skills in statistical analysis, machine learning, and data
                visualization are increasingly becoming core requirements rather
                than nice-to-haves
              </p>
              <h2 id="skill-5">5. Additive Manufacturing Knowledge</h2>
              <p>
                As 3D printing continues to mature, experience with various
                additive manufacturing technologies and materials is
                increasingly valuable. Engineers who understand when and how to
                apply these technologies for production (not just prototyping)
                have a distinct advantage.
              </p>
              <p>
                This includes knowledge of design for additive manufacturing
                (DfAM) principles and post-processing techniques.
              </p>
              <h2 id="skill-6">6. Supply Chain Optimization</h2>
              <p>
                Recent global disruptions have highlighted the importance of
                resilient supply chains. Manufacturing engineers with the
                ability to analyze and optimize supply networks, implement
                just-in-time manufacturing, and develop contingency plans are
                highly valued.
              </p>
              <p>
                This skill set often requires cross-functional knowledge
                spanning procurement, logistics, and inventory management.
              </p>
              <h2 id="skill-7">7. Cybersecurity Awareness</h2>
              <p>
                As manufacturing systems become more connected, they also become
                more vulnerable to cyber threats. Engineers who understand the
                security implications of industrial IoT devices and can
                implement appropriate safeguards are increasingly in demand.
              </p>
              <p>
                Perhaps the most underrated yet critical skill is the ability to
                communicate effectively across disciplines. Manufacturing
                engineers who can translate technical concepts for non-technical
                stakeholders and collaborate with IT, business, and design teams
                are invaluable.
              </p>
              <p>
                This skill becomes especially important as manufacturing becomes
                more integrated with other business functions and as teams
                become more diverse and global.
              </p>
              <h2 id="conclusion">Conclusion</h2>
              <p>
                The manufacturing engineers who will thrive in 2025 and beyond
                are those who combine deep technical expertise with adaptability
                and cross-functional skills. While specific technical
                requirements will vary by industry and company, these ten skill
                areas represent the broader trends shaping the profession.
              </p>
              <p>
                For professionals looking to advance their careers in
                manufacturing engineering, focusing development efforts on these
                areas will likely yield the greatest returns. For employers,
                building teams with these complementary skills will position
                your manufacturing operations for success in an increasingly
                complex and competitive landscape.
              </p>
              `
            </div>
          </div>

          {/* <div className="mt-10 pt-8 border-t border-gray-200">
            <SocialShareButtons title={post.title} />
          </div> */}
        </div>

        {/* Sidebar */}
        {/* <div className="lg:col-span-4"> */}
          {/* <div className="lg:sticky lg:top-8 space-y-10"> */}
            {/* Table of Contents */}
            {/* <TableOfContents /> */}

            {/* Author Card */}
            {/* <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                About the Author
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white text-xl font-medium flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{post.author}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Manufacturing technology specialist with over 15 years of
                    experience in industrial automation and process
                    optimization.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Newsletter Signup */}
            {/* <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest industry insights delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default BlogContent;
