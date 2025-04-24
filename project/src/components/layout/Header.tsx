import React, { useState } from 'react';
import { Search, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-gradient-to-r from-primary-900 to-primary-700 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">Electro<span className="text-accent-500">HUB</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {['Smartphones', 'Laptops', 'Tablets', 'Headphones', 'Smartwatches'].map((item) => (
              <Link 
                key={item}
                to={`/category/${item.toLowerCase()}`}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-800 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="p-1 rounded-full hover:bg-primary-800 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button className="hidden md:block p-1 rounded-full hover:bg-primary-800 transition-colors">
              <User size={20} />
            </button>
            <button 
              onClick={toggleMenu}
              className="md:hidden p-1 rounded-full hover:bg-primary-800 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Smartphones', 'Laptops', 'Tablets', 'Headphones', 'Smartwatches'].map((item) => (
              <Link 
                key={item}
                to={`/category/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 bg-primary-800 p-4 animate-fadeIn">
          <div className="flex items-center">
            <SearchBar onSearch={() => setIsSearchOpen(false)} />
            <button 
              onClick={toggleSearch}
              className="ml-2 p-1 rounded-full hover:bg-primary-700"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;