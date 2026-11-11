import { useState } from 'react';
import { Sparkles, X, ExternalLink } from 'lucide-react';

export default function ProposalBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Proposal presentation notice" className="bg-[#24201E] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#3E3935] relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center justify-center text-[#B8976C]">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span className="font-medium tracking-wide">
            Official Website Proposal Demo for <strong className="text-[#E2D5C3]">Arovia Aesthetics</strong>
          </span>
          <span className="hidden md:inline text-[#9B938D]">·</span>
          <span className="hidden md:inline text-[#C8BFB6]">
            Interactive demo ready for client presentation &amp; domain integration
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href="https://www.instagram.com/aroviaaesthetics/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[#E2D5C3] hover:text-white transition-colors"
          >
            <span>@aroviaaesthetics</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-[#9B938D] hover:text-[#FAF7F2] p-1 transition-colors"
            title="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
