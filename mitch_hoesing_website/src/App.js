import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,} from "react-router-dom";

import NavBar from './components/NavBar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
    </Router>
  )
}

export default App;
