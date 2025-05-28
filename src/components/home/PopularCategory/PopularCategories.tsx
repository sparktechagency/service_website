import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    name: 'Engineering',
    positions: 420,
    icon: '/images/icons/water.png',
  },
  {
    name: 'Manufacturing & Production',
    positions: 385,
    icon: '/images/icons/water.png',
  },
  {
    name: 'Supply Chain & Logistics',
    positions: 312,
    icon: '/images/icons/water.png',
  },
  {
    name: 'Sales & Marketing',
    positions: 278,
    icon: '/images/icons/water.png',
  },
  {
    name: 'Office & IT Support',
    positions: 198,
    icon: '/images/icons/water.png',
  },
  {
    name: 'QHSE (Quality, Health, Safety & Environment)',
    positions: 164,
    icon: '/images/icons/water.png',
  },
  {
    name: 'Leadership & Management',
    positions: 142,
    icon: '/images/icons/water.png',
  },
  {
    name: 'Apprenticeships & Graduates',
    positions: 109,
    icon: '/images/icons/water.png',
  },
];


  
 

const PopularCategories = () => {
  return (
    <>
     <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Popular Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            name={category.name}
            positions={category.positions}
          />
        ))}
      </div>
    </section>
    </>
  )
}

export default PopularCategories