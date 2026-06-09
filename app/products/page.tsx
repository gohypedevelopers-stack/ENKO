import { ProductsSection } from '@/components/sections/products-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <ProductsSection />
      <SiteFooter />
    </main>
  );
}
