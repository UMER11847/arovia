import { useState, useEffect } from 'react';
import ProposalBanner from './components/ProposalBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import WhyChooseUs from './components/WhyChooseUs';
import TreatmentQuiz from './components/TreatmentQuiz';
import ResultsGallery from './components/ResultsGallery';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import FaqSection from './components/FaqSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import { Calendar, ChevronUp } from 'lucide-react';

export default function App() {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>('lip-architecture');
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = (treatmentId?: string) => {
    if (treatmentId) {
      setSelectedTreatmentId(treatmentId);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTreatments = () => {
    const el = document.getElementById('treatments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24201E] flex flex-col font-sans selection:bg-[#E2D5C3] selection:text-[#24201E]">
      {/* Presentation Proposal Banner */}
      <ProposalBanner />

      {/* Sticky 3-Zone Navigation Bar */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreTreatments={scrollToTreatments}
        />

        {/* About Arovia & Clinic Philosophy */}
        <About onOpenBooking={() => scrollToBooking()} />

        {/* Curated Treatment Showcase */}
        <Treatments
          onSelectTreatmentForBooking={(id) => scrollToBooking(id)}
        />

        {/* Why Choose Arovia: The 4 Pillars */}
        <WhyChooseUs onOpenBooking={() => scrollToBooking()} />

        {/* Interactive Aesthetic Consultation Guide / Quiz */}
        <TreatmentQuiz
          onSelectTreatmentForBooking={(id) => scrollToBooking(id)}
        />

        {/* Curated Aesthetic Results & Portfolio */}
        <ResultsGallery onOpenBooking={() => scrollToBooking()} />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Instagram Feed Integration (@aroviaaesthetics) */}
        <InstagramFeed />

        {/* Consultation FAQs */}
        <FaqSection />

        {/* Interactive Booking Module */}
        <BookingSection
          preselectedTreatmentId={selectedTreatmentId}
          onClearPreselection={() => setSelectedTreatmentId('lip-architecture')}
        />
      </main>

      {/* Luxury Footer */}
      <Footer
        onOpenBooking={() => scrollToBooking()}
        onSelectTreatment={(id) => setSelectedTreatmentId(id)}
      />

      {/* Floating Concierge Quick-Book Action (Visible after scrolling past hero) */}
      {showFloatingButton && (
        <aside aria-label="Quick booking concierge" className="fixed bottom-6 right-6 z-30 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => scrollToBooking()}
            className="flex items-center gap-2.5 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#FAF7F2] bg-[#24201E] hover:bg-[#8C6D48] rounded-full shadow-xl hover:shadow-2xl active:scale-95 transition-all cursor-pointer border border-[#8C6D48]/40"
          >
            <Calendar className="w-4 h-4 text-[#E2D5C3]" />
            <span className="hidden sm:inline">Book Consultation</span>
            <span className="sm:hidden">Book</span>
          </button>
        </aside>
      )}
    </div>
  );
}
