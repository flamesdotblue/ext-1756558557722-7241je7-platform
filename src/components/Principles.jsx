import React from 'react';
import { Contrast, Sun, Moon, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Contrast,
    title: 'Contrast as compass',
    body: 'Use light with intention. Let contrast guide focus and create visual hierarchy without clutter.',
  },
  {
    icon: Moon,
    title: 'Shadow as structure',
    body: 'Depth emerges from restraint. Shadows define space and rhythm, not decoration.',
  },
  {
    icon: Sun,
    title: 'Light as narrative',
    body: 'A single light source can tell a story. Illuminate the essential, allow the rest to recede.',
  },
  {
    icon: Sparkles,
    title: 'Minimal, not empty',
    body: 'Remove the unnecessary, refine the necessary. Quiet details reward attention.',
  },
];

export default function Principles() {
  return (
    <section id="principles" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_35%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Principles of a darker interface</h2>
          <p className="mt-4 text-zinc-400">Chiaroscuro in digital design is the discipline of revealing form through light. These tenets keep the composition calm and deliberate.</p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <li key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-inset ring-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/0 via-white/[0.02] to-white/[0.06]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
