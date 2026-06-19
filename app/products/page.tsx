import { ProductsSection } from '@/components/sections/products-section';
import { PageHero } from '@/components/page-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero 
        title="Our Products" 
        description="Full-spectrum CCS2 charging assets engineered for diverse industrial environments." 
        kicker="Hardware Systems"
      />
      <ProductsSection />
      <SiteFooter />
    </main>
  );
}
