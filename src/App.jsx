import { useState } from 'react'
import React from 'react';
import logo from "./assets/tourlogo.png"
import herotp from "./assets/hero.png"
import Hero from './components/Hero';
import About from './components/About';
import Services2 from './components/Services2'
import Tours from './components/Tours'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return(
    <React.Fragment>
        <Navbar />
        <Hero />
        <About />
        <Services2 />
        <Tours />
        <Footer />
    </React.Fragment>
  );
}

export default App
