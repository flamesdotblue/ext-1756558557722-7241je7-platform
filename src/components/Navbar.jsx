import React from 'react';
import { Moon, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white to-zinc-700"></div>
          <span className="font-semibold tracking-tight">Chiaroscuro</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#principles" className="hover:text-white transition-colors">Principles</a>
          <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Theme" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
            <Moon className="h-4 w-4" />
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
