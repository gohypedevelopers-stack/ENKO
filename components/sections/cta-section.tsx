export function CtaSection() {
  return (
    <section className="border-b border-forge/10 bg-charge">
      <div className="container-shell flex flex-col gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl leading-[1.05] break-words">
            Ready to scale your infrastructure?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-forge/72">
            Secure a custom deployment configuration tailored to your specific fleet or network requirements.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col w-full sm:w-auto">
          <a href="/procurement" className="industrial-button bg-forge text-white w-full">
            Request pricing spec
          </a>
          <a href="/procurement" className="industrial-button bg-charge border-forge text-forge hover:bg-forge hover:text-white w-full">
            Contact sales team
          </a>
        </div>
      </div>
    </section>
  );
}
