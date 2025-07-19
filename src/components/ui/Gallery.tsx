import React, { useState } from 'react';
import { galleryImages, GalleryImage } from '../../assets';
import { useLanguage } from '../../contexts/LanguageContext';
import galleryBackground from '../../assets/images/gallerybackgroundimage.webp';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${galleryBackground})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          {/* Subtitle */}
          <h2 className="text-base md:text-lg lg:text-xl font-medium mb-4 text-orange-500 uppercase tracking-wide">
            Plant Fence
          </h2>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 text-white">
            Gallery
          </h1>
          
          {/* Contact Button */}
          <a 
            href="#contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg text-base uppercase tracking-wide shadow-lg transition-colors duration-300 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Portfolio and Gallery Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Portfolio Introduction Section */}
          <div className="relative mb-16 overflow-hidden">
            {/* Subtle Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
              style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><rect width="1200" height="400" fill="%23111127"/><rect x="100" y="50" width="1000" height="300" fill="%23374151" opacity="0.3"/><rect x="150" y="75" width="900" height="250" fill="%231f2937" opacity="0.4"/></svg>')`,
              }}
            ></div>

            {/* Portfolio Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                A PORTFOLIO OF PERFECTION
              </h2>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-5xl mx-auto">
                Explore Clôture Plante's gallery to get inspired by the most beautiful fence and railing installations in Ottawa and Gatineau. Each project reflects our commitment to excellence!
              </p>
            </div>
          </div>

          {/* Gallery Grid - Show all images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 bg-gray-800"
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt[language.toLowerCase() as 'en' | 'fr']}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Image Description Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="text-white">
                    <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                      {image.alt[language.toLowerCase() as 'en' | 'fr']}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-3 mb-3">
                      {image.description[language.toLowerCase() as 'en' | 'fr']}
                    </p>
                    <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-5xl w-full max-h-full">
                <img
                  src={galleryImages.find(img => img.id === selectedImage)?.src}
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt[language.toLowerCase() as 'en' | 'fr']}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Lightbox Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-80 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-white font-semibold mb-2 text-lg">
                    {galleryImages.find(img => img.id === selectedImage)?.alt[language.toLowerCase() as 'en' | 'fr']}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {galleryImages.find(img => img.id === selectedImage)?.description[language.toLowerCase() as 'en' | 'fr']}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {galleryImages.find(img => img.id === selectedImage)?.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {t('clickToClose')}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><rect width="1200" height="400" fill="%23111127"/><rect x="100" y="100" width="1000" height="200" fill="%23374151" opacity="0.4"/><rect x="150" y="125" width="900" height="150" fill="%231f2937" opacity="0.6"/></svg>')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          {/* Upward Arrow Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg 
                className="w-8 h-8 text-gray-700" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
              </svg>
            </div>
          </div>
          
          {/* Main Text */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-white">
            See the extent of our expertise.
          </h2>
          
          {/* Contact Button */}
          <a 
            href="#contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg text-base uppercase tracking-wide shadow-lg transition-colors duration-300 inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery; 