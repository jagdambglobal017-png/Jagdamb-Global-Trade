import React, { useState, useEffect } from 'react';
import { TranslationDictionary } from '../../types/translation';
import { Button } from '../buttons/Button';
import { X, Send, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProductEnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductName: string;
  t: TranslationDictionary;
}

export const ProductEnquiryDrawer: React.FC<ProductEnquiryDrawerProps> = ({
  isOpen,
  onClose,
  selectedProductName,
  t,
}) => {
  const [formData, setFormData] = useState({
    product: selectedProductName,
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    quantity: '',
    destination: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, product: selectedProductName }));
    setSubmitted(false);
  }, [selectedProductName, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Product Enquiry: ${formData.product}`);
    const body = encodeURIComponent(
      `Hello Jagdamb Global Trade,\n\nI want to enquire about:\n- Product: ${formData.product}\n- Name: ${formData.fullName}\n- Company: ${formData.companyName}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Quantity: ${formData.quantity}\n- Destination: ${formData.destination}\n- Requirements: ${formData.message}`
    );
    
    // Open Gmail directly in a new tab to draft the email
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jagdambglobaltrade@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Jagdamb Global Trade,\n\nI want to enquire about:\n- Product: ${formData.product}\n- Name: ${formData.fullName}\n- Company: ${formData.companyName}\n- Quantity: ${formData.quantity}\n- Destination: ${formData.destination}\n- Requirements: ${formData.message}`
    );
    window.open(`https://wa.me/918668404068?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-slateDark-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-slateDark-950 shadow-2xl flex flex-col justify-between overflow-y-auto">
          
          {/* DRAWER HEADER */}
          <div className="p-6 bg-slate-800 text-white flex items-center justify-between shadow-md">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-300">
                {t.enquiry.systemTag}
              </span>
              <h3 className="font-heading font-extrabold text-xl">
                {t.enquiry.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-700 text-white transition-colors"
              aria-label={t.enquiry.closeBtn}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* DRAWER BODY */}
          <div className="p-6 space-y-6 flex-1">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-slate-800" />
                </div>
                <h4 className="font-heading font-extrabold text-xl text-slateDark-950">
                  Enquiry Submitted!
                </h4>
                <p className="text-sm text-slateDark-900 font-bold leading-relaxed">
                  {t.enquiry.successMsg}
                </p>
                <div className="pt-4">
                  <Button variant="whatsapp" fullWidth onClick={handleWhatsAppDirect}>
                    {t.enquiry.whatsAppContinueBtn}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* SELECTED PRODUCT BANNER */}
                <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200">
                  <span className="block text-[10px] font-extrabold uppercase text-slate-600">
                    {t.enquiry.productLabel}
                  </span>
                  <span className="font-heading font-extrabold text-sm text-slateDark-950">
                    {formData.product}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    {t.enquiry.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slateDark-950 focus:outline-none focus:ring-2 focus:ring-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    {t.enquiry.companyLabel}
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slateDark-950 focus:outline-none focus:ring-2 focus:ring-slate-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      {t.enquiry.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slateDark-950 focus:outline-none focus:ring-2 focus:ring-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      {t.enquiry.phoneLabel}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slateDark-950 focus:outline-none focus:ring-2 focus:ring-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      {t.enquiry.quantityLabel}
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slateDark-950 focus:outline-none focus:ring-2 focus:ring-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                      {t.enquiry.destinationLabel}
                    </label>
                    <input
                      type="text"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slateDark-950 focus:outline-none focus:ring-2 focus:ring-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-700 mb-1">
                    {t.enquiry.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slateDark-950 focus:outline-none focus:ring-2 focus:ring-slate-800"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <Button type="submit" variant="primary" fullWidth icon={<Send className="w-4 h-4" />}>
                    {t.enquiry.submitBtn}
                  </Button>
                  <Button variant="whatsapp" fullWidth type="button" icon={<MessageSquare className="w-4 h-4 text-white" />} onClick={handleWhatsAppDirect}>
                    {t.enquiry.whatsAppContinueBtn}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* DRAWER FOOTER HELPLINE */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-600 font-bold flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-700" />
            <span>{t.enquiry.helplineText} +91 86684 04068</span>
          </div>

        </div>
      </div>
    </div>
  );
};
