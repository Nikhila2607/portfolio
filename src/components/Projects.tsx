
import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Fuzzy Logic Controlled Variable Resistor for Suppressing GIC',
    status: 'Ongoing',
    description: 'Developing advanced hardware and fuzzy logic control systems for mitigating geomagnetically induced currents (GIC), significantly improving power grid resilience, stability, and overall reliability.',
    tags: ['Fuzzy Logic', 'GIC', 'Power Grid', 'Hardware Design']
  },
  {
    title: '3-Phase Inverter Design for Cybersecurity Attack Mitigation',
    status: 'Ongoing',
    description: 'Developing a 3-phase inverter with Hardware-in-the-Loop simulation to mitigate cybersecurity risks.',
    tags: ['3-Phase Inverter', 'Cybersecurity', 'Hardware-in-the-Loop', 'Power Systems']
  },
  {
    title: 'Machine Learning-Based Prediction of Power Flow and Transmission Losses in Power Systems',
    date: 'Dec 2024',
    description: 'Developed neural network models to predict active and reactive power losses in IEEE 9-bus, 57-bus, and 118-bus systems using synthetic data, achieving high accuracy (R² up to 0.9999).',
    tags: ['Machine Learning', 'Neural Networks', 'Power Flow', 'IEEE Bus Systems']
  },
  {
    title: 'Model Predictive Control for Misalignment in Road-to-Vehicle & V2V Wireless Charging',
    date: 'Aug 2024',
    description: 'Developed a hardware prototype using model predictive control to address misalignment issues in dynamic wireless charging, enhancing efficiency and reliability for electric vehicles.',
    tags: ['Model Predictive Control', 'Wireless Charging', 'EV', 'Hardware Prototype']
  },
  {
    title: 'Modeling Electric Vehicle DC Fast Charging Station with V2G Capability',
    date: 'May 2021',
    description: 'Designed a fast-charging station with Vehicle-to-Grid technology using Simulink, enabling bi-directional power flow. Optimized grid stability and improved energy distribution during peak demand.',
    tags: ['EV Charging', 'V2G', 'Simulink', 'Grid Stability']
  },
  {
    title: 'A Stacked GRU-RNN-based Approach for Predicting Renewable Energy Load',
    date: 'Dec 2020',
    description: 'Developed a stacked GRU-RNN-based machine learning model to predict energy consumption and generation from renewable sources, improving grid efficiency and optimizing energy management.',
    tags: ['GRU-RNN', 'Machine Learning', 'Renewable Energy', 'Load Prediction']
  },
  {
    title: 'Campus Energy Monitoring System',
    date: 'Feb 2020',
    description: 'Designed an energy monitoring system to track and optimize campus energy usage, utilizing smart meters, sensors, and data acquisition for real-time monitoring and improved energy efficiency.',
    tags: ['Energy Monitoring', 'Smart Meters', 'IoT', 'Energy Efficiency']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-portfolio-black text-portfolio-white py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Select Projects & Research</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-portfolio-darkgray/50 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-heading font-semibold">{project.title}</h3>
                  <span className="bg-portfolio-red px-2 py-0.5 text-xs rounded-full ml-2">
                    {project.status || project.date}
                  </span>
                </div>
                
                <p className="text-portfolio-lightgray text-sm mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-portfolio-black text-portfolio-lightgray px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-portfolio-black text-portfolio-lightgray px-2 py-1 rounded-full text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="px-6 py-3 border-t border-portfolio-white/10 mt-auto">
                <button className="text-portfolio-red text-sm font-medium flex items-center">
                  View Details <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
