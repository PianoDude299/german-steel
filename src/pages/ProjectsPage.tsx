import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Building, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactBar from '../components/ContactBar';
import ParticleBackground from '../components/ParticleBackground';

interface Project {
  id: number;
  title: string;
  consultant: string;
  contractor: string;
  value: string;
  image: string;
  year: string;
  location: string;
  startDate: string;
  completionDate: string;
  description: string;
  gallery: string[];
}

const ProjectsPage: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

const projects: Project[] = [
  {
    id: 1,
    title: "Dubai Festival City Expansion (SELSA 2)",
    consultant: "WME",
    contractor: "Al Futtaim Carillion LLC",
    value: "26M AED",
    image: "/images/projects/selsa2/a.jpg",
    year: "2016",
    location: "Dubai, UAE",
    startDate: "2014",
    completionDate: "April 2016",
    description: "Phase 2 expansion of Dubai Festival City mall, adding new retail, dining zones, and waterfront promenade. The project enhanced shopping and leisure offerings in time for Expo demand, reinforcing its position as a premier mixed-use destination in Dubai.",
    gallery: [
      "/images/projects/selsa2/1.jpg",
      "/images/projects/selsa2/2.jpg",
      "/images/projects/selsa2/3.jpg",
      "/images/projects/selsa2/4.jpg",
      "/images/projects/selsa2/5.jpg",
      "/images/projects/selsa2/6.jpg",
      "/images/projects/selsa2/7.jpg",
      "/images/projects/selsa2/8.jpg",
      "/images/projects/selsa2/9.jpg",
      "/images/projects/selsa2/10.jpg",
      "/images/projects/selsa2/11.jpg",
      "/images/projects/selsa2/12.jpg"]
  },
  {
    id: 2,
    title: "The Wave Toyota Showroom Abu Dhabi",
    consultant: "MAKAN Consulting Engineers LLC",
    contractor: "Al Futtaim Carillion LLC",
    value: "18M AED",
    image: "/images/projects/Wave Abudhabi/a.jpg",
    year: "2016",
    location: "Musaffah, Abu Dhabi, UAE",
    startDate: "2016",
    completionDate: "March 2016",
    description: "A flagship 14,000 m² five‑storey Toyota showroom in Musaffah, integrating sales, service, and spare-parts facilities. Known for its flowing ‘wave’ façade and interactive customer zones, it sets a new benchmark for automotive retail in the region.",
    gallery: [
      "/images/projects/Wave Abudhabi/01.jpg", 
      "/images/projects/Wave Abudhabi/02.jpg",
      "/images/projects/Wave Abudhabi/03.jpg",
      "/images/projects/Wave Abudhabi/04.jpg",
      "/images/projects/Wave Abudhabi/05.jpg", 
      "/images/projects/Wave Abudhabi/06.jpg"]
  },
  {
    id: 3,
    title: "Nas Arena",
    consultant: "DAR AL HANDASAH",
    contractor: "Al Naboodah Contracting LLC",
    value: "17M AED",
    image: "/images/projects/Nas Arena/a.jpg",
    year: "2016",
    location: "Nad Al Sheba, Dubai, UAE",
    startDate: "2015",
    completionDate: "2016",
    description: "A 5,840‑seat indoor multipurpose sports arena at Nad Al Sheba, designed for futsal, volleyball, basketball, and more. Featuring a distinctive dome steel roof, it was fully modelled via Tekla BIM for precise erection and connectivity.",
    gallery: [
      "/images/projects/Nas Arena/1.jpg", 
      "/images/projects/Nas Arena/2.jpg", 
      "/images/projects/Nas Arena/3.jpg", 
      "/images/projects/Nas Arena/4.jpg", 
      "/images/projects/Nas Arena/5.jpg", 
      "/images/projects/Nas Arena/6.jpg", 
      "/images/projects/Nas Arena/7.jpg", 
      "/images/projects/Nas Arena/8.jpg", 
      "/images/projects/Nas Arena/9.jpg", 
      "/images/projects/Nas Arena/10.jpg", 
      "/images/projects/Nas Arena/11.jpg", 
      "/images/projects/Nas Arena/12.jpg", 
      "/images/projects/Nas Arena/13.jpg", 
      "/images/projects/Nas Arena/14.jpg", 
      "/images/projects/Nas Arena/15.jpg"]
  },
  {
    id: 4,
    title: "Korea Pavilion @ Dubai Expo",
    consultant: "Al Hilal Engineering Consultants",
    contractor: "SsangYong Engineering & Construction LLC",
    value: "17M AED",
    image: "/images/projects/Korea Pavilion @ Dubai Expo/a.jpg",
    year: "2021",
    location: "Dubai, UAE",
    startDate: "2019",
    completionDate: "February 2021",
    description: "Iconic cultural pavilion representing Korea at Expo 2020 Dubai. The project combined innovative steel and façade systems to showcase Korean heritage and innovation through immersive architecture and interactive exhibition spaces.",
    gallery: [
      "/images/projects/Korea Pavilion @ Dubai Expo/K2.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K3.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K4.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K5.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K6.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K7.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K8.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K9.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K10.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K11.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K12.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K13.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K14.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K15.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K16.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K17.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K18.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K19.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K20.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K21.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K22.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K23.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K24.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K25.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K26.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K27.jpg",
      "/images/projects/Korea Pavilion @ Dubai Expo/K28.jpg", 
      "/images/projects/Korea Pavilion @ Dubai Expo/K29.jpg"]
  },
  {
    id: 5,
    title: "Abu Dhabi Airport Mid Field Terminal II",
    consultant: "KPF/ARUP/AECOM",
    contractor: "TAV-CCC-ARABTEC / Cloisal Co. LLC",
    value: "16M AED",
    image: "/images/projects/Cloisal - Abu Dhabi Airport/a.jpg",
    year: "2019",
    location: "Abu Dhabi International Airport, UAE",
    startDate: "2019",
    completionDate: "January 2019",
    description: "Steel-cladded airside infrastructure at Abu Dhabi Airport, enhancing operational capacity and aesthetics. Authorized for terminal extensions, the Cloisal units used precision-engineered steel frameworks and durable facade systems to meet strict aviation standards.",
    gallery: [
      "/images/projects/Cloisal - Abu Dhabi Airport/1.jpg", 
      "/images/projects/Cloisal - Abu Dhabi Airport/2.jpg", 
      "/images/projects/Cloisal - Abu Dhabi Airport/3.jpg", 
      "/images/projects/Cloisal - Abu Dhabi Airport/4.jpg"]
  },
  {
    id: 6,
    title: "Deira City Center",
    consultant: "GHD",
    contractor: "Al Tayer Stocks LLC",
    value: "15M AED",
    image: "/images/projects/Diera City Center/a.jpg",
    year: "2016",
    location: "Deira, Dubai, UAE",
    startDate: "1993",
    completionDate: "August 2016",
    description: "Early landmark retail development in Deira, featuring steel-based shopping mall structures. The City Center was among Dubai’s pioneering enclosed malls, bringing steel-frame construction to large-scale commercial architecture in the region.",
    gallery: [
      "/images/projects/Diera City Center/1.jpg", 
      "/images/projects/Diera City Center/2.jpg",
      "/images/projects/Diera City Center/3.jpg",
      "/images/projects/Diera City Center/4.jpg",
      "/images/projects/Diera City Center/5.jpg",
      "/images/projects/Diera City Center/6.jpg",
      "/images/projects/Diera City Center/7.jpg",
      "/images/projects/Diera City Center/8.jpg",
      "/images/projects/Diera City Center/9.jpg", 
      "/images/projects/Diera City Center/13.gif",
      "/images/projects/Diera City Center/10.jpg"]
  },
    {
    id: 7,
    title: "GEMS Wellington Academy",
    consultant: "BDP / Arkiplan",
    contractor: "Chicago Construction LLC",
    value: "14M AED",
    image: "/images/projects/GEMS Wellington Academy/a.jpg",
    year: "2005",
    location: "Al Khail, Dubai, UAE",
    startDate: "2004",
    completionDate: "August 2005",
    description: "A prestigious British-curriculum school campus in Al Khail, Dubai, built with modern steel-framed education facilities. The academy offers purpose-designed teaching blocks, sports halls, and assembly areas, supporting its status as an Outstanding KHDA-rated institution.",
    gallery: [
      "/images/projects/GEMS Wellington Academy/1.jpg", 
      "/images/projects/GEMS Wellington Academy/2.jpg",
      "/images/projects/GEMS Wellington Academy/3.jpg",
      "/images/projects/GEMS Wellington Academy/4.jpg",
      "/images/projects/GEMS Wellington Academy/5.jpg", 
      "/images/projects/GEMS Wellington Academy/6.jpg"]
  },
  {
    id: 8,
    title: "Lincoln University Sharjah",
    consultant: "Aedas / Derby Design",
    contractor: "Chicago Construction LLC",
    value: "14M AED",
    image: "/images/projects/Lincoln Academy/a.jpg",
    year: "2022",
    location: "Sharjah, UAE",
    startDate: "2020",
    completionDate: "September 2022",
    description: "New Sharjah campus for Lincoln University USA, featuring steel‑framed academic buildings, lecture theatres, and labs. Designed to international standards, the structure supports flexible learning environments and student-focused amenities.",
    gallery: [
      "/images/projects/Lincoln Academy/1.jpg",
      "/images/projects/Lincoln Academy/2.jpg",
      "/images/projects/Lincoln Academy/3.jpg", 
      "/images/projects/Lincoln Academy/4.jpg",
      "/images/projects/Lincoln Academy/5.jpg",
      "/images/projects/Lincoln Academy/6.jpg",
      "/images/projects/Lincoln Academy/7.jpg",
      "/images/projects/Lincoln Academy/8.jpg"]
  },
  {
    id: 9,
    title: "Netherlands Pavilion @ Dubai Expo",
    consultant: "NSD Architectural Consultants",
    contractor: "Expomobilia Exhibition Excellence",
    value: "13M AED",
    image: "/images/projects/Netherland Pavilion @ Dubai Expo/a.jpg",
    year: "2021",
    location: "Dubai, UAE",
    startDate: "September 2019",
    completionDate: "May 2021",
    description: "Sustainable biotope pavilion showcasing Dutch innovations in water, energy and food cycles, built entirely with circular steel systems. Featured an 18 m vertical ‘food cone’ and reusable sheet‑pile structure, earning awards and dismantled post-Expo.",
    gallery: [
      "/images/projects/Netherland Pavilion @ Dubai Expo/1.jpg", 
      "/images/projects/Netherland Pavilion @ Dubai Expo/2.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/3.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/4.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/5.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/6.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/7.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/8.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/9.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/10.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/11.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/12.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/13.jpg",
      "/images/projects/Netherland Pavilion @ Dubai Expo/14.jpg", 
      "/images/projects/Netherland Pavilion @ Dubai Expo/15.jpg"]
  },
  {
    id: 10,
    title: "Amazon Data Center – AUH",
    consultant: "NSD Architectural Consultants",
    contractor: "Expomobilia Exhibition Excellence",
    value: "13M AED",
    image: "/images/projects/Amazon Data Center - AUH/a.jpg",
    year: "2023",
    location: "Abu Dhabi, UAE",
    startDate: "2021",
    completionDate: "May 2023",
    description: "High-performance data centre built for Amazon Web Services in Abu Dhabi, featuring heavy-duty steel framing, raised floors, and rigorous structural supports. Designed for redundancy, resilience and scalability to deliver mission‑critical cloud infrastructure.",
    gallery: [
      "/images/projects/Amazon Data Center - AUH/1.jpg",
      "/images/projects/Amazon Data Center - AUH/2.jpg",
      "/images/projects/Amazon Data Center - AUH/3.jpg",
      "/images/projects/Amazon Data Center - AUH/4.jpg",
      "/images/projects/Amazon Data Center - AUH/5.jpg",
      "/images/projects/Amazon Data Center - AUH/6.jpg",
      "/images/projects/Amazon Data Center - AUH/7.jpg",
      "/images/projects/Amazon Data Center - AUH/8.jpg",
      "/images/projects/Amazon Data Center - AUH/9.jpg",
      "/images/projects/Amazon Data Center - AUH/10.jpg",
      "/images/projects/Amazon Data Center - AUH/11.jpg",
      "/images/projects/Amazon Data Center - AUH/12.jpg",
      "/images/projects/Amazon Data Center - AUH/13.jpg", 
      "/images/projects/Amazon Data Center - AUH/14.jpg"]
  },
  {
    id: 11,
    title: "Hilton Hotel Yas Island",
    consultant: "WSP",
    contractor: "SANJOSE – FIBREX JV",
    value: "12M AED",
    image: "/images/projects/Hilton Hotel Yas Island/a.jpg",
    year: "2019",
    location: "Yas Island, Abu Dhabi, UAE",
    startDate: "2017",
    completionDate: "October 2019",
    description: "Premium hospitality development on Yas Island featuring steel‑structured guest wings, expansive atriums and podium areas. The hotel integrates modern architectural steel aesthetics with robust engineering to deliver a luxury resort experience.",
    gallery: [
      "/images/projects/Hilton Hotel Yas Island/a.jpg",
      "/images/projects/Hilton Hotel Yas Island/1.jpg", 
      "/images/projects/Hilton Hotel Yas Island/2.jpg", 
      "/images/projects/Hilton Hotel Yas Island/4.jpg",
      "/images/projects/Hilton Hotel Yas Island/3.jpg",
      "/images/projects/Hilton Hotel Yas Island/5.jpg",
      "/images/projects/Hilton Hotel Yas Island/6.jpg"]
  },
  {
    id: 12,
    title: "Bloom World Academy",
    consultant: "National Engineering Bureau (NEB)",
    contractor: "Airolink Building Construction LLC",
    value: "10M AED",
    image: "/images/projects/Bloom School/a.jpg",
    year: "2018",
    location: "Mirdif, Dubai, UAE",
    startDate: "2016",
    completionDate: "October 2018",
    description: "State‑of‑the‑art educational campus for Bloom World Academy in Mirdif, Dubai. Featuring steel‑frame classrooms, multipurpose hall, and learning support buildings, designed to foster a creative and collaborative academic environment.",
    gallery: [
      "/images/projects/Bloom School/1.jpg", 
      "/images/projects/Bloom School/2.jpg",
      "/images/projects/Bloom School/3.jpg",
      "/images/projects/Bloom School/4.jpg",
      "/images/projects/Bloom School/5.jpg",
      "/images/projects/Bloom School/6.jpg",
      "/images/projects/Bloom School/7.jpg",
      "/images/projects/Bloom School/8.jpg",
      "/images/projects/Bloom School/9.jpg",
      "/images/projects/Bloom School/10.jpg", 
      "/images/projects/Bloom School/11.jpg"]
  },
    {
    id: 13,
    title: "City Land Mall Dubai",
    consultant: "MBA Architects",
    contractor: "China National Aero Technology International Engineering Corporation (CATIC)",
    value: "10M AED",
    image: "/images/projects/City Land Mall/01.jpg",
    year: "2018",
    location: "Dubailand, Dubai, UAE",
    startDate: "2016",
    completionDate: "December 2018",
    description: "A 2.2 million sq ft nature‑inspired retail and entertainment destination centered around a 200,000 sq ft botanical park. Featuring themed pavilions, VOX cinema, and family leisure zones, City Land Mall integrates green architecture with community‑focused amenities." ,
    gallery: [
      "/images/projects/City Land Mall/02.jpg",
      "/images/projects/City Land Mall/03.jpg",
      "/images/projects/City Land Mall/04.jpg",
      "/images/projects/City Land Mall/05.jpg",
      "/images/projects/City Land Mall/06.jpg",
      "/images/projects/City Land Mall/07.jpg",
      "/images/projects/City Land Mall/08.jpg",
      "/images/projects/City Land Mall/09.jpg",
      "/images/projects/City Land Mall/10.jpg", 
      "/images/projects/City Land Mall/11.jpg"]
  },
  {
    id: 14,
    title: "LA MER Dubai",
    consultant: "Hyder Consulting (ME) Ltd",
    contractor: "Al Futtaim Carillion LLC",
    value: "9.5M AED",
    image: "/images/projects/LA MER/1.jpg",
    year: "2018",
    location: "Jumeirah 1, Dubai, UAE",
    startDate: "2015",
    completionDate: "2018",
    description: "A beachfront destination combining retail, dining, leisure, and entertainment across a beautifully designed waterfront on Jumeirah beach. LA MER’s steel‑framed commercial structures support a relaxed seaside vibe paired with upscale offerings." ,
    gallery: [
      "/images/projects/LA MER/1.jpg", 
      "/images/projects/LA MER/2.jpg",
      "/images/projects/LA MER/3.jpg",
      "/images/projects/LA MER/4.jpg",
      "/images/projects/LA MER/5.jpg",
      "/images/projects/LA MER/6.jpg",
      "/images/projects/LA MER/7.jpg", 
      "/images/projects/LA MER/8.jpg"]
  },
  {
    id: 15,
    title: "Mirdiff City Centre",
    consultant: "HOLFORD Associates",
    contractor: "Al Tayer Stocks LLC",
    value: "7.6M AED",
    image: "/images/projects/Mirdiff City Centre/a.jpg",
    year: "2010",
    location: "Mirdif, Dubai, UAE",
    startDate: "2008",
    completionDate: "May 2010",
    description: "A major suburban shopping mall in Mirdif, featuring a wide steel‑structured retail complex with cinemas, family entertainment zones, and dining outlets. Built to serve growing residential communities with modern retail infrastructure." ,
    gallery: [
      "/images/projects/Mirdiff City Centre/1.jpg", 
      "/images/projects/Mirdiff City Centre/2.jpg",
      "/images/projects/Mirdiff City Centre/3.jpg",
      "/images/projects/Mirdiff City Centre/4.jpg",
      "/images/projects/Mirdiff City Centre/5.jpg", 
      "/images/projects/Mirdiff City Centre/6.jpg"]
  },
  {
    id: 16,
    title: "GSEM & DNATA",
    consultant: "DAR AL HANDASAH",
    contractor: "McLaren Construction LLC",
    value: "5.7M AED",
    image: "/images/projects/GSEM & DNATA/a.jpg",
    year: "2021",
    location: "Dubai International Airport, UAE",
    startDate: "2019",
    completionDate: "March 2021",
    description: "Joint ground‑services and catering facility for DNATA and Geneva Seetar Emirates Mall (GSEM) at DXB airport. The project integrated large-scale steel hangars and service buildings designed for efficiency in aviation logistics." ,
    gallery: [
      "/images/projects/GSEM & DNATA/1.jpg",
      "/images/projects/GSEM & DNATA/2.jpg", 
      "/images/projects/GSEM & DNATA/3.jpg", 
      "/images/projects/GSEM & DNATA/4.jpg"]
  },
  {
    id: 17,
    title: "Talabat Kitchen @ Dubai Expo",
    consultant: "Parsons & MACE",
    contractor: "Kier International Middle East",
    value: "5.6M AED",
    image: "/images/projects/Talabat Kitchen @ Dubai Expo/a.jpg",
    year: "2019",
    location: "Expo 2020 Dubai, UAE",
    startDate: "2020",
    completionDate: "November 2019",
    description: "Centralized cloud‑kitchen facility serving Talabat vendors during Expo 2020 Dubai. The steel‑framed installation included modular kitchen pods and efficient service corridors to meet the high‑volume catering demands of the event." ,
    gallery: [
      "/images/projects/Talabat Kitchen @ Dubai Expo/1.jpg", 
      "/images/projects/Talabat Kitchen @ Dubai Expo/2.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/3.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/4.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/5.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/6.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/7.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/8.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/9.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/10.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/11.jpg",
      "/images/projects/Talabat Kitchen @ Dubai Expo/12.jpg", 
      "/images/projects/Talabat Kitchen @ Dubai Expo/13.jpg"]
  },
  {
    id: 18,
    title: "Sharjah University",
    consultant: "Art & Design Engineering",
    contractor: "Darwish Engineering Emirates LLC",
    value: "4.8M AED",
    image: "/images/projects/Sharjah University/a.jpg",
    year: "2009",
    location: "Sharjah, UAE",
    startDate: "2007",
    completionDate: "August 2009",
    description: "Expansion of the University of Sharjah campus with new academic blocks, lecture theatres and labs. Utilized steel‑framed structures to deliver modern education facilities designed to international standards." ,
    gallery: [
      "/images/projects/Sharjah University/a.jpg",
      "/images/projects/Sharjah University/2.jpg", 
      "/images/projects/Sharjah University/3.jpg", 
      "/images/projects/Sharjah University/4.jpg"]
  },
    {
    id: 19,
    title: "FEWA Substations",
    consultant: "EDF",
    contractor: "Mitsubishi Electric Corporation",
    value: "4.3M",
    image: "/images/projects/FEWA Substations/a.jpg",
    year: "2019",
    location: "Various locations, UAE",
    startDate: "2017",
    completionDate: "November 2019",
    description: "A series of electrical substations delivered for the Federal Electricity & Water Authority (FEWA), featuring robust steel structures and modular designs. These substations support critical utility infrastructure with high safety and durability standards.",
    gallery: [
      "/images/projects/FEWA Substations/a.jpg",
      "/images/projects/FEWA Substations/2.jpg", 
      "/images/projects/FEWA Substations/3.jpg", 
      "/images/projects/FEWA Substations/4.jpg"]
  },
  {
    id: 20,
    title: "Mövenpick Hotel and Resort - RAK",
    consultant: "ATKINS",
    contractor: "Al Ali Construction & Development LLC",
    value: "3.7M AED",
    image: "/images/projects/Movenpick Bridge Rak/a.jpg",
    year: "2021",
    location: "Ras Al Khaimah, UAE",
    startDate: "2018",
    completionDate: "September 2021",
    description: "Iconic pedestrian bridge constructed adjacent to Mövenpick Resort in Ras Al Khaimah. With its lightweight steel arch frames and elegant design, it enhances access and complements the waterfront resort environment.",
    gallery: [
      "/images/projects/Movenpick Bridge Rak/1.jpg", 
      "/images/projects/Movenpick Bridge Rak/2.jpg",
      "/images/projects/Movenpick Bridge Rak/3.jpg",
      "/images/projects/Movenpick Bridge Rak/4.jpg",
      "/images/projects/Movenpick Bridge Rak/5.jpg",
      "/images/projects/Movenpick Bridge Rak/6.jpg",
      "/images/projects/Movenpick Bridge Rak/7.jpg",
      "/images/projects/Movenpick Bridge Rak/8.jpg",
      "/images/projects/Movenpick Bridge Rak/9.jpg",
      "/images/projects/Movenpick Bridge Rak/10.jpg",
      "/images/projects/Movenpick Bridge Rak/11.jpg",
      "/images/projects/Movenpick Bridge Rak/12.jpg",
      "/images/projects/Movenpick Bridge Rak/13.jpg",
      "/images/projects/Movenpick Bridge Rak/14.jpg",
      "/images/projects/Movenpick Bridge Rak/15.jpg",
      "/images/projects/Movenpick Bridge Rak/16.jpg", 
      "/images/projects/Movenpick Bridge Rak/17.jpg",
      "/images/projects/Movenpick Bridge Rak/18.jpg",
    ]
  },
  {
    id: 21,
    title: "Azerbaijan Pavilion @ Dubai Expo",
    consultant: "SIMMETRICO srl",
    contractor: "Al Shafar Interiors LLC",
    value: "3.3M AED",
    image: "/images/projects/Azerbaijan Pavilion @ Dubai Expo/a.jpg",
    year: "2020",
    location: "Dubai, UAE",
    startDate: "2019",
    completionDate: "November 2020",
    description: "National pavilion showcasing Azerbaijani culture and innovation at Expo 2020 Dubai. Built with distinctive steel-enclosed spaces and exhibition halls, the pavilion offered immersive experience designs and interactive installations.",
    gallery: [
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/1.jpg", 
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/2.jpg", 
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/3.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/4.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/5.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/6.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/7.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/8.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/9.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/10.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/11.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/12.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/13.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/14.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/15.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/16.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/17.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/18.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/19.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/20.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/21.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/22.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/23.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/24.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/25.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/26.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/27.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/28.jpg",
      "/images/projects/Azerbaijan Pavilion @ Dubai Expo/29.jpg"]
  },
  {
    id: 22,
    title: "Abrahamic Family House Abu Dhabi",
    consultant: "ARCADIS",
    contractor: "Zublin Construction LLC",
    value: "3.1M AED",
    image: "/images/projects/Abrahamic Family House/a.jpg",
    year: "2023",
    location: "Saadiyat Island, Abu Dhabi, UAE",
    startDate: "2019",
    completionDate: "December 2023",
    description: "A landmark interfaith complex comprising mosque, church, and synagogue, united under a steel canopy. The steel-structured cultural center reflects unity and tolerance, designed with architectural significance and symbolic elements.",
    gallery: [
      "/images/projects/Abrahamic Family House/2.jpg", 
      "/images/projects/Abrahamic Family House/1.jpg",
      "/images/projects/Abrahamic Family House/3.jpg",
      "/images/projects/Abrahamic Family House/4.jpg",
      "/images/projects/Abrahamic Family House/5.jpg",
      "/images/projects/Abrahamic Family House/6.jpg",
      "/images/projects/Abrahamic Family House/7.jpg",
      "/images/projects/Abrahamic Family House/8.jpg",
      "/images/projects/Abrahamic Family House/9.jpg",
      "/images/projects/Abrahamic Family House/10.jpg", 
      "/images/projects/Abrahamic Family House/11.jpg"]
  },
  {
    id: 23,
    title: "Waitrose @ Motor City",
    consultant: "LOCI Architecture + Design",
    contractor: "Al Bawardy Contracting LL",
    value: "2.8M AED",
    image: "/images/projects/Waitrose @ Motor City/a.jpg",
    year: "2019",
    location: "Motor City, Dubai, UAE",
    startDate: "2019",
    completionDate: "July 2019",
    description: "Retail outlet for Waitrose in Motor City, Dubai, featuring steel-framed supermarket design with open interiors and high-quality finishes. Designed to bring premium grocery retail experience to residential communities.",
    gallery: [
      "/images/projects/Waitrose @ Motor City/1.jpg", 
      "/images/projects/Waitrose @ Motor City/2.jpg",
      "/images/projects/Waitrose @ Motor City/3.jpg",
      "/images/projects/Waitrose @ Motor City/4.jpg",
      "/images/projects/Waitrose @ Motor City/5.jpg",
      "/images/projects/Waitrose @ Motor City/6.jpg",
      "/images/projects/Waitrose @ Motor City/7.jpg",
      "/images/projects/Waitrose @ Motor City/8.jpg",
      "/images/projects/Waitrose @ Motor City/9.jpg",
      "/images/projects/Waitrose @ Motor City/10.jpg",
      "/images/projects/Waitrose @ Motor City/11.jpg",
      "/images/projects/Waitrose @ Motor City/12.jpg",
      "/images/projects/Waitrose @ Motor City/13.jpg", 
      "/images/projects/Waitrose @ Motor City/14.jpg"]
  },
  {
    id: 24,
    title: "Mafraq Dialysis Center",
    consultant: "Burt Hills",
    contractor: "ASCON",
    value: "2.7M AED",
    image: "/images/projects/Mafraq Dialysis Center/a.jpg",
    year: "2021",
    location: "Mafraq, Abu Dhabi, UAE",
    startDate: "2019",
    completionDate: "August 2021",
    description: "Purpose-designed medical facility for dialysis treatment at Mafraq Hospital campus. Utilizing steel-framed clinical spaces and support infrastructure to meet healthcare standards and patient comfort needs.",
    gallery: [
      "/images/projects/Mafraq Dialysis Center/1.jpg", 
      "/images/projects/Mafraq Dialysis Center/2.jpg",
      "/images/projects/Mafraq Dialysis Center/3.jpg",
      "/images/projects/Mafraq Dialysis Center/4.jpg",
      "/images/projects/Mafraq Dialysis Center/5.jpg",
      "/images/projects/Mafraq Dialysis Center/6.jpg",
      "/images/projects/Mafraq Dialysis Center/7.jpg",
      "/images/projects/Mafraq Dialysis Center/8.jpg",
      "/images/projects/Mafraq Dialysis Center/9.jpg",
      "/images/projects/Mafraq Dialysis Center/10.jpg",
      "/images/projects/Mafraq Dialysis Center/11.jpg",
      "/images/projects/Mafraq Dialysis Center/12.jpg",
      "/images/projects/Mafraq Dialysis Center/13.jpg",
      "/images/projects/Mafraq Dialysis Center/14.jpg",
      "/images/projects/Mafraq Dialysis Center/15.jpg",
      "/images/projects/Mafraq Dialysis Center/16.jpg", 
      "/images/projects/Mafraq Dialysis Center/17.jpg"]
  },
    {
    id: 25,
    title: "Bays Edge @ Business Bay",
    consultant: "ATKINS",
    contractor: "Al Sahel Contracting LLC",
    value: "2.2M AED",
    image: "/images/projects/Bays Edge - AL Sahel/01.gif",
    year: "2022",
    location: "Al Sahel, Sharjah, UAE",
    startDate: "2020",
    completionDate: "December 2022",
    description: "Waterfront residential and retail development in Sharjah’s Al Sahel district. Featuring steel-structured villas, promenades, and leisure amenities, it integrates modern architecture with coastal living using durable, corrosion-resistant steelwork.",
    gallery: [
      "/images/projects/Bays Edge - AL Sahel/1.jpg",
      "/images/projects/Bays Edge - AL Sahel/2.jpg", 
      "/images/projects/Bays Edge - AL Sahel/3.jpg",  
      "/images/projects/Bays Edge - AL Sahel/4.jpg", 
      "/images/projects/Bays Edge - AL Sahel/5.jpg"]
  },
  {
    id: 26,
    title: "Finland Pavilion @ Dubai Expo",
    consultant: "NSD Architectural Consultants",
    contractor: "Cemolai Raymond",
    value: "2.1M AED",
    image: "/images/projects/Finland Pavilion @ Dubai Expo/a.jpg",
    year: "2020",
    location: "Dubai, UAE",
    startDate: "2019",
    completionDate: "April 2020",
    description: "A pavilion showcasing Finnish innovation in sustainable forest-based materials and design. Its sleek steel and timber structure emphasized green principles and modular construction, hosted during Expo 2020 in Dubai.",
    gallery: [
      "/images/projects/Finland Pavilion @ Dubai Expo/1.jpg", 
      "/images/projects/Finland Pavilion @ Dubai Expo/2.jpg",
      "/images/projects/Finland Pavilion @ Dubai Expo/3.jpg",
      "/images/projects/Finland Pavilion @ Dubai Expo/4.jpg",
      "/images/projects/Finland Pavilion @ Dubai Expo/5.jpg",
      "/images/projects/Finland Pavilion @ Dubai Expo/6.jpg",
      "/images/projects/Finland Pavilion @ Dubai Expo/7.jpg",
      "/images/projects/Finland Pavilion @ Dubai Expo/8.jpg",
      "/images/projects/Finland Pavilion @ Dubai Expo/9.jpg",
      "/images/projects/Finland Pavilion @ Dubai Expo/10.jpg", 
      "/images/projects/Finland Pavilion @ Dubai Expo/11.jpg"]
  },
  {
    id: 27,
    title: "USA Pavilion @ Dubai Expo",
    consultant: "Khatib & Alami",
    contractor: "Electra Exhibitions LLC",
    value: "2.1M AED",
    image: "/images/projects/USA Pavilion @ Dubai Expo/a.jpg",
    year: "2020",
    location: "Dubai, UAE",
    startDate: "2019",
    completionDate: "September 2020",
    description: "High‑profile USA Pavilion featuring innovative steel framework and immersive exhibit spaces at Expo 2020. Known for its “The Garden” outdoor experience and bold architectural design symbolizing American creativity and openness.",
    gallery: [
      "/images/projects/USA Pavilion @ Dubai Expo/1.jpg", 
      "/images/projects/USA Pavilion @ Dubai Expo/2.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/3.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/4.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/5.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/6.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/7.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/8.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/9.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/10.jpg",
      "/images/projects/USA Pavilion @ Dubai Expo/11.jpg", 
      "/images/projects/USA Pavilion @ Dubai Expo/12.jpg"]
  },
  {
    id: 28,
    title: "Slovenia Pavilion @ Dubai Expo",
    consultant: "Capital Engineering Consultancy",
    contractor: "RIKO Industrial",
    value: "1.8M AED",
    image: "/images/projects/Slovenia Pavilion @ Dubai Expo/a.jpg",
    year: "2020",
    location: "Dubai, UAE",
    startDate: "2019",
    completionDate: "October 2020",
    description: "Cultural pavilion highlighting Slovenia’s landscapes and technologies through steel-enhanced exhibition spaces and interactive displays. The design incorporated sustainable materials and bespoke steel detailing for structural and aesthetic impact.",
    gallery: [
      "/images/projects/Slovenia Pavilion @ Dubai Expo/1.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/2.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/3.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/4.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/5.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/6.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/7.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/8.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/9.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/10.jpg", 
      "/images/projects/Slovenia Pavilion @ Dubai Expo/11.jpg"]
  },
  {
    id: 29,
    title: "DEWA R&D",
    consultant: "Santec",
    contractor: "GBH International Contracting LLC",
    value: "1.6M AED",
    image: "/images/projects/DEWA R&D/a.jpg",
    year: "2018",
    location: "Dubai, UAE",
    startDate: "2018",
    completionDate: "July 2018",
    description: "Research & development center for DEWA focusing on renewable energy and smart grid technologies. The steel-framed facility includes labs, offices, and testing zones, built to high sustainability and resilience standards.",
    gallery: [
      "/images/projects/DEWA R&D/1.jpg", 
      "/images/projects/DEWA R&D/2.jpg", 
      "/images/projects/DEWA R&D/3.jpg",
      "/images/projects/DEWA R&D/4.jpg",
      "/images/projects/DEWA R&D/5.jpg",
      "/images/projects/DEWA R&D/6.jpg",
      "/images/projects/DEWA R&D/7.jpg"]
  },
  {
    id: 30,
    title: "Thailand Pavilion @ Dubai Expo",
    consultant: "Design 103 International",
    contractor: "OP3 World",
    value: "1.8M AED",
    image: "/images/projects/Thailand Pavilion @ Dubai Expo/a.jpg",
    year: "2021",
    location: "Dubai, UAE",
    startDate: "2019",
    completionDate: "October 2021",
    description: "Exhibition pavilion celebrating Thai culture, cuisine, and sustainable innovation. Designed with steel supports and open-air corridors, it featured vertical gardens and interactive spaces, contributing to Expo’s “Liveability” theme.",
    gallery: [
      "/images/projects/Thailand Pavilion @ Dubai Expo/1.jpg", 
      "/images/projects/Thailand Pavilion @ Dubai Expo/2.jpg",
      "/images/projects/Thailand Pavilion @ Dubai Expo/3.jpg",
      "/images/projects/Thailand Pavilion @ Dubai Expo/4.jpg",
      "/images/projects/Thailand Pavilion @ Dubai Expo/5.jpg",
      "/images/projects/Thailand Pavilion @ Dubai Expo/6.jpg",
      "/images/projects/Thailand Pavilion @ Dubai Expo/7.jpg",
      "/images/projects/Thailand Pavilion @ Dubai Expo/8.jpg", 
      "/images/projects/Thailand Pavilion @ Dubai Expo/9.jpg"]
  },
  {
  id: 31,
  title: "Empower DCP",
  consultant: "Allied Consultants",
  contractor: "Chicago Construction LLC",
  value: "1.8M AED",
  image: "/images/projects/Empower DCP/a.jpg",
  year: "2021",
  location: "Dubai, UAE",
  startDate: "2019",
  completionDate: "September 2021",
  description: "District cooling plant (DCP) project for Empower, featuring steel-framed mechanical buildings and infrastructure designed for optimal energy efficiency and operational reliability.",
  gallery: [
    "/images/projects/Empower DCP/2.jpg", 
    "/images/projects/Empower DCP/3.jpg", 
    "/images/projects/Empower DCP/4.jpg"]
},
{
  id: 32,
  title: "Hampton RAK",
  consultant: "JT & Partners",
  contractor: "Al Ali Construction & Development LLC",
  value: "1.6M AED",
  image: "/images/projects/Hampton RAK/a.jpg",
  year: "2022",
  location: "Ras Al Khaimah, UAE",
  startDate: "2020",
  completionDate: "November 2022",
  description: "Luxury Hampton by Hilton hotel in Ras Al Khaimah, constructed with advanced steel frameworks ensuring structural integrity, fast-track construction, and a premium guest experience.",
  gallery: [
    "/images/projects/Hampton RAK/1.jpg", 
    "/images/projects/Hampton RAK/2.jpg",
    "/images/projects/Hampton RAK/3.jpg",
    "/images/projects/Hampton RAK/4.jpg",
    "/images/projects/Hampton RAK/5.jpg", 
    "/images/projects/Hampton RAK/6.jpg"]
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

  const handleCardClick = (projectId: number) => {
    setExpandedCard(projectId);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseExpanded = () => {
    setExpandedCard(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (expandedCard) {
      const project = projects.find(p => p.id === expandedCard);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
      }
    }
  };

  const prevImage = () => {
    if (expandedCard) {
      const project = projects.find(p => p.id === expandedCard);
      if (project) {
        setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      }
    }
  };

  const expandedProject = projects.find(p => p.id === expandedCard);

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
        
        {/* Hero Section */}
        <section className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Decorative flourishes and title */}
            <div className="flex items-center justify-center mb-8">
              <div className="hidden sm:block w-32 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
              <div className="hidden sm:block w-8 h-px bg-yellow-400 mx-4"></div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-yellow-400 mx-8 animate-fade-in-up">
                Projects
              </h1>
              <div className="hidden sm:block w-8 h-px bg-yellow-400 mx-4"></div>
              <div className="hidden sm:block w-32 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
            </div>
            
            {/* Golden separator line */}
            <div className="w-3/5 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-8"></div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of steel construction projects delivered across the UAE, showcasing engineering expertise and uncompromising quality. Each project reflects our dedication to innovation, precision, and client satisfaction in every phase of construction.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={el => cardRefs.current[index] = el}
                  className={`project-card group cursor-pointer transition-all duration-600 ${
                    visibleCards.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-5'
                  }`}
                  onClick={() => handleCardClick(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Year badge */}
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Consultant:</span>
                        <span className="text-white text-sm font-medium">{project.consultant}</span>
                      </div>
                      
                      <div className='grid grid-cols-[auto,1fr] gap-2'>
                        <span className="text-gray-400 text-sm">Contractor:</span>
                        <span className="text-white text-sm font-medium break-words text-right">{project.contractor}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Location:</span>
                        <span className="text-white text-sm font-medium">{project.location}</span>
                      </div>
                    </div>

                    {/* Project Value */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Project Value:</span>
                        <span className="text-yellow-400 text-lg font-bold">{project.value}</span>
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

      {/* Expanded Card Modal */}
      {expandedCard && expandedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCloseExpanded}
          ></div>
          
          {/* Expanded Card */}
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl overflow-hidden shadow-2xl animate-modal-in">
            {/* Close Button */}
            <button
              onClick={handleCloseExpanded}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="p-8 pb-6">
                <h2 className="text-4xl font-serif font-bold text-yellow-400 mb-2">
                  {expandedProject.title}
                </h2>
                <div className="flex items-center text-gray-300 text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                  {expandedProject.location}
                </div>
              </div>

              {/* Image Gallery */}
              <div className="relative px-8 mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img
                    src={expandedProject.gallery[currentImageIndex]}
                    alt={`${expandedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gallery Navigation */}
                  {expandedProject.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400 transition-all duration-200"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400 transition-all duration-200"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {expandedProject.gallery.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentImageIndex
                                ? 'bg-yellow-400 w-8'
                                : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Project Info */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/30 p-4 rounded-lg border border-yellow-400/20">
                        <div className="flex items-center mb-2">
                          <DollarSign className="w-5 h-5 text-yellow-400 mr-2" />
                          <span className="text-gray-400 text-sm">Project Value</span>
                        </div>
                        <span className="text-yellow-400 text-xl font-bold">{expandedProject.value}</span>
                      </div>
                      
                      <div className="bg-black/30 p-4 rounded-lg border border-yellow-400/20">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-5 h-5 text-yellow-400 mr-2" />
                          <span className="text-gray-400 text-sm">Year</span>
                        </div>
                        <span className="text-white text-xl font-semibold">{expandedProject.year}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Building className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                        <div>
                          <span className="text-gray-400 text-sm block">Consultant</span>
                          <span className="text-white font-medium">{expandedProject.consultant}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Building className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                        <div>
                          <span className="text-gray-400 text-sm block">Main Contractor</span>
                          <span className="text-white font-medium">{expandedProject.contractor}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                        <div>
                          <span className="text-gray-400 text-sm block">Start Date</span>
                          <span className="text-white font-medium">{expandedProject.startDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                        <div>
                          <span className="text-gray-400 text-sm block">Completion Date</span>
                          <span className="text-white font-medium">{expandedProject.completionDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Description */}
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-yellow-400 mb-4">
                      Project Description
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {expandedProject.description}
                    </p>
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

export default ProjectsPage;