import Header from './components/Header/Header.js';
import Mixer from './pages/Mixer/Mixer.js'
import Overlay from './components/Overlay/Overlay.js';
import './App.css'
import { useState } from '@hookstate/core';

function App() {
  const isOverlayActive = useState(false)

  return (
    <div className="app">
      <Header title="Mixer" />
      <Mixer setOverlayFunction/>
      <Overlay 
        isActive={isOverlayActive.get()}
      />
    </div>
  );
}

export default App;
