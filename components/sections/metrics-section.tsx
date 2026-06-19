import { metrics } from '@/lib/site-data';

export function MetricsSection() {
  // Only take the first 4 metrics
  const topMetrics = metrics.slice(0, 4);

  return (
    <section className="border-b border-forge/10 bg-forge text-white">
      <div className="w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4">
        {topMetrics.map((metric, index) => {
          // Alternate background colors
          const isWarm = index % 2 !== 0;
          
          return (
            <div
              key={metric.label}
              className={`w-[85vw] flex-shrink-0 snap-center md:w-auto md:flex-shrink-1 min-h-[200px] p-6 md:p-8 lg:p-12 flex flex-col justify-between border-r border-forge/10 last:border-r-0
                ${isWarm ? 'bg-warm text-forge' : 'bg-forge text-white'}
              `}
            >
              <div>
                <p className={`label-kicker ${isWarm ? 'text-forge/40' : 'text-white/45'}`}>
                  {metric.code}
                </p>
                <div className="mt-8 text-4xl font-black uppercase text-charge md:text-5xl">
                  {metric.value}
                </div>
              </div>
              <p className={`mt-8 max-w-xs md:max-w-[15rem] text-xs font-bold uppercase leading-5 tracking-[0.14em] ${isWarm ? 'text-forge/62' : 'text-white/62'}`}>
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
