import React from 'react';
import { ArrowRight, Search, Smartphone, Laptop, Tablet, Headphones, Watch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sampleDevices, sampleCategories } from '../data/sampleDevices';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  // Get featured devices (first 4 for this demo)
  const featuredDevices = sampleDevices.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compare. Decide. <span className="text-accent-400">Upgrade.</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The ultimate electronics comparison platform to find the perfect device for your needs.
          </p>
          
          {/* Search bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                className="w-full py-3 pl-12 pr-4 text-gray-800 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-400"
                placeholder="Search for devices..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Search size={20} className="text-gray-400" />
              </div>
              <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-accent-500 hover:bg-accent-600 rounded-r-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Smartphones', icon: <Smartphone size={32} /> },
              { name: 'Laptops', icon: <Laptop size={32} /> },
              { name: 'Tablets', icon: <Tablet size={32} /> },
              { name: 'Headphones', icon: <Headphones size={32} /> },
              { name: 'Smartwatches', icon: <Watch size={32} /> }
            ].map((category) => (
              <Link 
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-500 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-secondary-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Devices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-secondary-900">
            Featured Devices
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore and compare the latest and most popular devices across categories
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDevices.map((device) => (
              <div key={device.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                  <img 
                    src={device.image} 
                    alt={device.name} 
                    className="h-full object-contain" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 text-secondary-900">{device.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{device.brand}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary-600">${device.price}</span>
                    <Link 
                      to={`/device/${device.id}`}
                      className="text-sm font-medium text-primary-600 hover:text-primary-800 flex items-center"
                    >
                      View details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="primary">View all devices</Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900">
            How ElectroHUB Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Search & Filter',
                description: 'Find devices that match your specific requirements with our advanced filtering system.',
                number: '1'
              },
              {
                title: 'Compare Side by Side',
                description: 'View detailed specifications side by side to make informed decisions.',
                number: '2'
              },
              {
                title: 'Make Your Decision',
                description: 'Choose the perfect device based on comprehensive comparisons and reviews.',
                number: '3'
              }
            ].map((step, index) => (
              <div key={index} className="relative p-6 bg-white rounded-lg shadow-md">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 pt-2 text-secondary-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Device?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start comparing and make an informed decision with ElectroHUB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Start Comparing
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Browse Categories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;