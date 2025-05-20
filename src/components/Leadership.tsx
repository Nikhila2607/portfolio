
import React from 'react';

const leadershipActivities = [
  {
    role: 'Student Chair',
    organization: 'IEEE KITSW Student Branch',
    period: '2020-2021',
    achievements: [
      'Organized 12 technical events with field experts, fostering a collaborative learning environment',
      'Increased membership by 86%',
      'Represented the Student Branch at regional and national meetings'
    ]
  },
  {
    role: 'Technical Symposium Coordinator',
    organization: 'Student Coordinator Award Winner',
    period: 'Dec 2020',
    achievements: [
      'Spearheaded a technical symposium with 450+ participants and 10+ industry experts, driving engagement and knowledge exchange',
      'Delivered a workshop on \'Design of EV,\' showcasing expertise and contributing to the event\'s success'
    ]
  },
  {
    role: 'Resource Person',
    organization: 'IEEE Workshops',
    period: '2020-2021',
    achievements: [
      'Conducted workshops on electric vehicle technologies, house wiring, and Arduino',
      'Demonstrated expertise in emerging electrical technologies',
      'Committed to knowledge sharing and skill development'
    ]
  }
];

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="bg-portfolio-lightgray py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Leadership & Activities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipActivities.map((activity, index) => (
            <div 
              key={index} 
              className="bg-portfolio-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-portfolio-red py-4 px-6">
                <h3 className="text-xl font-heading font-semibold text-white">{activity.role}</h3>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">{activity.organization}</span>
                  <span className="bg-portfolio-lightgray text-portfolio-darkgray px-3 py-0.5 rounded-full text-xs">
                    {activity.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-portfolio-red mr-2 mt-1">•</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
