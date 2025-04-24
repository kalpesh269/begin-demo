import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sampleDevices, sampleFilters } from '../data/sampleDevices';
import { Device } from '../types';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import ComparisonGrid from '../components/ui/ComparisonGrid';
import FilterSidebar from '../components/ui/FilterSection';
import { Filter, ArrowUpDown, X } from 'lucide-react';

const ComparisonPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Filter devices by category if provided
  const filteredDevices = category
    ? sampleDevices.filter(device => device.category === category)
    : sampleDevices;
  
  const [comparedDevices, setComparedDevices] = useState<Device[]>([]);
  const [filters, setFilters] = useState(sampleFilters);
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showComparison, setShowComparison] = useState(false);
  
  // Handle adding device to comparison
  const handleAddToComparison = (device: Device) => {
    if (comparedDevices.length < 4) {
      if (!comparedDevices.find(d => d.id === device.id)) {
        setComparedDevices([...comparedDevices, device]);
        
        // Show comparison when at least 2 devices are selected
        if (comparedDevices.length >= 1) {
          setShowComparison(true);
        }
      }
    } else {
      alert('You can compare up to 4 devices at once.');
    }
  };
  
  // Handle removing device from comparison
  const handleRemoveDevice = (deviceId: string) => {
    setComparedDevices(comparedDevices.filter(device => device.id !== deviceId));
    
    // Hide comparison if less than 2 devices
    if (comparedDevices.length <= 2) {
      setShowComparison(false);
    }
  };
  
  // Handle filter changes
  const handleFilterChange = (category: string, selected: string[]) => {
    setFilters({
      ...filters,
      [category]: {
        ...filters[category],
        selected,
      },
    });
  };
  
  // Handle sort changes
  const handleSortChange = (sortField: string) => {
    if (sortBy === sortField) {
      // Toggle sort order if clicking the same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Change sort field and default to ascending
      setSortBy(sortField);
      setSortOrder('asc');
    }
  };
  
  // Generate a score based on device attributes (simplified for demo)
  const calculateScore = (device: Device): number => {
    // Simplified scoring based on a few key specs
    let score = 0;
    
    // Base score from price (higher price = higher base score)
    score += device.price / 200;
    
    // Add points for RAM
    const ram = String(device.specs.memory || '').replace(/\D/g, '');
    score += parseInt(ram, 10) || 0;
    
    // Add points for storage
    const storage = String(device.specs.storage || '').replace(/\D/g, '');
    score += (parseInt(storage, 10) || 0) / 32;
    
    // Battery points
    const battery = String(device.specs.battery || '').replace(/\D/g, '');
    score += (parseInt(battery, 10) || 0) / 1000;
    
    // Round to nearest whole number
    return Math.round(score);
  };
  
  // Apply filters and sorting
  const processedDevices = filteredDevices
    .filter(device => {
      // Apply all active filters
      for (const [category, { selected }] of Object.entries(filters)) {
        if (selected.length > 0) {
          // Skip this filter if no options are selected
          switch (category) {
            case 'Brand':
              if (!selected.includes(device.brand.toLowerCase())) {
                return false;
              }
              break;
            case 'Price Range':
              const price = device.price;
              let matchesPrice = false;
              
              for (const range of selected) {
                if (
                  (range === 'under-300' && price < 300) ||
                  (range === '300-600' && price >= 300 && price <= 600) ||
                  (range === '600-1000' && price >= 600 && price <= 1000) ||
                  (range === 'over-1000' && price > 1000)
                ) {
                  matchesPrice = true;
                  break;
                }
              }
              
              if (!matchesPrice) return false;
              break;
            // Add more filter handling as needed
          }
        }
      }
      return true;
    })
    .sort((a, b) => {
      // Apply sorting
      let aValue, bValue;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'name':
          aValue = a.name;
          bValue = b.name;
          return sortOrder === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        case 'releaseDate':
          aValue = new Date(a.releaseDate).getTime();
          bValue = new Date(b.releaseDate).getTime();
          break;
        default:
          aValue = a.price;
          bValue = b.price;
      }
      
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Comparison section - conditionally shown */}
      {showComparison && (
        <div className="bg-white shadow-md sticky top-16 z-40 transition-all">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-secondary-900">Comparing {comparedDevices.length} Devices</h2>
              <Button 
                variant="ghost"
                size="sm"
                icon={<X size={16} />}
                onClick={() => {
                  setShowComparison(false);
                  setComparedDevices([]);
                }}
              >
                Clear All
              </Button>
            </div>
            <ComparisonGrid devices={comparedDevices} onRemoveDevice={handleRemoveDevice} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <h2 className="text-xl font-bold mb-4 text-secondary-900">Filters</h2>
            <FilterSidebar 
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Main content */}
          <div className="flex-grow">
            {/* Header and sorting */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h1 className="text-2xl font-bold text-secondary-900 mb-2 md:mb-0">
                {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Devices'}
              </h1>
              
              <div className="flex flex-col md:flex-row gap-4">
                {comparedDevices.length >= 2 && !showComparison && (
                  <Button 
                    variant="primary"
                    size="sm"
                    onClick={() => setShowComparison(true)}
                  >
                    Compare ({comparedDevices.length})
                  </Button>
                )}
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select 
                    className="border rounded-md p-1.5 text-sm"
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                  >
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                    <option value="releaseDate">Release Date</option>
                  </select>
                  <button 
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="p-1 border rounded-md"
                    aria-label="Toggle sort order"
                  >
                    <ArrowUpDown size={16} className={sortOrder === 'asc' ? 'text-gray-600' : 'text-primary-600 rotate-180'} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Number of results */}
            <p className="text-sm text-gray-500 mb-6">
              Showing {processedDevices.length} results
            </p>
            
            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedDevices.map((device) => (
                <ProductCard 
                  key={device.id}
                  device={device}
                  score={calculateScore(device)}
                  onAddToComparison={handleAddToComparison}
                />
              ))}
            </div>

            {/* No results */}
            {processedDevices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No devices match your filters.</p>
                <Button 
                  variant="outline"
                  className="mt-4"
                  onClick={() => setFilters(sampleFilters)}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;