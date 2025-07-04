import React from 'react';
import { Phone, Mail, Clock, Linkedin, Instagram, Twitter } from 'lucide-react';

const ContactBar: React.FC = () => {
  return (
    <div className="relative z-20">
      {/* Yellow separator line */}
      <div className="w-full h-0.5 bg-yellow-400"></div>
      
      {/* Contact bar */}
      <div className="bg-yellow-400/30 backdrop-blur-md border-t border-yellow-400/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            
            {/* Left side - Contact details */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2 text-white">
                <Phone className="w-4 h-4" />
                <span className="font-semibold text-sm">+971 6 7486133</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white">
                <Mail className="w-4 h-4" />
                <span className="font-semibold text-sm">info@germansteel.me</span>
              </div>
              
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-4 h-4" />
                <span className="font-semibold text-sm">Mon–Sat: 8 AM – 6 PM</span>
              </div>
            </div>

            {/* Right side - Social media icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/german-steel-cont-llc/?originalSubdomain=ae"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;