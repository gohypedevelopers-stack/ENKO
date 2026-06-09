import { CtaSection } from '@/components/sections/cta-section';
import { HeroSection } from '@/components/sections/hero-section';
import { MetricsSection } from '@/components/sections/metrics-section';
import { OemSection } from '@/components/sections/oem-section';
import { RangeSection } from '@/components/sections/range-section';
import { ServiceSection } from '@/components/sections/service-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <MetricsSection />
      <RangeSection />
      <ServiceSection />
      <OemSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
