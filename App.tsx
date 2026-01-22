import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <div className="noise-bg"></div>
      <NavBar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;