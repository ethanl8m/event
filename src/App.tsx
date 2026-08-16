import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TopicCards } from './components/TopicCards';
import { AgendaTimeline } from './components/AgendaTimeline';
import { CalendarExportModal } from './components/CalendarExportModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CheckCircle2, Sparkles, Calendar, Printer, Image, Loader2 } from 'lucide-react';
import { handlePrintPdf, handleDownloadJpg } from './utils/exportUtils';

export default function App() {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isExportingJpg, setIsExportingJpg] = useState<boolean>(false);

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExportJpg = () => {
    handleDownloadJpg(
      'page-export-container',
      'iFAST_Executive_Strategy_Briefing_2026.jpg',
      () => setIsExportingJpg(true),
      () => setIsExportingJpg(false),
      () => showToast('Image file generated')
    );
  };

  return (
    <div className="min-w-full min-h-screen bg-white text-[#121212] font-sans antialiased selection:bg-[#121212] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white border-2 border-black px-4 py-3 shadow-2xl flex items-center gap-3 animate-fade-in text-xs no-print">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        onOpenCalendar={() => setIsCalendarOpen(true)}
        onShowToast={showToast}
      />

      {/* Exportable Container for PDF / JPG */}
      <div id="page-export-container" className="bg-white">
        {/* Hero Banner Section */}
        <HeroSection />

        {/* Quick Navigation Anchor Bar & Print/JPG Export Actions */}
        <div className="bg-white border-y border-black/15 sticky top-16 z-30 shadow-sm text-xs no-print">
          <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4 font-bold uppercase tracking-wider text-black/70 overflow-x-auto">
            
            <div className="flex items-center gap-4 sm:gap-8">
              <button 
                onClick={() => scrollToSection('featured-topics')}
                className="hover:text-[#004a99] transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#004a99]" />
                <span>Featured Topics</span>
              </button>
              <span className="text-black/30">•</span>
              <button 
                onClick={() => scrollToSection('event-agenda')}
                className="hover:text-[#004a99] transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#004a99]" />
                <span>Event Agenda</span>
              </button>
            </div>

            {/* Quick Export Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrintPdf}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] border border-black/20 hover:border-[#004a99] hover:text-[#004a99] rounded bg-white transition-all cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3 h-3 text-[#004a99]" />
                <span>Print PDF</span>
              </button>

              <button
                onClick={handleExportJpg}
                disabled={isExportingJpg}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] border border-black/20 hover:border-[#004a99] hover:text-[#004a99] rounded bg-white transition-all cursor-pointer disabled:opacity-50"
                title="Download as JPG Image"
              >
                {isExportingJpg ? (
                  <Loader2 className="w-3 h-3 text-[#004a99] animate-spin" />
                ) : (
                  <Image className="w-3 h-3 text-[#004a99]" />
                )}
                <span>{isExportingJpg ? 'Exporting...' : 'Save .JPG'}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Main Page Content */}
        <main>
          <TopicCards />
          <AgendaTimeline onOpenCalendar={() => setIsCalendarOpen(true)} />
        </main>

        {/* Footer */}
        <Footer onContactHost={() => setIsContactOpen(true)} />
      </div>

      {/* Modals */}
      <CalendarExportModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}

