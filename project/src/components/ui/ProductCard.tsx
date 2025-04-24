import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Device } from '../../types';

interface ProductCardProps {
  device: Device;
  score: number;
  onAddToComparison: (device: Device) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ device, score, onAddToComparison }) => {
  const { name, image, specs } = device;

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToComparison(device);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        {/* Score Badge */}
        <div className="absolute top-2 left-2 bg-primary-500 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center z-10">
          <span>{score}</span>
        </div>
        
        {/* Add to comparison button */}
        <button 
          onClick={handleAddClick}
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-10 transition-colors hover:bg-primary-50"
          aria-label="Add to comparison"
        >
          <PlusCircle size={24} className="text-primary-500" />
        </button>
        
        {/* Image */}
        <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
          <img 
            src={image} 
            alt={name} 
            className="h-full object-contain" 
          />
        </div>
      </div>
      
      {/* Info */}
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2 text-secondary-900">{name}</h3>
        
        {/* Specifications */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          {Object.entries(specs).slice(0, 4).map(([key, value]) => (
            <div key={key} className="flex items-center py-1">
              <span className="text-gray-600 mr-2">{key}:</span>
              <span className="text-secondary-700 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;