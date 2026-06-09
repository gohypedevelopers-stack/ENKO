export function SiteFooter() {
  return (
    <footer className="bg-forge text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="text-2xl font-black tracking-[0.18em] text-charge">ENKO</div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">
            ENKO Energy Pvt Ltd. Action, protocol, all systems operational.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.12em] text-white/35">Copyright 2026 ENKO Energy</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Regional Hubs</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/55">
            <li>Tamil Nadu Sector</li>
            <li>Kerala Sector</li>
            <li>Andhra Pradesh Sector</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Technical Data</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/55">
            <li>Hardware specifications</li>
            <li>OCPP integration status</li>
            <li>Service level agreement</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Comm Link</h3>
          <p className="mt-4 text-sm text-white/55">WhatsApp secure channel integration.</p>
        </div>
      </div>
    </footer>
  );
}
