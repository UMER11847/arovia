import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/aestheticsData';
import { GalleryItem } from '../types';
import { Eye, X, Sparkles, ArrowRight } from 'lucide-react';

interface ResultsGalleryProps {
  onOpenBooking: () => void;
}

export default function ResultsGallery({ onOpenBooking }: ResultsGalleryProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Studies' },
    { id: 'Contour', label: 'Contour & Lips' },
    { id: 'Radiance', label: 'Radiance & Hydration' },
    { id: 'Texture', label: 'Skin Texture' },
  ];

  const filteredItems =
    activeTab === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="results" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D48] font-semibold mb-3">
              <span>Aesthetic Outcomes</span>
              <span aria-hidden="true">·</span>
              <span>Subtle Artistry</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24201E] font-normal tracking-tight text-balance">
              Luminous, balanced results that speak with understated confidence.
            </h2>
          </div>

          {/* Proposal disclaimer regarding gallery images per prompt instructions */}
          <div className="text-xs text-[#736B65] max-w-xs border-l border-[#D8C7B5] pl-4">
            <span className="font-semibold text-[#24201E] block mb-0.5">Curated Aesthetics Portfolio</span>
            Demonstrative imagery showing treatment principles and skin texture goals. Client consent cases available in private consultation.
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1 bg-[#F4EFEA] border border-[#EAE3D9] rounded-xs w-fit">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#24201E] text-[#FAF7F2]'
                  : 'text-[#6B635E] hover:text-[#24201E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-[#EFE8DE] rounded-xs overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Subtle scrim overlay on hover */}
                <div className="absolute inset-0 bg-[#24201E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-end">
                    <span className="p-2 bg-white/20 rounded-full backdrop-blur-xs">
                      <Eye className="w-4 h-4 text-white" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#E2D5C3] font-semibold block mb-1">
                      {item.focus}
                    </span>
                    <h3 className="font-serif text-lg leading-tight font-medium">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-white/80 mt-1 line-clamp-2">
                      {item.treatmentName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-card label */}
              <div className="p-4 bg-white border-t border-[#EAE3D9]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-medium text-[#24201E] truncate">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#8C6D48] shrink-0 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#736B65] max-w-xl mx-auto mb-4 font-light">
            Every procedure is adapted to your facial proportions. During your private consultation, we examine your goals and demonstrate how each treatment will harmonize with your natural features.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8C6D48] hover:text-[#24201E] transition-colors cursor-pointer"
          >
            <span>Book Your Individualized Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Lightbox Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#FAF7F2] border border-[#D8C7B5] rounded-xs max-w-xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-xs p-1.5 rounded-full text-[#24201E] hover:text-[#8C6D48] transition-colors cursor-pointer"
              aria-label="Close image inspection"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-4/3 bg-[#EAE3D9]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#8C6D48] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedItem.focus}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedItem.category}</span>
              </div>

              <h3 className="font-serif text-2xl text-[#24201E] font-medium mb-1">
                {selectedItem.title}
              </h3>

              <p className="text-xs text-[#8C6D48] font-medium mb-4">
                Treatment: {selectedItem.treatmentName}
              </p>

              <p className="text-xs sm:text-sm text-[#554E4A] leading-relaxed font-light mb-6">
                {selectedItem.description}
              </p>

              <div className="pt-4 border-t border-[#EAE3D9] flex items-center justify-between gap-4">
                <span className="text-xs text-[#736B65]">
                  Typical Recovery: <strong className="text-[#24201E]">{selectedItem.downtime}</strong>
                </span>

                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors cursor-pointer"
                >
                  Consult on this Result
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
