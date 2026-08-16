import React from 'react';
import { EVENT_DETAILS } from '../data/eventData';

interface FooterProps {
  onContactHost: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactHost }) => {
  return (
    <footer className="bg-white border-t-2 border-[#121212] text-black/70 text-xs font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 text-center space-y-4">
        
        <div>
          <strong className="text-[#121212] uppercase">Target Audience:</strong>{' '}
          <span className="text-black/80 font-sans">{EVENT_DETAILS.targetAudience}</span>
        </div>

        <div>
          <strong className="text-[#121212] uppercase">Enquiries:</strong>{' '}
          Contact host team at{' '}
          <a
            href={`mailto:${EVENT_DETAILS.hostEmail}`}
            className="text-[#004a99] underline font-bold"
          >
            {EVENT_DETAILS.hostEmail}
          </a>
        </div>

        <div className="pt-4 border-t border-black/10 text-[11px] text-black/50">
          Executive Strategy Briefing 2026 • Private Boardroom Session
        </div>

      </div>
    </footer>
  );
};
