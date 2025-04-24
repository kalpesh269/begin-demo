import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleDevices } from '../data/sampleDevices';
import Button from '../components/ui/Button';
import { ArrowLeft, PlusCircle, Check } from 'lucide-react';

const DeviceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [addedToComparison, setAddedToComparison] = useState(false);
  
  // Find the device from sample data
  const device = sampleDevices.find(device => device.id === id);
  
  if (!device) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-secondary-900 mb-4">Device Not Found</h1>
        <p className="mb-8">The device you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    );
  }
  
  // Calculate device score (same as in ComparisonPage)
  const calculateScore = (): number => {
    let score = 0;
    score += device.price / 200;
    const ram = String(device.specs.memory || '').replace(/\D/g, '');
    score += parseInt(ram, 10) || 0;
    const storage = String(device.specs.storage || '').replace(/\D/g, '');
    score += (parseInt(storage, 10) || 0) / 32;
    const battery = String(device.specs.battery || '').replace(/\D/g, '');
    score += (parseInt(battery, 10) || 0) / 1000;
    return Math.round(score);
  };
  
  const score = calculateScore();
  
  // Handle add to comparison
  const handleAddToComparison = () => {
    // In a real app, this would add to global state
    setAddedToComparison(true);
    // Show success message or redirect to comparison page
    setTimeout(() => {
      setAddedToComparison(false);
    }, 3000);
  };
  
  // Get similar devices (simplified)
  const similarDevices = sampleDevices
    .filter(d => d.id !== device.id && d.category === device.category)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="flex items-center text-primary-600 hover:text-primary-700 mb-2">
            <ArrowLeft size={16} className="mr-1" /> Back to search
          </Link>
          <div className="text-sm text-gray-500">
            Home / {device.category.charAt(0).toUpperCase() + device.category.slice(1)} / {device.brand} / {device.name}
          </div>
        </div>
        
        {/* Device summary */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Image */}
            <div className="p-6 flex items-center justify-center bg-gray-50">
              <img 
                src={device.image} 
                alt={device.name} 
                className="max-h-80 object-contain" 
              />
            </div>
            
            {/* Info */}
            <div className="p-6 md:col-span-2">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-secondary-900 mb-2">{device.name}</h1>
                  <p className="text-gray-500 mb-4">{device.brand}</p>
                </div>
                <div className="bg-primary-500 text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center ml-4">
                  {score}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(device.specs).slice(0, 6).map(([key, value]) => (
                  <div key={key} className="flex items-center py-1">
                    <span className="text-gray-600 mr-2 capitalize">{key}:</span>
                    <span className="text-secondary-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-secondary-900">${device.price}</p>
                <p className="text-sm text-gray-500">Release date: {new Date(device.releaseDate).toLocaleDateString()}</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="primary"
                  onClick={handleAddToComparison}
                  disabled={addedToComparison}
                  icon={addedToComparison ? <Check size={18} /> : <PlusCircle size={18} />}
                >
                  {addedToComparison ? 'Added to Comparison' : 'Add to Comparison'}
                </Button>
                <Button variant="outline">
                  View Deals
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed specs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">Detailed Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Group specs by category */}
              {[
                { title: 'Display', keys: ['display', 'resolution', 'refreshRate', 'screenTechnology'] },
                { title: 'Performance', keys: ['processor', 'memory', 'storage'] },
                { title: 'Camera', keys: ['camera'] },
                { title: 'Battery', keys: ['battery', 'chargingSpeed', 'wirelessCharging'] },
                { title: 'Design', keys: ['dimensions', 'weight', 'waterResistance'] },
                { title: 'Connectivity', keys: ['nfc', 'ports'] }
              ].map(group => {
                // Get specs for this group
                const specs = Object.entries(device.specs)
                  .filter(([key]) => group.keys.includes(key) || key.includes(group.title.toLowerCase()));
                
                if (specs.length === 0) return null;
                
                return (
                  <div key={group.title}>
                    <h3 className="text-lg font-medium text-primary-600 mb-3">{group.title}</h3>
                    <div className="space-y-2">
                      {specs.map(([key, value]) => (
                        <div key={key} className="py-2 border-b border-gray-100">
                          <span className="text-gray-600 block text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
                          <span className="text-secondary-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Similar devices */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">Similar Devices</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarDevices.map(similar => (
              <Link 
                key={similar.id}
                to={`/device/${similar.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-40 flex items-center justify-center p-4 bg-gray-50">
                  <img 
                    src={similar.image} 
                    alt={similar.name} 
                    className="h-full object-contain" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 text-secondary-900">{similar.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{similar.brand}</p>
                  <p className="font-bold text-primary-600">${similar.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetailPage;