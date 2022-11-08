import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="container">
        <Home />
      </div>

    </div>
  );
}

export default App;
