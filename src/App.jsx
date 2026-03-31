// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero/index.jsx';
import About from './components/About.jsx';
import Tooling from './components/Tooling.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import OtherProjects from './components/OtherProjects.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import SEO from './components/ui/SEO.jsx';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorColor = '#22D3EE'; // Bright Cyan
  const cursorHoverColor = '#A5F3FC'; // Lighter Cyan

  return (
    <div className="bg-background font-sans text-text-light relative">
      <SEO />
      {/* Outer Outline */}
      <div
        className="cursor-outline"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          '--cursor-color': cursorColor,
          '--cursor-hover-color': cursorHoverColor
        }}
      />
      {/* Inner Dot */}
      <div 
        className="cursor-dot" 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          '--cursor-color': cursorColor,
          '--cursor-hover-color': cursorHoverColor
        }} 
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Tooling />
        <Education />
        <Experience />
        <Projects />
        <OtherProjects />
        <Contact />
      </main>
    </div>
  );
}

export default App;