import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            Image<span className="text-blue-600">Compressor</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link 
            to="/" 
            className={`text-sm font-semibold tracking-wide transition-colors hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-semibold tracking-wide transition-colors hover:text-blue-600 ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link 
              to="/" 
              className={`text-lg font-medium py-2 transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-lg font-medium py-2 transition-colors ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
