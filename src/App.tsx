import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import TwitchEmbed from './components/TwitchEmbed';
import About from './components/About';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Featured />
      <TwitchEmbed />
      <About />
    </div>
  );
}

export default App;