import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function AboutPage() {

  return (
    <main>
      <SiteHeader />
      <PageHero
        title="About ENKO"
        description="The infrastructure layer behind India's fastest-growing EV charging networks."
        kicker="Who We Are"
      />



      {/* 2.1, 2.2, 2.3 Sections (Replaced Origin & Vision) */}
      <section className="border-b border-forge/10 bg-[#f4f2ec] divide-y divide-forge/10">
        
        {/* 2.1 Vision & Market Position */}
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div>
            <p className="label-kicker text-charge">[ THE INFRASTRUCTURE LAYER ]</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl md:leading-[0.95]">
              The Backbone Behind the Network.
            </h2>
          </div>
          <div className="grid gap-6">
            <div className="border-l-4 border-charge pl-6">
              <h3 className="text-xl font-black uppercase">Core Statement</h3>
              <p className="mt-3 text-sm lg:text-base leading-7 text-forge/75">
                ENKO was founded to solve a specific gap in the Indian EV charging market—quality CCS2 chargers built to handle local conditions, at prices Indian business models can scale with.
              </p>
            </div>
            <div className="border-l-4 border-forge pl-6">
              <h3 className="text-xl font-black uppercase">Strategic Stance</h3>
              <p className="mt-3 text-sm lg:text-base leading-7 text-forge/75">
                We are not a charge point network operator. We don't compete for prime real estate. Instead, we act strictly as the engineering infrastructure layer that India's leading charging networks run on.
              </p>
            </div>
          </div>
        </div>

        {/* 2.2 Industrial Track Record */}
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div>
            <p className="label-kicker text-charge">[ FIELD-TESTED RELIABILITY ]</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl md:leading-[0.95]">
              Real-World Field Data.
            </h2>
          </div>
          <div className="grid gap-6">
            <div className="border-l-4 border-charge pl-6">
              <h3 className="text-xl font-black uppercase">Body Copy</h3>
              <p className="mt-3 text-sm lg:text-base leading-7 text-forge/75">
                Reliability isn't calculated in a lab; it's proven in the field. Over the past two years, ENKO has quietly deployed hardware across demanding commercial sectors in Tamil Nadu, Kerala, and Andhra Pradesh. With <strong>9x120kW DC Fast Chargers</strong> running at high-throughput live sites, our hardware performance is continuously validated by real-world grid variations and constant operational use.
              </p>
            </div>
            <div className="border-l-4 border-forge pl-6">
              <h3 className="text-xl font-black uppercase">Capital Efficiency</h3>
              <p className="mt-3 text-sm lg:text-base leading-7 text-forge/75">
                We are a <strong>100% bootstrapped, profitable enterprise</strong> that has generated ₹1Cr+ in revenue through pure product performance. This ensures our long-term stability and guarantees that we will always be here to support your network infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* 2.3 Leadership Heritage */}
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div>
            <p className="label-kicker text-charge">[ MANUFACTURING LINEAGE ]</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black uppercase leading-[1.05] md:text-5xl lg:text-6xl md:leading-[0.95]">
              50+ Years of Combined Production Expertise.
            </h2>
          </div>
          <div className="grid gap-6">
            <div className="border-l-4 border-charge pl-6">
              <h3 className="text-xl font-black uppercase">Biographical Framework</h3>
              <p className="mt-3 text-sm lg:text-base leading-7 text-forge/75">
                <strong>Samir Kamra & Ellappane (Founding Directors):</strong> Bringing a combined <strong>50+ years of deep domain experience</strong> in the industrial manufacturing segment. Their backgrounds span large-scale production management, quality control protocols, and advanced industrial operations.
              </p>
            </div>
            <div className="border-l-4 border-forge pl-6">
              <h3 className="text-xl font-black uppercase">The Blueprint</h3>
              <p className="mt-3 text-sm lg:text-base leading-7 text-forge/75">
                This manufacturing heritage means ENKO does not rely on fragile import supply chains. Every component selection, thermal cooling path, and structural enclosure design is overseen by industrial veterans to ensure continuous high-uptime operation.
              </p>
            </div>
          </div>
        </div>

      </section>

      <SiteFooter />
    </main>
  );
}
