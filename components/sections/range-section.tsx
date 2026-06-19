"use client";
import { useState } from 'react';
import { rangeCards } from '@/lib/site-data';

function RangeCard({ card, index }: { card: typeof rangeCards[0], index: number }) {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <article className="bg-white/60 backdrop-blur-xl border border-white p-6 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between self-start transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div>
        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.16em] text-charge">
          {card.tag}
        </p>
        <div className="h-64 bg-white border border-forge/5 shadow-sm rounded-sm relative overflow-hidden flex items-center justify-center p-2">
          <img src={card.image} alt={card.name} className="max-w-full max-h-full object-contain p-4 mix-blend-multiply" />
        </div>
        <h3 className="mt-6 text-2xl font-black uppercase">{card.name}</h3>
        
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showSpecs ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
          <p className="text-sm leading-6 text-forge/65">{card.copy}</p>
          
          <div className="space-y-5 pt-6 mt-6 border-t border-forge/10">
            {card.specs.map(([key, value]) => (
              <div key={key}>
                <p className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-charge flex-shrink-0"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-forge/50">{key}</span>
                </p>
                <p className="text-sm font-medium text-forge/90 pl-3.5 leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setShowSpecs(!showSpecs)}
        className="mt-8 w-full py-3.5 bg-white border border-forge/10 shadow-sm text-xs font-black tracking-[0.16em] uppercase transition-all hover:bg-charge hover:text-white hover:border-charge hover:shadow-md text-forge"
      >
        {showSpecs ? '[ HIDE TECH SPECS ]' : '[ VIEW TECH SPECS ]'}
      </button>
    </article>
  );
}

export function RangeSection() {
  return (
    <section id="range" className="grid-paper border-b border-forge/10">
      <div className="container-shell py-16 lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-kicker text-charge">[ ARCHITECTURE OVERVIEW ]</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">The ENKO Range</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-forge/62">
            Engineered for diverse industrial environments. Unified by robust build quality and intelligent software integration.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3 items-start">
          {rangeCards.map((card, index) => (
            <RangeCard key={card.name} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
