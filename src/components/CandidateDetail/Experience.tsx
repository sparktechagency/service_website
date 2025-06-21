import React from 'react';
import { Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Senior UX Designer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: 'Led the redesign of the company\'s flagship product, resulting in a 35% increase in user engagement and a 20% decrease in support tickets. Managed a team of 4 designers and collaborated closely with product managers and engineers to deliver high-quality design solutions.'
    },
    {
      title: 'Product Designer',
      company: 'InnovateLabs',
      location: 'San Francisco, CA',
      period: 'Mar 2019 - Dec 2021',
      description: 'Designed user interfaces for mobile and web applications. Conducted user research and usability testing to inform design decisions. Created wireframes, prototypes, and visual designs for multiple products across different platforms.'
    },
    {
      title: 'UX/UI Designer',
      company: 'DesignStudio',
      location: 'Oakland, CA',
      period: 'Jun 2017 - Feb 2019',
      description: 'Collaborated with clients to create user-centered designs for websites and applications. Developed visual design systems and style guides. Participated in design sprints and workshops to solve complex design challenges.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Work Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-8 group">
            {/* Timeline connector */}
            {index < experiences.length - 1 && (
              <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200 group-hover:bg-blue-200 transition-colors duration-300"></div>
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <Calendar size={14} className="text-blue-500 group-hover:text-white transition-colors duration-300" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
              <div className="flex flex-wrap gap-x-2 text-sm text-gray-600 mt-1">
                <span className="font-medium">{exp.company}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">{exp.period}</div>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;