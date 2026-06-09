import { FaqSection } from '@/components/sections/faq-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function FaqPage() {
  return (
    <main>
      <SiteHeader />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
