import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Target, Eye, Users, Award, Clock, Shield, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactBar from '../components/ContactBar';
import ParticleBackground from '../components/ParticleBackground';

const AboutPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
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

  const whyChooseUsPoints = [
    { icon: <Award className="w-6 h-6" />, text: "Competitive pricing" },
    { icon: <Shield className="w-6 h-6" />, text: "Professional service without shortcuts" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Full-service offerings, including design, fabrication, and erection" },
    { icon: <Clock className="w-6 h-6" />, text: "Over 18 years of industry experience" },
    { icon: <Users className="w-6 h-6" />, text: "Excellent references from satisfied clients" },
    { icon: <Globe className="w-6 h-6" />, text: "Trust from leading contractors, consultants, and developers" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Friendly and accessible customer service" }
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
                About Us
              </h1>
              <div className="hidden sm:block w-8 h-px bg-yellow-400 mx-4"></div>
              <div className="hidden sm:block w-32 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            
            {/* Golden separator line */}
            <div className="w-3/5 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </section>

        {/* Section 2: Company Introduction */}
        <section 
          ref={el => sectionRefs.current[0] = el}
          className={`pb-20 transition-all duration-1000 ${
            visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Company Description */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed font-serif">
                  German Steel Contracting LLC is a highly regarded privately-owned company headquartered in Ajman, United Arab Emirates. We are proud to have branch companies and licenses in Dubai, Abu Dhabi, Sharjah and Umm Al Quwain Emirates. Furthermore, we are expanding our reach to the Middle East and Africa, having already executed projects in Qatar, Egypt, and Ghana. With an 18-year track record of success, we have achieved consistent growth and profitability, demonstrating our commitment to quality and excellence.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed font-serif">
                  We are a comprehensive steelwork provider, specializing in Structural design, manufacturing, and erection services for a broad range of steel structures. Our portfolio encompasses projects varying from simple structures to those with intricate complexity and architectural / functional prominence. As a licensed contractor in Dubai, we possess the authorization to undertake projects in the G + Unlimited category.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed font-serif">
                  At German Steel Contracting LLC, we attribute our success to our highly technical design team, unwavering commitment to high-quality work, and timely completion of projects. We prioritize fostering strong relationships with our clients, resulting in repeat business and mutual benefits. Our workforce comprises skilled, enthusiastic, and competent professionals who work in harmony as a dedicated team to achieve our and our client's targets.
                </p>
              </div>

              {/* Right Column - Professional Image */}
              <div className="relative">
                <div className="aspect-[11/12] rounded-2xl overflow-hidden border border-yellow-400/30 shadow-2xl">
                  <img
                    src="/images/about-us/company.jpg"
                    alt="Professional team at German Steel Contracting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tl from-yellow-400/10 to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why German Steel Contracting LLC? */}
        <section 
          ref={el => sectionRefs.current[1] = el}
          className={`pb-20 transition-all duration-1000 delay-300 ${
            visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-yellow-400 mb-4">
                Why German Steel Contracting LLC?
              </h2>
              <div className="w-32 h-px bg-yellow-400 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Benefits List */}
              <div className="space-y-6">
                <div className="grid gap-4">
                  {whyChooseUsPoints.map((point, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group"
                    >
                      <div className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                        {point.icon}
                      </div>
                      <span className="text-white font-medium">{point.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-lg border border-yellow-400/30">
                  <p className="text-gray-300 leading-relaxed font-serif">
                    We remain committed to providing reliable and efficient services that cater to our client's unique requirements while surpassing their expectations.
                  </p>
                </div>
              </div>

              {/* Right Column - Infrastructure Image */}
              <div className="relative">
                <div className="aspect-[11/12] rounded-2xl overflow-hidden border border-yellow-400/30 shadow-2xl">
                  <img
                    src="/images/home-content.jpg"
                    alt="Modern infrastructure and teamwork"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Decorative accent */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Mission & Vision */}
        <section 
          ref={el => sectionRefs.current[2] = el}
          className={`pb-20 transition-all duration-1000 delay-600 ${
            visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Mission Column */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-black/50 to-gray-900/50 p-8 rounded-2xl border border-yellow-400/30 h-full">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-serif font-bold text-yellow-400">Our Mission</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-serif">
                    To be the leading provider of high-quality steel construction solution in the GCC, MENA region and Africa, delivering unparalleled value to our customers, while upholding the highest standards of safety, sustainability and innovation.
                  </p>
                </div>
              </div>

              {/* Vision Column */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-black/50 to-gray-900/50 p-8 rounded-2xl border border-yellow-400/30 h-full">
                  <div className="flex items-center mb-6">
                    <Eye className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-serif font-bold text-yellow-400">Our Vision</h3>
                  </div>
                  <div className="space-y-4 text-gray-300 font-serif">
                    <p className="leading-relaxed">
                      To become the leading provider of innovative, sustainable and cost-effective steel solution in the region.
                    </p>
                    <p className="leading-relaxed">
                      To leverage technology, automation and digitization to optimize its operations and offer customized solutions to meet the specific needs of different industries and clients.
                    </p>
                    <p className="leading-relaxed">
                      Enhancing its supply chain efficiently and reducing its carbon footprint to align with its regional sustainability goals.
                    </p>
                    <p className="leading-relaxed">
                      To have strong market presence, a loyal customer base and a reputation for delivering high-quality and reliable steel structures that are built to last.
                    </p>
                  </div>
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

export default AboutPage;