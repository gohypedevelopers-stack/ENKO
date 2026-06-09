import { ChargerVisual } from '@/components/charger-visual';
import TextType from '@/components/TextType';
import ElectricBorder from '@/components/ElectricBorder';

export function HeroSection() {
  return (
    <section className="grid-paper border-b border-forge/10 overflow-hidden">
      <div className="container-shell grid min-h-0 lg:min-h-[calc(100vh-73px)] gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
        <div>
          <p className="label-kicker mb-4 text-forge/45">India built EV infrastructure</p>
          <h1 className="max-w-2xl text-3xl sm:text-5xl font-black uppercase leading-[0.95] md:text-7xl min-h-[4.5rem] sm:min-h-[5.5rem] md:min-h-[9rem]">
            <TextType 
              text={["Built for the distance", "Built for the future", "Built for India"]}
              typingSpeed={50}
              deletingSpeed={20}
              pauseDuration={2500}
              variableSpeed={{ min: 15, max: 65 }}
              showCursor={true}
              cursorCharacter="."
              cursorClassName="text-charge font-black"
              as="span"
            />
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-forge/70 md:text-lg">
            India&apos;s EV charging infrastructure, built in India. Full range. Field-ready. Priced right.
          </p>
          
          <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
            <a href="/procurement" className="industrial-button bg-charge text-forge w-full sm:w-auto">
              WhatsApp Us
            </a>
            <a href="/procurement" className="industrial-button bg-warm text-forge w-full sm:w-auto">
              Request a Quote
            </a>
          </div>
        </div>
        
        <div className="mx-auto w-[calc(100%-2.5rem)] sm:w-full max-w-[440px]">
          <div className="relative w-full aspect-[0.92]">
            <div className="absolute -top-6 right-0 label-kicker text-forge/38">Phase signal 05.9</div>
            
            <ElectricBorder
              color="#e8a020"
              speed={0.6}
              chaos={0.08}
              borderRadius={4}
              className="h-full w-full"
            >
              <div className="h-full bg-[linear-gradient(180deg,rgba(238,235,228,0.22),rgba(8,8,8,0)_34%),linear-gradient(120deg,#786c59_0%,#151513_55%,#080808_100%)]">
                <div className="relative flex h-full items-center justify-center overflow-hidden">
                  <div className="absolute left-0 top-1/3 h-px w-full bg-charge/35" />
                  <div className="absolute bottom-20 left-0 h-px w-full bg-white/10" />
                  <div className="relative h-64 w-40 border border-white/15 bg-gradient-to-b from-[#34332f] to-[#090909] shadow-2xl">
                    <div className="mx-auto mt-7 h-9 w-20 bg-charge text-center text-sm font-black leading-9 text-forge">ENKO</div>
                    <div className="mx-auto mt-10 h-24 w-12 rounded-full border border-white/15" />
                    <div className="absolute -right-12 top-32 h-36 w-28 rounded-r-full border-r-4 border-t-4 border-[#050505]" />
                  </div>
                </div>
              </div>
            </ElectricBorder>
          </div>

          <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.16em] text-forge/45">
            <span>System cornerstone</span>
            <span>DC1 500V-1000V</span>
          </div>
        </div>
      </div>
    </section>
  );
}
