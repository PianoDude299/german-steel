import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import ContactBar from '../components/ContactBar';
import ParticleBackground from '../components/ParticleBackground';

const boardMembers = [
  {
    name: 'Eid Mohammed Humaid Alhamrani Alshamsi',
    role: 'Chairman',
    image: 'src/images/chairman.jpg',
    quote:
      'Mr. Eid Mohammed Alhamrani serves as the Chairman of German Steel Group. ',
    description:
      'With a distinguished career spanning various leadership roles in both governmental and private sector organizations, he brings invaluable insight, strategic vision, and governance expertise to the company.'
    },
  {
    name: 'Faisal Chungath',
    role: 'Chief Executive Officer(CEO)',
    image: 'src/images/chairman.jpg',
    quote: 'Mr. Faisal Chungath is the Chief Executive Officer and Managing Director of German Steel Group. He holds a Bachelor\'s degree in Civil Engineering from the College of Engineering, Trivandrum, and a Master’s degree in Structural Engineering from Christ University.',
    description:'Having moved to the UAE in 2000, Mr. Faisal has gained extensive experience across the structural steel industry. He began his career in India, where he gained years of hands-on experience in the structural steel industry. In 2000, he relocated to the UAE and continued to build his expertise in steel industry through various leadership roles. In 2007, leveraging his technical acumen and entrepreneurial drive, he established German Steel Contracting LLC, which has since grown into a leading name in steel engineering and construction across the Middle East.'
  },
  {
    name: 'Zubair Mozhikkal',
    role: 'General Manager',
    image: 'src/images/chairman.jpg',
    quote: 'Mr. Zubair Mozhikkal is the General Manager of German Steel Group, bringing over 25 years of extensive experience in the structural steel industry. A Mechanical Engineering graduate from the University of Calicut, he also holds a Master of Business Administration in Financial Management.',
    description: 'Since joining German Steel in 2008, Mr. Zubair has been instrumental in enhancing the company’s operational systems and contractual governance. With a structured and analytical mindset, he brings clarity to complex project workflows and ensures disciplined execution at every level. His leadership emphasizes stability, internal cohesion, and a well-organized working environment—promoting a culture where focus, responsibility, and team synergy are valued. This approach has been key to maintaining German Steel’s reputation for reliability and technical excellence across its portfolio.'
  },
];

const Board: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

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
        { threshold: 0.3 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer?.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Particle Background */}
      <div className="fixed inset-0 w-full" style={{ height: '400vh', zIndex: 1 }}>
        <ParticleBackground />
      </div>

      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1]" style={{ background: 'linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(30,30,30,0.85))' }} />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        {/* Page Title */}
        <section className="pt-24 pb-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-8">
              <div className="hidden sm:block w-32 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="hidden sm:block w-8 h-px bg-yellow-400 mx-4"></div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-yellow-400 mx-8 animate-fade-in-up">
                Board of Directors
              </h1>
              <div className="hidden sm:block w-8 h-px bg-yellow-400 mx-4"></div>
              <div className="hidden sm:block w-32 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            <div className="w-3/5 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </section>

        {/* Members Section */}
        {boardMembers.map((member, index) => (
          <section
            key={member.name}
            ref={el => (sectionRefs.current[index] = el)}
            className="relative py-20 bg-transparent"
          >
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div
                  className={`lg:col-span-2 flex flex-col items-center transition-all duration-1000 ${
                    visibleSections.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="relative group mb-6">
                    <div className="w-80 h-80 relative">
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-yellow-400 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
                        style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-semibold text-yellow-400 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Quote and Description */}
                <div
                  className={`lg:col-span-3 relative transition-all duration-1000 delay-300 ${
                    visibleSections.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="absolute -top-8 -left-4 text-yellow-400/20 text-9xl font-serif leading-none pointer-events-none">
                    "
                  </div>
                  <blockquote className="relative z-10 mb-8">
                    <p className="text-2xl lg:text-3xl font-serif italic text-white leading-relaxed mb-6">
                      {member.quote}
                    </p>
                  </blockquote>
                  <div className="relative z-10">
                    <p className="text-gray-400 text-lg leading-relaxed font-sans">{member.description}</p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-yellow-400/5 to-transparent rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <ContactBar />
      </div>
    </div>
  );
};

export default Board;
