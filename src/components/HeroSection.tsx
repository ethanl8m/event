import React from 'react';
import { Calendar, Clock, MapPin, Shirt, CheckCircle2, ArrowUpRight, Users, ExternalLink, QrCode } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const HeroSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('iFAST Financial Ocean Financial Centre 10 Collyer Quay Singapore 049315')}`;
  const rsvpFormUrl = "https://forms.gle/KKMMFeJ3AyEyg2M66";

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Header Layout */}
        <div className="border-b-2 border-[#121212] pb-6 sm:pb-8 mb-6 sm:mb-8">
          
          {/* Top Label Badges */}
          <div className="flex items-center justify-between gap-3 mb-3.5 flex-wrap">
            <span className="text-xs font-bold text-[#004a99] tracking-wider uppercase bg-[#004a99]/10 px-3 py-1 rounded">
              Closed-Door Executive Session
            </span>
            <span className="text-xs font-bold text-[#121212] bg-[#FAFAFA] border border-black/15 px-3 py-1 rounded uppercase tracking-wide flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#004a99]" />
              <span>Limited to {EVENT_DETAILS.totalCapacity} Business Owners</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight uppercase mb-4">
            {EVENT_DETAILS.mainTitle} <br />
            {EVENT_DETAILS.titleSecondLine}
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-[#121212]/80 font-normal max-w-3xl leading-relaxed">
            {EVENT_DETAILS.tagline}
          </p>

        </div>

        {/* Logistics & QR Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Main Details Box */}
          <div className="lg:col-span-2 border border-black/15 rounded-lg p-6 sm:p-7 bg-[#FAFAFA] flex flex-col justify-between">
            <div>
              <div className="text-xs text-[#004a99] font-bold uppercase tracking-wider mb-4 border-b border-black/10 pb-2">
                Key Event Logistics
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-[#121212]">
                
                {/* Date */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#004a99] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[0.7rem] uppercase text-black/50 font-bold">Date</div>
                    <div className="font-bold text-[#121212]">{EVENT_DETAILS.date}</div>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#004a99] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[0.7rem] uppercase text-black/50 font-bold">Time</div>
                    <div className="font-bold text-[#121212]">{EVENT_DETAILS.time}</div>
                    <div className="text-xs text-black/60">Doors open {EVENT_DETAILS.doorsOpen}</div>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3 sm:col-span-2 border-t border-black/10 pt-4">
                  <MapPin className="w-4 h-4 text-[#004a99] mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <div className="text-[0.7rem] uppercase text-black/50 font-bold">Venue</div>
                        <div className="font-bold text-[#121212]">{EVENT_DETAILS.venueName}</div>
                      </div>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#004a99] hover:underline font-bold flex items-center gap-1"
                      >
                        <span>Map / Directions</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <div className="text-xs text-black/70 mt-0.5">
                      {EVENT_DETAILS.venueAddress}
                    </div>
                  </div>
                </div>

                {/* Dress Code */}
                <div className="flex items-start gap-3 sm:col-span-2 border-t border-black/10 pt-3">
                  <Shirt className="w-4 h-4 text-[#004a99] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[0.7rem] uppercase text-black/50 font-bold mr-2">Dress Code:</span>
                    <span className="font-semibold text-[#121212]">{EVENT_DETAILS.dressCode}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* QR Code RSVP Card (Replaces Seat Availability) */}
          <div className="border border-black/15 rounded-lg p-6 bg-white flex flex-col justify-between items-center text-center shadow-sm">
            <div className="w-full">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#004a99] font-bold uppercase tracking-wider mb-1">
                <QrCode className="w-4 h-4" />
                <span>Scan to RSVP</span>
              </div>
              <p className="text-[11px] text-black/60 mb-4">
                Scan with mobile camera or click below to register
              </p>

              {/* QR Image Container */}
              <a
                href={rsvpFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group mx-auto bg-white border-2 border-[#121212] p-3 rounded-lg hover:border-[#004a99] transition-all max-w-[210px]"
                title="Click to open RSVP Form"
              >
                <img
                  src="/rsvp-qr.png"
                  alt="RSVP QR Code"
                  className="w-full h-auto aspect-square object-contain group-hover:scale-[1.02] transition-transform"
                />
                <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#004a99] group-hover:underline flex items-center justify-center gap-1">
                  <span>Open Form</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            </div>

            <div className="w-full mt-5 pt-4 border-t border-black/10">
              <a
                href={rsvpFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded"
              >
                <span>RSVP Seat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Overview Banner */}
        <div className="border border-black/15 rounded-lg p-6 sm:p-7 bg-[#FAFAFA]">
          <div className="text-xs text-[#004a99] font-bold uppercase tracking-wider mb-2">
            Executive Briefing Overview
          </div>
          <p className="text-sm sm:text-base text-[#121212]/90 leading-relaxed font-normal">
            {EVENT_DETAILS.overview}
          </p>
        </div>

      </div>
    </section>
  );
};

