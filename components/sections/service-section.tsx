export function ServiceSection() {
  return (
    <section id="network" className="border-b border-forge/10 bg-forge text-white">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
        <div>
          <p className="label-kicker text-charge">Network subsystem</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-6xl">Regional infrastructure.</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
            We don&apos;t just build chargers; we support the physical infrastructure layer. Our systems are strategically
            operational across Tamil Nadu, Kerala, and Andhra Pradesh.
          </p>
          <div className="mt-8 inline-flex border border-charge/50 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-charge">
            48 hour SLA response
          </div>
        </div>
        <div className="relative min-h-[380px] overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(238,235,228,0.08),transparent),linear-gradient(90deg,#111,#080808)]">
          <div className="absolute left-[18%] top-[12%] h-72 w-52 rotate-[-14deg] rounded-[45%] border border-charge/30" />
          <div className="absolute left-[34%] top-[24%] h-64 w-44 rotate-[18deg] rounded-[45%] border border-charge/25" />
          {[
            ['left-[24%]', 'top-[35%]'],
            ['left-[42%]', 'top-[18%]'],
            ['left-[58%]', 'top-[44%]'],
            ['left-[70%]', 'top-[24%]'],
            ['left-[48%]', 'top-[68%]'],
            ['left-[76%]', 'top-[62%]'],
          ].map(([x, y], index) => (
            <span key={`${x}-${y}`} className={`absolute ${x} ${y} h-5 w-5 rounded-full border border-charge/80 bg-charge shadow-[0_0_28px_rgba(232,160,32,0.85)]`}>
              <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-charge/30" />
              <span className="sr-only">Regional node {index + 1}</span>
            </span>
          ))}
          <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-forge/75 text-charge">
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[15px] border-y-transparent border-l-current" />
            <span className="sr-only">Play regional footprint video</span>
          </button>
        </div>
      </div>
    </section>
  );
}
