import React from 'react';

const projects = [
  {
    title: 'Nocturne UI',
    desc: 'A control panel illuminated by a singular rim light. Typography breathes; controls are sparse.',
    img: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 500\"><defs><linearGradient id=\"g\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#0a0a0a\"/><stop offset=\"1\" stop-color=\"#1a1a1a\"/></linearGradient></defs><rect width=\"800\" height=\"500\" fill=\"url(#g)\"/><circle cx=\"620\" cy=\"120\" r=\"12\" fill=\"#ffffff22\"/><rect x=\"80\" y=\"120\" width=\"360\" height=\"16\" rx=\"8\" fill=\"#ffffff33\"/><rect x=\"80\" y=\"160\" width=\"280\" height=\"12\" rx=\"6\" fill=\"#ffffff22\"/><rect x=\"80\" y=\"320\" width=\"640\" height=\"8\" rx=\"4\" fill=\"#ffffff18\"/></svg>`),
  },
  {
    title: 'Eclipse Cards',
    desc: 'Card surfaces with high contrast edges and soft falloff shadows articulate depth.',
    img: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 500\"><defs><radialGradient id=\"rg\" cx=\"0.3\" cy=\"0.2\" r=\"0.9\"><stop offset=\"0\" stop-color=\"#2a2a2a\"/><stop offset=\"1\" stop-color=\"#0b0b0b\"/></radialGradient></defs><rect width=\"800\" height=\"500\" fill=\"url(#rg)\"/><rect x=\"120\" y=\"120\" width=\"240\" height=\"160\" rx=\"20\" fill=\"#ffffff14\"/><rect x=\"440\" y=\"180\" width=\"240\" height=\"160\" rx=\"20\" fill=\"#ffffff10\"/></svg>`),
  },
  {
    title: 'Silent Grid',
    desc: 'A restrained layout where negative space and subtle lines do the heavy lifting.',
    img: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 500\"><rect width=\"800\" height=\"500\" fill=\"#0c0c0c\"/><g stroke=\"#ffffff12\" stroke-width=\"1\"><path d=\"M100 80h600M100 140h600M100 200h600M100 260h600M100 320h600M100 380h600\"/></g><rect x=\"100\" y=\"100\" width=\"220\" height=\"80\" rx=\"12\" fill=\"#ffffff10\"/></svg>`),
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Showcase</h2>
          <p className="mt-4 text-zinc-400">Compositions where a single light source defines the scene. Minimal elements, maximum presence.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
