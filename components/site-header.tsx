import { navItems } from '@/lib/site-data';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-forge/10 bg-warm/92 backdrop-blur-sm">
      <div className="container-shell flex items-center justify-between py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
        <a href="/" className="text-base font-black tracking-[0.18em]">
          ENKO
        </a>
        <nav className="hidden gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-forge/62 transition hover:text-forge">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="/procurement" className="border border-forge bg-forge px-4 py-2 text-white transition hover:bg-charge hover:text-forge">
          Request Quote
        </a>
      </div>
    </header>
  );
}
