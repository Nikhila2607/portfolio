
import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'AutoCAD 2021 Essential Training',
    issueDate: 'Oct 2023'
  },
  {
    title: 'Embedded Systems Design with ARM',
    issueDate: 'Mar 2020'
  },
  {
    title: 'Design & Simulation of Power Conversion Systems',
    issueDate: 'Feb 2020'
  },
  {
    title: 'Introduction to Smart Grid',
    issueDate: 'Sep 2019'
  },
  {
    title: 'Electric Vehicles',
    issueDate: 'Mar 2019'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="bg-portfolio-white py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-portfolio-lightgray p-4 rounded-lg hover:bg-portfolio-lightgray/70 transition-colors duration-300"
            >
              <div className="bg-portfolio-red rounded-full p-2 text-white">
                <Award className="h-5 w-5" />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-medium text-portfolio-darkgray">{cert.title}</h3>
                <p className="text-sm text-portfolio-darkgray/80">Issued: {cert.issueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
