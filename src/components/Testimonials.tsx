import { useState } from 'react';
import { TESTIMONIALS } from '../data/aestheticsData';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F4EFEA] border-y border-[#EAE3D9]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D48] font-semibold mb-3">
            <span>Client Experiences</span>
            <span aria-hidden="true">·</span>
            <span>Words of Trust</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#24201E] font-normal tracking-tight mb-4 text-balance">
            The quiet confidence of natural, refined results.
          </h2>

          <p className="text-[#554E4A] text-sm leading-relaxed font-light">
            Real experiences from clients who prioritize discretion, safety, and understated elegance.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white border border-[#EAE3D9] p-8 sm:p-12 lg:p-16 rounded-xs shadow-xs relative">
          
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 text-[#EAE3D9] pointer-events-none">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Quote Body */}
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#24201E] font-light italic leading-relaxed mb-8 text-balance">
              “{current.quote}”
            </p>

            {/* Author Attribution */}
            <div className="flex flex-col items-center">
              <span className="font-serif text-lg font-medium text-[#24201E]">
                {current.author}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#8C6D48] font-medium mt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{current.treatment}</span>
              </div>
              <span className="text-[11px] text-[#9B938D] mt-0.5">
                {current.date}
              </span>
            </div>

            {/* Navigation buttons & Pagination */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="p-2 rounded-xs border border-[#EAE3D9] text-[#736B65] hover:text-[#24201E] hover:border-[#8C6D48] transition-colors cursor-pointer"
                aria-label="Previous client testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      i === activeIndex ? 'w-6 bg-[#8C6D48]' : 'w-1.5 bg-[#D8C7B5]'
                    }`}
                    aria-label={`Jump to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-xs border border-[#EAE3D9] text-[#736B65] hover:text-[#24201E] hover:border-[#8C6D48] transition-colors cursor-pointer"
                aria-label="Next client testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* Website Proposal Customization Indicator */}
        <div className="mt-8 p-4 bg-[#FAF7F2] border border-[#E2D5C3] rounded-xs text-xs text-[#736B65] flex items-center justify-between flex-col sm:flex-row gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8C6D48] shrink-0" />
            <span>
              <strong>Proposal Customization Note:</strong> Verified testimonials placeholder ready to connect with your Google Business Profile, Fresha, or Instagram reviews.
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-[#8C6D48] font-semibold shrink-0">
            Easy 1-Click Sync
          </span>
        </div>

      </div>
    </section>
  );
}
