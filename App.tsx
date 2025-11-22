import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Generator } from './components/Generator';
import { AppState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.LANDING);

  return (
    <div className="bg-background text-white min-h-screen selection:bg-primary selection:text-black">
      {view === AppState.LANDING ? (
        <LandingPage onStart={() => setView(AppState.GENERATOR)} />
      ) : (
        <Generator onBack={() => setView(AppState.LANDING)} />
      )}
    </div>
  );
};

export default App;