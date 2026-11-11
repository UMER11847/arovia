import { Instagram, Mail, Phone, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { TREATMENTS } from '../data/aestheticsData';

interface FooterProps {
  onOpenBooking: () => void;
  onSelectTreatment: (id: string) => void;
}

export default function Footer({ onOpenBooking, onSelectTreatment }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24201E] text-[#FAF7F2] pt-16 pb-12 border-t border-[#3E3935]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3E3935]">
          
          {/* Col 1: Brand Wordmark & Philosophy (5 cols) */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-block mb-4">
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.2em] font-medium text-white block">
                AROVIA
              </span>
              <span className="text-[9px] uppercase tracking-[0.34em] text-[#B8976C] font-semibold block -mt-1">
                AESTHETICS
              </span>
            </a>

            <p className="text-xs sm:text-sm text-[#C8BFB6] font-light leading-relaxed max-w-sm mb-6">
              A bespoke aesthetics and skincare clinic dedicated to subtle facial architecture, natural harmony, and evidence-based non-surgical rejuvenation.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/aroviaaesthetics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#322C29] border border-[#4A423D] flex items-center justify-center text-[#E2D5C3] hover:text-white hover:border-[#B8976C] transition-colors"
                aria-label="Arovia Aesthetics Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@aroviaaesthetics.com"
                className="w-9 h-9 rounded-xs bg-[#322C29] border border-[#4A423D] flex items-center justify-center text-[#E2D5C3] hover:text-white hover:border-[#B8976C] transition-colors"
                aria-label="Email Arovia Aesthetics"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-[#C8BFB6]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Treatment Menu
                </a>
              </li>
              <li>
                <a href="#why-arovia" className="hover:text-white transition-colors">
                  The Arovia Standard
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Results Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#B8976C] transition-colors text-left cursor-pointer"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold block mb-4">
              Signature Treatments
            </span>
            <ul className="space-y-2.5 text-xs text-[#C8BFB6]">
              {TREATMENTS.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => {
                      onSelectTreatment(t.id);
                      const el = document.getElementById('treatments');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left truncate max-w-xs cursor-pointer block"
                  >
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Sanctuary Contact (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold block mb-4">
              Private Clinic
            </span>
            <div className="space-y-3 text-xs text-[#C8BFB6]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                <span>Central Private Suite (By Appointment Only)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B8976C] shrink-0" />
                <span>+44 (0) 20 7946 0912</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B8976C] shrink-0" />
                <span>concierge@aroviaaesthetics.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Proposal Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9B938D]">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Arovia Aesthetics. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#B8976C]">Website Proposal &amp; Concept Demo</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/aroviaaesthetics/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram @aroviaaesthetics
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#C8BFB6] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
