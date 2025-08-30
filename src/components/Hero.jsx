import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/TQzTfOv9igPMLRJd/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-xs text-zinc-300/80 mb-4">Light. Shadow. Balance.</p>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
              A modern study in chiaroscuro
            </h1>
            <p className="mt-6 text-base sm:text-lg text-zinc-300/90">
              Minimal form, maximal contrast. Craft interfaces where darkness reveals the light.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#showcase" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors">
                Enter the shadow
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#principles" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-300 hover:text-white hover:border-white/20 transition-colors">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
