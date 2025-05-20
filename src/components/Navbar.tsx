
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Awards', href: '#awards' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-portfolio-black/95 backdrop-blur-sm py-3 shadow-lg' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-portfolio-white text-2xl md:text-3xl font-heading font-bold">
          Sravan<span className="text-portfolio-red">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link text-sm font-medium">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-portfolio-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-portfolio-black z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
          isMenuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-xl font-medium"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
