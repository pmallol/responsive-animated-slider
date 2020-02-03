import React from 'react';
import Slider from './Slider.js';
import sparkles from './sparkles.png';

import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>
          Responsive 
          <span>Animated</span> 
          <span>Slider</span> 
          <span className="demo">Demo<img src={sparkles} alt="sparkles" className="sparkles" /></span>
        </h1>
        <h2>Using React.js</h2>
      </header>
      <Slider />
      <div className="footer">
      </div>
    </div>
  );
}

export default App;
