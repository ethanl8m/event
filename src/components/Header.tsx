import React, { useState } from 'react';
import { Calendar, ShieldCheck, Printer, Image, ExternalLink, Loader2 } from 'lucide-react';
import { handlePrintPdf, handleDownloadJpg } from '../utils/exportUtils';

interface HeaderProps {
  onOpenCalendar: () => void;
  onShowToast?: (msg: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCalendar,
  onShowToast
}) => {
  const rsvpFormUrl = "https://forms.gle/KKMMFeJ3AyEyg2M66";
  const [isExportingJpg, setIsExportingJpg] = useState(false);

  const handleExportJpg = () => {
    handleDownloadJpg(
      'page-export-container',
      'iFAST_Executive_Strategy_Briefing_2026.jpg',
      () => {
        setIsExportingJpg(true);
      },
      () => {
        setIsExportingJpg(false);
      },
      (err) => {
        if (onShowToast) onShowToast('Image download initialized');
      }
    );
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#121212]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#121212] text-white flex items-center justify-center font-bold text-sm tracking-tight">
              ES
            </div>
            <div>
              <div className="text-xs font-semibold text-[#004a99] tracking-wide uppercase">
                Executive Strategy Briefing
              </div>
              <div className="text-sm sm:text-base font-bold text-[#121212] tracking-tight">
                Executive Networking <span className="text-[#004a99]">&amp; Strategy Mixer 2026</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Download JPG */}
            <button
              onClick={handleExportJpg}
              disabled={isExportingJpg}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#121212] hover:text-[#004a99] border border-black/15 hover:border-black/30 px-3 py-2 rounded transition-all uppercase tracking-wider bg-white cursor-pointer disabled:opacity-50"
              title="Download Briefing as High-Res JPG Image"
            >
              {isExportingJpg ? (
                <Loader2 className="w-3.5 h-3.5 text-[#004a99] animate-spin" />
              ) : (
                <Image className="w-3.5 h-3.5 text-[#004a99]" />
              )}
              <span>{isExportingJpg ? 'Exporting...' : 'Export .JPG'}</span>
            </button>

            {/* Print Single Page PDF */}
            <button
              onClick={handlePrintPdf}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#121212] hover:text-[#004a99] border border-black/15 hover:border-black/30 px-3 py-2 rounded transition-all uppercase tracking-wider bg-white cursor-pointer"
              title="Print or Save PDF Briefing"
            >
              <Printer className="w-3.5 h-3.5 text-[#004a99]" />
              <span>Print / PDF</span>
            </button>

            {/* Calendar Export */}
            <button
              onClick={onOpenCalendar}
              className="hidden md:flex items-center gap-1.5 text-xs font-bold text-[#121212] hover:text-[#004a99] border border-black/15 hover:border-black/30 px-3 py-2 rounded transition-all uppercase tracking-wider bg-white cursor-pointer"
              title="Add to Calendar"
            >
              <Calendar className="w-3.5 h-3.5 text-[#004a99]" />
              <span>Calendar</span>
            </button>

            {/* RSVP Button */}
            <a
              href={rsvpFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 py-2 px-3.5 text-xs font-bold uppercase tracking-wider rounded"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>RSVP Seat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>
      </div>
    </header>
  );
};


