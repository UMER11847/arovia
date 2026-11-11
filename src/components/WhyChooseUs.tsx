import { CLINIC_INTERIOR_IMAGE } from '../data/aestheticsData';
import { Sparkles, Eye, Scale, UserCheck, ShieldCheck } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const pillars = [
    {
      num: '01',
      title: 'Anatomy-Led Facial Mapping',
      description:
        'No two faces age identically. We analyze bone vectors, ligament tension, and muscle movement before formulating a customized plan that respects your individual architecture.',
      icon: Eye,
    },
    {
      num: '02',
      title: 'The Art of Conservative Dosage',
      description:
        'Overfilled, stiff appearances arise from applying excessive volume too quickly. We prioritize phased micro-dosing to refine contours gently, leaving your expressions completely animated.',
      icon: Scale,
    },
    {
      num: '03',
      title: 'Certified Medical Formulations',
      description:
        'We never compromise on product purity. All injectable solutions and bio-remodelers are sourced through verified, accredited European pharmaceutical distributors.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Private, Tranquil Sanctuary',
      description:
        'Appointments are scheduled with generous buffers to ensure complete privacy, zero waiting in crowded rooms, and uninterrupted one-on-one attention with your practitioner.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="why-arovia" className="py-20 lg:py-28 bg-[#F4EFEA] border-y border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D48] font-semibold mb-3">
            <span>The Arovia Standard</span>
            <span aria-hidden="true">·</span>
            <span>Uncompromising Principles</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24201E] font-normal tracking-tight mb-4 text-balance">
            Why discerning clients place their trust in Arovia.
          </h2>

          <p className="text-[#554E4A] text-base leading-relaxed font-light">
            In an industry frequently crowded with hurried treatments and aggressive trends, Arovia stands for restraint, clinical rigor, and elevated discretion.
          </p>
        </div>

        {/* 4 Pillars Grid (Single-Elevation, clean hairline borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-white border border-[#EAE3D9] p-8 rounded-xs flex flex-col justify-between transition-all duration-300 hover:border-[#8C6D48]/50 hover:shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl text-[#8C6D48] font-light">
                      {pillar.num}
                    </span>
                    <div className="p-2 rounded-xs bg-[#FAF7F2] text-[#8C6D48] group-hover:bg-[#24201E] group-hover:text-[#FAF7F2] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#24201E] font-medium mb-3 group-hover:text-[#8C6D48] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#6B635E] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F4EFEA] flex items-center gap-2 text-[11px] text-[#8C6D48] font-medium uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Clinical Excellence</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAF7F2] border border-[#D8C7B5] rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="font-serif text-xl text-[#24201E] font-medium mb-1">
              Ready to experience the difference of personalized aesthetic medicine?
            </h4>
            <p className="text-xs text-[#736B65] font-light leading-relaxed">
              Book a comprehensive consultation to review your facial anatomy, discuss non-surgical possibilities, and receive a dedicated care blueprint.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors shrink-0 cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
