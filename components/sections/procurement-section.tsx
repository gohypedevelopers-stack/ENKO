const businessRoles = ['Charge Point Operator (CPO)', 'Vehicle OEM', 'Fleet Logistics Provider', 'Institutional Real Estate Buyer'];
const regions = ['Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka', 'Telangana', 'Other Expansion State'];
const series = ['FLOW AC Series', 'STORM DC Series', 'BLAZE ULTRA Series'];

export function ProcurementSection() {
  return (
    <section id="procurement" className="grid-paper min-h-[calc(100vh-73px)] border-b border-forge/10">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <div>
          <p className="label-kicker text-charge">B2B procurement intake</p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-black uppercase leading-[1.05] md:text-6xl md:leading-[0.95]">
            ENKO core system hardware configurator.
          </h1>
          <p className="mt-5 text-sm leading-7 text-forge/65">
            Submit your network specifications to receive an engineered pricing spec sheet for FLOW, STORM, or BLAZE
            deployments.
          </p>
          <div className="mt-8 border-l-4 border-charge pl-5">
            <p className="text-sm font-bold uppercase leading-7 text-forge/70">
              Built for CPOs, vehicle OEMs, fleet logistics providers, and institutional real estate buyers.
            </p>
          </div>
        </div>
        <form className="border border-forge/18 bg-warm p-5 shadow-soft">
          <p className="label-kicker text-forge/42">Contact metrics</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {['Full Name', 'Corporate Email Address', 'Contact Phone Number', 'Company Entity Name'].map((field) => (
              <label key={field} className="block">
                <span className="label-kicker text-forge/45">{field}</span>
                <input className="mt-2 h-12 w-full border border-forge/18 bg-white/55 px-3 text-sm outline-none focus:border-charge" />
              </label>
            ))}
            <label className="block">
              <span className="label-kicker text-forge/45">Primary Business Role</span>
              <select className="mt-2 h-12 w-full border border-forge/18 bg-white/55 px-3 text-sm outline-none focus:border-charge">
                {businessRoles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="label-kicker text-forge/45">Target Region</span>
              <select className="mt-2 h-12 w-full border border-forge/18 bg-white/55 px-3 text-sm outline-none focus:border-charge">
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-5">
            <span className="label-kicker text-forge/45">Selected Product Series</span>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {series.map((item) => (
                <label key={item} className="flex items-center gap-3 border border-forge/14 bg-white/35 p-3 text-sm font-bold">
                  <input type="checkbox" className="h-4 w-4 accent-[#E8A020]" />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <label className="mt-5 block">
            <span className="label-kicker text-forge/45">Estimated Unit Quantity</span>
            <input className="mt-2 h-12 w-full border border-forge/18 bg-white/55 px-3 text-sm outline-none focus:border-charge" />
          </label>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="industrial-button bg-forge text-white w-full sm:w-auto" type="button">
              Submit procurement specification
            </button>
            <button className="industrial-button bg-charge text-forge w-full sm:w-auto" type="button">
              Connect direct via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
