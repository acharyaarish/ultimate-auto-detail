// pages/index.tsx

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCalendar } from 'react-icons/ai';

interface Service {
  name: string;
  sedan?: number | null;
  suv?: number | null;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  isBookingCard?: boolean;
}

const services: Service[] = [
  { 
    name: "Basic Wash and Vacuum", 
    sedan: 60, 
    suv: 75, 
    description: "Keep your car clean with a basic wash and vacuum for a fresh look.", 
    image: "./images/basic-wash.webp" 
  },
  { 
    name: "Interior Detail", 
    sedan: 120, 
    suv: 135, 
    description: "Comprehensive interior detailing to rejuvenate your car's interior.", 
    image: "./images/interior-detail.webp" 
  },
  { 
    name: "Interior and Exterior", 
    sedan: 200, 
    suv: 220, 
    description: "A full service covering both interior and exterior cleaning.", 
    image: "./images/interior-exterior.webp" 
  },
  { 
    name: "Paint Correction and Interior Detail", 
    sedan: 350, 
    suv: 450, 
    description: "Advanced paint correction to restore your car’s appearance.", 
    image: "./images/paint-correction.webp" 
  },
  { 
    name: "Ceramic Coating", 
    sedan: 650, 
    suv: 800, 
    description: "Long-lasting ceramic coating to protect your vehicle.", 
    image: "./images/ceramic-coating.webp" 
  },
  { 
    name: "Book Now", 
    sedan: null, 
    suv: null, 
    icon: <AiOutlineCalendar aria-label="Book Now" />, 
    description: "Ready to book a service with us? Click below!", 
    isBookingCard: true 
  }
];

// Hero Section Component
const HeroSection: FC = () => (
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    <video 
      autoPlay 
      muted 
      loop 
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
      poster="./images/hero-poster.jpg"
    >
      <source src="./videos/hero-video.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    <div className="relative z-10 max-w-3xl text-center text-white px-6 md:px-12 space-y-5 animate-fadeIn">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
        Ultimate Auto Detail
      </h1>
      <p className="text-lg md:text-xl opacity-90 leading-relaxed">
        Premium mobile car detailing at your doorstep, Melbourne-wide.
      </p>
      <Link href="https://www.google.com/maps/place/Ultimate+Auto+Detail/@-37.9431933,143.9990491,8z/data=!4m10!1m2!2m1!1sUltimate+auto+detail+melbourne+reviews!3m6!1s0xa5453c59e2ec5191:0x2851005a5176d25!8m2!3d-37.950559!4d145.3182996!15sCiZVbHRpbWF0ZSBhdXRvIGRldGFpbCBtZWxib3VybmUgcmV2aWV3cyICOAGSARVjYXJfZGV0YWlsaW5nX3NlcnZpY2XgAQA!16s%2Fg%2F11y8cvfrtn?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" 
        className="inline-block bg-blue-600 hover:bg-blue-500 py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 font-semibold"
      >
        Book Your Service
      </Link>
    </div>
  </section>
);

// Service Card Component with Enhanced Effects
const ServiceCard: FC<{ service: Service }> = ({ service }) => (
  <div
    className={`group relative rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 ${
      service.isBookingCard 
      ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center justify-center' 
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}
    style={{ minHeight: '380px' }}
  >
    {service.image && !service.isBookingCard && (
      <div className="relative h-48 w-full">
        <Image
          src={service.image}
          alt={service.name}
          layout="fill"
          objectFit="cover"
          quality={90}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      </div>
    )}
    <div className={`p-6 space-y-4 ${service.isBookingCard ? 'flex flex-col items-center justify-center text-center' : ''}`}>
      {service.isBookingCard && (
        <div className="text-5xl mb-3">{service.icon}</div>
      )}
      <h3 className="text-xl font-semibold text-center mb-1">
        {service.name}
      </h3>
      <p className="text-sm text-center">{service.description}</p>

      {service.sedan && service.suv && (
        <div className="flex justify-around font-semibold text-sm text-gray-700 mt-3">
          <p><span className="text-blue-500">Sedan:</span> ${service.sedan}</p>
          <p><span className="text-blue-500">SUV:</span> ${service.suv}</p>
        </div>
      )}

      {service.isBookingCard && (
        <Link href="https://www.google.com/maps/place/Ultimate+Auto+Detail/@-37.9431933,143.9990491,8z/data=!4m10!1m2!2m1!1sUltimate+auto+detail+melbourne+reviews!3m6!1s0xa5453c59e2ec5191:0x2851005a5176d25!8m2!3d-37.950559!4d145.3182996!15sCiZVbHRpbWF0ZSBhdXRvIGRldGFpbCBtZWxib3VybmUgcmV2aWV3cyICOAGSARVjYXJfZGV0YWlsaW5nX3NlcnZpY2XgAQA!16s%2Fg%2F11y8cvfrtn?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" 
          className="mt-4 py-2 px-6 bg-yellow-500 text-gray-900 rounded-lg transition hover:bg-yellow-600 transform hover:scale-105 shadow-md font-medium"
        >
          Book Now
        </Link>
      )}
    </div>
  </div>
);

// Services Section Component
const ServicesSection: FC = () => (
  <section id="services" className="py-20 px-6 md:px-12">
    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </section>
);

// Enhanced Footer CTA Component
const FooterCTA: FC = () => (
  <section className="relative bg-blue-600 text-white py-16 px-6 md:px-12 rounded-lg shadow-lg text-center">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 opacity-80"></div>
    <div className="relative z-10 space-y-6">
      <h3 className="text-3xl font-semibold">Mobile Detailing at Your Doorstep</h3>
      <p className="text-lg leading-relaxed max-w-2xl mx-auto">
        Convenient, premium car care that comes to you. Book now and experience the ultimate auto detail.
      </p>
      <Link href="https://www.google.com/maps/place/Ultimate+Auto+Detail/@-37.9431933,143.9990491,8z/data=!4m10!1m2!2m1!1sUltimate+auto+detail+melbourne+reviews!3m6!1s0xa5453c59e2ec5191:0x2851005a5176d25!8m2!3d-37.950559!4d145.3182996!15sCiZVbHRpbWF0ZSBhdXRvIGRldGFpbCBtZWxib3VybmUgcmV2aWV3cyICOAGSARVjYXJfZGV0YWlsaW5nX3NlcnZpY2XgAQA!16s%2Fg%2F11y8cvfrtn?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" 
        className="inline-block bg-white text-blue-600 py-3 px-8 rounded-lg shadow transition hover:bg-gray-100 font-semibold transform hover:scale-105"
      >
        Book Now
      </Link>
    </div>
  </section>
);

// Main Home Component
const Home: FC = () => (
  <div className="w-full space-y-20">
    <HeroSection />
    <ServicesSection />
    <FooterCTA />
  </div>
);

export default Home;
