
import React from 'react';

const experiences = [
  {
    title: 'Graduate Assistant Research',
    company: 'The University of Memphis',
    department: 'Dept. of Electrical & Computer Engineering',
    period: 'Nov 2023 - Present',
    responsibilities: [
      'Developing a multi-objective optimization model for efficient EV Charging Station placement.',
      'Optimized EV charging station placement, significantly reducing transmission losses by 23%.',
      'Developed comprehensive course content on Smart Building Technology and Energy Management.',
      'Designed smart home automation systems by integrating sensors and remote energy management.',
      'Built a functional prototype for Road-to-Vehicle wireless charging, enhancing EV charging efficiency.'
    ]
  },
  {
    title: 'Graduate Assistant Teaching',
    company: 'The University of Memphis',
    department: 'Dept. of Electrical & Computer Engineering',
    period: 'Aug 2024 - Present',
    responsibilities: [
      'Teaching and grading Circuit Analysis Lab, enhancing student understanding through hands-on learning.',
      'Taught Energy Conversion Lab, focusing on Electrical Machines and Renewable Energy systems.'
    ]
  },
  {
    title: 'Intern | Design and Manufacturing of Electric Vehicle',
    company: 'AMZ Automotive',
    location: 'India',
    period: 'Jan 2020 (4 Weeks)',
    responsibilities: [
      'Designed and optimized EV aerodynamics, motor efficiency, and battery management systems.',
      'Contributed to manufacturing process improvements, enhancing overall vehicle performance.'
    ]
  },
  {
    title: 'Intern | Study of WAG7 and WAG9 Locomotives',
    company: 'Electric Loco Shed',
    location: 'India',
    period: 'Dec 2019 (2 Weeks)',
    responsibilities: [
      'Gained hands-on expertise in protection systems, transformers, motors, and relay coordination.'
    ]
  },
  {
    title: 'Intern, Familiarization of Thermal Power Plant',
    company: 'KTPS',
    location: 'India',
    period: 'Jun 2019 (2 Weeks)',
    responsibilities: [
      'Gained hands-on experience in power generation and maintenance at the thermal power plant.',
      'Awarded Best Coordinator for peer management and Meritorious Award for 1st place in the internship.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-portfolio-white py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-portfolio-red/30 ml-4 md:ml-6 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="md:pl-16 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-portfolio-red mt-2 hidden md:block"></div>
                
                <div className="bg-portfolio-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-portfolio-black">
                      {exp.title}
                    </h3>
                    <span className="bg-portfolio-red text-white px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-1">{exp.company}</h4>
                  <p className="text-portfolio-darkgray/80 mb-4">
                    {exp.department || exp.location}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-portfolio-red mr-2 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
