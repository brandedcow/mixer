import Header from './components/Header/Header.js';
import Mixer from './pages/Mixer/Mixer.js'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header title="Mixer" />
      <Mixer />
    </div>
  );
}

export default App;
