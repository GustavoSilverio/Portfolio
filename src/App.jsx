import React from 'react';

import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
