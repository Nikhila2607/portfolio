
import React from 'react';
import { Trophy } from 'lucide-react';

const awards = [
  {
    title: 'Gold Medalist',
    description: 'Thermal Power Plant Internship',
    year: '2022'
  },
  {
    title: 'Winner',
    description: 'EEE Dept. Silver Jubilee Logo Design Competition',
    year: '2020'
  },
  {
    title: 'Silver Medalist',
    description: 'Inter-College Chess Competition',
    year: '2019'
  }
];

const Awards: React.FC = () => {
  return (
    <section id="awards" className="bg-portfolio-black text-portfolio-white py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Awards</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-portfolio-darkgray/50 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-portfolio-red rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-2">{award.title}</h3>
              <p className="text-portfolio-lightgray mb-2">{award.description}</p>
              <span className="inline-block bg-portfolio-red/40 px-3 py-1 rounded-full text-sm">
                {award.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
