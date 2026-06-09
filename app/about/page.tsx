import { AboutSection } from '@/components/sections/about-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <AboutSection />
      <SiteFooter />
    </main>
  );
}
