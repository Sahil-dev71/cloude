import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-dark-900">
              {t('companyName')}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-dark-700 hover:text-orange-500 transition-colors font-medium">
              {t('home')}
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={closeServicesDropdown}
            >
              <button className="text-dark-700 hover:text-orange-500 transition-colors font-medium flex items-center">
                {t('services')}
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-dark-900">{t('ourServices')}</h3>
                  </div>
                  
                  <div className="py-2">
                    <a 
                      href="#fences" 
                      className="block px-4 py-2 text-sm text-dark-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {t('fences')}
                    </a>
                    <a 
                      href="#railings" 
                      className="block px-4 py-2 text-sm text-dark-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {t('railings')}
                    </a>
                    <a 
                      href="#gates" 
                      className="block px-4 py-2 text-sm text-dark-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {t('gates')}
                    </a>
                    <a 
                      href="#pool-fences" 
                      className="block px-4 py-2 text-sm text-dark-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {t('poolFences')}
                    </a>
                    <a 
                      href="#security-fences" 
                      className="block px-4 py-2 text-sm text-dark-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {t('securityFences')}
                    </a>
                    <a 
                      href="#commercial" 
                      className="block px-4 py-2 text-sm text-dark-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {t('commercial')}
                    </a>
                    <a 
                      href="#residential" 
                      className="block px-4 py-2 text-sm text-dark-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {t('residential')}
                    </a>
                  </div>
                  
                  <div className="px-4 py-2 border-t border-gray-100">
                    <a 
                      href="#contact" 
                      className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      {t('getQuote')} →
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#gallery" className="text-dark-700 hover:text-orange-500 transition-colors font-medium">
              {t('gallery')}
            </a>
            <a href="#about" className="text-dark-700 hover:text-orange-500 transition-colors font-medium">
              {t('about')}
            </a>
            <a href="#contact" className="text-dark-700 hover:text-orange-500 transition-colors font-medium">
              {t('contact')}
            </a>
          </nav>

          {/* Contact Info & Language Switcher */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-dark-700">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">(819) 555-0123</span>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  language === 'EN' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('FR')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  language === 'FR' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                }`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-dark-700 hover:text-orange-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-dark-700 hover:text-orange-500 transition-colors font-medium">
                {t('home')}
              </a>
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-dark-700 font-medium mb-2">{t('services')}</div>
                <div className="pl-4 space-y-1">
                  <a href="#fences" className="block py-1 text-sm text-dark-600 hover:text-orange-500 transition-colors">
                    {t('fences')}
                  </a>
                  <a href="#railings" className="block py-1 text-sm text-dark-600 hover:text-orange-500 transition-colors">
                    {t('railings')}
                  </a>
                  <a href="#gates" className="block py-1 text-sm text-dark-600 hover:text-orange-500 transition-colors">
                    {t('gates')}
                  </a>
                  <a href="#pool-fences" className="block py-1 text-sm text-dark-600 hover:text-orange-500 transition-colors">
                    {t('poolFences')}
                  </a>
                  <a href="#security-fences" className="block py-1 text-sm text-dark-600 hover:text-orange-500 transition-colors">
                    {t('securityFences')}
                  </a>
                  <a href="#commercial" className="block py-1 text-sm text-dark-600 hover:text-orange-500 transition-colors">
                    {t('commercial')}
                  </a>
                  <a href="#residential" className="block py-1 text-sm text-dark-600 hover:text-orange-500 transition-colors">
                    {t('residential')}
                  </a>
                </div>
              </div>
              
              <a href="#gallery" className="block px-3 py-2 text-dark-700 hover:text-orange-500 transition-colors font-medium">
                {t('gallery')}
              </a>
              <a href="#about" className="block px-3 py-2 text-dark-700 hover:text-orange-500 transition-colors font-medium">
                {t('about')}
              </a>
              <a href="#contact" className="block px-3 py-2 text-dark-700 hover:text-orange-500 transition-colors font-medium">
                {t('contact')}
              </a>
              
              {/* Mobile Contact Info */}
              <div className="px-3 py-2 border-t border-gray-200 mt-4">
                <div className="flex items-center text-dark-700 mb-2">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium">(819) 555-0123</span>
                </div>
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center space-x-2 mt-3">
                  <button
                    onClick={() => setLanguage('EN')}
                    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                      language === 'EN' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('FR')}
                    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                      language === 'FR' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                    }`}
                  >
                    FR
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 