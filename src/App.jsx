import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Principles from './components/Principles';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-zinc-800 selection:text-zinc-100">
      <Navbar />
      <Hero />
      <Principles />
      <Showcase />
      <Footer />
    </div>
  );
}
