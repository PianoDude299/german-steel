import React, { useEffect, useRef, useState } from 'react';
import { X, Compass, FileText, Wrench, Palette, Building, Home, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactBar from '../components/ContactBar';
import ParticleBackground from '../components/ParticleBackground';

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  details: string[];
  benefits: string[];
}

const ServicesPage: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

const services: Service[] = [
  {
    id: 1,
    title: "STRUCTURAL DESIGN",
    icon: <Compass className="w-8 h-8" />,
    image: "src/images/services/structural-design.jpg",
    description: "Comprehensive structural engineering solutions for complex steel frameworks and architectural designs.",
    details: [
      "Design of complete steel frames and connections",
      "Use of ETABS, SAP, STAAD, and IDEA STATICA",
      "Expertise in British and American codes (BS/AISC)",
      "Streamlined approval with local authorities",
      "Experienced structural engineering team"
    ],
    benefits: [
      "Faster approval turnaround",
      "High structural integrity and code compliance",
      "Optimized designs using modern software",
      "Minimized design errors and delays"
    ]
  },
  {
    id: 2,
    title: "DETAILING SERVICE & BIM",
    icon: <FileText className="w-8 h-8" />,
    image: "src/images/services/Detailing-Service-&-BIM.jpg",
    description: "Precision steel detailing and Building Information Modeling for accurate construction documentation.",
    details: [
      "3D modeling and detailing using Tekla Structures",
      "BIM integration across project lifecycle",
      "Expertise in CAD for internal and external workflows",
      "Support for estimating, construction, and handover",
      "Improved coordination with supply chain"
    ],
    benefits: [
      "Better project visualization and collaboration",
      "Improved design accuracy and coordination",
      "Reduced construction risks and delays",
      "Fewer clashes and revisions during execution"
    ]
  },
  {
    id: 3,
    title: "FABRICATION",
    icon: <Wrench className="w-8 h-8" />,
    image: "src/images/services/Fabrication.jpg",
    description: "State-of-the-art steel fabrication services with precision manufacturing and quality control.",
    details: [
      "ISO 9001 certified fabrication processes",
      "Strict adherence to international standards",
      "Advanced machinery and fabrication techniques",
      "Precision cutting, welding, and assembly",
      "Comprehensive quality control measures"
    ],
    benefits: [
      "Consistent high-quality outputs",
      "Fewer defects and reworks",
      "Enhanced fabrication speed and efficiency",
      "Reliable delivery performance"
    ]
  },
  {
    id: 4,
    title: "PAINTING / SURFACE TREATMENT",
    icon: <Palette className="w-8 h-8" />,
    image: "src/images/services/Painting-Surface-Treatmeant.jpg",
    description: "Professional surface treatment and protective coating systems for long-lasting steel structures.",
    details: [
      "Shot blasting to achieve SA 2.5 grade finish",
      "Application of epoxy, polyurethane, and fireproof coatings",
      "Custom finishes for stainless steel (mirror, satin, etc.)",
      "Compliance with project-specific finish requirements",
      "On-site and in-house surface treatment capabilities"
    ],
    benefits: [
      "Superior corrosion and fire protection",
      "Improved aesthetic and functional value",
      "Extended steelwork durability",
      "Adaptability to diverse project needs"
    ]
  },
  {
    id: 5,
    title: "STEELWORK ERECTION",
    icon: <Building className="w-8 h-8" />,
    image: "src/images/services/structural-steel-erection-services.jpg",
    description: "Expert steel erection services with safety-first approach and precision installation techniques.",
    details: [
      "Skilled erection crew and site personnel",
      "Compliance with international safety standards",
      "Efficient handling of complex structural assemblies",
      "Real-time monitoring of site progress",
      "Integrated coordination with fabrication schedule"
    ],
    benefits: [
      "Safe and accurate installations",
      "Minimal project downtime",
      "Seamless handoff from fabrication to site",
      "Reliable completion within timelines"
    ]
  },
  {
    id: 6,
    title: "DECKING ROOFING & CLADDING",
    icon: <Home className="w-8 h-8" />,
    image: "src/images/services/Decking-Roofing-&-Cladding.jpg",
    description: "Complete building envelope solutions including roofing systems and architectural cladding.",
    details: [
      "Supply and installation of insulated panels and decks",
      "Architectural roofing and wall cladding systems",
      "Expertise in facade solutions",
      "Support for weatherproofing and insulation",
      "Turnkey service across building envelope elements"
    ],
    benefits: [
      "Enhanced building performance and efficiency",
      "One-stop solution for envelope needs",
      "Support for sustainable construction goals",
      "Custom solutions for aesthetic and functional needs"
    ]
  },
  {
    id: 7,
    title: "VALUE ENGINEERING",
    icon: <TrendingUp className="w-8 h-8" />,
    image: "src/images/services/Value-Engineering.jpg",
    description: "Strategic optimization services to maximize project value while maintaining quality and performance.",
    details: [
      "Review of pre-designed steel projects",
      "Recommendations for cost-saving alternatives",
      "Advice on material efficiency and erection methods",
      "Reduction of construction program durations",
      "Project-specific consultation from experienced designers"
    ],
    benefits: [
      "Significant cost and time savings",
      "Greater design and construction efficiency",
      "Improved ROI for clients",
      "Tailored insights for project success"
    ]
  }
];


  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 100);
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

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Particle Background */}
      <div className="fixed inset-0 w-full" style={{ height: '400vh', zIndex: 1 }}>
        <ParticleBackground />
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 pointer-events-none" style={{ zIndex: 2 }} />
      
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
                Our Services
              </h1>
              <div className="hidden sm:block w-8 h-px bg-yellow-400 mx-4"></div>
              <div className="hidden sm:block w-32 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            
            {/* Golden separator line */}
            <div className="w-3/5 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-8"></div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive steel engineering solutions delivered with precision, innovation, and unwavering commitment to excellence. From design to completion, we provide end-to-end services that exceed industry standards.
            </p>
          </div>
        </section>

        {/* Section 2: Services Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={el => cardRefs.current[index] = el}
                  className={`service-card group cursor-pointer transition-all duration-600 ${
                    visibleCards.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="bg-gradient-to-br from-black/50 to-gray-900/50 rounded-2xl border border-yellow-400/30 h-full hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-400/10 hover:scale-105 transition-all duration-300 overflow-hidden">
                    {/* Service Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Service Icon Overlay */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      {/* Service Title */}
                      <h3 className="text-xl font-serif font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Hover indicator */}
                      <div className="text-center">
                        <span className="text-yellow-400/60 text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
                          Click to learn more →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactBar />
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl overflow-hidden shadow-2xl animate-modal-in">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Modal Header with Image */}
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                {/* Header Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black">
                      {selectedService.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-yellow-400 mb-4">
                    {selectedService.title}
                  </h2>
                  <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Service Details */}
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-yellow-400 mb-4">
                      Service Details
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-yellow-400 mb-4">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;