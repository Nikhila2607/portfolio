
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-portfolio-black pt-16"
    >
      {/* Background overlay with pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80')] 
        bg-cover bg-center opacity-10"
      ></div>
      
      {/* Red accent */}
      <div className="absolute top-0 left-0 h-full w-1 bg-portfolio-red"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="mb-4">
            <span className="inline-block text-portfolio-red font-medium border border-portfolio-red px-4 py-1 rounded-full text-sm mb-6">
              Electrical and Computer Engineer
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-portfolio-white leading-tight mb-6">
            SRAVAN KUMAR <span className="text-portfolio-red">DUMPETI</span>
          </h1>

          <p className="text-lg md:text-xl text-portfolio-lightgray mb-8 max-w-3xl">
            Germantown, TN 38138 | +1 (901) 453-8107 | sravankumardumpeti@gmail.com
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#contact" 
              className="btn-primary flex items-center gap-2"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#projects" 
              className="btn-outline flex items-center gap-2"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-5">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-lightgray hover:text-portfolio-red transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-lightgray hover:text-portfolio-red transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:sravankumardumpeti@gmail.com" 
              className="text-portfolio-lightgray hover:text-portfolio-red transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle">
        <div className="text-portfolio-lightgray text-sm mb-2">Scroll Down</div>
        <div className="w-0.5 h-6 bg-portfolio-red"></div>
      </div>
    </section>
  );
};

export default Hero;
