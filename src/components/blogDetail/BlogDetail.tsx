import React, { useEffect } from 'react';
// import Footer from './Footer';
import { relatedPosts } from '@/data/blog.data';
import RelatedPosts from './RelatedPosts';
import BlogContent from './BlogContent';
import BlogHeader from './BlogHeader';
import { BlogPost } from '@/types/blog.type';

interface BlogDetailProps {
  post: BlogPost;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  useEffect(() => {
    // Update document title with blog post title
    document.title = post.title;
    
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Add scroll reveal animation to content sections
    const revealElements = document.querySelectorAll('.blog-content h2, .blog-content p');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, [post.title]);
  
  return (
    <div className="bg-white min-h-screen">
      {/* <style jsx="true">{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style> */}
      
      {/* Blog Header with Hero Image */}
      <BlogHeader post={post} />
      
      {/* Blog Content */}
      <BlogContent post={post} />
      
      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
      
      {/* Footer */}
    </div>
  );
};

export default BlogDetail;