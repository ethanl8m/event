import React, { useState } from 'react';
import { X, ShieldCheck, User, Building, Mail, Phone, Utensils, ArrowRight, Sparkles } from 'lucide-react';
import { RsvpFormData, Ticket } from '../types';
import { EVENT_DETAILS } from '../data/eventData';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRsvpSuccess: (ticket: Ticket) => void;
  reservedCount: number;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  onClose,
  onRsvpSuccess,
  reservedCount
}) => {
  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: '',
    designation: '',
    companyName: '',
    industry: 'Financial Services & Fintech',
    workEmail: '',
    phone: '',
    dietary: 'No Special Preference',
    specialRequests: '',
    topicsOfInterest: ['Topic 1: Cash Management', 'Topic 2: Cost Hacking']
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation/Title is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const ticketId = `EX-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const nextSeatNum = reservedCount + 1;
      const newTicket: Ticket = {
        ticketId,
        formData,
        timestamp: new Date().toISOString(),
        status: nextSeatNum <= EVENT_DETAILS.totalCapacity ? 'Confirmed' : 'Waitlisted',
        seatNumber: `Boardroom Seat #${nextSeatNum}`
      };

      setIsSubmitting(false);
      onRsvpSuccess(newTicket);
    }, 800);
  };

  const handleChange = (field: keyof RsvpFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const industries = [
    'Financial Services & Fintech',
    'Technology & SaaS',
    'Manufacturing & Industrial',
    'Logistics & Supply Chain',
    'Retail & E-commerce',
    'Real Estate & Property',
    'Healthcare & Medical',
    'Professional Services & Consulting',
    'F&B and Hospitality',
    'Other SME Sector'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white border-2 border-[#121212] rounded-lg shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#121212] text-white flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-white/70 uppercase tracking-wider">
              Closed-Door Executive Registration
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-wider mt-0.5">
              Secure Executive RSVP Seat
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div className="bg-[#FAFAFA] p-3.5 rounded border border-black/15 text-xs text-[#121212] flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#004a99] shrink-0" />
            <span>
              Registration confirms your seat for <strong>31 Aug 2026 at iFAST Boardroom</strong>.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#121212] mb-1 uppercase">
                Full Name <span className="text-[#004a99]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-black/40 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. David Tan"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className={`w-full bg-[#FAFAFA] rounded border ${errors.fullName ? 'border-red-600' : 'border-black/20'} pl-9 pr-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none`}
                />
              </div>
              {errors.fullName && <p className="text-[10px] text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            {/* Designation */}
            <div>
              <label className="block text-xs font-bold text-[#121212] mb-1 uppercase">
                Designation / Title <span className="text-[#004a99]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Business Owner / CEO / Director"
                value={formData.designation}
                onChange={(e) => handleChange('designation', e.target.value)}
                className={`w-full bg-[#FAFAFA] rounded border ${errors.designation ? 'border-red-600' : 'border-black/20'} px-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none`}
              />
              {errors.designation && <p className="text-[10px] text-red-600 mt-1">{errors.designation}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-[#121212] mb-1 uppercase">
                Company Name <span className="text-[#004a99]">*</span>
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-black/40 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Apex Enterprise Solutions"
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className={`w-full bg-[#FAFAFA] rounded border ${errors.companyName ? 'border-red-600' : 'border-black/20'} pl-9 pr-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none`}
                />
              </div>
              {errors.companyName && <p className="text-[10px] text-red-600 mt-1">{errors.companyName}</p>}
            </div>

            {/* Industry */}
            <div>
              <label className="block text-xs font-bold text-[#121212] mb-1 uppercase">
                Industry Sector
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleChange('industry', e.target.value)}
                className="w-full bg-[#FAFAFA] rounded border border-black/20 px-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-xs font-bold text-[#121212] mb-1 uppercase">
                Work Email <span className="text-[#004a99]">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-black/40 absolute left-3 top-2.5" />
                <input
                  type="email"
                  placeholder="e.g. david.tan@company.sg"
                  value={formData.workEmail}
                  onChange={(e) => handleChange('workEmail', e.target.value)}
                  className={`w-full bg-[#FAFAFA] rounded border ${errors.workEmail ? 'border-red-600' : 'border-black/20'} pl-9 pr-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none`}
                />
              </div>
              {errors.workEmail && <p className="text-[10px] text-red-600 mt-1">{errors.workEmail}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-[#121212] mb-1 uppercase">
                Contact Phone <span className="text-[#004a99]">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-black/40 absolute left-3 top-2.5" />
                <input
                  type="tel"
                  placeholder="e.g. +65 9123 4567"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full bg-[#FAFAFA] rounded border ${errors.phone ? 'border-red-600' : 'border-black/20'} pl-9 pr-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none`}
                />
              </div>
              {errors.phone && <p className="text-[10px] text-red-600 mt-1">{errors.phone}</p>}
            </div>

          </div>

          {/* Dietary Requirements */}
          <div>
            <label className="block text-xs font-bold text-[#121212] mb-1 uppercase">
              Dietary Requirements (Refreshments & Canapés)
            </label>
            <div className="relative">
              <Utensils className="w-4 h-4 text-black/40 absolute left-3 top-2.5" />
              <select
                value={formData.dietary}
                onChange={(e) => handleChange('dietary', e.target.value)}
                className="w-full bg-[#FAFAFA] rounded border border-black/20 pl-9 pr-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none"
              >
                <option value="No Special Preference">No Special Preference</option>
                <option value="Halal Certified">Halal Certified Refreshments</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
                <option value="Nut / Shellfish Allergy">Nut / Shellfish Allergy</option>
              </select>
            </div>
          </div>

          {/* Questions for Session */}
          <div>
            <label className="block text-xs font-bold text-[#121212] mb-1 uppercase">
              Discussion Topic for Session <span className="text-black/40 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. How to manage short-term SGD liquidity vs yield, or regional talent structuring?"
              value={formData.specialRequests}
              onChange={(e) => handleChange('specialRequests', e.target.value)}
              className="w-full bg-[#FAFAFA] rounded border border-black/20 px-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-outline"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent animate-spin rounded-full" />
                  <span>Issuing Pass...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm RSVP</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

