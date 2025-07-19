import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import websiteLogo from '../../assets/logos/website-favicon.png';
import facebookLogo from '../../assets/logos/facebook.png';
import twitterLogo from '../../assets/logos/twitter.png';
import youtubeLogo from '../../assets/logos/youtube.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white relative">
      {/* Subtle brick wall texture at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo and Social Media */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={websiteLogo} 
                  alt="Clôture Plante Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-500">CLÔTURE PLANTE</h3>
                <p className="text-xs text-white uppercase">FENCE PLANTE</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors p-2">
                <img 
                  src={facebookLogo} 
                  alt="Facebook" 
                  className="w-full h-full object-contain brightness-0 invert filter drop-shadow-lg scale-110"
                />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors p-2">
                <img 
                  src={twitterLogo} 
                  alt="Twitter" 
                  className="w-full h-full object-contain brightness-0 invert filter drop-shadow-lg scale-110"
                />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors p-2">
                <img 
                  src={youtubeLogo} 
                  alt="YouTube" 
                  className="w-full h-full object-contain brightness-0 invert filter drop-shadow-lg scale-110"
                />
              </a>
            </div>
          </div>

          {/* Middle Section - Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-orange-500 font-semibold mb-2">Address</h4>
                <p className="text-white text-sm">1201 Bd Saint-Joseph Gatineau, QC J8Z 2C3</p>
              </div>
              <div>
                <h4 className="text-orange-500 font-semibold mb-2">Phone</h4>
                <p className="text-white text-sm">1 (581) 748-2138</p>
              </div>
              <div>
                <h4 className="text-orange-500 font-semibold mb-2">E-mail</h4>
                <p className="text-white text-sm">gestion@clotureplante.com</p>
              </div>
            </div>
          </div>

          {/* Right Section - Service Areas and Opening Hours */}
          <div className="space-y-6">
            <div>
              <h4 className="text-orange-500 font-semibold mb-4">Service areas</h4>
              <div className="space-y-2 text-white text-sm">
                <p>Ottawa</p>
                <p>Gatineau</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-orange-500 font-semibold mb-4">Opening hours</h4>
              <div className="space-y-2 text-white text-sm">
                <p>Monday - Friday 8am - 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Orange Bar - Legal and Copyright */}
      <div className="bg-orange-500 py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
          <div className="text-white text-xs">
            © 2025 All rights reserved
          </div>
          <div className="flex items-center space-x-3 text-white text-xs">
            <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
            <span>|</span>
            <span>Plant Fence</span>
            <span>|</span>
            <span>Created by Adil SEO agency</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
              <svg className="w-2 h-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </button>
            <span className="text-gray-300 text-xs">Privacy - Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 