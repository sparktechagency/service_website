"use client"
import React, { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2'))
      .filter(heading => heading.id)
      .map(heading => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      }));
    
    setTocItems(headings);

    const observerOptions = {
      rootMargin: '-10% 0% -80% 0%',
      threshold: 0,
    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);
    
    document.querySelectorAll('h2[id]').forEach(heading => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className="sticky top-8 hidden lg:block">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h3>
      <ul className="space-y-2 text-sm">
        {tocItems.map((item) => (
          <li 
            key={item.id}
            className={`border-l-2 pl-3 py-1 transition-all duration-200 hover:text-teal-600 cursor-pointer ${
              activeId === item.id 
                ? 'border-teal-500 text-teal-600 font-medium' 
                : 'border-gray-200 text-gray-600'
            }`}
            style={{ paddingLeft: `${(item.level - 2) * 0.5 + 0.75}rem` }}
            onClick={() => handleClick(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;