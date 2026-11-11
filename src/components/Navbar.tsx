import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Arovia', href: '#why-arovia' },
    { label: 'Results', href: '#results' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#booking' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE3D9] py-3.5 shadow-xs'
          : 'bg-[#FAF7F2] border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element in display serif) */}
        <a
          href="#"
          className="group flex flex-col items-start whitespace-nowrap shrink-0 focus-visible:outline-hidden"
        >
          <span className="font-serif text-2xl lg:text-3xl tracking-[0.18em] font-medium text-[#24201E] group-hover:text-[#8C6D48] transition-colors">
            AROVIA
          </span>
          <span className="text-[9px] uppercase tracking-[0.32em] text-[#8C6D48] font-sans -mt-1 font-semibold">
            AESTHETICS
          </span>
        </a>

        {/* Zone 2: 4-5 Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium uppercase tracking-[0.14em] text-[#554E4A]">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#24201E] hover:border-b hover:border-[#8C6D48] pb-0.5 transition-all whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] active:scale-[0.98] transition-all duration-200 shadow-xs cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#E2D5C3]" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#24201E] hover:text-[#8C6D48] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EAE3D9] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium tracking-wider uppercase text-[#383431]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#8C6D48] transition-colors border-b border-[#F4EFEA]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-3 w-full py-3 text-xs font-semibold uppercase tracking-widest text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors text-center cursor-pointer"
            >
              Book an Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
