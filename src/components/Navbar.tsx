import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect active section on scroll and route changes
  useEffect(() => {
    const handleScroll = () => {
      if (router.pathname !== '/') return; // Only track sections on the home page

      const scrollPos = window.scrollY + 200;
      const sections = [
        { id: 'home', offset: 0 },
        { id: 'services', offset: document.getElementById('services')?.offsetTop || 0 },
        { id: 'footer', offset: document.getElementById('footer')?.offsetTop || 0 }
      ];

      const currentSection = sections.reduce((closest, section) =>
        Math.abs(section.offset - scrollPos) < Math.abs(closest.offset - scrollPos) ? section : closest
      , sections[0]);

      setActiveSection(currentSection.id);
      setIsScrolled(window.scrollY > 50); // Trigger background color change on scroll
    };

    // Set the initial active section and scroll state based on route
    setActiveSection(router.pathname === '/' ? 'home' : router.pathname.replace('/', ''));
    setIsScrolled(false);

    // Add scroll listener only on the home page
    if (router.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          router.pathname === '/' && !isScrolled
            ? 'bg-transparent'
            : 'backdrop-blur-md bg-gray-900/80 shadow-lg'
        }`}
        style={{ height: '64px' }}
      >
        <div className="container mx-auto flex items-center py-3 px-6 lg:px-10 justify-between">
          {/* Logo and Business Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md">
              <Image 
                src="./logo.png" 
                alt="Ultimate Auto Detail Logo" 
                width={40} 
                height={40} 
                className="object-cover" 
              />
            </div>
            <h1 className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600 }}>
              Ultimate Auto Detail
            </h1>
          </Link>

          {/* Right-Aligned Desktop Links */}
          <div className="hidden md:flex space-x-8 text-lg font-medium items-center">
            <Link
              href="/"
              className={`transition duration-200 ${
                activeSection === 'home'
                  ? 'underline decoration-blue-300 underline-offset-4 text-blue-300'
                  : 'text-white hover:text-blue-300'
              }`}
              style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '0.4px' }}
            >
              Home
            </Link>
            <Link
              href="/#services"
              scroll={false}
              className={`transition duration-200 ${
                activeSection === 'services'
                  ? 'underline decoration-blue-300 underline-offset-4 text-blue-300'
                  : 'text-white hover:text-blue-300'
              }`}
              style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '0.4px' }}
            >
              Services
            </Link>
            <a
              href="https://www.google.com/maps/place/Ultimate+Auto+Detail/@-37.9431933,143.9990491,8z/data=!4m10!1m2!2m1!1sultimate+auto+detail+melbourne!3m6!1s0xa5453c59e2ec5191:0x2851005a5176d25!8m2!3d-37.950559!4d145.3182996!15sCh51bHRpbWF0ZSBhdXRvIGRldGFpbCBtZWxib3VybmWSARVjYXJfZGV0YWlsaW5nX3NlcnZpY2XgAQA!16s%2Fg%2F11y8cvfrtn?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition duration-200 ${
                activeSection === 'footer'
                  ? 'underline decoration-blue-300 underline-offset-4 text-blue-300'
                  : 'text-white hover:text-blue-300'
              }`}
              style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '0.4px' }}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-white md:hidden ml-auto focus:outline-none"
          >
            {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center text-white space-y-6 text-lg font-medium">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`transition duration-200 ${
              activeSection === 'home' ? 'underline decoration-blue-300 underline-offset-4 text-blue-300' : 'text-white hover:text-blue-300'
            }`}
            style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '0.4px' }}
          >
            Home
          </Link>
          <Link
            href="/#services"
            scroll={false}
            onClick={() => setMenuOpen(false)}
            className={`transition duration-200 ${
              activeSection === 'services' ? 'underline decoration-blue-300 underline-offset-4 text-blue-300' : 'text-white hover:text-blue-300'
            }`}
            style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '0.4px' }}
          >
            Services
          </Link>
          <a
            href="https://www.google.com/maps/place/Ultimate+Auto+Detail/@-37.9431933,143.9990491,8z/data=!4m10!1m2!2m1!1sultimate+auto+detail+melbourne!3m6!1s0xa5453c59e2ec5191:0x2851005a5176d25!8m2!3d-37.950559!4d145.3182996!15sCh51bHRpbWF0ZSBhdXRvIGRldGFpbCBtZWxib3VybmWSARVjYXJfZGV0YWlsaW5nX3NlcnZpY2XgAQA!16s%2Fg%2F11y8cvfrtn?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className={`transition duration-200 ${
              activeSection === 'footer' ? 'underline decoration-blue-300 underline-offset-4 text-blue-300' : 'text-white hover:text-blue-300'
            }`}
            style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '0.4px' }}
          >
            Contact
          </a>
        </div>
      )}

      {/* Global Padding to Avoid Navbar Overlap */}
      <style jsx global>{`
        .main-content {
          padding-top: 64px;
        }
      `}</style>
    </>
  );
};

export default Navbar;
