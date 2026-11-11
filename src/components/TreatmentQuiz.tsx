import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, Check, Heart, Shield } from 'lucide-react';
import { TREATMENTS } from '../data/aestheticsData';

interface TreatmentQuizProps {
  onSelectTreatmentForBooking: (treatmentId: string) => void;
}

export default function TreatmentQuiz({ onSelectTreatmentForBooking }: TreatmentQuizProps) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [downtime, setDowntime] = useState<string>('');

  const handleRestart = () => {
    setStep(1);
    setGoal('');
    setExperience('');
    setDowntime('');
  };

  // Determine recommendation based on choices
  let recommendedTreatment = TREATMENTS[0]; // fallback
  if (goal === 'glow' || downtime === 'zero') {
    recommendedTreatment = TREATMENTS.find((t) => t.id === 'profhilo-bio-remodeling') || TREATMENTS[2];
  } else if (goal === 'lips') {
    recommendedTreatment = TREATMENTS.find((t) => t.id === 'lip-architecture') || TREATMENTS[0];
  } else if (goal === 'lines') {
    recommendedTreatment = TREATMENTS.find((t) => t.id === 'anti-wrinkle-smoothing') || TREATMENTS[1];
  } else if (goal === 'texture') {
    recommendedTreatment = TREATMENTS.find((t) => t.id === 'collagen-induction-microneedling') || TREATMENTS[3];
  }

  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="bg-[#F4EFEA] border border-[#D8C7B5] rounded-xs p-8 sm:p-12 shadow-xs">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#EAE3D9]">
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#8C6D48] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Consultation Guide</span>
              </div>
              <h3 className="font-serif text-2xl text-[#24201E] font-medium">
                Find Your Bespoke Treatment Protocol
              </h3>
            </div>

            {step <= 3 && (
              <div className="text-xs uppercase tracking-widest text-[#736B65]">
                Step {step} of 3
              </div>
            )}
          </div>

          {/* Step 1: Primary Goal */}
          {step === 1 && (
            <div className="animate-in fade-in duration-200">
              <h4 className="font-serif text-lg text-[#24201E] mb-2 font-medium">
                1. What is your primary aesthetic focus or concern?
              </h4>
              <p className="text-xs text-[#736B65] mb-6">
                Select the area you would most love to refresh or enhance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { id: 'glow', label: 'Deep Cellular Hydration & Lit-From-Within Glow' },
                  { id: 'lips', label: 'Natural Lip Architecture & Vermilion Definition' },
                  { id: 'lines', label: 'Softening Dynamic Frown & Expression Lines' },
                  { id: 'texture', label: 'Skin Texture, Refined Pores & Collagen Renewal' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setGoal(option.id)}
                    className={`p-4 text-left border rounded-xs transition-all text-xs font-medium cursor-pointer ${
                      goal === option.id
                        ? 'border-[#8C6D48] bg-white text-[#24201E] shadow-xs'
                        : 'border-[#EAE3D9] bg-white/60 text-[#554E4A] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {goal === option.id && <Check className="w-4 h-4 text-[#8C6D48]" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  disabled={!goal}
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Experience Level */}
          {step === 2 && (
            <div className="animate-in fade-in duration-200">
              <h4 className="font-serif text-lg text-[#24201E] mb-2 font-medium">
                2. Have you experienced medical aesthetics before?
              </h4>
              <p className="text-xs text-[#736B65] mb-6">
                This helps us calibrate consultation depth and pacing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { id: 'first-time', label: 'First Time (I want gentle, step-by-step guidance)' },
                  { id: 'experienced', label: 'Experienced (I regularly maintain my aesthetic routine)' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setExperience(option.id)}
                    className={`p-4 text-left border rounded-xs transition-all text-xs font-medium cursor-pointer ${
                      experience === option.id
                        ? 'border-[#8C6D48] bg-white text-[#24201E] shadow-xs'
                        : 'border-[#EAE3D9] bg-white/60 text-[#554E4A] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {experience === option.id && <Check className="w-4 h-4 text-[#8C6D48]" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-medium text-[#736B65] hover:text-[#24201E] transition-colors"
                >
                  Back
                </button>

                <button
                  disabled={!experience}
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Downtime Preferences */}
          {step === 3 && (
            <div className="animate-in fade-in duration-200">
              <h4 className="font-serif text-lg text-[#24201E] mb-2 font-medium">
                3. What is your preferred recovery / downtime window?
              </h4>
              <p className="text-xs text-[#736B65] mb-6">
                All our treatments are minimally invasive, but options vary in post-care settling time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { id: 'zero', label: 'Zero Downtime (Return to work or social events immediately)' },
                  { id: 'minimal', label: '12–24 Hours (A quiet evening of post-care is completely fine)' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setDowntime(option.id)}
                    className={`p-4 text-left border rounded-xs transition-all text-xs font-medium cursor-pointer ${
                      downtime === option.id
                        ? 'border-[#8C6D48] bg-white text-[#24201E] shadow-xs'
                        : 'border-[#EAE3D9] bg-white/60 text-[#554E4A] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.label}</span>
                      {downtime === option.id && <Check className="w-4 h-4 text-[#8C6D48]" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-medium text-[#736B65] hover:text-[#24201E] transition-colors"
                >
                  Back
                </button>

                <button
                  disabled={!downtime}
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>See My Recommendation</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#E2D5C3]" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Result Recommendation */}
          {step === 4 && (
            <div className="animate-in fade-in duration-300">
              <div className="bg-white border border-[#EAE3D9] p-6 sm:p-8 rounded-xs mb-6">
                <div className="text-[11px] uppercase tracking-widest text-[#8C6D48] font-semibold mb-1">
                  Tailored For You · {recommendedTreatment.categoryLabel}
                </div>

                <h4 className="font-serif text-2xl sm:text-3xl text-[#24201E] font-medium mb-2">
                  {recommendedTreatment.name}
                </h4>

                <p className="text-xs sm:text-sm text-[#554E4A] font-light leading-relaxed mb-6">
                  {recommendedTreatment.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#FAF7F2] border border-[#EAE3D9] rounded-xs text-xs mb-6">
                  <div>
                    <span className="text-[10px] uppercase text-[#736B65] block">Session Time</span>
                    <span className="font-medium text-[#24201E]">{recommendedTreatment.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#736B65] block">Downtime</span>
                    <span className="font-medium text-[#8C6D48]">{recommendedTreatment.downtime}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#736B65] block">Longevity</span>
                    <span className="font-medium text-[#24201E]">{recommendedTreatment.longevity}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-1.5 text-xs text-[#736B65] hover:text-[#24201E] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>

                  <button
                    onClick={() => onSelectTreatmentForBooking(recommendedTreatment.id)}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <span>Reserve Consultation for This Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
