import { ProcurementSection } from '@/components/sections/procurement-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function ProcurementPage() {
  return (
    <main>
      <SiteHeader />
      <ProcurementSection />
      <SiteFooter />
    </main>
  );
}
