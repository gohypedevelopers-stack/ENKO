export function OemSection() {
  return (
    <section id="partners" className="grid-paper border-b border-forge/10">
      <div className="container-shell py-16 text-center lg:py-24">
        <p className="label-kicker text-forge/45">Partner portal access</p>
        <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">OEM Ready.</h2>
        <h3 className="mt-2 text-3xl font-black uppercase md:text-5xl">Total brand integration.</h3>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-forge/62">
          Deploy our rugged hardware under your own brand. Comprehensive customization options from chassis colorways to firmware and API integration.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/partners" className="industrial-button bg-forge text-white">
            Access portal
          </a>
          <a href="/products" className="industrial-button bg-warm text-forge">
            View docs
          </a>
        </div>
      </div>
    </section>
  );
}
