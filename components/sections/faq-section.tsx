import { faqs } from '@/lib/site-data';

export function FaqSection() {
  return (
    <section className="grid-paper min-h-[calc(100vh-73px)] border-b border-forge/10">
      <div className="container-shell py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="label-kicker text-charge">FAQ Section</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none md:text-6xl">Protocol and deployment answers.</h1>
          <p className="mt-5 text-sm leading-7 text-forge/65">
            Direct answers for communication protocol, regional supply, and deployment readiness.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <article key={faq.q} className="border border-forge/15 bg-warm p-6">
              <p className="label-kicker text-forge/38">Question 0{index + 1}</p>
              <h2 className="mt-5 text-2xl font-black uppercase leading-tight">{faq.q}</h2>
              <p className="mt-4 text-sm leading-7 text-forge/66">{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
