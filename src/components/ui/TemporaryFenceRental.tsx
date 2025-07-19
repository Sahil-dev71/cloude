import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  wallFence,
  temporaryFence
} from '../../assets/services/temporayfence';

const TemporaryFenceRental: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="temporary-fence-rental-page">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${temporaryFence})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-105 brightness-50" style={{ backgroundImage: `url(${temporaryFence})`, imageRendering: 'crisp-edges' }}></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-orange-500 text-xl md:text-2xl font-bold mb-4 tracking-wider">
              {t('temporaryFenceRentalHeroSubtitle')}
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8">
              {t('temporaryFenceRentalHeroTitle')}
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors">
              {t('contactUs')}
            </button>
          </div>
        </div>
      </section>

      {/* Our Solution Adapted to Your Project Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                {t('solutionAdaptedTitle')}
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  {t('solutionAdaptedDescription1')}
                </p>
                <p>
                  {t('solutionAdaptedDescription2')}
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={wallFence}
                alt="Black Chain-link Fence with Brick Building" 
                className="w-full h-auto object-cover lg:h-[600px] md:h-[500px] h-[400px] transition-transform duration-500 ease-in-out hover:scale-110"
                loading="eager"
                decoding="async"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${temporaryFence})`, imageRendering: 'crisp-edges' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-transparent border-2 border-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-8 max-w-3xl mx-auto">
            {t('contactInfoMessage')}
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors">
            {t('contactUs')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TemporaryFenceRental; 