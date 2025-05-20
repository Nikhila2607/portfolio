
import React from 'react';
import { FileText } from 'lucide-react';

const publications = [
  {
    title: 'Model Predictive Control for Misalignment Compensation in Dynamic Wireless Charging of Electric Vehicles',
    authors: 'M. S. Rahman, S. K. Dumpeti, M. Davoodi, and M. H. Ali',
    journal: 'IEEE Transactions on Smart Grid',
    status: 'under review'
  },
  {
    title: 'Optimal Placement of Electric Vehicle Charging Stations in distribution grid using Modified Artificial Hummingbird Algorithm',
    authors: 'S. K. Dumpeti and M. H. Ali',
    status: 'in progress'
  }
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="bg-portfolio-lightgray py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Publications</h2>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="bg-portfolio-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
            >
              <div className="bg-portfolio-red rounded-lg p-3 text-white hidden sm:block">
                <FileText className="h-6 w-6" />
              </div>
              
              <div>
                <span className="inline-block bg-portfolio-red/10 text-portfolio-red px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {pub.status}
                </span>
                
                <h3 className="text-lg font-heading font-semibold mb-2 text-portfolio-darkgray">
                  {pub.title}
                </h3>
                
                <p className="text-portfolio-darkgray/80 mb-1">
                  <span className="font-medium">Authors:</span> {pub.authors}
                </p>
                
                {pub.journal && (
                  <p className="text-portfolio-darkgray/80">
                    <span className="font-medium">Journal:</span> {pub.journal}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-portfolio-darkgray">
            For complete publication details, please contact directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
