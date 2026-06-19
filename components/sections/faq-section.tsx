'use client';

import { useState } from 'react';
import { faqs } from '@/lib/site-data';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="grid-paper border-b border-forge/10">
      <div className="container-shell py-16 lg:py-24">
        {/* Aligned exactly like the procurement form headers */}
        <div className="max-w-4xl mx-auto mb-10 text-left">
          <p className="label-kicker text-charge">5.1 FAQ Section</p>
        </div>
        
        {/* Accordion List - aligned to max-w-4xl to match the form exactly */}
        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.q} className="border border-forge/15 bg-white shadow-soft transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-warm focus:outline-none focus:bg-warm"
                  type="button"
                >
                  <h2 className="text-lg md:text-xl font-black uppercase text-forge pr-8">
                    Q: {faq.q}
                  </h2>
                  <div className={`flex items-center justify-center w-8 h-8 min-w-[2rem] min-h-[2rem] rounded-full border flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-charge border-charge text-white rotate-180' : 'border-forge/20 text-charge'}`}>
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-forge/10 bg-warm/30 animate-in slide-in-from-top-2 fade-in duration-300">
                    <p className="text-base leading-8 text-forge/80">
                      <span className="font-bold text-forge">A:</span> {faq.a}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
