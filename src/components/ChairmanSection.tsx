import React, { useEffect, useRef, useState } from 'react';

const ChairmanSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-black">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-yellow-400 mb-4">
            CEO's Word
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Chairman Image */}
          <div className={`lg:col-span-2 flex flex-col items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Hexagon Image Container */}
            <div className="relative group mb-6">
              <div className="w-80 h-80 relative">
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-yellow-400 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
                  style={{
                    
                    backgroundImage: 'url(/images/chairman.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
              </div>
            </div>

            {/* Chairman Details */}
            <div className="text-center">
              <h3 className="text-2xl font-serif font-semibold text-yellow-400 mb-1">
                Mr FAISAL CHUNGATH
              </h3>
              <p className="text-gray-300 font-medium">
                Founder & CEO
              </p>
            </div>
          </div>

          {/* Right Column - Quote */}
          <div className={`lg:col-span-3 relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Large decorative quote mark */}
            <div className="absolute -top-8 -left-4 text-yellow-400/20 text-9xl font-serif leading-none pointer-events-none">
              "
            </div>

            {/* Quote text */}
            <blockquote className="relative z-10 mb-8">
              <p className="text-2xl lg:text-3xl font-serif italic text-white leading-relaxed mb-6">
                "At German Steel, steel engineering is not merely a craft—it is a commitment. Over the past two decades, we have played a vital role in shaping the UAE’s skyline with precision-driven structures that stand the test of time."
              </p>
            </blockquote>

            {/* Supporting paragraph */}
            <div className="relative z-10">
              <p className="text-gray-400 text-lg leading-relaxed font-sans">
                From complex high-rise frames to fast-track industrial solutions, our legacy is built on engineering integrity, customer trust, and an unrelenting focus on quality.
                Under my leadership, German Steel has evolved into one of the UAE's most trusted names in structural steel contracting. With full in-house capability—from design, fabrication, to on-site erection—we bring every project to life with safety, speed, and structural excellence at its core.
                Our continuous investment in innovation, workforce development, and compliance with international standards reflects our vision: to be the partner of choice for steel solutions that define modern infrastructure.
                We remain committed to delivering excellence across every project, large or small, as we continue to contribute to the region’s ambitious growth with purpose and pride.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-yellow-400/5 to-transparent rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;