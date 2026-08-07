import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/icons2.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => currentPath === path;

  const getLinkClass = (path) => {
    const baseClass = "font-body-md text-body-md uppercase tracking-wider font-bold transition-colors pb-1";
    if (isActive(path)) {
      return `${baseClass} text-primary dark:text-primary-fixed border-b-2 border-primary`;
    }
    return `${baseClass} text-on-surface-variant dark:text-surface-variant hover:text-primary border-b-2 border-transparent`;
  };

  const getMobileLinkClass = (path) => {
    const baseClass = "block w-full px-4 py-3 text-sm uppercase tracking-wider font-bold transition-colors rounded-lg";
    if (isActive(path)) {
      return `${baseClass} text-primary bg-primary/10`;
    }
    return `${baseClass} text-on-surface-variant hover:text-primary hover:bg-primary/5`;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center px-8 py-4 max-w-container-max mx-auto">
          <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
            <img alt="Rogerex India Logo" className="h-10 w-auto object-contain" src={logo} />
            <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Rogerex India</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link className={getLinkClass('/')} to="/">Home</Link>
            <Link className={getLinkClass('/about')} to="/about">About</Link>
            <Link className={getLinkClass('/services')} to="/services">Services</Link>
            {/* <Link className={getLinkClass('/portfolio')} to="/portfolio">Portfolio</Link>
            <Link className={getLinkClass('/careers')} to="/careers">Careers</Link> */}
            <Link className={getLinkClass('/contact')} to="/contact">Contact</Link>
            <Link className="px-6 py-2 bg-primary text-on-primary rounded-[12px] font-body-md font-semibold transition-transform active:scale-95 hover:bg-primary/90 shadow-md" to="/contact">Get in Touch</Link>
          </div>
          <button
            className="md:hidden text-primary p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/98 dark:bg-gray-900/98 border-t border-gray-200 dark:border-gray-800 px-4 pb-4 flex flex-col gap-1">
            <Link className={getMobileLinkClass('/')} to="/" onClick={closeMenu}>Home</Link>
            <Link className={getMobileLinkClass('/about')} to="/about" onClick={closeMenu}>About</Link>
            <Link className={getMobileLinkClass('/services')} to="/services" onClick={closeMenu}>Services</Link>
            <Link className={getMobileLinkClass('/contact')} to="/contact" onClick={closeMenu}>Contact</Link>
            <Link
              className="mt-2 w-full text-center px-6 py-3 bg-primary text-on-primary rounded-[12px] text-sm font-semibold transition-transform active:scale-95 hover:bg-primary/90 shadow-md"
              to="/contact"
              onClick={closeMenu}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
