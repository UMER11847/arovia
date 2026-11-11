import { useState } from 'react';
import { TREATMENTS } from '../data/aestheticsData';
import { Treatment } from '../types';
import { ArrowRight, Clock, Sparkles, X, Check, Shield } from 'lucide-react';

interface TreatmentsProps {
  onSelectTreatmentForBooking: (treatmentId: string) => void;
}

export default function Treatments({ onSelectTreatmentForBooking }: TreatmentsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'injectables', label: 'Injectable Architecture' },
    { id: 'rejuvenation', label: 'Bio-Remodeling & Glow' },
    { id: 'skin-health', label: 'Clinical Skin Renewal' },
  ];

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D48] font-semibold mb-3">
            <span>Clinical Treatments</span>
            <span aria-hidden="true">·</span>
            <span>The Curated Menu</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24201E] font-normal tracking-tight mb-4 text-balance">
            Evidence-based aesthetic procedures, crafted for your individual anatomy.
          </h2>

          <p className="text-[#554E4A] text-base leading-relaxed font-light">
            Each treatment at Arovia is preceded by a personalized clinical consultation. We balance conservative dosage with modern injection techniques to achieve radiant, restorative results that honour your natural essence.
          </p>
        </div>

        {/* Filter Tabs (Segmented control style per guidelines) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-[#F4EFEA] border border-[#EAE3D9] rounded-xs w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-xs transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#24201E] text-[#FAF7F2] shadow-xs'
                  : 'text-[#6B635E] hover:text-[#24201E] hover:bg-[#EAE3D9]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="group bg-white border border-[#EAE3D9] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#8C6D48]/60 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#EAE3D9]">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Popular treatment subtle indicator */}
                {treatment.isPopular && (
                  <div className="absolute top-3 right-3 bg-[#24201E]/90 text-[#E2D5C3] text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-xs backdrop-blur-xs">
                    Client Favorite
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category metadata (Zero-Pill discipline) */}
                  <div className="text-[11px] uppercase tracking-widest text-[#8C6D48] font-medium mb-1.5">
                    {treatment.categoryLabel}
                  </div>

                  <h3 className="font-serif text-xl text-[#24201E] font-medium leading-snug mb-2 group-hover:text-[#8C6D48] transition-colors">
                    {treatment.name}
                  </h3>

                  <p className="text-xs text-[#554E4A] leading-relaxed font-light mb-5">
                    {treatment.description}
                  </p>
                </div>

                {/* Practical specs */}
                <div className="pt-4 border-t border-[#F4EFEA] mb-5">
                  <div className="flex items-center justify-between text-[11px] text-[#736B65]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8C6D48]" />
                      <span>{treatment.duration}</span>
                    </span>
                    <span className="text-[#8C6D48] font-medium">
                      {treatment.downtime}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setSelectedTreatment(treatment)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#24201E] hover:text-[#8C6D48] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Protocol</span>
                    <ArrowRight className="w-3 h-3 text-[#8C6D48]" />
                  </button>

                  <button
                    onClick={() => onSelectTreatmentForBooking(treatment.id)}
                    className="px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Customization proposal note */}
        <div className="mt-12 text-center text-xs text-[#736B65]">
          <span>Looking for a bespoke treatment plan? All treatments include an in-depth preliminary facial anatomy consultation.</span>
        </div>

      </div>

      {/* Detailed Treatment Modal */}
      {selectedTreatment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedTreatment(null)}
        >
          <div 
            className="bg-[#FAF7F2] border border-[#D8C7B5] rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-5 right-5 text-[#736B65] hover:text-[#24201E] p-1.5 transition-colors cursor-pointer"
              aria-label="Close treatment modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[11px] uppercase tracking-widest text-[#8C6D48] font-semibold mb-1">
              {selectedTreatment.categoryLabel}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#24201E] font-medium mb-3">
              {selectedTreatment.name}
            </h3>

            <p className="text-sm text-[#8C6D48] italic mb-6">
              “{selectedTreatment.tagline}”
            </p>

            <div className="relative aspect-16/9 rounded-xs overflow-hidden mb-6 bg-[#EAE3D9]">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#554E4A] leading-relaxed font-light mb-6">
              <p>{selectedTreatment.fullDetails}</p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F4EFEA] border border-[#EAE3D9] rounded-xs mb-6 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#736B65] block">Duration</span>
                <span className="font-medium text-[#24201E]">{selectedTreatment.duration}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#736B65] block">Downtime</span>
                <span className="font-medium text-[#24201E]">{selectedTreatment.downtime}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#736B65] block">Longevity</span>
                <span className="font-medium text-[#24201E]">{selectedTreatment.longevity}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#736B65] block">Comfort Level</span>
                <span className="font-medium text-[#24201E]">{selectedTreatment.sensation}</span>
              </div>
            </div>

            {/* Target Areas */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#736B65] font-medium block mb-2">
                Typical Target Areas &amp; Anatomy:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedTreatment.targetAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs text-[#443F3C] bg-white border border-[#EAE3D9] px-2.5 py-1 rounded-xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-[#EAE3D9] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#736B65]">
                <Shield className="w-4 h-4 text-[#8C6D48]" />
                <span>Complimentary 14-day post-procedure review included</span>
              </div>

              <button
                onClick={() => {
                  const id = selectedTreatment.id;
                  setSelectedTreatment(null);
                  onSelectTreatmentForBooking(id);
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors cursor-pointer"
              >
                Select &amp; Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
