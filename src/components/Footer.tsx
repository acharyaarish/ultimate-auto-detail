import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="container mx-auto px-6 md:px-12 py-16 grid gap-12 lg:grid-cols-4 text-center lg:text-left">
      {/* Logo and About Section */}
      <div className="space-y-6 flex flex-col items-center lg:items-start">
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          <div className="bg-white p-3 rounded-full shadow-md">
            <Image
              src="./logo.png"
              alt="Ultimate Auto Detail Logo"
              width={50}
              height={50}
              className="rounded-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold text-white">Ultimate Auto Detail</h3>
        </div>
        <p className="text-gray-400 leading-relaxed text-center lg:text-left">
          Delivering premium car detailing services across Melbourne. Experience precision, care, and excellence for your vehicle.
        </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-6 flex flex-col items-center lg:items-start">
        <h4 className="text-xl font-semibold text-white">Contact Us</h4>
        <div className="space-y-3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <FaMapMarkerAlt className="text-blue-500" />
            <p>Melbourne, VIC, Australia</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <FaPhoneAlt className="text-blue-500" />
            <p>+61 412 565 594</p>
          </div>
          <Link
            href="https://www.google.com/maps/place/Ultimate+Auto+Detail/@-37.9431933,143.9990491,8z/data=!4m10!1m2!2m1!1sUltimate+auto+detail+melbourne+reviews!3m6!1s0xa5453c59e2ec5191:0x2851005a5176d25!8m2!3d-37.950559!4d145.3182996!15sCiZVbHRpbWF0ZSBhdXRvIGRldGFpbCBtZWxib3VybmUgcmV2aWV3cyICOAGSARVjYXJfZGV0YWlsaW5nX3NlcnZpY2XgAQA!16s%2Fg%2F11y8cvfrtn?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition font-medium"
          >
            View on Google Maps
          </Link>
        </div>
      </div>

      {/* Simplified Business Hours */}
      <div className="space-y-6 flex flex-col items-center lg:items-start">
        <h4 className="text-xl font-semibold text-white">Business Hours</h4>
        <p className="text-gray-400 leading-relaxed text-center lg:text-left">
          <strong>Sat–Sun:</strong> 8 am – 6 pm<br />
          <strong>Mon:</strong> Closed<br />
          <strong>Tues–Fri:</strong> 5 pm – 9 pm
        </p>
      </div>

      {/* Social Media Links */}
      <div className="space-y-6 flex flex-col items-center lg:items-start">
        <h4 className="text-xl font-semibold text-white">Stay Connected</h4>
        <p className="text-gray-400 text-center lg:text-left">
          Follow us for updates, tips, and the latest services.
        </p>
        <div className="flex justify-center lg:justify-start space-x-6">
          <a
            href="https://www.instagram.com/ultimate_autodetail_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-300 hover:text-pink-500 transition"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.tiktok.com/@ultimate_autodetail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-gray-300 hover:text-gray-600 transition"
          >
            <FaTiktok size={30} />
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="bg-gray-800 py-4 mt-12">
      <div className="container mx-auto text-center text-sm text-white-500">
        <p>Ultimate Auto Detail &copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
