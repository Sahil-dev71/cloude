import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  heroImage,
  processImage,
  commitmentImage,
  commitmentDarkImage,
  drillImage,
  project1,
  project2,
  project3,
  project4
} from '../../assets/services/fenceinstallation';

const FenceInstallation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fence-installation-page">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${drillImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-105 brightness-50" style={{ backgroundImage: `url(${drillImage})` }}></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-orange-500 text-xl md:text-2xl font-bold mb-4 tracking-wider">
              {t('fenceInstallationHeroSubtitle')}
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8">
              {t('fenceInstallationHeroTitle')}
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* Close in Style Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-8">
                {t('closeInStyleTitle')}
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  {t('closeInStyleDescription1')}
                </p>
                <p>
                  {t('closeInStyleDescription2')}
                </p>
              </div>
              
              <div className="bg-black text-white p-8 rounded-lg mt-8 text-center">
                <div className="bg-transparent border-2 border-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('fortressTitle')}
                </h3>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  CONTACT US
                </button>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={processImage}
                alt="Fence Installation Process" 
                className="w-full h-auto object-cover lg:h-[600px] md:h-[500px] h-[400px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Plant Fence Promise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-16">
            {t('plantFencePromiseTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Promise 1 */}
            <div className="bg-white border-2 border-orange-500 rounded-lg p-8 text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('temperedGlassExpertise')}
              </h3>
            </div>

            {/* Promise 2 */}
            <div className="bg-white border-2 border-orange-500 rounded-lg p-8 text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('varietyProducts')}
              </h3>
            </div>

            {/* Promise 3 */}
            <div className="bg-white border-2 border-orange-500 rounded-lg p-8 text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('experiencedTeam')}
              </h3>
            </div>

            {/* Promise 4 */}
            <div className="bg-white border-2 border-orange-500 rounded-lg p-8 text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('qualityCommitment')}
              </h3>
            </div>

            {/* Promise 5 */}
            <div className="bg-white border-2 border-orange-500 rounded-lg p-8 text-center">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('customSolutions')}
              </h3>
            </div>

            {/* Promise 6 - Contact CTA */}
            <div className="bg-orange-500 rounded-lg p-8 text-center text-white">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-4">
                CONTACT US
              </h3>
              <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${commitmentDarkImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-semibold mb-8">
                {t('commitmentTitle')}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  {t('commitmentDescription1')}
                </p>
                <p>
                  {t('commitmentDescription2')}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-orange-500 rounded-full p-8">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative">
              <img 
                src={project1}
                alt="Modern Horizontal Slat Fence" 
                className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            
            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative">
              <img 
                src={project2}
                alt="Wrought Iron Gate" 
                className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            
            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative">
              <img 
                src={project3}
                alt="Contemporary Deck Railings" 
                className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative">
              <img 
                src={project4}
                alt="Professional Fence Installation" 
                className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          </div>

          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            {t('projectShowcaseTitle')}
          </h2>

          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FenceInstallation; 