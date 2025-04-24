import React from 'react';
import { X } from 'lucide-react';
import { Device } from '../../types';

interface ComparisonGridProps {
  devices: Device[];
  onRemoveDevice: (deviceId: string) => void;
}

const ComparisonGrid: React.FC<ComparisonGridProps> = ({ devices, onRemoveDevice }) => {
  if (devices.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-lg shadow">
        <p className="text-gray-500">Add devices to compare</p>
      </div>
    );
  }

  // Get all unique spec keys from all devices
  const allSpecKeys = Array.from(
    new Set(devices.flatMap(device => Object.keys(device.specs)))
  );

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4 text-left bg-gray-50 border-b">Specification</th>
            {devices.map(device => (
              <th key={device.id} className="p-4 text-center bg-gray-50 border-b min-w-[200px]">
                <div className="relative">
                  <button 
                    onClick={() => onRemoveDevice(device.id)}
                    className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                    aria-label={`Remove ${device.name}`}
                  >
                    <X size={16} />
                  </button>
                  <div className="h-28 flex items-center justify-center mb-2">
                    <img src={device.image} alt={device.name} className="h-full object-contain" />
                  </div>
                  <h3 className="font-medium text-secondary-900">{device.name}</h3>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Base specs */}
          <tr>
            <td colSpan={devices.length + 1} className="px-4 py-2 bg-primary-50 font-medium">Key Specifications</td>
          </tr>
          {['display', 'processor', 'memory', 'storage', 'battery'].map(specKey => (
            <tr key={specKey} className="border-b">
              <td className="px-4 py-3 text-sm font-medium capitalize">{specKey}</td>
              {devices.map(device => (
                <td key={`${device.id}-${specKey}`} className="px-4 py-3 text-center text-sm">
                  {device.specs[specKey] || '-'}
                </td>
              ))}
            </tr>
          ))}

          {/* Detailed specs - grouped by categories */}
          {[
            { title: 'Display', keys: allSpecKeys.filter(k => k.includes('display') || k.includes('screen')) },
            { title: 'Performance', keys: allSpecKeys.filter(k => k.includes('processor') || k.includes('cpu') || k.includes('gpu')) },
            { title: 'Camera', keys: allSpecKeys.filter(k => k.includes('camera')) },
            { title: 'Battery', keys: allSpecKeys.filter(k => k.includes('battery')) },
            { title: 'Design', keys: allSpecKeys.filter(k => k.includes('dimensions') || k.includes('weight')) },
            { title: 'Connectivity', keys: allSpecKeys.filter(k => k.includes('wifi') || k.includes('bluetooth') || k.includes('port')) },
          ].map(group => {
            // Only show groups with at least one spec
            const relevantKeys = group.keys.filter(k => !['display', 'processor', 'memory', 'storage', 'battery'].includes(k));
            if (relevantKeys.length === 0) return null;
            
            return (
              <React.Fragment key={group.title}>
                <tr>
                  <td colSpan={devices.length + 1} className="px-4 py-2 bg-primary-50 font-medium">{group.title}</td>
                </tr>
                {relevantKeys.map(specKey => (
                  <tr key={specKey} className="border-b">
                    <td className="px-4 py-3 text-sm font-medium capitalize">{specKey.replace(/([A-Z])/g, ' $1').toLowerCase()}</td>
                    {devices.map(device => (
                      <td key={`${device.id}-${specKey}`} className="px-4 py-3 text-center text-sm">
                        {device.specs[specKey] || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonGrid;