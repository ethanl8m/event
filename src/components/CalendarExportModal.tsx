import React from 'react';
import { X, Calendar, Download, ExternalLink, Check, Copy } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface CalendarExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarExportModal: React.FC<CalendarExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  // Google Calendar URL formulation
  const googleCalUrl = new URL('https://calendar.google.com/calendar/render');
  googleCalUrl.searchParams.append('action', 'TEMPLATE');
  googleCalUrl.searchParams.append('text', `${EVENT_DETAILS.mainTitle}`);
  googleCalUrl.searchParams.append('dates', '20260831T083000Z/20260831T103000Z');
  googleCalUrl.searchParams.append('details', `${EVENT_DETAILS.tagline}\n\nTopics:\n- Topic 1: Growing Money Beyond the Bank Account (iFAST Financial)\n- Topic 2: Cost Hacking: Paying for What It Is Worth\n\nVenue: ${EVENT_DETAILS.venueName}, ${EVENT_DETAILS.venueAddress}`);
  googleCalUrl.searchParams.append('location', EVENT_DETAILS.venueAddress);

  // Outlook Web URL formulation
  const outlookUrl = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
  outlookUrl.searchParams.append('path', '/calendar/action/compose');
  outlookUrl.searchParams.append('rru', 'addevent');
  outlookUrl.searchParams.append('subject', EVENT_DETAILS.mainTitle);
  outlookUrl.searchParams.append('startdt', '2026-08-31T16:30:00+08:00');
  outlookUrl.searchParams.append('enddt', '2026-08-31T18:30:00+08:00');
  outlookUrl.searchParams.append('location', EVENT_DETAILS.venueAddress);
  outlookUrl.searchParams.append('body', EVENT_DETAILS.tagline);

  // Download ICS File generator
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//iFAST Boardroom Briefing 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${EVENT_DETAILS.mainTitle}`,
      `DESCRIPTION:${EVENT_DETAILS.tagline} - Closed-door session at iFAST Boardroom.`,
      `LOCATION:${EVENT_DETAILS.venueName}\\, ${EVENT_DETAILS.venueAddress}`,
      'DTSTART:20260831T083000Z',
      'DTEND:20260831T103000Z',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Executive_Strategy_Briefing_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyDetails = () => {
    const textToCopy = `${EVENT_DETAILS.mainTitle}\nDate: ${EVENT_DETAILS.date}\nTime: ${EVENT_DETAILS.time}\nVenue: ${EVENT_DETAILS.venueName}, ${EVENT_DETAILS.venueAddress}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-md bg-white border-2 border-[#121212] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 bg-[#121212] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-white" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              Sync Calendar Event
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4 font-mono">
          <p className="text-xs text-black/80 leading-relaxed font-sans">
            Select calendar provider to save <strong>31 August 2026 (4:30 PM SGT)</strong>:
          </p>

          <div className="space-y-3">
            
            {/* Google Calendar */}
            <a
              href={googleCalUrl.toString()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-[#FAFAFA] border border-black/15 hover:border-[#121212] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#004a99] text-white flex items-center justify-center font-bold text-xs">
                  G
                </div>
                <span className="text-xs font-bold text-[#121212]">
                  Google Calendar
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-black/40 group-hover:text-[#004a99]" />
            </a>

            {/* Outlook Web */}
            <a
              href={outlookUrl.toString()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 bg-[#FAFAFA] border border-black/15 hover:border-[#121212] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#121212] text-white flex items-center justify-center font-bold text-xs">
                  O
                </div>
                <span className="text-xs font-bold text-[#121212]">
                  Outlook Web / Office 365
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-black/40 group-hover:text-[#004a99]" />
            </a>

            {/* iCal File Download */}
            <button
              onClick={handleDownloadIcs}
              className="w-full flex items-center justify-between p-3.5 bg-[#FAFAFA] border border-black/15 hover:border-[#121212] transition-all group text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#121212] text-white flex items-center justify-center font-bold text-xs">
                  iCal
                </div>
                <span className="text-xs font-bold text-[#121212]">
                  Download .ics Calendar File
                </span>
              </div>
              <Download className="w-4 h-4 text-black/40 group-hover:text-[#004a99]" />
            </button>

          </div>

          <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs">
            <button
              onClick={handleCopyDetails}
              className="text-black/60 hover:text-[#121212] flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-emerald-700 font-bold">Copied Summary</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Briefing Details</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="text-[#004a99] hover:underline font-bold"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
