
import React from 'react';

const skillCategories = [
  {
    title: 'Power & Grid Systems',
    skills: ['MATLAB/Simulink', 'ETAP', 'AutoCAD Electrical', 'PLC', 'PVsyst', 'Rivet', 'Agi32', 'Pspice']
  },
  {
    title: 'Smart Grid & DER',
    skills: [
      'EV Charging Infrastructure', 
      'Load & Energy Forecasting', 
      'Microgrid', 
      'Grounding', 
      'BESS', 
      'Solar PV', 
      'Lighting Design', 
      'Load flow & Arc Flash Analysis', 
      'Electrical Design', 
      'Single Line Diagram'
    ]
  },
  {
    title: 'Data & Programming',
    skills: ['Python', 'C/C++', 'Machine Learning for Power Systems', 'AI-based Forecasting']
  },
  {
    title: 'Embedded & IoT',
    skills: ['Arduino', 'ESP32', 'Raspberry Pi', 'Remote Energy Monitoring Systems']
  },
  {
    title: 'Software',
    skills: ['MS Excel', 'PowerPoint', 'Word', 'LaTeX']
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Leadership', 'Critical Thinking', 'Team Collaboration', 'Project Management']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-portfolio-lightgray py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-portfolio-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-heading font-semibold border-b-2 border-portfolio-red pb-2 mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-portfolio-lightgray text-portfolio-darkgray px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
