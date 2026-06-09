export function AboutSection() {
  return (
    <section id="about" className="border-b border-forge/10 bg-warm">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
        <div>
          <p className="label-kicker text-charge">The infrastructure layer</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase leading-[1.05] md:text-6xl md:leading-[0.95]">
            The backbone behind the network.
          </h2>
        </div>
        <div className="grid gap-6">
          <div className="border-l-4 border-charge pl-6">
            <h3 className="text-xl font-black uppercase">Market Position</h3>
            <p className="mt-3 text-sm leading-7 text-forge/68">
              ENKO was founded to solve a specific gap in the Indian EV charging market: quality CCS2 chargers built
              to handle local conditions, at prices Indian business models can scale with.
            </p>
          </div>
          <div className="border-l-4 border-forge pl-6">
            <h3 className="text-xl font-black uppercase">Engineering Stance</h3>
            <p className="mt-3 text-sm leading-7 text-forge/68">
              ENKO is not a charge point network operator. It acts strictly as the engineering infrastructure layer
              that charging networks run on.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-forge/15 p-5">
              <p className="label-kicker text-forge/42">Field-tested reliability</p>
              <p className="mt-4 text-sm leading-7 text-forge/68">
                Deployed across demanding commercial sectors in Tamil Nadu, Kerala, and Andhra Pradesh, including
                9x120kW DC fast chargers at high-throughput live sites.
              </p>
            </div>
            <div className="border border-forge/15 p-5">
              <p className="label-kicker text-forge/42">Manufacturing lineage</p>
              <p className="mt-4 text-sm leading-7 text-forge/68">
                Founding directors Samir Kamra and Ellappane bring 50+ years of combined industrial manufacturing,
                production management, and quality control experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
