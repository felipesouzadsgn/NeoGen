
import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Generator } from './components/Generator';
import { Gallery } from './components/Gallery';
import { AppState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.LANDING);

  const renderView = () => {
    switch (view) {
      case AppState.LANDING:
        return <LandingPage onNavigate={setView} />;
      case AppState.GALLERY:
        return <Gallery onNavigate={setView} />;
      case AppState.GENERATOR:
        return <Generator onBack={() => setView(AppState.LANDING)} />;
      default:
        return <LandingPage onNavigate={setView} />;
    }
  };

  return (
    <div className="bg-background text-white min-h-screen selection:bg-primary selection:text-black">
      {renderView()}
    </div>
  );
};

export default App;
