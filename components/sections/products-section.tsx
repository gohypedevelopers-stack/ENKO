import { productMatrix } from '@/lib/site-data';

export function ProductsSection() {
  return (
    <section id="products" className="grid-paper border-b border-forge/10">
      <div className="container-shell py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="label-kicker text-charge">Hardware systems component architecture</p>
          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">Full-spectrum CCS2 charging assets.</h2>
          <p className="mt-5 text-sm leading-7 text-forge/65">
            From entry-level commercial AC plug-ins to high-power highway DC ultra-chargers, select the exact hardware
            footprint your network requires.
          </p>
        </div>
        <div className="mt-10 overflow-hidden border border-forge/20">
          <div className="grid grid-cols-[1fr_1fr_1.35fr] bg-forge px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white">
            <span>SKU</span>
            <span>Power Output</span>
            <span>Primary Application</span>
          </div>
          {productMatrix.map(([sku, power, application], index) => (
            <div
              key={sku}
              className={`grid grid-cols-1 gap-2 border-t border-forge/12 px-4 py-4 text-sm md:grid-cols-[1fr_1fr_1.35fr] ${index % 2 === 0 ? 'bg-warm/70' : 'bg-white/35'}`}
            >
              <span className="font-black uppercase">{sku}</span>
              <span className="font-bold text-forge/72">{power}</span>
              <span className="text-forge/65">{application}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="border border-forge/15 p-5">
            <h3 className="font-black uppercase">Flow common spec</h3>
            <p className="mt-3 text-sm leading-6 text-forge/65">OCPP 2.0.1, single/three-phase compatibility, wall-box or pedestal mount ready.</p>
          </div>
          <div className="border border-forge/15 p-5">
            <h3 className="font-black uppercase">Storm common spec</h3>
            <p className="mt-3 text-sm leading-6 text-forge/65">Dual CCS2 guns, IP54 protection, smart power sharing, high-visibility user screens.</p>
          </div>
          <div className="border border-forge/15 p-5">
            <h3 className="font-black uppercase">Blaze profile</h3>
            <p className="mt-3 text-sm leading-6 text-forge/65">240kW+ DC ultra charging for heavy-duty bus networks and industrial corridors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
