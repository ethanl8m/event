import React from 'react';
import { Check, Sparkles, User } from 'lucide-react';
import { TOPICS } from '../data/eventData';

export const TopicCards: React.FC = () => {
  return (
    <section id="featured-topics" className="py-10 sm:py-12 bg-white border-t border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8 border-b-2 border-[#121212] pb-4">
          <div className="text-xs font-bold text-[#004a99] uppercase tracking-wider mb-1">
            Keynote Focus Areas
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121212] tracking-tight uppercase">
            Featured Strategy Agenda
          </h2>
        </div>

        {/* Topics List */}
        <div className="space-y-6">
          
          {/* Topic 1 */}
          {TOPICS.slice(0, 1).map((topic) => (
            <div key={topic.id} className="bg-[#FAFAFA] border border-black/15 rounded-lg p-6 sm:p-7">
              <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#004a99]/10 text-[#004a99] px-2.5 py-1 rounded">
                  Topic 01
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#121212] leading-snug mb-2">
                {topic.title}
              </h3>

              {/* Speaker Profile Badge */}
              <div className="my-4 py-2 px-3.5 bg-white border border-black/10 rounded-md inline-flex items-center gap-2.5 text-xs">
                <div className="w-6 h-6 rounded-full bg-[#004a99]/10 text-[#004a99] flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5 text-[#004a99]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 mr-1.5">Speaker:</span>
                  <span className="font-bold text-[#121212]">{topic.speaker}</span>
                </div>
              </div>

              <p className="text-sm text-black/80 leading-relaxed mb-5">
                {topic.description}
              </p>

              {/* Key Takeaways Grid */}
              <div className="bg-white p-5 rounded border border-black/10">
                <div className="text-xs font-bold text-[#004a99] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#004a99]" />
                  <span>Executive Takeaways</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#121212]/90 font-medium">
                  {topic.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#004a99] mt-0.5 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Topic 2 */}
          {TOPICS.slice(1, 2).map((topic) => (
            <div key={topic.id} className="bg-[#FAFAFA] border border-black/15 rounded-lg p-6 sm:p-7">
              <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#004a99]/10 text-[#004a99] px-2.5 py-1 rounded">
                  Topic 02
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#121212] leading-snug mb-2">
                Topic 2: <s className="text-black/40 font-normal mr-1">Growth</s> Cost Hacking: Paying for What It Is Worth
              </h3>

              {/* Speaker Profile Badge */}
              <div className="my-4 py-2 px-3.5 bg-white border border-black/10 rounded-md inline-flex items-center gap-2.5 text-xs">
                <div className="w-6 h-6 rounded-full bg-[#004a99]/10 text-[#004a99] flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5 text-[#004a99]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 mr-1.5">Speaker:</span>
                  <span className="font-bold text-[#121212]">{topic.speaker}</span>
                </div>
              </div>

              <p className="text-sm text-black/80 leading-relaxed mb-5">
                {topic.description}
              </p>

              {/* Key Takeaways Grid */}
              <div className="bg-white p-5 rounded border border-black/10">
                <div className="text-xs font-bold text-[#004a99] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#004a99]" />
                  <span>Executive Takeaways</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#121212]/90 font-medium">
                  {topic.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#004a99] mt-0.5 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

