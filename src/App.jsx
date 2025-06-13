import React from 'react';
import './assets/styles/common/global.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ThemeToggle from './components/common/ThemeToggle'; // Import the ThemeToggle component

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ThemeToggle /> {/* Add the theme toggle button */}
    </div>
  );
}

export default App;