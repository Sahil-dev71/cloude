// Import all fencing images
import fence1 from './WhatsApp-Image-2025-05-21-at-15.36.20.jpeg';
import fence2 from './WhatsApp-Image-2025-05-21-at-15.36.201.jpeg';
import fence3 from './WhatsApp-Image-2025-05-21-at-15.36.21.jpeg';
import fence4 from './WhatsApp-Image-2025-05-21-at-15.36.211.jpeg';
import fence5 from './WhatsApp-Image-2025-05-21-at-15.36.222.jpeg';
import fence6 from './WhatsApp-Image-2025-05-21-at-15.36.223.jpeg';
import fence7 from './WhatsApp-Image-2025-05-21-at-15.36.224.jpeg';
import fence8 from './WhatsApp-Image-2025-05-21-at-15.36.225.jpeg';
import fence9 from './WhatsApp-Image-2025-05-21-at-15.36.23.jpeg';
import fence10 from './cloture-plante-gatineau-8.jpg';
import fence11 from './cloture-plante-gatineau-10.jpg';
import fence12 from './cloture-plante-gatineau-4.jpg';
import fence13 from './cloture-plante-gatineau-9.jpg';
import fence14 from './cloture-plante-gatineau-11.jpg';
import fence15 from './cloture-plante-gatineau-17.jpg';
import fence16 from './cloture-plante-gatineau-12.jpg';
import fence17 from './cloture-plante-gatineau-23.jpg';
import fence18 from './cloture-plante-gatineau-13.jpg';
import fence19 from './cloture-plante-gatineau-28.jpg';
import fence20 from './cloture-plante-gatineau-25.jpg';
import fence21 from './cloture-plante-gatineau-26.jpg';
import fence22 from './rs-w_2560-h_19207.webp';
import fence23 from './rs-w_2560-h_19206.webp';
import fence24 from './rs-w_2560-h_1440.webp';
import fence25 from './rs-w_2560-h_17071.webp';
import fence26 from './rs-w_2560-h_19205.webp';
import fence27 from './rs-w_2560-h_1707.webp';
import fence28 from './rs-w_2560-h_19204-1-1.webp';
import fence29 from './AdobeStock_502141346-1920w.jpeg';
import fence30 from './rs-w_2560-h_19203.webp';
import fence31 from './rs-w_2560-h_19202.webp';
import fence32 from './rs-w_1280-h_894-1.webp';
import fence33 from './cloture-plante-gatineau-20.jpg';
import fence34 from './MDC8-1200h-3-e1737249310753.jpg';
import fence35 from './rs-w_1200-h_600-cg_true.webp';
import fence36 from './rs-w_1280-h_960.webp';
import fence37 from './rs-w_1280-h_9601.webp';
import fence38 from './rs-w_1280-h_960-1-e1737249007222.webp';

// Define image data with metadata
export interface GalleryImage {
  id: number;
  src: string;
  alt: {
    en: string;
    fr: string;
  };
  category: string;
  description: {
    en: string;
    fr: string;
  };
}

// Export all images as a collection with bilingual descriptions
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: fence1,
    alt: {
      en: 'Modern glass railing installation',
      fr: 'Installation de garde-corps en verre moderne'
    },
    category: 'Railings',
    description: {
      en: 'Contemporary glass railing with sleek metal posts and clear panels for unobstructed views',
      fr: 'Garde-corps en verre contemporain avec poteaux métalliques élégants et panneaux transparents pour une vue dégagée'
    }
  },
  {
    id: 2,
    src: fence2,
    alt: {
      en: 'Black metal fence with decorative posts',
      fr: 'Clôture métallique noire avec poteaux décoratifs'
    },
    category: 'Metal Fences',
    description: {
      en: 'Elegant black metal fence with ornamental post caps and professional finish',
      fr: 'Clôture métallique noire élégante avec chapeaux de poteaux ornementaux et finition professionnelle'
    }
  },
  {
    id: 3,
    src: fence3,
    alt: {
      en: 'White picket fence and gate',
      fr: 'Clôture à piquets blanche avec portail'
    },
    category: 'Traditional Fences',
    description: {
      en: 'Classic white picket fence with matching gate for timeless residential appeal',
      fr: 'Clôture à piquets blanche classique avec portail assorti pour un charme résidentiel intemporel'
    }
  },
  {
    id: 4,
    src: fence4,
    alt: {
      en: 'Wood privacy fence installation',
      fr: 'Installation de clôture de confidentialité en bois'
    },
    category: 'Wood Fences',
    description: {
      en: 'Solid wood privacy fence providing complete seclusion for residential properties',
      fr: 'Clôture de confidentialité en bois massif offrant une intimité complète pour les propriétés résidentielles'
    }
  },
  {
    id: 5,
    src: fence5,
    alt: {
      en: 'Chain-link fence around property',
      fr: 'Clôture à mailles de chaîne autour de la propriété'
    },
    category: 'Security Fences',
    description: {
      en: 'Durable chain-link fence for property security with galvanized steel construction',
      fr: 'Clôture à mailles de chaîne durable pour la sécurité des propriétés avec construction en acier galvanisé'
    }
  },
  {
    id: 6,
    src: fence6,
    alt: {
      en: 'Composite fence with brown panels',
      fr: 'Clôture composite avec panneaux bruns'
    },
    category: 'Composite Fences',
    description: {
      en: 'Low-maintenance composite fence panels with natural wood appearance and weather resistance',
      fr: 'Panneaux de clôture composite à faible entretien avec apparence de bois naturel et résistance aux intempéries'
    }
  },
  {
    id: 7,
    src: fence7,
    alt: {
      en: 'Pool fence with safety features',
      fr: 'Clôture de piscine avec dispositifs de sécurité'
    },
    category: 'Pool Fences',
    description: {
      en: 'Safety-compliant pool fence installation meeting all local regulations and standards',
      fr: 'Installation de clôture de piscine conforme aux normes de sécurité respectant toutes les réglementations locales'
    }
  },
  {
    id: 8,
    src: fence8,
    alt: {
      en: 'Garden fence with landscaping',
      fr: 'Clôture de jardin avec aménagement paysager'
    },
    category: 'Garden Fences',
    description: {
      en: 'Decorative garden fence with integrated landscaping and natural elements',
      fr: 'Clôture de jardin décorative avec aménagement paysager intégré et éléments naturels'
    }
  },
  {
    id: 9,
    src: fence9,
    alt: {
      en: 'Balcony railing with modern design',
      fr: 'Garde-corps de balcon avec design moderne'
    },
    category: 'Railings',
    description: {
      en: 'Modern balcony railing with clean lines and contemporary aesthetic appeal',
      fr: 'Garde-corps de balcon moderne avec lignes épurées et attrait esthétique contemporain'
    }
  },
  {
    id: 10,
    src: fence10,
    alt: {
      en: 'Deck railing installation',
      fr: 'Installation de garde-corps de terrasse'
    },
    category: 'Railings',
    description: {
      en: 'Sturdy deck railing for outdoor living space with enhanced safety and style',
      fr: 'Garde-corps de terrasse robuste pour espace de vie extérieur avec sécurité et style améliorés'
    }
  },
  {
    id: 11,
    src: fence11,
    alt: {
      en: 'Residential fence project',
      fr: 'Projet de clôture résidentielle'
    },
    category: 'Residential',
    description: {
      en: 'Complete residential fence installation tailored to homeowner specifications',
      fr: 'Installation complète de clôture résidentielle adaptée aux spécifications du propriétaire'
    }
  },
  {
    id: 12,
    src: fence12,
    alt: {
      en: 'Commercial fence installation',
      fr: 'Installation de clôture commerciale'
    },
    category: 'Commercial',
    description: {
      en: 'Professional commercial fence project designed for business security and aesthetics',
      fr: 'Projet de clôture commerciale professionnelle conçu pour la sécurité et l\'esthétique des entreprises'
    }
  },
  {
    id: 13,
    src: fence13,
    alt: {
      en: 'Gate installation work',
      fr: 'Travaux d\'installation de portail'
    },
    category: 'Gates',
    description: {
      en: 'Custom gate installation with premium hardware and automated options available',
      fr: 'Installation de portail personnalisé avec quincaillerie de qualité et options automatisées disponibles'
    }
  },
  {
    id: 14,
    src: fence14,
    alt: {
      en: 'Fence post installation process',
      fr: 'Processus d\'installation de poteaux de clôture'
    },
    category: 'Installation',
    description: {
      en: 'Professional fence post installation using proper techniques and quality materials',
      fr: 'Installation professionnelle de poteaux de clôture utilisant des techniques appropriées et des matériaux de qualité'
    }
  },
  {
    id: 15,
    src: fence15,
    alt: {
      en: 'Landscaping with fence integration',
      fr: 'Aménagement paysager avec intégration de clôture'
    },
    category: 'Landscaping',
    description: {
      en: 'Fence integrated with landscape design for seamless outdoor living experience',
      fr: 'Clôture intégrée au design paysager pour une expérience de vie extérieure harmonieuse'
    }
  },
  {
    id: 16,
    src: fence16,
    alt: {
      en: 'Modern fence design showcase',
      fr: 'Présentation de design de clôture moderne'
    },
    category: 'Modern Fences',
    description: {
      en: 'Contemporary fence design with clean aesthetics and innovative materials',
      fr: 'Design de clôture contemporain avec esthétique épurée et matériaux innovants'
    }
  },
  {
    id: 17,
    src: fence17,
    alt: {
      en: 'Traditional fence style',
      fr: 'Style de clôture traditionnelle'
    },
    category: 'Traditional Fences',
    description: {
      en: 'Timeless traditional fence design that complements heritage and classic architecture',
      fr: 'Design de clôture traditionnelle intemporelle qui complète l\'architecture patrimoniale et classique'
    }
  },
  {
    id: 18,
    src: fence18,
    alt: {
      en: 'Custom railing design',
      fr: 'Design de garde-corps personnalisé'
    },
    category: 'Railings',
    description: {
      en: 'Bespoke railing design for unique spaces with custom specifications and finishes',
      fr: 'Design de garde-corps sur mesure pour espaces uniques avec spécifications et finitions personnalisées'
    }
  },
  {
    id: 19,
    src: fence19,
    alt: {
      en: 'Security fence installation',
      fr: 'Installation de clôture de sécurité'
    },
    category: 'Security Fences',
    description: {
      en: 'High-security fence for commercial properties with advanced protection features',
      fr: 'Clôture de sécurité renforcée pour propriétés commerciales avec fonctionnalités de protection avancées'
    }
  },
  {
    id: 20,
    src: fence20,
    alt: {
      en: 'Decorative fence with ornamental details',
      fr: 'Clôture décorative avec détails ornementaux'
    },
    category: 'Decorative Fences',
    description: {
      en: 'Ornamental fence with decorative elements that enhance property curb appeal',
      fr: 'Clôture ornementale avec éléments décoratifs qui améliorent l\'attrait de la propriété'
    }
  },
  {
    id: 21,
    src: fence21,
    alt: {
      en: 'Aluminum fence around property',
      fr: 'Clôture en aluminium autour de la propriété'
    },
    category: 'Metal Fences',
    description: {
      en: 'Durable aluminum fence with powder coating for long-lasting protection and style',
      fr: 'Clôture en aluminium durable avec revêtement en poudre pour protection et style durables'
    }
  },
  {
    id: 22,
    src: fence22,
    alt: {
      en: 'Vinyl fence with clean lines',
      fr: 'Clôture en vinyle avec lignes épurées'
    },
    category: 'Vinyl Fences',
    description: {
      en: 'Low-maintenance vinyl fence installation with clean lines and modern appearance',
      fr: 'Installation de clôture en vinyle à faible entretien avec lignes épurées et apparence moderne'
    }
  },
  {
    id: 23,
    src: fence23,
    alt: {
      en: 'Steel fence with modern finish',
      fr: 'Clôture en acier avec finition moderne'
    },
    category: 'Metal Fences',
    description: {
      en: 'Modern steel fence with protective coating and contemporary design elements',
      fr: 'Clôture en acier moderne avec revêtement protecteur et éléments de design contemporain'
    }
  },
  {
    id: 24,
    src: fence24,
    alt: {
      en: 'Wrought iron fence design',
      fr: 'Design de clôture en fer forgé'
    },
    category: 'Metal Fences',
    description: {
      en: 'Elegant wrought iron fence with classic design and superior craftsmanship',
      fr: 'Clôture en fer forgé élégante avec design classique et artisanat supérieur'
    }
  },
  {
    id: 25,
    src: fence25,
    alt: {
      en: 'Bamboo fence installation',
      fr: 'Installation de clôture en bambou'
    },
    category: 'Natural Fences',
    description: {
      en: 'Eco-friendly bamboo fence for natural look and sustainable landscaping',
      fr: 'Clôture en bambou écologique pour un look naturel et un aménagement paysager durable'
    }
  },
  {
    id: 26,
    src: fence26,
    alt: {
      en: 'Stone fence with natural look',
      fr: 'Clôture en pierre avec look naturel'
    },
    category: 'Natural Fences',
    description: {
      en: 'Natural stone fence with rustic appeal and timeless beauty',
      fr: 'Clôture en pierre naturelle avec charme rustique et beauté intemporelle'
    }
  },
  {
    id: 27,
    src: fence27,
    alt: {
      en: 'Glass fence for modern homes',
      fr: 'Clôture en verre pour maisons modernes'
    },
    category: 'Glass Fences',
    description: {
      en: 'Contemporary glass fence for modern architecture with transparency and elegance',
      fr: 'Clôture en verre contemporaine pour architecture moderne avec transparence et élégance'
    }
  },
  {
    id: 28,
    src: fence28,
    alt: {
      en: 'Cable railing system',
      fr: 'Système de garde-corps à câbles'
    },
    category: 'Railings',
    description: {
      en: 'Modern cable railing with stainless steel cables for minimalist design',
      fr: 'Garde-corps à câbles moderne avec câbles en acier inoxydable pour design minimaliste'
    }
  },
  {
    id: 29,
    src: fence29,
    alt: {
      en: 'Metal railing with powder coating',
      fr: 'Garde-corps métallique avec revêtement en poudre'
    },
    category: 'Railings',
    description: {
      en: 'Durable metal railing with protective finish and custom color options',
      fr: 'Garde-corps métallique durable avec finition protectrice et options de couleur personnalisées'
    }
  },
  {
    id: 30,
    src: fence30,
    alt: {
      en: 'Wood railing with natural finish',
      fr: 'Garde-corps en bois avec finition naturelle'
    },
    category: 'Railings',
    description: {
      en: 'Natural wood railing with protective sealant and warm aesthetic appeal',
      fr: 'Garde-corps en bois naturel avec scellant protecteur et attrait esthétique chaleureux'
    }
  },
  {
    id: 31,
    src: fence31,
    alt: {
      en: 'Stair railing installation',
      fr: 'Installation de garde-corps d\'escalier'
    },
    category: 'Railings',
    description: {
      en: 'Custom stair railing for interior or exterior with safety and style',
      fr: 'Garde-corps d\'escalier personnalisé pour intérieur ou extérieur avec sécurité et style'
    }
  },
  {
    id: 32,
    src: fence32,
    alt: {
      en: 'Porch railing with classic design',
      fr: 'Garde-corps de porche avec design classique'
    },
    category: 'Railings',
    description: {
      en: 'Traditional porch railing with classic styling and architectural charm',
      fr: 'Garde-corps de porche traditionnel avec style classique et charme architectural'
    }
  },
  {
    id: 33,
    src: fence33,
    alt: {
      en: 'Balcony fence with safety features',
      fr: 'Clôture de balcon avec dispositifs de sécurité'
    },
    category: 'Railings',
    description: {
      en: 'Safety-compliant balcony fence installation with enhanced protection',
      fr: 'Installation de clôture de balcon conforme aux normes de sécurité avec protection renforcée'
    }
  },
  {
    id: 34,
    src: fence34,
    alt: {
      en: 'Pool railing with modern aesthetics',
      fr: 'Garde-corps de piscine avec esthétique moderne'
    },
    category: 'Railings',
    description: {
      en: 'Modern pool railing with contemporary design and safety compliance',
      fr: 'Garde-corps de piscine moderne avec design contemporain et conformité de sécurité'
    }
  },
  {
    id: 35,
    src: fence35,
    alt: {
      en: 'Deck fence with privacy panels',
      fr: 'Clôture de terrasse avec panneaux de confidentialité'
    },
    category: 'Railings',
    description: {
      en: 'Privacy-enhanced deck railing system with integrated screening panels',
      fr: 'Système de garde-corps de terrasse avec confidentialité renforcée et panneaux d\'écran intégrés'
    }
  },
  {
    id: 36,
    src: fence36,
    alt: {
      en: 'Garden railing with decorative elements',
      fr: 'Garde-corps de jardin avec éléments décoratifs'
    },
    category: 'Railings',
    description: {
      en: 'Decorative garden railing with ornamental details and artistic design',
      fr: 'Garde-corps de jardin décoratif avec détails ornementaux et design artistique'
    }
  },
  {
    id: 37,
    src: fence37,
    alt: {
      en: 'Terrace railing installation',
      fr: 'Installation de garde-corps de terrasse'
    },
    category: 'Railings',
    description: {
      en: 'Terrace railing for outdoor living spaces with comfort and safety',
      fr: 'Garde-corps de terrasse pour espaces de vie extérieurs avec confort et sécurité'
    }
  },
  {
    id: 38,
    src: fence38,
    alt: {
      en: 'Patio fence with integrated design',
      fr: 'Clôture de patio avec design intégré'
    },
    category: 'Railings',
    description: {
      en: 'Integrated patio railing with seamless design and functional beauty',
      fr: 'Garde-corps de patio intégré avec design harmonieux et beauté fonctionnelle'
    }
  }
];

// Export individual images for specific use cases
export const images = {
  fence1, fence2, fence3, fence4, fence5, fence6, fence7, fence8, fence9, fence10,
  fence11, fence12, fence13, fence14, fence15, fence16, fence17, fence18, fence19, fence20,
  fence21, fence22, fence23, fence24, fence25, fence26, fence27, fence28, fence29, fence30,
  fence31, fence32, fence33, fence34, fence35, fence36, fence37, fence38
};

// Export categories for filtering
export const categories = [
  'All',
  'Railings',
  'Metal Fences',
  'Wood Fences',
  'Traditional Fences',
  'Security Fences',
  'Composite Fences',
  'Pool Fences',
  'Garden Fences',
  'Residential',
  'Commercial',
  'Gates',
  'Installation',
  'Landscaping',
  'Modern Fences',
  'Decorative Fences',
  'Vinyl Fences',
  'Natural Fences',
  'Glass Fences'
];

// Helper function to get images by category
export const getImagesByCategory = (category: string): GalleryImage[] => {
  if (category === 'All') return galleryImages;
  return galleryImages.filter(image => image.category === category);
};

// Helper function to get image by ID
export const getImageById = (id: number): GalleryImage | undefined => {
  return galleryImages.find(image => image.id === id);
}; 