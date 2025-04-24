import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CategoryTabsProps {
  categories: string[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-4 py-4">
          {categories.map((category) => {
            const path = `/category/${category.toLowerCase()}`;
            const isActive = currentPath === path;
            
            return (
              <Link
                key={category}
                to={path}
                className={`
                  whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-primary-500 text-white' 
                    : 'text-secondary-800 hover:bg-gray-100'}
                `}
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;