import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { TranslationDictionary } from '../../types/translation';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'privacy' | 'terms' | 'shipping' | 'disclaimer';
  t: TranslationDictionary;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  title,
  type,
  t,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-slateDark-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/90 p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto space-y-6 text-slateDark-950">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-slate-800" />
            <h3 className="font-heading font-extrabold text-xl text-slateDark-950">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-slateDark-950"
            aria-label={t.legal.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm leading-relaxed space-y-4 text-slateDark-900 font-medium">
          {type === 'privacy' && (
            <>
              <p>
                <strong>Jagdamb Global Trade</strong> (Owner: Siddhi Vijay Atkare) respects your privacy. Information submitted through our product enquiry forms or WhatsApp communication is strictly utilized for evaluating trade inquiries, quotations, and commercial communication.
              </p>
              <p>
                We do not sell, rent, or share buyer contact details with third-party advertising networks.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                All trade communications, product specifications, bulk pricing, and delivery terms (FOB/CIF) provided by <strong>Jagdamb Global Trade</strong> are subject to final mutual contract execution.
              </p>
              <p>
                Product availability and packaging options may vary depending on harvest seasonality and export destination requirements.
              </p>
            </>
          )}

          {type === 'shipping' && (
            <>
              <p>
                <strong>Jagdamb Global Trade</strong> facilitates international export and import logistical coordination from major sea ports and inland container depots in India.
              </p>
              <p>
                Specific packaging solutions (Kraft bags, HDPE sacks, Fiber drums, Jumbo bags, Reefer container packing) are arranged per buyer specifications.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <p>
                Products offered in our botanical and natural superfoods catalogue (such as Moringa, Ashwagandha, Turmeric) are supplied as food ingredients and agricultural commodities for trade.
              </p>
              <p>
                Jagdamb Global Trade does not make medical, disease-treatment, or guaranteed therapeutic health claims regarding botanical ingredients. Buyers should verify local regulatory compliance for their respective destination markets.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-slate-800 text-white font-extrabold text-xs tracking-wider uppercase hover:bg-slate-700 transition-colors shadow-md"
          >
            {t.legal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
