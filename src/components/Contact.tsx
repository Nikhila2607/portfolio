
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-portfolio-white py-20">
      <div className="section-container">
        <h2 className="section-title mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-red rounded-full p-3 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-darkgray/70">Email</p>
                  <a href="mailto:sravankumardumpeti@gmail.com" className="text-portfolio-darkgray hover:text-portfolio-red transition-colors">
                    sravankumardumpeti@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-red rounded-full p-3 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-darkgray/70">Phone</p>
                  <a href="tel:+19014538107" className="text-portfolio-darkgray hover:text-portfolio-red transition-colors">
                    +1 (901) 453-8107
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-red rounded-full p-3 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-darkgray/70">Location</p>
                  <p className="text-portfolio-darkgray">Germantown, TN 38138</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-portfolio-darkgray">
                I am currently open to research collaborations, speaking engagements, and professional opportunities in electrical engineering and power systems.
              </p>
            </div>
          </div>
          
          <div className="bg-portfolio-lightgray rounded-lg p-6">
            <h3 className="text-xl font-heading font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-darkgray mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-portfolio-darkgray/20 focus:outline-none focus:ring-2 focus:ring-portfolio-red/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-darkgray mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-portfolio-darkgray/20 focus:outline-none focus:ring-2 focus:ring-portfolio-red/50"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-darkgray mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-portfolio-darkgray/20 focus:outline-none focus:ring-2 focus:ring-portfolio-red/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-darkgray mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-portfolio-darkgray/20 focus:outline-none focus:ring-2 focus:ring-portfolio-red/50 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
