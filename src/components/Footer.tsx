
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-black text-portfolio-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-portfolio-white/10 pb-6 mb-6">
          <a href="#home" className="text-portfolio-white text-3xl font-heading font-bold mb-4 md:mb-0">
            Sravan<span className="text-portfolio-red">.</span>
          </a>
          
          <div className="flex gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-lightgray hover:text-portfolio-red transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-lightgray hover:text-portfolio-red transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:sravankumardumpeti@gmail.com" 
              className="text-portfolio-lightgray hover:text-portfolio-red transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-portfolio-lightgray mb-4 md:mb-0">
            &copy; {currentYear} Sravan Kumar Dumpeti. All Rights Reserved.
          </p>
          
          <nav className="flex gap-6">
            <a href="#home" className="text-sm text-portfolio-lightgray hover:text-portfolio-red transition-colors">Home</a>
            <a href="#about" className="text-sm text-portfolio-lightgray hover:text-portfolio-red transition-colors">About</a>
            <a href="#experience" className="text-sm text-portfolio-lightgray hover:text-portfolio-red transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-portfolio-lightgray hover:text-portfolio-red transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
