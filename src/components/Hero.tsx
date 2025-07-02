import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  location: string;
  image: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const projects: Project[] = [
  {
    id: 1,
    title: "DEWA R&D Lab",
    date: "March 2020",
    description: "Dubai Electricity & Water Authority’s cutting-edge solar R&D centre.",
    location: "Dubai, UAE",
    image: "/images/index-banner/01-DEWA-R&D-Lab.jpg"
  },
  {
    id: 2,
    title: "Azerbaijan Pavilion @ Dubai Expo",
    date: "October 2021",
    description: "Eco‑focused pavilion with a leaf‑shaped solar canopy and garden.",
    location: "Dubai, UAE",
    image: "/images/index-banner/02-Azerbaijan-Pavilion.jpg"
  },
  {
    id: 3,
    title: "Korea Pavilion @ Dubai Expo",
    date: "October 2021",
    description: "Mobility‑themed pavilion with dynamic façade and skywalk ramps.",
    location: "Dubai, UAE",
    image: "/images/index-banner/03-Korea-Pavilion.jpg"
  },
  {
    id: 4,
    title: "Toyota Showroom Abu Dhabi",
    date: "2022",
    description: "State‑of‑the‑art automotive showroom showcasing Toyota models.",
    location: "Abu Dhabi, UAE",
    image: "/images/index-banner/04-Toyota-Showroom-Abu-Dhab-i20170724-Al-Futtaim-Motors-HM-03.jpg"
  },
  {
    id: 5,
    title: "DFC Mall",
    date: "January 2007",
    description: "Dubai Festival City Mall, major waterfront retail & leisure complex.",
    location: "Dubai, UAE",
    image: "/images/index-banner/06-DFC-Mall.jpg"
  },
  {
    id: 6,
    title: "Netherland Pavilion @ Dubai Expo",
    date: "October 2021",
    description: "Netherlands pavilion highlighting sustainable urban design.",
    location: "Dubai, UAE",
    image: "/images/index-banner/07-Netherland-Pavilion.jpg"
  },
  {
    id: 7,
    title: "Bloom Academy School Dubai",
    date: "2023",
    description: "Modern international school focused on holistic education.",
    location: "Dubai, UAE",
    image: "/images/index-banner/08-Bloom-School.jpg"
  },
  {
    id: 8,
    title: "Mövenpick Hotel",
    date: "2020",
    description: "Luxury hotel offering premium hospitality in Dubai.",
    location: "Dubai, UAE",
    image: "/images/index-banner/09-Movenpick-Resort.jpg"
  },
  {
    id: 9,
    title: "Hampton RAK",
    date: "2021",
    description: "Contemporary Hampton by Hilton hotel in Ras Al Khaimah.",
    location: "Ras Al Khaimah, UAE",
    image: "/images/index-banner/10-Hampton-RAK.jpg"
  },
  {
    id: 10,
    title: "Talabat @ Dubai Expo",
    date: "October 2021",
    description: "Interactive food‑service pavilion by the Talabat brand.",
    location: "Dubai, UAE",
    image: "/images/index-banner/11-Talabat.jpg"
  },
  {
    id: 11,
    title: "Cloisal - Abu Dhabi Airport",
    date: "2022",
    description: "Modern retail lounge area within Abu Dhabi International Airport.",
    location: "Abu Dhabi, UAE",
    image: "/images/index-banner/12-Midfield-Terminal.jpg"
  },
  {
    id: 12,
    title: "Hilton Hotel Yas Island",
    date: "2021",
    description: "Resort‑style Hilton overlooking Yas Marina and Abu Dhabi GP circuit.",
    location: "Abu Dhabi, UAE",
    image: "/images/index-banner/13-Hilton-Hotel.jpg"
  },
  {
    id: 13,
    title: "USA Pavilion @ Dubai Expo",
    date: "October 2021",
    description: "Immersive pavilion showcasing US innovation and culture.",
    location: "Dubai, UAE",
    image: "/images/index-banner/14-USA-Pavilion.jpg"
  },
  {
    id: 14,
    title: "Slovenia Pavilion @ Dubai Expo",
    date: "October 2021",
    description: "Slovenian pavilion themed on green, active & healthy living.",
    location: "Dubai, UAE",
    image: "/images/index-banner/15-Slovanian-pavilion.jpg"
  },
  {
    id: 15,
    title: "Deira City Center",
    date: "November 1995",
    description: "Flagship Majid Al Futtaim mall in historic Deira district.",
    location: "Dubai, UAE",
    image: "/images/index-banner/16-Diera-City-Center.jpg"
  },
  {
    id: 16,
    title: "Waitrose @ Motor City",
    date: "2022",
    description: "Upscale supermarket branch serving Motor City community.",
    location: "Dubai, UAE",
    image: "/images/index-banner/17-Waitrose.jpg"
  },
  {
    id: 17,
    title: "Finland Pavilion @ Dubai Expo",
    date: "October 2021",
    description: "Nordic pavilion highlighting Finnish innovation & nature.",
    location: "Dubai, UAE",
    image: "/images/index-banner/18-Finland-Pavilion.jpg"
  },
  {
    id: 18,
    title: "Thailand Pavilion @ Dubai Expo",
    date: "October 2021",
    description: "Thai pavilion celebrating culture, cuisine & wellness.",
    location: "Dubai, UAE",
    image: "/images/index-banner/19-Thailand-pavilion.jpg"
  }
];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentProject = projects[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-12 items-center">
          {/* Left Side - Project Information */}
          <div className="lg:col-span-1 text-white animate-fade-in-up">
            <h2 className="text-3xl lg:text-3xl font-serif font-bold mb-4 leading-tight">
              {currentProject.title}
            </h2>
            <p className="text-yellow-400 text-sm font-medium mb-4 uppercase tracking-wider">
              {currentProject.date}
            </p>
            <p className="text-gray-300 text-m mb-6 leading-relaxed">
              {currentProject.description}
            </p>
            <div className="flex items-center text-yellow-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{currentProject.location}</span>
            </div>
          </div>

          {/* Right Side - Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="carousel-card rounded-2xl overflow-hidden transition-all duration-500">
              <div className="relative aspect-[20/10] overflow-hidden">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Slide indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">
                    {currentSlide + 1} / {projects.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-400 transition-all duration-200"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-400 transition-all duration-200"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-yellow-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="btn-primary inline-flex items-center px-8 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
          >
            See more
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;