import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import Home from './components/ui/Home';
import FenceInstallation from './components/ui/FenceInstallation';
import FenceStraighteningAndRepair from './components/ui/FenceStraighteningAndRepair';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="App min-h-screen bg-white">
          <Header />
          <main className="flex-1">
                          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fence-installation" element={<FenceInstallation />} />
                <Route path="/fence-straightening-repair" element={<FenceStraighteningAndRepair />} />
              </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
