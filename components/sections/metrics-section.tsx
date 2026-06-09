import { metrics } from '@/lib/site-data';

export function MetricsSection() {
  return (
    <section className="border-b border-forge/10 bg-forge text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`min-h-48 border-white/10 p-8 ${index % 2 === 0 ? 'border-r' : ''} ${index < 2 ? 'md:border-b xl:border-b-0' : ''} ${index === 1 || index === 2 ? 'bg-warm text-forge' : ''}`}
          >
            <p className={`label-kicker ${index === 1 || index === 2 ? 'text-forge/40' : 'text-white/45'}`}>{metric.code}</p>
            <div className="mt-8 text-4xl font-black uppercase text-charge md:text-5xl">{metric.value}</div>
            <p className={`mt-3 max-w-[15rem] text-xs font-bold uppercase leading-5 tracking-[0.14em] ${index === 1 || index === 2 ? 'text-forge/62' : 'text-white/62'}`}>
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
