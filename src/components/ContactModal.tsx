import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2 } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setEmail('');
      setName('');
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-md bg-white border-2 border-[#121212] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 bg-[#121212] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-white" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              Host Enquiry
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {sent ? (
          <div className="p-8 text-center space-y-3 font-mono">
            <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
            <h4 className="text-base font-bold text-[#121212]">Enquiry Delivered</h4>
            <p className="text-xs text-black/70 font-sans">
              The event host team has received your inquiry at <strong>{EVENT_DETAILS.hostEmail}</strong> and will respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-black/80 font-sans">
              Direct enquiries to <strong>{EVENT_DETAILS.organizer}</strong> team:
            </p>

            <div>
              <label className="block text-xs font-mono font-bold text-[#121212] mb-1 uppercase">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Lee"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-black/20 px-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#121212] mb-1 uppercase">Your Email</label>
              <input
                type="email"
                required
                placeholder="e.g. sarah@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-black/20 px-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#121212] mb-1 uppercase">Message / Question</label>
              <textarea
                rows={3}
                required
                placeholder="How can we assist your attendance or boardroom requirements?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-black/20 px-3 py-2 text-xs text-[#121212] focus:border-[#121212] outline-none resize-none font-sans"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3 font-mono">
              <button
                type="button"
                onClick={onClose}
                className="btn-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
