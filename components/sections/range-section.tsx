import { rangeCards } from '@/lib/site-data';
import { ChargerVisual } from '@/components/charger-visual';

export function RangeSection() {
  return (
    <section id="range" className="grid-paper border-b border-forge/10">
      <div className="container-shell py-16 lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-kicker text-charge">Architecture overview</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">The ENKO Range</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-forge/62">
            Engineered for diverse industrial environments. Unified by robust build quality and intelligent software integration.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {rangeCards.map((card, index) => (
            <article 
              key={card.name} 
              className="bg-warm/40 border border-forge/10 p-5 rounded-sm shadow-sm flex flex-col justify-between"
            >
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-forge/40">
                  {card.tag}
                </p>
                <div className="h-64 border border-forge/15 bg-white p-3 shadow-soft relative overflow-hidden">
                  <ChargerVisual variant={index === 0 ? 'flow' : index === 1 ? 'storm' : 'blaze'} label={`Node 0${index + 1}`} />
                </div>
                <h3 className="mt-5 text-2xl font-black uppercase">{card.name}</h3>
                <p className="mt-3 text-sm leading-6 text-forge/65">{card.copy}</p>
                
                <div className="mt-5">
                  {card.specs.map(([key, value]) => (
                    <div key={key} className="spec-line">
                      <span className="font-bold uppercase tracking-[0.12em] text-forge/45">{key}</span>
                      <span className="max-w-[65%] text-right font-bold text-forge/72 md:max-w-[12rem]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href="/products" 
                className={`industrial-button mt-6 w-full ${index === 1 ? 'bg-charge text-forge' : 'bg-transparent text-forge hover:bg-forge/5'}`}
              >
                View tech specs
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
