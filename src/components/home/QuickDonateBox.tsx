import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { siteContent } from '../../data/siteContent';
import confetti from 'canvas-confetti';
import { submitDonation } from '../../api/donationApi';

interface QuickDonateBoxProps {
  className?: string;
  defaultCampaignId?: string;
}

export const QuickDonateBox: React.FC<QuickDonateBoxProps> = ({ className = '', defaultCampaignId = 'camp-1' }) => {
  const { t, isBn } = useLanguage();
  const navigate = useNavigate();

  const [frequency, setFrequency] = useState<'oneTime' | 'monthly'>('oneTime');
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad' | 'Card / PayPal'>('bKash');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const amountOptions = siteContent.quickDonateWidget.amounts;

  const getFinalAmount = () => {
    if (customAmount && !isNaN(Number(customAmount)) && Number(customAmount) > 0) {
      return Number(customAmount);
    }
    return selectedAmount;
  };

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmt = getFinalAmount();
    if (finalAmt <= 0) return;

    setLoading(true);
    try {
      await submitDonation({
        campaignId: defaultCampaignId,
        amount: finalAmt,
        currency: 'BDT',
        paymentMethod: paymentMethod as any,
        isAnonymous: true
      });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });

      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        navigate('/donate', { state: { amount: finalAmt, paymentMethod, frequency } });
      }, 1500);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-3xl p-6 shadow-2xl border border-slate-200/80 text-slate-800 relative ${className}`}>
      
      {/* Decorative Ribbon */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <h3 className="font-extrabold text-slate-900 text-base sm:text-lg flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#0D6E4F] fill-[#0D6E4F]" />
            {t(siteContent.quickDonateWidget.title)}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {t(siteContent.quickDonateWidget.subtitle)}
          </p>
        </div>
        <span className="bg-[#E6A119]/20 text-slate-900 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
          Zakat Eligible
        </span>
      </div>

      <form onSubmit={handleDonate} className="space-y-4">
        
        {/* Frequency Selector */}
        <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setFrequency('oneTime')}
            className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
              frequency === 'oneTime' ? 'bg-[#0D6E4F] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t(siteContent.quickDonateWidget.frequency.oneTime)}
          </button>
          <button
            type="button"
            onClick={() => setFrequency('monthly')}
            className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
              frequency === 'monthly' ? 'bg-[#0D6E4F] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t(siteContent.quickDonateWidget.frequency.monthly)}
          </button>
        </div>

        {/* Amount Presets */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">
            {isBn ? 'দানের পরিমাণ নির্ধারণ করুন (টাকা)' : 'Select Amount (BDT)'}
          </label>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {amountOptions.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                className={`py-2 text-xs font-extrabold rounded-xl border transition-all ${
                  selectedAmount === amt && !customAmount
                    ? 'border-[#0D6E4F] bg-[#0D6E4F]/10 text-[#0D6E4F] ring-1 ring-[#0D6E4F]'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                ৳{amt.toLocaleString()}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs font-bold text-slate-400">৳</span>
            <input
              type="number"
              placeholder={t(siteContent.quickDonateWidget.customAmount)}
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0); }}
              className="w-full pl-7 pr-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D6E4F] focus:bg-white text-slate-800"
            />
          </div>
        </div>

        {/* Payment Gateways */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            {t(siteContent.quickDonateWidget.selectPayment)}
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'bKash', name: 'bKash', color: 'border-pink-300 bg-pink-50/50 text-pink-700' },
              { id: 'Nagad', name: 'Nagad', color: 'border-orange-300 bg-orange-50/50 text-orange-700' },
              { id: 'Card / PayPal', name: 'Card / Visa', color: 'border-blue-300 bg-blue-50/50 text-blue-700' }
            ].map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setPaymentMethod(method.id as any)}
                className={`py-2 px-2 text-[11px] font-bold rounded-xl border flex items-center justify-center gap-1 transition-all ${
                  paymentMethod === method.id
                    ? 'border-[#0D6E4F] bg-[#0D6E4F]/10 text-[#0D6E4F] ring-2 ring-[#0D6E4F]/30'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {paymentMethod === method.id && <Check className="w-3 h-3 text-[#0D6E4F]" />}
                <span>{method.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Submit CTA Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-3 px-4 rounded-xl font-extrabold text-sm shadow-lg shadow-[#0D6E4F]/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <span className="animate-pulse">{isBn ? 'প্রসেস করা হচ্ছে...' : 'Processing...'}</span>
          ) : successMsg ? (
            <span className="flex items-center gap-1.5 text-[#E6A119]">
              <Sparkles className="w-4 h-4 animate-bounce" />
              {isBn ? 'ধন্যবাদ! আপনার অনুদান সংরক্ষিত হয়েছে' : 'Thank You! Donation Received'}
            </span>
          ) : (
            <>
              <Heart className="w-4 h-4 fill-[#E6A119] text-[#E6A119]" />
              <span>{t(siteContent.quickDonateWidget.donateBtn)} (৳{getFinalAmount().toLocaleString()})</span>
            </>
          )}
        </button>

        {/* Security badge */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0D6E4F]" />
          <span>{t(siteContent.quickDonateWidget.secureBadge)}</span>
        </div>

      </form>
    </div>
  );
};
