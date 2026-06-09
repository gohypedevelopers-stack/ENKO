import { metrics } from '@/lib/site-data';
import { NumberShuffle } from '@/components/NumberShuffle';

export function MetricsSection() {
  return (
    <section className="border-b border-forge/10 bg-forge text-white">
      <div className="container-shell grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`min-h-42 sm:min-h-48 p-6 sm:p-8 flex flex-col justify-between border-forge/10
              ${index === 1 || index === 2 ? 'bg-warm text-forge' : 'bg-forge text-white border-white/10'}
              /* Mobile border: bottom border on all except last */
              border-b last:border-b-0
              /* Tablet border: grid of 2x2 */
              md:border-b-[1px] md:last:border-b-0
              ${index % 2 === 0 ? 'md:border-r' : ''}
              ${index >= 2 ? 'md:border-b-0' : 'md:border-b'}
              /* Desktop border: grid of 1x4 */
              xl:border-b-0
              xl:border-r xl:last:border-r-0
            `}
          >
            <div>
              <p className={`label-kicker ${index === 1 || index === 2 ? 'text-forge/40' : 'text-white/45'}`}>
                {metric.code}
              </p>
              <div className="mt-8 text-4xl font-black uppercase text-charge md:text-5xl">
                <NumberShuffle value={metric.value} duration={1200} delay={index * 150} />
              </div>
            </div>
            <p className={`mt-5 max-w-xs md:max-w-[15rem] text-xs font-bold uppercase leading-5 tracking-[0.14em] ${index === 1 || index === 2 ? 'text-forge/62' : 'text-white/62'}`}>
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
