import React from 'react';
import { X, Calendar, MapPin, Printer, CheckCircle2, User, Building, ShieldCheck, Trash2 } from 'lucide-react';
import { Ticket } from '../types';

interface TicketViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: Ticket | null;
  onOpenCalendar: () => void;
  onCancelTicket: () => void;
}

export const TicketViewModal: React.FC<TicketViewModalProps> = ({
  isOpen,
  onClose,
  ticket,
  onOpenCalendar,
  onCancelTicket
}) => {
  if (!isOpen || !ticket) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white border-2 border-[#121212] rounded-lg shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#121212] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Executive Entry Pass
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Digital Ticket Pass Card Body */}
        <div className="p-6">
          <div className="bg-[#FAFAFA] border-2 border-[#121212] rounded-lg p-6 relative overflow-hidden">
            
            <div className="flex justify-between items-start border-b border-black/15 pb-4 mb-4">
              <div>
                <div className="text-xs font-bold text-[#004a99] uppercase">
                  iFAST Strategy Briefing
                </div>
                <h4 className="text-base font-extrabold text-[#121212] tracking-wide uppercase">
                  Executive Briefing 2026
                </h4>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-black/50 block">PASS ID</span>
                <span className="text-sm font-bold text-[#004a99]">
                  {ticket.ticketId}
                </span>
              </div>
            </div>

            {/* Guest Info */}
            <div className="space-y-3 mb-6 text-xs text-black/80">
              
              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-[#004a99] mt-0.5 shrink-0" />
                <div>
                  <span className="text-black/50 block text-[10px] uppercase font-bold">DELEGATE NAME</span>
                  <strong className="text-[#121212] text-sm">{ticket.formData.fullName}</strong>
                  <span className="text-black/60 block">{ticket.formData.designation}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-[#004a99] mt-0.5 shrink-0" />
                <div>
                  <span className="text-black/50 block text-[10px] uppercase font-bold">ORGANIZATION</span>
                  <strong className="text-[#121212]">{ticket.formData.companyName}</strong>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-black/10">
                <div>
                  <span className="text-black/50 block text-[10px] uppercase font-bold">SEAT ALLOCATION</span>
                  <span className="font-bold text-[#004a99]">
                    {ticket.seatNumber}
                  </span>
                </div>
                <div>
                  <span className="text-black/50 block text-[10px] uppercase font-bold">STATUS</span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 text-[11px]">
                    <CheckCircle2 className="w-3 h-3" />
                    Confirmed
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 text-[11px] text-black/80 space-y-1">
                <div className="flex items-center gap-1.5 text-[#121212] font-bold">
                  <Calendar className="w-3.5 h-3.5 text-[#004a99]" />
                  <span>Monday, 31 August 2026 • 4:30 PM SGT</span>
                </div>
                <div className="flex items-center gap-1.5 text-black/60">
                  <MapPin className="w-3.5 h-3.5 text-[#004a99]" />
                  <span>iFAST Boardroom, Ocean Financial Centre Level 26</span>
                </div>
              </div>

            </div>

            {/* QR Representation */}
            <div className="bg-white border border-black/15 rounded p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#121212] rounded p-1 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
                    <rect x="1" y="1" width="7" height="7" rx="0.5" />
                    <rect x="3" y="3" width="3" height="3" fill="#121212" />
                    <rect x="16" y="1" width="7" height="7" rx="0.5" />
                    <rect x="18" y="3" width="3" height="3" fill="#121212" />
                    <rect x="1" y="16" width="7" height="7" rx="0.5" />
                    <rect x="3" y="18" width="3" height="3" fill="#121212" />
                    <rect x="10" y="10" width="4" height="4" />
                    <rect x="15" y="15" width="3" height="3" />
                    <rect x="10" y="2" width="2" height="4" />
                    <rect x="19" y="10" width="3" height="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#121212] uppercase">Fast-Track Entry</div>
                  <div className="text-[10px] text-black/60">Present pass at Level 1 security</div>
                </div>
              </div>
              <span className="text-[10px] text-[#004a99] bg-[#004a99]/10 border border-[#004a99]/30 rounded px-2 py-0.5 font-bold">
                VALIDATED
              </span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenCalendar}
              className="w-full btn-outline flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#004a99]" />
              <span>Add to Calendar</span>
            </button>

            <button
              onClick={handlePrint}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print Pass</span>
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={onCancelTicket}
              className="text-[11px] text-black/50 hover:text-red-600 flex items-center justify-center gap-1 mx-auto transition-colors"
            >
              <Trash2 className="w-3 h-3" />
              <span>Cancel / Release Reservation</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

