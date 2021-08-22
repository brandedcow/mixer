import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from './components/Header/Header.js';
import Mixer from './pages/Mixer/Mixer.js'
import Palettes from './pages/Palettes/Palettes'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header title="Mixer" />
        <Switch>
          <Route path="/mixer" exact>
            <Mixer />
          </Route>
          <Route path="/palettes">
            <Palettes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
