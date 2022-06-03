import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar.js';

import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';

function App() {
  return (
    <Router basename="/hoesingm_website.io">
      <div className="App">
        <NavBar></NavBar>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/education">
          <Education />
        </Route>

        <Route exact path="/skills">
          <Skills />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </div>
    </Router>
  )
}

export default App;
