import React from 'react';
import './assets/styles/common/global.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;