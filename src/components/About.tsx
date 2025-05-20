
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-portfolio-white py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-lg text-portfolio-darkgray leading-relaxed mb-6">
              A highly motivated and results-oriented <span className="font-semibold">Electrical and Computer Engineer</span> with a strong foundation in power systems, smart grid technologies, and EV charging infrastructure.
            </p>
            
            <p className="text-lg text-portfolio-darkgray leading-relaxed mb-6">
              Currently pursuing a <span className="font-semibold">Master of Science at The University of Memphis</span> with a research focus on EV Charging Infrastructure, Power System Optimization & Smart Buildings.
            </p>
            
            <p className="text-lg text-portfolio-darkgray leading-relaxed">
              Proven ability in research, project management, and team collaboration, with a passion for developing innovative solutions for a sustainable energy future.
            </p>
          </div>
          
          <div className="bg-portfolio-lightgray p-6 rounded-lg shadow-md">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-red flex items-center justify-center text-white text-lg font-bold">
                  E
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Electrical Engineering</h3>
                  <p className="text-sm text-portfolio-darkgray/80">Power Systems & Smart Grid</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-red flex items-center justify-center text-white text-lg font-bold">
                  R
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Research</h3>
                  <p className="text-sm text-portfolio-darkgray/80">EV Charging Infrastructure</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-portfolio-red flex items-center justify-center text-white text-lg font-bold">
                  I
                </div>
                <div>
                  <h3 className="font-heading font-semibold">Innovation</h3>
                  <p className="text-sm text-portfolio-darkgray/80">Sustainable Energy Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
