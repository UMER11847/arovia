import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { HERO_IMAGE } from '../data/aestheticsData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export default function Hero({ onOpenBooking, onExploreTreatments }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Background ambient warmth */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#EAE3D9]/60 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Kicker (Zero-Pill Discipline: unboxed text with separator) */}
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#8C6D48] font-semibold mb-5">
              <span>Bespoke Facial Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Subtle Clinical Precision</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24201E] font-normal tracking-tight leading-[1.12] mb-6 max-w-2xl text-balance">
              Enhance your natural beauty with artful,{' '}
              <span className="italic font-normal text-[#8C6D48]">individualized</span>{' '}
              aesthetic care.
            </h1>

            {/* Description */}
            <p className="text-[#554E4A] text-base sm:text-lg leading-relaxed max-w-xl font-light mb-8">
              At Arovia Aesthetics, we believe the most captivating result is the one that looks entirely like you. 
              Our practitioner-led clinic blends deep facial anatomy mapping with conservative micro-treatments 
              for a refreshed, luminous, and confident presence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2D5C3]" />
              </button>

              <button
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#24201E] bg-white border border-[#D8C7B5] rounded-xs hover:border-[#8C6D48] hover:text-[#8C6D48] hover:bg-[#FAF7F2] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Explore Treatments
              </button>
            </div>

            {/* Editorial Metadata / Trust markers */}
            <div className="pt-8 border-t border-[#EAE3D9] grid grid-cols-3 gap-6 text-[#554E4A]">
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#24201E] font-medium">100%</p>
                <p className="text-xs uppercase tracking-wider text-[#736B65] mt-1">Anatomy-Led Care</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#24201E] font-medium">Bespoke</p>
                <p className="text-xs uppercase tracking-wider text-[#736B65] mt-1">Treatment Plans</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl text-[#24201E] font-medium">Natural</p>
                <p className="text-xs uppercase tracking-wider text-[#736B65] mt-1">Refined Finish</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset & Floating Editorial Note (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative hairline frame */}
              <div className="absolute -inset-2.5 border border-[#E2D5C3] rounded-xs -z-10 translate-x-2 translate-y-2 hidden sm:block" />

              {/* Main Portrait Container */}
              <div className="relative overflow-hidden rounded-xs bg-[#EFE8DE] shadow-xl aspect-4/5">
                <img
                  src={HERO_IMAGE}
                  alt="Arovia Aesthetics natural glowing beauty campaign"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Subtle scrim for editorial contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle caption over image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#E2D5C3] font-medium">
                    The Arovia Standard
                  </p>
                  <p className="font-serif text-lg tracking-wide text-white/95 mt-0.5">
                    Subtle, undetectable facial harmony.
                  </p>
                </div>
              </div>

              {/* Floating Quote Stamp */}
              <div className="absolute -bottom-6 -left-6 bg-[#FAF7F2] border border-[#D8C7B5] p-4 shadow-md rounded-xs hidden md:flex items-center gap-3.5 max-w-xs">
                <div className="w-9 h-9 rounded-full bg-[#EFE8DE] flex items-center justify-center text-[#8C6D48] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#24201E] uppercase tracking-wider">
                    Medical Practitioner Led
                  </p>
                  <p className="text-[11px] text-[#736B65] mt-0.5 leading-snug">
                    Strict adherence to clinical hygiene &amp; natural facial aesthetics.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Full-Width Pillars Strip below Hero */}
        <div className="mt-20 pt-8 border-t border-[#EAE3D9] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xs bg-[#F4EFEA] border border-[#EAE3D9] text-[#8C6D48] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#24201E] font-medium">Certified Formulations</h3>
              <p className="text-xs text-[#6B635E] mt-1 leading-relaxed">
                We administer strictly authentic, premium European medical-grade hyaluronic acids and purified neuromodulators.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xs bg-[#F4EFEA] border border-[#EAE3D9] text-[#8C6D48] shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#24201E] font-medium">Personalized Mapping</h3>
              <p className="text-xs text-[#6B635E] mt-1 leading-relaxed">
                Every face has unique muscular balance. We customize angles, depths, and dosages to honor your individuality.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xs bg-[#F4EFEA] border border-[#EAE3D9] text-[#8C6D48] shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#24201E] font-medium">Continuous Care</h3>
              <p className="text-xs text-[#6B635E] mt-1 leading-relaxed">
                Comprehensive pre-care guidance, gentle treatment pacing, and complimentary 14-day follow-up assessments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
