import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        I&rsquo;m a passionate UX designer and product manager with over 8 years of experience creating user-centered digital experiences. 
        I specialize in transforming complex problems into intuitive, accessible, and delightful user experiences. 
        My approach combines analytical thinking with creative design solutions to create products that users love.
      </p>
      
      <h2 className="text-xl font-bold text-gray-900 mt-6 mb-4">Career Objective</h2>
      <p className="text-gray-700 leading-relaxed">
        Seeking a leadership role where I can leverage my expertise in UX design and product management to drive innovation 
        and create impactful digital products.  I&rsquo;m particularly interested in opportunities within fintech, healthcare, or 
        education sectors where I can contribute to meaningful projects that improve   people&rsquo;s lives.
      </p>
    </div>
  );
};

export default AboutSection;