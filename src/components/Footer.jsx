import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Chiaroscuro Studio. Crafted in light and shadow.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy</a>
          <span className="text-zinc-600">·</span>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Imprint</a>
        </div>
      </div>
    </footer>
  );
}
