import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (selectedIds: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedOptions,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const handleOptionChange = (id: string) => {
    const newSelected = selectedOptions.includes(id)
      ? selectedOptions.filter(optionId => optionId !== id)
      : [...selectedOptions, id];
    
    onChange(newSelected);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-left font-medium text-secondary-900"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
      >
        <span>{title}</span>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {isExpanded && (
        <div className="mt-3 space-y-2">
          {options.map((option) => (
            <label key={option.id} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
              />
              <span className="ml-2 text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

interface FilterSidebarProps {
  filters: {
    [key: string]: {
      options: FilterOption[];
      selected: string[];
    };
  };
  onFilterChange: (category: string, selected: string[]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileFilters = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Mobile filter toggle */}
      <div className="lg:hidden flex justify-between items-center mb-4">
        <button
          onClick={toggleMobileFilters}
          className="flex items-center text-sm text-secondary-900 font-medium"
        >
          <Filter size={18} className="mr-1" />
          Filters
        </button>
      </div>

      {/* Filter sidebar - desktop always visible, mobile conditional */}
      <div className={`
        lg:block 
        ${isMobileOpen ? 'block' : 'hidden'} 
        bg-white lg:bg-transparent 
        lg:static fixed inset-0 z-40 
        lg:p-0 p-4 pt-16
        lg:w-auto w-full
        overflow-y-auto
      `}>
        {/* Close button - mobile only */}
        {isMobileOpen && (
          <button 
            onClick={toggleMobileFilters}
            className="lg:hidden absolute top-4 right-4 text-gray-500"
          >
            <X size={24} />
          </button>
        )}

        {/* Filter sections */}
        <div className="space-y-2">
          {Object.entries(filters).map(([category, { options, selected }]) => (
            <FilterSection
              key={category}
              title={category}
              options={options}
              selectedOptions={selected}
              onChange={(selectedIds) => onFilterChange(category, selectedIds)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;