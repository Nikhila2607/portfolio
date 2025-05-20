
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Certifications from '@/components/Certifications';
import Awards from '@/components/Awards';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        <Certifications />
        <Awards />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
