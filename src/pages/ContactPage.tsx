import React, { useEffect, useRef, useState } from 'react';
import { Building, Phone, Fan as Fax, Mail, MapPin, User, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactBar from '../components/ContactBar';
import ParticleBackground from '../components/ParticleBackground';

const ContactPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSections(prev => [...prev, index]);
            }, index * 200);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactLocations = [
    {
      title: "Head Quarters",
      icon: <Building className="w-5 h-5" />,
      address: "German Steel Cont. LLC\nNew Industrial Area\nPO Box. 18275, Ajman"
    },
    {
      title: "Dubai Branch",
      icon: <Building className="w-5 h-5" />,
      address: "German Steel Cont. LLC – Dubai Branch\nAl Qusais 1\nPO Box. 78517, Dubai"
    },
    {
      title: "Abu Dhabi Branch",
      icon: <Building className="w-5 h-5" />,
      address: "Capital GSC Contracting LLC\nMussaffah Industrial 044\nAbu Dhabi – UAE"
    },
    {
      title: "Umm Al Quwain Branch",
      icon: <Building className="w-5 h-5" />,
      address: "German Steel Cont. LLC\nPO Box. 4100\nUmm Al Quwain - UAE"
    },
    {
      title: "Saudi Arabia Branch",
      icon: <Building className="w-5 h-5" />,
      address: "German Steel Cont. LLC\n3135, Prince Sultan Bin Abdulaziz\nPO Box. 12232\nRiyadh - Saudi Arabia"
    }
  ];

  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone Number",
      value: "+97167486133"
    },
    {
      icon: <Fax className="w-5 h-5" />,
      label: "Fax",
      value: "+97167486144"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@germansteel.me"
    }
  ];

  const salesContacts = [
    {
      name: "Mr. Jayaprakash M A (Jay)",
      title: "Business Development Manager",
      phone: "+971 56 564 7010",
      email: "jay@germansteel.me"
    },
    {
      name: "Mr. Nezar Taher Chahin",
      title: "Business Development Manager",
      phone: "+971 58 658 6292",
      email: "nezar-chahin@germansteel.me"
    },
    {
      name: "Mr. Hossam Kamalulden",
      title: "Business Development Manager",
      phone: "+971 50 390 1068",
      email: "hossam@germansteel.me"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Particle Background */}
      <div className="fixed inset-0 w-full" style={{ height: '400vh', zIndex: 1 }}>
        <ParticleBackground />
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-10 pointer-events-none" style={{ zIndex: 2 }} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Section 1: Page Title */}
        <section className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Decorative flourishes and title */}
            <div className="flex items-center justify-center mb-8">
              <div className="hidden sm:block w-32 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="hidden sm:block w-8 h-px bg-yellow-400 mx-4"></div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-yellow-400 mx-8 animate-fade-in-up">
                Contact Us
              </h1>
              <div className="hidden sm:block w-8 h-px bg-yellow-400 mx-4"></div>
              <div className="hidden sm:block w-32 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            
            {/* Golden separator line */}
            <div className="w-3/5 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </section>

        {/* Section 2: Google Map */}
        <section 
          ref={el => sectionRefs.current[0] = el}
          className={`pb-20 transition-all duration-1000 ${
            visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden border border-yellow-400/30 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.270730443041!2d55.5428231!3d25.4353501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59ee7f77fca5%3A0x55b4c84bf1358610!2sGERMAN%20STEEL%20CONT.%20LLC!5e0!3m2!1sen!2sae!4v1686812879132!5m2!1sen!2sae"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="German Steel Contracting LLC Location"
                className="w-full"
                ></iframe>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Information and Form */}
        <section 
          ref={el => sectionRefs.current[1] = el}
          className={`pb-20 transition-all duration-1000 delay-300 ${
            visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div className="space-y-8">
                {/* Office Locations */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-6 flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    Our Locations
                  </h2>
                  <div className="grid gap-6">
                    {contactLocations.map((location, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-black/50 to-gray-900/50 p-6 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-yellow-400 mt-1">
                            {location.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                              {location.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                              {location.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="text-xl font-serif font-semibold text-yellow-400 mb-4">
                    General Contact
                  </h3>
                  <div className="space-y-4">
                    {contactDetails.map((contact, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="text-yellow-400">
                          {contact.icon}
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">{contact.label}:</span>
                          <span className="text-white font-medium ml-2">{contact.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sales Enquiry */}
                <div>
                  <h3 className="text-xl font-serif font-semibold text-yellow-400 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Sales Enquiry
                  </h3>
                  <div className="space-y-6">
                    {salesContacts.map((contact, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-black/30 to-gray-900/30 p-4 rounded-lg border border-yellow-400/20"
                      >
                        <h4 className="text-white font-semibold mb-1">{contact.name}</h4>
                        <p className="text-gray-400 text-sm mb-2">{contact.title}</p>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-yellow-400" />
                            <span className="text-white text-sm">{contact.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-yellow-400" />
                            <span className="text-white text-sm">{contact.email}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Enquiry Form */}
              <div>
                <div className="bg-gradient-to-br from-black/50 to-gray-900/50 p-8 rounded-2xl border border-yellow-400/30">
                  <h2 className="text-2xl font-serif font-bold text-yellow-400 mb-6 flex items-center">
                    <Send className="w-6 h-6 mr-3" />
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none ${
                          focusedField === 'name' 
                            ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none ${
                          focusedField === 'email' 
                            ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none ${
                          focusedField === 'phone' 
                            ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none resize-vertical ${
                          focusedField === 'message' 
                            ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactBar />
      </div>
    </div>
  );
};

export default ContactPage;