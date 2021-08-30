import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Mixer from "./pages/Mixer/Mixer.js";
import Colors from "./pages/Colors/Colors.js";
import Palettes from "./pages/Palettes/Palettes";
import About from "./pages/About/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header title="Mixer" />
        <div className="app__content">
          <Switch>
            <Route path="/mixer" exact>
              <Mixer />
            </Route>
            <Route path="/colors">
              <Colors />
            </Route>
            <Route path="/palettes">
              <Palettes />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
