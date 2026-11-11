import { useState } from 'react';
import { CLINIC_INTERIOR_IMAGE, BOTANICAL_TEXTURE_IMAGE } from '../data/aestheticsData';
import { ArrowRight, CheckCircle2, X, Award, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4EFEA] border-y border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Grid: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Clinic Interior (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Primary Image: Travertine Aesthetic Suite */}
              <div className="relative rounded-xs overflow-hidden shadow-lg aspect-4/5 bg-[#EAE3D9]">
                <img
                  src={CLINIC_INTERIOR_IMAGE}
                  alt="Arovia Aesthetics private treatment suite and consultation lounge"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-[11px] uppercase tracking-widest text-[#E2D5C3]">The Arovia Clinic Sanctuary</p>
                  <p className="font-serif text-sm text-white/90">Designed for tranquility, confidentiality, and calm focus.</p>
                </div>
              </div>

              {/* Offset Secondary Image: Macro Texture */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-44 h-44 rounded-xs overflow-hidden border-4 border-[#F4EFEA] shadow-xl">
                <img
                  src={BOTANICAL_TEXTURE_IMAGE}
                  alt="Medical aesthetic formulations and pure essences"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Customization Note for Website Proposal */}
            <div className="mt-8 sm:mt-12 p-3.5 bg-white/70 backdrop-blur-xs border border-[#E2D5C3] rounded-xs text-[11px] text-[#736B65] flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#8C6D48] shrink-0 mt-0.5" />
              <span>
                <strong>Proposal Note for Arovia:</strong> This space will feature your actual clinic photos, clinician portrait, and registered practitioner credentials upon live rollout.
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Story (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D48] font-semibold mb-4">
              <span>The Arovia Philosophy</span>
              <span aria-hidden="true">·</span>
              <span>Subtle Refinement</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24201E] font-normal leading-[1.18] tracking-tight mb-6 text-balance">
              Where anatomical precision meets the nuance of timeless beauty.
            </h2>

            <p className="text-[#554E4A] text-base sm:text-lg leading-relaxed font-light mb-6">
              Arovia Aesthetics was established on a single core belief: aesthetic medicine should never alter who you are. 
              Instead, it should softly awaken your natural facial harmony, restore hydration, and reverse the signs of fatigue.
            </p>

            <p className="text-[#554E4A] text-sm sm:text-base leading-relaxed font-light mb-8">
              We reject the generic, cookie-cutter templates that populate modern beauty feeds. In our serene consultation suite, 
              every treatment begins with a relaxed, comprehensive assessment of your facial planes, dynamic muscles, and personal aspirations. 
              We utilize phased micro-dosing to build results gradually—ensuring you always leave feeling confident and looking luminous.
            </p>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D48] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#443F3C]">
                  <strong>Conservative Dosage:</strong> Subtlety over volume; undetectable rejuvenation.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D48] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#443F3C]">
                  <strong>Unhurried Consultations:</strong> Generous time reserved for every individual client.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D48] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#443F3C]">
                  <strong>Medical-Grade Safety:</strong> Strict aseptic protocols and traceable European formulations.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D48] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#443F3C]">
                  <strong>Complimentary Follow-Up:</strong> Ongoing post-care support after every procedure.
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setStoryModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#24201E] bg-white border border-[#D8C7B5] rounded-xs hover:border-[#8C6D48] hover:text-[#8C6D48] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Discover Our Story &amp; Protocol</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8C6D48]" />
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Meet With Our Clinician</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Story & Protocol Modal */}
      {storyModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setStoryModalOpen(false)}
        >
          <div 
            className="bg-[#FAF7F2] border border-[#D8C7B5] rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setStoryModalOpen(false)}
              className="absolute top-5 right-5 text-[#736B65] hover:text-[#24201E] p-1.5 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C6D48] font-semibold mb-2">
              <Award className="w-4 h-4" />
              <span>Arovia Clinical Standards</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#24201E] mb-4">
              The Four-Step Arovia Consultation Journey
            </h3>

            <p className="text-sm text-[#554E4A] leading-relaxed mb-6 font-light">
              We believe patient trust is earned through complete transparency, active listening, and rigorous medical ethics. Here is how our treatment journey is structured from the moment you step through our doors:
            </p>

            <div className="space-y-6 text-[#443F3C]">
              <div className="border-b border-[#EAE3D9] pb-4">
                <div className="flex items-baseline gap-2 font-serif text-lg text-[#24201E] font-medium">
                  <span className="text-xs font-sans text-[#8C6D48] font-bold">01</span>
                  <span>Facial Biomechanics &amp; Proportions Analysis</span>
                </div>
                <p className="text-xs text-[#6B635E] mt-1.5 leading-relaxed font-light">
                  We study your resting face, dynamic smiles, and structural bone architecture under clinical cross-polarized lighting. We discuss what you want to accentuate and address any concerns.
                </p>
              </div>

              <div className="border-b border-[#EAE3D9] pb-4">
                <div className="flex items-baseline gap-2 font-serif text-lg text-[#24201E] font-medium">
                  <span className="text-xs font-sans text-[#8C6D48] font-bold">02</span>
                  <span>Bespoke Treatment Blueprint</span>
                </div>
                <p className="text-xs text-[#6B635E] mt-1.5 leading-relaxed font-light">
                  You are presented with a step-by-step treatment roadmap. We explain exactly which formulations will be used, injection depths, anticipated sensations, and post-care timelines.
                </p>
              </div>

              <div className="border-b border-[#EAE3D9] pb-4">
                <div className="flex items-baseline gap-2 font-serif text-lg text-[#24201E] font-medium">
                  <span className="text-xs font-sans text-[#8C6D48] font-bold">03</span>
                  <span>Micro-Precision Administration</span>
                </div>
                <p className="text-xs text-[#6B635E] mt-1.5 leading-relaxed font-light">
                  Using high-gauge micro-cannulas and fine needles paired with topical cooling and gentle vibration, we introduce micro-aliquots with pinpoint accuracy to maximize comfort and eliminate bruising.
                </p>
              </div>

              <div className="pb-2">
                <div className="flex items-baseline gap-2 font-serif text-lg text-[#24201E] font-medium">
                  <span className="text-xs font-sans text-[#8C6D48] font-bold">04</span>
                  <span>14-Day Review &amp; Ongoing Aftercare</span>
                </div>
                <p className="text-xs text-[#6B635E] mt-1.5 leading-relaxed font-light">
                  Aesthetics is a journey, not a single appointment. Every client receives direct practitioner aftercare contact and an invitation for a complimentary 2-week review to ensure complete satisfaction.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE3D9] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#736B65]">
                Ready to begin your personal aesthetic consultation?
              </span>
              <button
                onClick={() => {
                  setStoryModalOpen(false);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors cursor-pointer"
              >
                Reserve Your Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
