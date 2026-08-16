import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { AGENDA } from '../data/eventData';

interface AgendaTimelineProps {
  onOpenCalendar: () => void;
}

export const AgendaTimeline: React.FC<AgendaTimelineProps> = ({ onOpenCalendar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Arrival', 'Keynote', 'Strategy', 'Networking'];

  const filteredAgenda = selectedCategory === 'All' 
    ? AGENDA 
    : AGENDA.filter(item => item.category === selectedCategory);

  return (
    <section id="event-agenda" className="py-10 sm:py-12 bg-white border-t border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 border-b-2 border-[#121212] pb-4">
          <div>
            <div className="text-xs font-bold text-[#004a99] uppercase tracking-wider mb-1">
              Monday, 31 August 2026
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121212] tracking-tight uppercase">
              Event Agenda
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-bold uppercase transition-all tracking-wider rounded ${
                  selectedCategory === cat
                    ? 'bg-[#121212] text-white'
                    : 'bg-white text-[#121212] border border-black/15 hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Agenda Cards */}
        <div className="space-y-4">
          {filteredAgenda.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="bg-[#FAFAFA] border border-black/15 rounded-lg p-5 sm:p-6 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* Time */}
                  <div className="md:w-1/3 flex items-center gap-2 text-[#004a99] font-bold text-sm shrink-0">
                    <Clock className="w-4 h-4 text-[#004a99]" />
                    <span>{item.time}</span>
                  </div>

                  {/* Details */}
                  <div className="md:w-2/3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-[#121212]">
                        {item.title === "Executive Strategy Deep-Dive" ? (
                          <>
                            <strong className="text-[#004a99]">Topic 1:</strong> Growing Money Beyond the Bank Account<br />
                            <strong className="text-[#004a99]">Topic 2:</strong> <s className="text-black/40">Growth</s> Cost Hacking: Paying for What It Is Worth
                          </>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-[#121212] px-2 py-0.5 rounded border border-black/15 shrink-0">
                        {item.category}
                      </span>
                    </div>

                    {item.description && item.title !== "Executive Strategy Deep-Dive" && (
                      <p className="text-xs sm:text-sm text-black/70 leading-relaxed mt-1.5">
                        {item.description}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Add to Calendar Shortcut */}
        <div className="mt-6 bg-[#FAFAFA] border border-black/15 rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-black/80">
            <span className="text-[#004a99] font-bold uppercase block sm:inline">Sync Calendar: </span>
            Registration opens at 4:15 PM at Ocean Financial Centre.
          </div>
          <button
            onClick={onOpenCalendar}
            className="w-full sm:w-auto btn-outline flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-[#004a99]" />
            <span>Add to Calendar</span>
          </button>
        </div>

      </div>
    </section>
  );
};

