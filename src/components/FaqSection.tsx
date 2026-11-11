import { useState } from 'react';
import { FAQS } from '../data/aestheticsData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#F4EFEA] border-t border-[#EAE3D9]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D48] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Consultation FAQ</span>
            <span aria-hidden="true">·</span>
            <span>Clarity &amp; Safety</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#24201E] font-normal tracking-tight mb-3 text-balance">
            Frequently Asked Questions
          </h2>

          <p className="text-[#554E4A] text-sm leading-relaxed font-light">
            Everything you need to know about our safety standards, treatment sensation, and recovery.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white border border-[#EAE3D9] rounded-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#24201E] font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C6D48] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#554E4A] leading-relaxed font-light border-t border-[#F4EFEA] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
