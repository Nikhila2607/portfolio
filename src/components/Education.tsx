
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-portfolio-black text-portfolio-white py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Master's Degree */}
          <div className="bg-portfolio-darkgray/50 p-8 rounded-lg border-l-4 border-portfolio-red hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-heading font-semibold">Master of Science (Thesis)</h3>
              <span className="bg-portfolio-red px-3 py-1 text-sm rounded-full mt-2 md:mt-0">
                2023 - 2025
              </span>
            </div>
            
            <h4 className="text-lg font-medium mb-1">Electrical and Computer Engineering</h4>
            <p className="text-portfolio-lightgray mb-4">The University of Memphis, Memphis, TN</p>
            
            <div className="flex items-center gap-3 mb-2">
              <span className="text-portfolio-red font-semibold">GPA:</span>
              <span>3.75</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-portfolio-red font-semibold">Anticipated Graduation:</span>
              <span>May 2025</span>
            </div>
            
            <div className="border-t border-portfolio-white/20 pt-4 mt-4">
              <h5 className="text-lg font-medium mb-2">Research Focus:</h5>
              <ul className="list-disc list-inside space-y-1 text-portfolio-lightgray">
                <li>EV Charging Infrastructure</li>
                <li>Power System Optimization</li>
                <li>Smart Buildings</li>
              </ul>
            </div>
          </div>
          
          {/* Bachelor's Degree */}
          <div className="bg-portfolio-darkgray/50 p-8 rounded-lg border-l-4 border-portfolio-red hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-heading font-semibold">Bachelor of Technology</h3>
              <span className="bg-portfolio-red px-3 py-1 text-sm rounded-full mt-2 md:mt-0">
                2017 - 2021
              </span>
            </div>
            
            <h4 className="text-lg font-medium mb-1">Electrical and Electronics Engineering</h4>
            <p className="text-portfolio-lightgray mb-4">Kakatiya Institute of Technology and Science, Warangal, India</p>
            
            <div className="flex items-center gap-3 mb-2">
              <span className="text-portfolio-red font-semibold">GPA:</span>
              <span>3.80</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-portfolio-red font-semibold">Graduated:</span>
              <span>May 2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
