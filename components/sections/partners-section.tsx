import { partnerSegments } from '@/lib/site-data';

export function PartnersSection() {
  return (
    <section className="border-b border-forge/10 bg-forge text-white">
      <div className="container-shell py-16 lg:py-24">
        <p className="label-kicker text-charge">B2B partners and use cases</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {partnerSegments.map((segment, index) => (
            <article key={segment.title} className="border border-white/12 p-6">
              <p className="label-kicker text-white/32">Segment 0{index + 1}</p>
              <h2 className="mt-8 text-2xl font-black uppercase text-charge">{segment.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/68">{segment.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
