import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  // Header
  companyName: string;
  home: string;
  services: string;
  ourServices: string;
  fences: string;
  fenceInstallation: string;
  fenceStraighteningRepair: string;
  temporaryFenceRental: string;
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
  
  // Fence Installation Page
  fenceInstallationHeroTitle: string;
  fenceInstallationHeroSubtitle: string;
  closeInStyleTitle: string;
  closeInStyleDescription1: string;
  closeInStyleDescription2: string;
  fortressTitle: string;
  plantFencePromiseTitle: string;
  temperedGlassExpertise: string;
  varietyProducts: string;
  experiencedTeam: string;
  qualityCommitment: string;
  customSolutions: string;
  commitmentTitle: string;
  commitmentDescription1: string;
  commitmentDescription2: string;
  projectShowcaseTitle: string;
  
  // Fence Straightening and Repair Page
  fenceStraighteningHeroTitle: string;
  fenceStraighteningHeroSubtitle: string;
  restoreStrengthTitle: string;
  restoreStrengthDescription1: string;
  restoreStrengthDescription2: string;
  fenceLikeNewTitle: string;
  choosingTeamTitle: string;
  executionSpeed: string;
  expertTeam: string;
  organizedStructure: string;
  fastDelivery: string;
  fifteenYearGuarantee: string;
  unrivaledServiceTitle: string;
  unrivaledServiceDescription1: string;
  unrivaledServiceDescription2: string;
  galleryMessage: string;
  
  // Temporary Fence Rental Page
  temporaryFenceRentalHeroTitle: string;
  temporaryFenceRentalHeroSubtitle: string;
  solutionAdaptedTitle: string;
  solutionAdaptedDescription1: string;
  solutionAdaptedDescription2: string;
  contactInfoMessage: string;
  
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
    fenceStraighteningRepair: 'Fence Straightening and Repair',
    temporaryFenceRental: 'Temporary Fence Rental',
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
    
    // Fence Installation Page
    fenceInstallationHeroTitle: 'Fence installation',
    fenceInstallationHeroSubtitle: 'PLANT FENCE',
    closeInStyleTitle: 'CLOSE IN STYLE',
    closeInStyleDescription1: 'Located in the heart of Ottawa and Gatineau, Clôture Plante redefines your outdoor space with our expertise in fencing installation, particularly with tempered glass, a specialty of ours.',
    closeInStyleDescription2: 'Whether you\'re looking to secure your pool or beautify your garden, our custom solutions adapt to every residential or commercial need.',
    fortressTitle: 'Let\'s make your property a fortress.',
    plantFencePromiseTitle: 'THE PLANT FENCE PROMISE',
    temperedGlassExpertise: 'Unique expertise in tempered glass fencing',
    varietyProducts: 'Variety of products for different budgets',
    experiencedTeam: 'Team of experienced installers',
    qualityCommitment: 'Commitment to quality and your satisfaction',
    customSolutions: 'Customized solutions for each project',
    commitmentTitle: 'Our commitment: your satisfaction',
    commitmentDescription1: 'At Clôture Plante, our expertise translates into perfectly aligned fences that withstand the elements without warping or sagging over time.',
    commitmentDescription2: 'For impeccable installation and unparalleled customer service, the choice is clear: Clôture Plante.',
    projectShowcaseTitle: 'Your project deserves the best. Let\'s talk!',
    
    // Fence Straightening and Repair Page
    fenceStraighteningHeroTitle: 'Fence straightening and repair',
    fenceStraighteningHeroSubtitle: 'PLANT FENCE',
    restoreStrengthTitle: 'RESTORE THE STRENGTH AND BEAUTY OF YOUR FENCE',
    restoreStrengthDescription1: 'Clôture Plante restores the strength and aesthetics of your fences thanks to our specialized straightening and repair service in Ottawa and Gatineau.',
    restoreStrengthDescription2: 'Whether it\'s a fence that has sagging over time or been damaged by bad weather, our fast and efficient intervention ensures the longevity and beauty of your fence, with a 15-year guarantee on materials.',
    fenceLikeNewTitle: 'A FENCE LIKE NEW STARTS HERE!',
    choosingTeamTitle: 'CHOOSING OUR TEAM MEANS CHOOSING:',
    executionSpeed: 'Exceptional execution speed thanks to our state-of-the-art equipment.',
    expertTeam: 'A team of experts with years of experience.',
    organizedStructure: 'An organized structure for maximum efficiency.',
    fastDelivery: 'Fast delivery, for uncompromising satisfaction.',
    fifteenYearGuarantee: 'A 15-year guarantee on the materials we use.',
    unrivaledServiceTitle: 'A fence like new, unrivaled service',
    unrivaledServiceDescription1: 'At Clôture Plante, we transform and revitalize fences in Ottawa and Gatineau, bringing speed and expertise to every project. Imagine your fence, straightened and restored, looking like new, defying time and the elements.',
    unrivaledServiceDescription2: 'Choose excellence and rediscover the beauty and security of your outdoor space.',
    galleryMessage: 'Don\'t let a damaged fence ruin your landscape. Get a free quote!',
    
    // Temporary Fence Rental Page
    temporaryFenceRentalHeroTitle: 'Temporary fence rental',
    temporaryFenceRentalHeroSubtitle: 'PLANT FENCE',
    solutionAdaptedTitle: 'OUR SOLUTION ADAPTED TO YOUR PROJECT',
    solutionAdaptedDescription1: 'Provide immediate protection for your events or construction sites with our temporary fencing. Robust and flexible, they adapt to any terrain, ensuring security and peace of mind.',
    solutionAdaptedDescription2: 'Whether you need short-term security for an event or long-term protection for a construction project, our temporary fences provide reliable solutions.',
    contactInfoMessage: 'Please do not hesitate to contact us by phone or email for any additional information regarding this service.',
    
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
    fenceStraighteningRepair: 'Redressement et Réparation de Clôtures',
    temporaryFenceRental: 'Location de Clôtures Temporaires',
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
    
    // Fence Installation Page
    fenceInstallationHeroTitle: 'Installation de clôtures',
    fenceInstallationHeroSubtitle: 'PLANT FENCE',
    closeInStyleTitle: 'FERMEZ EN STYLE',
    closeInStyleDescription1: 'Située au cœur d\'Ottawa et Gatineau, Clôture Plante redéfinit votre espace extérieur avec notre expertise en installation de clôtures, particulièrement avec le verre trempé, notre spécialité.',
    closeInStyleDescription2: 'Que vous cherchiez à sécuriser votre piscine ou à embellir votre jardin, nos solutions personnalisées s\'adaptent à tous les besoins résidentiels ou commerciaux.',
    fortressTitle: 'Faisons de votre propriété une forteresse.',
    plantFencePromiseTitle: 'LA PROMESSE PLANT FENCE',
    temperedGlassExpertise: 'Expertise unique en clôtures de verre trempé',
    varietyProducts: 'Variété de produits pour différents budgets',
    experiencedTeam: 'Équipe d\'installateurs expérimentés',
    qualityCommitment: 'Engagement envers la qualité et votre satisfaction',
    customSolutions: 'Solutions personnalisées pour chaque projet',
    commitmentTitle: 'Notre engagement: votre satisfaction',
    commitmentDescription1: 'Chez Clôture Plante, notre expertise se traduit par des clôtures parfaitement alignées qui résistent aux éléments sans se déformer ou s\'affaisser au fil du temps.',
    commitmentDescription2: 'Pour une installation impeccable et un service client inégalé, le choix est clair: Clôture Plante.',
    projectShowcaseTitle: 'Votre projet mérite le meilleur. Parlons-en!',
    
    // Fence Straightening and Repair Page
    fenceStraighteningHeroTitle: 'Redressement et réparation de clôtures',
    fenceStraighteningHeroSubtitle: 'PLANT FENCE',
    restoreStrengthTitle: 'RESTAUREZ LA FORCE ET LA BEAUTÉ DE VOTRE CLÔTURE',
    restoreStrengthDescription1: 'Clôture Plante restaure la force et l\'esthétique de vos clôtures grâce à notre service spécialisé de redressement et de réparation à Ottawa et Gatineau.',
    restoreStrengthDescription2: 'Qu\'il s\'agisse d\'une clôture qui s\'est affaissée au fil du temps ou qui a été endommagée par le mauvais temps, notre intervention rapide et efficace assure la longévité et la beauté de votre clôture, avec une garantie de 15 ans sur les matériaux.',
    fenceLikeNewTitle: 'UNE CLÔTURE COMME NEUVE COMMENCE ICI!',
    choosingTeamTitle: 'CHOISIR NOTRE ÉQUIPE SIGNIFIE CHOISIR:',
    executionSpeed: 'Une vitesse d\'exécution exceptionnelle grâce à notre équipement de pointe.',
    expertTeam: 'Une équipe d\'experts avec des années d\'expérience.',
    organizedStructure: 'Une structure organisée pour une efficacité maximale.',
    fastDelivery: 'Livraison rapide, pour une satisfaction sans compromis.',
    fifteenYearGuarantee: 'Une garantie de 15 ans sur les matériaux que nous utilisons.',
    unrivaledServiceTitle: 'Une clôture comme neuve, un service inégalé',
    unrivaledServiceDescription1: 'Chez Clôture Plante, nous transformons et revitalisons les clôtures à Ottawa et Gatineau, apportant vitesse et expertise à chaque projet. Imaginez votre clôture, redressée et restaurée, paraissant comme neuve, défiant le temps et les éléments.',
    unrivaledServiceDescription2: 'Choisissez l\'excellence et redécouvrez la beauté et la sécurité de votre espace extérieur.',
    galleryMessage: 'Ne laissez pas une clôture endommagée ruiner votre paysage. Obtenez un devis gratuit!',
    
    // Temporary Fence Rental Page
    temporaryFenceRentalHeroTitle: 'Location de clôtures temporaires',
    temporaryFenceRentalHeroSubtitle: 'PLANT FENCE',
    solutionAdaptedTitle: 'NOTRE SOLUTION ADAPTÉE À VOTRE PROJET',
    solutionAdaptedDescription1: 'Fournissez une protection immédiate pour vos événements ou chantiers de construction avec nos clôtures temporaires. Robuste et flexible, elles s\'adaptent à tout terrain, assurant sécurité et tranquillité d\'esprit.',
    solutionAdaptedDescription2: 'Que vous ayez besoin d\'une sécurité à court terme pour un événement ou d\'une protection à long terme pour un projet de construction, nos clôtures temporaires offrent des solutions fiables.',
    contactInfoMessage: 'N\'hésitez pas à nous contacter par téléphone ou par email pour toute information supplémentaire concernant ce service.',
    
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