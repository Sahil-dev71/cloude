# Clôture Plante - Fence Gallery Website

A modern, responsive React + Tailwind CSS website for Clôture Plante, a fence and railing installation company serving Ottawa and Gatineau.

## Features

- **Modern Design**: Clean, professional design with dark theme and orange accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Gallery**: Image gallery with lightbox functionality
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessible**: Built with accessibility in mind
- **Performance Optimized**: Lazy loading images and optimized components

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS 3** for styling
- **PostCSS** and **Autoprefixer** for CSS processing
- **Inter Font** from Google Fonts

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation and logo
│   │   └── Footer.tsx      # Footer with contact info
│   └── ui/
│       ├── Hero.tsx        # Hero section with call-to-action
│       ├── Introduction.tsx # Portfolio introduction
│       ├── Gallery.tsx     # Image gallery grid
│       └── CallToAction.tsx # Contact call-to-action
├── assets/
│   └── images/             # Image assets (fencing-images folder)
├── App.tsx                 # Main app component
├── index.tsx              # App entry point
└── index.css              # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cloture-plante
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Customization

### Adding Real Images

To use real fencing images instead of placeholder images:

1. Place your images in the `src/assets/images/` folder
2. Update the `galleryImages` array in `src/components/ui/Gallery.tsx`
3. Import and use your images:

```typescript
import fenceImage1 from '../assets/images/fence1.jpg';

const galleryImages = [
  { id: 1, src: fenceImage1, alt: 'Modern glass railing' },
  // ... more images
];
```

### Styling Customization

The project uses Tailwind CSS with custom colors defined in `tailwind.config.js`:

- **Orange**: `#ff6b35` (primary brand color)
- **Dark**: Various shades for the dark theme

### Component Customization

Each component is modular and can be easily customized:

- **Header**: Update navigation links, logo, and contact information
- **Gallery**: Modify grid layout, add filters, or change lightbox behavior
- **Footer**: Update contact details, social media links, and service areas

## Features Implemented

### Header Component
- Responsive navigation with dropdown menu
- Logo with company branding
- Contact phone number with click-to-call
- Language switcher (EN/FR)
- Mobile menu button

### Hero Section
- Full-screen hero with background image
- Large typography with brand messaging
- Call-to-action button
- Scroll indicator

### Gallery
- Responsive grid layout (2-5 columns based on screen size)
- Image hover effects with zoom and overlay
- Lightbox modal for image viewing
- Lazy loading for performance

### Footer
- Three-column layout with contact information
- Social media links
- Service areas and business hours
- Copyright and attribution

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Images are lazy loaded for better performance
- CSS is optimized with Tailwind's purge functionality
- Components are optimized for re-rendering
- Smooth scrolling and animations

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## License

This project is created for Clôture Plante. All rights reserved.

## Contact

For questions or support, contact the development team.
