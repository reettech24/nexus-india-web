import React from 'react';
// You'll need to install react-icons: npm install react-icons
import { FaInstagram, FaTwitter, FaDribbble, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img 
                className="h-10 w-10" 
                src="https://placehold.co/100x100/3b82f6/white?text=N" 
                alt="Nexus India Logo" 
              />
              <div>
                <span className="font-bold text-xl text-white">NEXUS INDIA</span>
                <p className="text-xs text-gray-400 tracking-wider">BIG DREAMS, SMALL BUDGET</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Nexus India is committed to transforming the growth journey of small and medium-sized enterprises (SMEs) nationwide.
            </p>
          </div>

          {/* Column 2: Quick Links 1 */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Our services</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links 2 */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Women Empowerment</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Animal Welfare</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Startup Businesses</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm">+91 9022993526 | 7972905758</li>
              <li className="text-sm">info@nexusindiaonline.com</li>
              <li className="text-sm">info@reettechht.com</li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Left: Terms and Privacy */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="text-sm hover:text-white">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white">Privacy Policy</a>
          </div>

          {/* Center: Social Icons */}
          <div className="flex gap-5 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors"><FaInstagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><FaDribbble className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn className="w-5 h-5" /></a>
          </div>

          {/* Right: Copyright */}
          <p className="text-sm">
            @2025 Nexus India. All copyright reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;