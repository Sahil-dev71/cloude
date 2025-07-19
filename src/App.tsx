import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import Gallery from './components/ui/Gallery';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="App min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          <Gallery />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
