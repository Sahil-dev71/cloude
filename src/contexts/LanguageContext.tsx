import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  // Header
  companyName: string;
  home: string;
  services: string;
  ourServices: string;
  fences: string;
  fenceInstallation: string;
  railings: string;
  gates: string;
  poolFences: string;
  securityFences: string;
  commercial: string;
  residential: string;
  getQuote: string;
  about: string;
  gallery: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getFreeQuote: string;
  
  // Introduction Section
  introductionTitle: string;
  introductionSubtitle: string;
  introductionDescription: string;
  
  // Gallery Section
  galleryTitle: string;
  gallerySubtitle: string;
  viewMore: string;
  clickToClose: string;
  
  // Call to Action Section
  ctaTitle: string;
  ctaDescription: string;
  contactUs: string;
  
  // Footer Section
  footerDescription: string;
  serviceAreas: string;
  ottawa: string;
  gatineau: string;
  quebec: string;
  businessHours: string;
  mondayFriday: string;
  saturday: string;
  sunday: string;
  closed: string;
  followUs: string;
  allRightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
}

const translations: Record<string, Translations> = {
  EN: {
    // Header
    companyName: 'CLÔTURE PLANTE',
    home: 'Home',
    services: 'Services',
    ourServices: 'Our Services',
    fences: 'Fences',
    fenceInstallation: 'Fence Installation',
    railings: 'Railings',
    gates: 'Gates',
    poolFences: 'Pool Fences',
    securityFences: 'Security Fences',
    commercial: 'Commercial',
    residential: 'Residential',
    getQuote: 'Get Quote',
    about: 'About',
    gallery: 'Gallery',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Professional Fencing Solutions',
    heroSubtitle: 'Quality & Reliability',
    heroDescription: 'Expert fence installation and repair services in Ottawa-Gatineau. From residential to commercial projects, we deliver exceptional results with premium materials and craftsmanship.',
    getFreeQuote: 'Get Free Quote',
    
    // Introduction Section
    introductionTitle: 'Your Trusted Fencing Partner',
    introductionSubtitle: 'Experience & Excellence',
    introductionDescription: 'With years of experience in the Ottawa-Gatineau region, we specialize in custom fence installations, repairs, and maintenance. Our team of skilled professionals ensures every project meets the highest standards of quality and safety.',
    
    // Gallery Section
    galleryTitle: 'Our Portfolio',
    gallerySubtitle: 'Recent Projects',
    viewMore: 'View More',
    clickToClose: 'Click to close',
    
    // Call to Action Section
    ctaTitle: 'Ready to Start Your Project?',
    ctaDescription: 'Contact us today for a free consultation and quote. Our team is ready to bring your fencing vision to life.',
    contactUs: 'Contact Us',
    
    // Footer Section
    footerDescription: 'Professional fencing services in Ottawa-Gatineau. Quality installations, repairs, and maintenance for residential and commercial properties.',
    serviceAreas: 'Service Areas',
    ottawa: 'Ottawa',
    gatineau: 'Gatineau',
    quebec: 'Quebec',
    businessHours: 'Business Hours',
    mondayFriday: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
    closed: 'Closed',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service'
  },
  FR: {
    // Header
    companyName: 'CLÔTURE PLANTE',
    home: 'Accueil',
    services: 'Services',
    ourServices: 'Nos Services',
    fences: 'Clôtures',
    fenceInstallation: 'Installation de Clôtures',
    railings: 'Garde-corps',
    gates: 'Portails',
    poolFences: 'Clôtures de Piscine',
    securityFences: 'Clôtures de Sécurité',
    commercial: 'Commercial',
    residential: 'Résidentiel',
    getQuote: 'Obtenir un Devis',
    about: 'À Propos',
    gallery: 'Galerie',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Solutions de Clôture Professionnelles',
    heroSubtitle: 'Qualité et Fiabilité',
    heroDescription: 'Services d\'installation et de réparation de clôtures experts à Ottawa-Gatineau. Des projets résidentiels aux projets commerciaux, nous offrons des résultats exceptionnels avec des matériaux et un savoir-faire de qualité supérieure.',
    getFreeQuote: 'Obtenir un Devis Gratuit',
    
    // Introduction Section
    introductionTitle: 'Votre Partenaire de Confiance en Clôture',
    introductionSubtitle: 'Expérience et Excellence',
    introductionDescription: 'Avec des années d\'expérience dans la région d\'Ottawa-Gatineau, nous nous spécialisons dans l\'installation de clôtures sur mesure, les réparations et l\'entretien. Notre équipe de professionnels qualifiés garantit que chaque projet respecte les plus hauts standards de qualité et de sécurité.',
    
    // Gallery Section
    galleryTitle: 'Notre Portfolio',
    gallerySubtitle: 'Projets Récents',
    viewMore: 'Voir Plus',
    clickToClose: 'Cliquez pour fermer',
    
    // Call to Action Section
    ctaTitle: 'Prêt à Commencer Votre Projet?',
    ctaDescription: 'Contactez-nous aujourd\'hui pour une consultation gratuite et un devis. Notre équipe est prête à donner vie à votre vision de clôture.',
    contactUs: 'Nous Contacter',
    
    // Footer Section
    footerDescription: 'Services de clôture professionnels à Ottawa-Gatineau. Installations de qualité, réparations et entretien pour propriétés résidentielles et commerciales.',
    serviceAreas: 'Zones de Service',
    ottawa: 'Ottawa',
    gatineau: 'Gatineau',
    quebec: 'Québec',
    businessHours: 'Heures d\'Ouverture',
    mondayFriday: 'Lundi - Vendredi: 8h00 - 18h00',
    saturday: 'Samedi: 9h00 - 16h00',
    sunday: 'Dimanche: Fermé',
    closed: 'Fermé',
    followUs: 'Suivez-nous',
    allRightsReserved: 'Tous droits réservés.',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation'
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const t = (key: keyof Translations): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 