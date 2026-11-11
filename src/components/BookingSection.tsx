import { useState, useEffect } from 'react';
import { TREATMENTS } from '../data/aestheticsData';
import { BookingFormData, BookingConfirmation } from '../types';
import { Calendar, Clock, CheckCircle2, AlertCircle, Sparkles, User, Mail, Phone, MessageSquare, Shield, RefreshCw } from 'lucide-react';

interface BookingSectionProps {
  preselectedTreatmentId?: string;
  onClearPreselection?: () => void;
}

export default function BookingSection({
  preselectedTreatmentId,
  onClearPreselection,
}: BookingSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    treatmentId: preselectedTreatmentId || TREATMENTS[0].id,
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  // Sync preselected treatment if changed from outside
  useEffect(() => {
    if (preselectedTreatmentId) {
      setFormData((prev) => ({ ...prev, treatmentId: preselectedTreatmentId }));
    }
  }, [preselectedTreatmentId]);

  // Set default min date to tomorrow
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred appointment date';
    }

    if (!formData.treatmentId) {
      newErrors.treatmentId = 'Please select a treatment of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury API booking dispatch
    setTimeout(() => {
      const treatmentObj = TREATMENTS.find((t) => t.id === formData.treatmentId);
      const randomRef = 'ARV-' + Math.floor(100000 + Math.random() * 900000);

      setConfirmation({
        ...formData,
        treatmentName: treatmentObj ? treatmentObj.name : 'Aesthetic Consultation',
        referenceNumber: randomRef,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });

      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setConfirmation(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      treatmentId: TREATMENTS[0].id,
      preferredDate: '',
      preferredTime: '10:00 AM',
      notes: '',
    });
    setErrors({});
    if (onClearPreselection) onClearPreselection();
  };

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
  ];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Clinic Contact Info & Expectation (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D48] font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Private Appointments</span>
              <span aria-hidden="true">·</span>
              <span>By Reservation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24201E] font-normal tracking-tight mb-6 text-balance">
              Reserve your one-on-one aesthetic consultation.
            </h2>

            <p className="text-[#554E4A] text-base leading-relaxed font-light mb-8">
              We operate exclusively by prior appointment to safeguard client privacy and preserve an unhurried clinical environment.
            </p>

            {/* Clinic Details Card */}
            <div className="bg-[#F4EFEA] border border-[#EAE3D9] p-6 sm:p-8 rounded-xs space-y-6 mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#736B65] block mb-1">
                  Private Sanctuary Location
                </span>
                <p className="font-serif text-lg text-[#24201E] font-medium">
                  Arovia Aesthetics Consultation Suite
                </p>
                <p className="text-xs text-[#554E4A] mt-0.5">
                  Mayfair / Central District (Exact address shared upon reservation)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EAE3D9] text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#736B65] block mb-1">
                    Clinic Hours
                  </span>
                  <p className="text-[#24201E] font-medium">Tuesday – Saturday</p>
                  <p className="text-[#736B65]">09:30 AM – 06:30 PM</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#736B65] block mb-1">
                    Discretion
                  </span>
                  <p className="text-[#24201E] font-medium">Private Entry</p>
                  <p className="text-[#736B65]">Strict Confidentiality</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE3D9] text-xs text-[#736B65] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#8C6D48] shrink-0" />
                <span>All treatments administered by certified medical practitioners.</span>
              </div>
            </div>

            {/* Proposal Customization Note */}
            <div className="p-4 bg-white border border-[#E2D5C3] rounded-xs text-xs text-[#736B65] flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#8C6D48] shrink-0 mt-0.5" />
              <span>
                <strong>Integration Note for Arovia:</strong> This form connects seamlessly to your clinic management system (e.g. Timely, Fresha, Jane App, or direct SMS/email notification via Twilio/SendGrid).
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form or Confirmation Voucher (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#EAE3D9] p-8 sm:p-10 rounded-xs shadow-xs">
              
              {!confirmation ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="border-b border-[#F4EFEA] pb-4 mb-6">
                    <h3 className="font-serif text-2xl text-[#24201E] font-medium">
                      Consultation Request Form
                    </h3>
                    <p className="text-xs text-[#736B65] font-light mt-1">
                      Please enter your details below. We will review your availability and respond with confirmation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#443F3C] font-medium mb-1.5">
                        Full Name <span className="text-[#8C6D48]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B938D]">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="e.g. Evelyn Laurent"
                          className={`w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF7F2] border rounded-xs text-[#24201E] focus:outline-hidden focus:bg-white focus:border-[#8C6D48] transition-colors ${
                            errors.fullName ? 'border-rose-400' : 'border-[#D8C7B5]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#443F3C] font-medium mb-1.5">
                        Email Address <span className="text-[#8C6D48]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B938D]">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="e.g. evelyn@example.com"
                          className={`w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF7F2] border rounded-xs text-[#24201E] focus:outline-hidden focus:bg-white focus:border-[#8C6D48] transition-colors ${
                            errors.email ? 'border-rose-400' : 'border-[#D8C7B5]'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#443F3C] font-medium mb-1.5">
                        Phone Number <span className="text-[#8C6D48]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B938D]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="e.g. +44 7700 900077"
                          className={`w-full pl-9 pr-3 py-2.5 text-xs bg-[#FAF7F2] border rounded-xs text-[#24201E] focus:outline-hidden focus:bg-white focus:border-[#8C6D48] transition-colors ${
                            errors.phone ? 'border-rose-400' : 'border-[#D8C7B5]'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Treatment of Interest */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#443F3C] font-medium mb-1.5">
                        Treatment of Interest <span className="text-[#8C6D48]">*</span>
                      </label>
                      <select
                        value={formData.treatmentId}
                        onChange={(e) => {
                          setFormData({ ...formData, treatmentId: e.target.value });
                          if (errors.treatmentId) setErrors({ ...errors, treatmentId: undefined });
                        }}
                        className="w-full px-3 py-2.5 text-xs bg-[#FAF7F2] border border-[#D8C7B5] rounded-xs text-[#24201E] focus:outline-hidden focus:bg-white focus:border-[#8C6D48] transition-colors cursor-pointer"
                      >
                        {TREATMENTS.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} ({t.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#443F3C] font-medium mb-1.5">
                        Preferred Date <span className="text-[#8C6D48]">*</span>
                      </label>
                      <input
                        type="date"
                        min={getTomorrowDate()}
                        value={formData.preferredDate}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredDate: e.target.value });
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                        }}
                        className={`w-full px-3 py-2.5 text-xs bg-[#FAF7F2] border rounded-xs text-[#24201E] focus:outline-hidden focus:bg-white focus:border-[#8C6D48] transition-colors ${
                          errors.preferredDate ? 'border-rose-400' : 'border-[#D8C7B5]'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#443F3C] font-medium mb-1.5">
                        Preferred Time Window
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {timeSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setFormData({ ...formData, preferredTime: slot })}
                            className={`py-1.5 px-2 text-[11px] font-medium rounded-xs border transition-colors cursor-pointer ${
                              formData.preferredTime === slot
                                ? 'bg-[#24201E] text-white border-[#24201E]'
                                : 'bg-[#FAF7F2] text-[#554E4A] border-[#D8C7B5] hover:border-[#8C6D48]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Personal Goals / Medical Notes */}
                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-wider text-[#443F3C] font-medium mb-1.5">
                      Personal Goals or Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share any specific facial areas of interest, upcoming events, or questions..."
                      className="w-full px-3 py-2.5 text-xs bg-[#FAF7F2] border border-[#D8C7B5] rounded-xs text-[#24201E] focus:outline-hidden focus:bg-white focus:border-[#8C6D48] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] disabled:opacity-50 transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    {isSubmitting ? 'Verifying Consultation Slot...' : 'Request Private Consultation'}
                  </button>

                  <p className="text-[11px] text-[#736B65] text-center mt-3 font-light">
                    Zero commitment required. Consultations include facial biomechanics analysis and honest medical advice.
                  </p>
                </form>
              ) : (
                /* Interactive Confirmation Voucher / Summary */
                <div className="animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-6 bg-[#F4EFEA] border border-[#D8C7B5] rounded-xs mb-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-white border border-[#8C6D48] flex items-center justify-center text-[#8C6D48] mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="text-[11px] uppercase tracking-widest text-[#8C6D48] font-semibold mb-1">
                      Consultation Request Received (Demo Mode)
                    </div>

                    <h3 className="font-serif text-2xl text-[#24201E] font-medium mb-2">
                      Thank You, {confirmation.fullName}
                    </h3>

                    <p className="text-xs text-[#554E4A] max-w-md mx-auto font-light leading-relaxed">
                      Your appointment inquiry for <strong className="text-[#24201E]">{confirmation.treatmentName}</strong> has been logged in this proposal demo.
                    </p>
                  </div>

                  {/* Voucher Summary Table */}
                  <div className="bg-[#FAF7F2] border border-[#EAE3D9] p-5 rounded-xs space-y-3 text-xs mb-6">
                    <div className="flex justify-between pb-2 border-b border-[#EAE3D9]">
                      <span className="text-[#736B65]">Demo Reference:</span>
                      <span className="font-mono font-medium text-[#24201E]">{confirmation.referenceNumber}</span>
                    </div>

                    <div className="flex justify-between pb-2 border-b border-[#EAE3D9]">
                      <span className="text-[#736B65]">Selected Treatment:</span>
                      <span className="font-medium text-[#24201E]">{confirmation.treatmentName}</span>
                    </div>

                    <div className="flex justify-between pb-2 border-b border-[#EAE3D9]">
                      <span className="text-[#736B65]">Requested Date:</span>
                      <span className="font-medium text-[#24201E]">{confirmation.preferredDate} at {confirmation.preferredTime}</span>
                    </div>

                    <div className="flex justify-between pb-2 border-b border-[#EAE3D9]">
                      <span className="text-[#736B65]">Client Contact:</span>
                      <span className="text-[#24201E]">{confirmation.email} · {confirmation.phone}</span>
                    </div>

                    {confirmation.notes && (
                      <div className="pt-1">
                        <span className="text-[#736B65] block mb-1">Client Notes:</span>
                        <p className="text-[#443F3C] italic text-[11px] bg-white p-2 border border-[#EAE3D9] rounded-xs">
                          “{confirmation.notes}”
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Demo Explanatory Banner */}
                  <div className="p-3.5 bg-white border border-[#E2D5C3] rounded-xs text-[11px] text-[#736B65] mb-6">
                    <strong>Proposal Note:</strong> As requested in the proposal demo guidelines, no real booking was made. When launched for Arovia Aesthetics, this flow will trigger instant confirmation SMS/emails and sync with your clinic scheduling platform.
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 text-xs font-medium text-[#736B65] hover:text-[#24201E] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Demo Request</span>
                    </button>

                    <button
                      onClick={() => alert(`Demo Appointment #${confirmation.referenceNumber} details copied to simulated calendar.`)}
                      className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors cursor-pointer"
                    >
                      Save Summary
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
