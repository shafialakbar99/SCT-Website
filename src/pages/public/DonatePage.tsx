import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Heart, ShieldCheck, CheckCircle2, Copy, Check, Download, ArrowRight, Wallet, CreditCard, QrCode } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { siteContent } from '../../data/siteContent';
import { initialCampaigns } from '../../data/campaigns';
import confetti from 'canvas-confetti';
import { submitDonation } from '../../api/public/donationApi';

export const DonatePage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const location = useLocation();

  // Step 1: Cause Selection
  const [selectedCause, setSelectedCause] = useState<string>('sylhet-feni-flood-relief');

  // Step 2: Amount & Currency
  const [currency, setCurrency] = useState<'BDT' | 'USD' | 'EUR'>('BDT');
  const [presetAmount, setPresetAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');

  // Step 3: Payment Method
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad' | 'Rocket' | 'Bank Transfer' | 'Card / PayPal'>('bKash');
  const [trxIdInput, setTrxIdInput] = useState<string>('');

  // Step 4: Donor Details
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [taxExempt, setTaxExempt] = useState(false);

  const [loading, setLoading] = useState(false);
  const [completedDonation, setCompletedDonation] = useState<any>(null);
  const [copiedAccount, setCopiedAccount] = useState(false);

  useEffect(() => {
    // Check if cause or state was passed
    const params = new URLSearchParams(location.search);
    const campParam = params.get('campaign');
    if (campParam) setSelectedCause(campParam);
    if (location.state?.amount) setPresetAmount(location.state.amount);
    if (location.state?.paymentMethod) setPaymentMethod(location.state.paymentMethod);
  }, [location]);

  const getFinalAmount = () => {
    if (customAmount && !isNaN(Number(customAmount)) && Number(customAmount) > 0) {
      return Number(customAmount);
    }
    return presetAmount;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = getFinalAmount();
    if (finalAmount <= 0) return;

    setLoading(true);
    try {
      const activeCamp = initialCampaigns.find(c => c.id === selectedCause || c.slug === selectedCause);
      
      const res = await submitDonation({
        campaignId: activeCamp?.id || 'general',
        campaignTitle: activeCamp ? activeCamp.title : { en: 'General Emergency Relief Fund', bn: 'সাধারণ জরুরি ত্রাণ ফান্ড' },
        amount: finalAmount,
        currency,
        donorName: donorName || 'Generous Supporter',
        isAnonymous,
        paymentMethod: paymentMethod as any,
        trxId: trxIdInput || `${paymentMethod.toUpperCase().slice(0, 2)}${Math.floor(Math.random() * 8999999 + 1000000)}`,
        taxExemptionRequested: taxExempt
      });

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      setCompletedDonation(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  if (completedDonation) {
    return (
      <div className="py-16 bg-[#FDFBF7] min-h-[80vh] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 max-w-lg w-full border border-slate-200 shadow-2xl text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 bg-emerald-100 text-[#0D6E4F] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold text-[#0D6E4F] uppercase tracking-wider">
              {isBn ? 'অনুদান সফল হয়েছে' : 'Donation Completed'}
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">
              {isBn ? 'জাজাকাল্লাহু খাইরান / অসংখ্য ধন্যবাদ!' : 'Thank You for Your Generosity!'}
            </h2>
            <p className="text-xs text-slate-600 mt-2">
              {isBn 
                ? 'আপনার অনুদান বাংলাদেশে ক্ষতিগ্রস্ত পরিবারগুলোর কাছে সাহায্য হিসেবে পৌঁছাবে।' 
                : 'Your support provides life-saving relief supplies and hope to families in Bangladesh.'}
            </p>
          </div>

          {/* Receipt Summary Card */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-medium">{isBn ? 'রসিদ ট্রানজেকশন আইডি:' : 'Trx ID:'}</span>
              <span className="font-mono font-bold text-slate-900">{completedDonation.trxId}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-medium">{isBn ? 'পরিমাণ:' : 'Amount:'}</span>
              <span className="font-extrabold text-[#0D6E4F] text-sm">{completedDonation.currency} {completedDonation.amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-medium">{isBn ? 'পেমেন্ট মেথড:' : 'Payment Method:'}</span>
              <span className="font-bold text-slate-800">{completedDonation.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">{isBn ? 'ট্যাক্স রসিদ অনুরোধ:' : 'Tax Receipt Status:'}</span>
              <span className="font-bold text-slate-800">{completedDonation.taxExemptionRequested ? (isBn ? 'অনুরোধকৃত' : 'Requested') : (isBn ? 'প্রযোজ্য নয়' : 'N/A')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.print()}
              className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{isBn ? 'অফিসিয়াল রসিদ প্রিন্ট' : 'Print Official Receipt'}</span>
            </button>
            <button
              onClick={() => setCompletedDonation(null)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-xl text-xs font-bold"
            >
              {isBn ? 'আরেকটি দান করুন' : 'Make Another Donation'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-8">
          <span className="bg-[#E6A119]/20 text-slate-900 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            {isBn ? 'নিরাপদ অনলাইন অনুদান পোর্টাল' : 'Secure Online Donation Portal'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'মানবতার সেবায় আপনার অবদান রাখুন' : 'Empower Vulnerable Communities'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            {t(siteContent.taxInfo)}
          </p>
          <div className="mt-3 inline-block bg-emerald-50 border border-emerald-200 text-[#0D6E4F] text-[11px] sm:text-xs font-semibold px-4 py-1.5 rounded-full">
            {isBn 
              ? '★ যে কেউ সম্পৃক্ত না হয়েও সরাসরি অনুদান দিতে পারেন — যেকোনো পরিমাণ অবদান গ্রহণযোগ্য' 
              : '★ Standalone Appeal: Anyone can donate directly without having to register or get involved'}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
          
          {/* STEP 1: CAUSE SELECTION */}
          <div>
            <h3 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0D6E4F] text-white text-xs flex items-center justify-center">1</span>
              {isBn ? 'অনুদান প্রজেক্ট বা ফান্ড নির্বাচন করুন' : 'Select Cause or Campaign'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'sylhet-feni-flood-relief', titleEn: 'Sylhet & Feni Flood Relief', titleBn: 'সিলেট ও ফেনী বন্যা ত্রাণ', isUrgent: true },
                { id: 'zakat-general-fund-2026', titleEn: '100% Verified Zakat Empower Fund', titleBn: '১০০% যাকাত স্বাবলম্বীকরণ ফান্ড', isZakat: true },
                { id: 'clean-water-wells-coastal-bd', titleEn: 'Solar Deep Tube Wells (Satkhira)', titleBn: 'উপকূলীয় সুপেয় পানি নলকূপ' },
                { id: 'street-children-education-dhaka', titleEn: 'Street Children Food & Schooling', titleBn: 'পথশিশু শিক্ষা ও খাদ্য' },
                { id: 'general-humanitarian-fund', titleEn: 'General Emergency Relief Fund', titleBn: 'সাধারণ জরুরি ত্রাণ ফান্ড' }
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCause(c.id)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    selectedCause === c.id
                      ? 'border-[#0D6E4F] bg-[#0D6E4F]/5 text-slate-900 ring-2 ring-[#0D6E4F]'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 text-slate-700'
                  }`}
                >
                  <div>
                    <span className="font-extrabold text-xs block">
                      {isBn ? c.titleBn : c.titleEn}
                    </span>
                    {c.isUrgent && <span className="text-[10px] font-bold text-red-600 uppercase">🚨 Urgent Relief</span>}
                    {c.isZakat && <span className="text-[10px] font-bold text-[#E6A119] uppercase">🌙 Zakat Eligible</span>}
                  </div>
                  {selectedCause === c.id && <CheckCircle2 className="w-5 h-5 text-[#0D6E4F] shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: AMOUNT & CURRENCY */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0D6E4F] text-white text-xs flex items-center justify-center">2</span>
                {isBn ? 'দানের পরিমাণ নির্বাচন করুন' : 'Select Currency & Amount'}
              </h3>

              {/* Currency Toggle */}
              <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 text-xs font-bold">
                {(['BDT', 'USD', 'EUR'] as const).map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      currency === curr ? 'bg-[#0D6E4F] text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Presets */}
            <div className="grid grid-cols-4 gap-3 mb-3">
              {(currency === 'BDT' ? [500, 1000, 2500, 5000] : [20, 50, 100, 250]).map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => { setPresetAmount(amt); setCustomAmount(''); }}
                  className={`py-3 text-xs sm:text-sm font-black rounded-xl border text-center transition-all ${
                    presetAmount === amt && !customAmount
                      ? 'border-[#0D6E4F] bg-[#0D6E4F] text-white shadow-md'
                      : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {currency === 'BDT' ? '৳' : currency === 'USD' ? '$' : '€'}{amt.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-sm font-bold text-slate-400">
                {currency === 'BDT' ? '৳' : currency === 'USD' ? '$' : '€'}
              </span>
              <input
                type="number"
                placeholder={isBn ? 'অন্যান্য পরিমাণ লিখুন...' : 'Enter Custom Amount...'}
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setPresetAmount(0); }}
                className="w-full pl-8 pr-4 py-2.5 text-sm font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D6E4F] text-slate-800"
              />
            </div>
          </div>

          {/* STEP 3: PAYMENT GATEWAY SIMULATION */}
          <div>
            <h3 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0D6E4F] text-white text-xs flex items-center justify-center">3</span>
              {isBn ? 'পেমেন্ট মেথড বেছে নিন' : 'Choose Payment Option'}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
              {[
                { id: 'bKash', label: 'bKash', color: 'border-pink-300 text-pink-700 bg-pink-50' },
                { id: 'Nagad', label: 'Nagad', color: 'border-orange-300 text-orange-700 bg-orange-50' },
                { id: 'Rocket', label: 'Rocket', color: 'border-purple-300 text-purple-700 bg-purple-50' },
                { id: 'Bank Transfer', label: 'Bank Direct', color: 'border-emerald-300 text-emerald-700 bg-emerald-50' },
                { id: 'Card / PayPal', label: 'Card / PayPal', color: 'border-blue-300 text-blue-700 bg-blue-50' }
              ].map((pm) => (
                <button
                  key={pm.id}
                  type="button"
                  onClick={() => setPaymentMethod(pm.id as any)}
                  className={`py-3 px-2 text-xs font-extrabold rounded-2xl border text-center transition-all ${
                    paymentMethod === pm.id
                      ? 'border-[#0D6E4F] bg-[#0D6E4F]/10 text-[#0D6E4F] ring-2 ring-[#0D6E4F]'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {pm.label}
                </button>
              ))}
            </div>

            {/* Instruction Panel for Bank / bKash */}
            {paymentMethod === 'Bank Transfer' ? (
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>BRAC Bank Account: 1501204892018001</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('1501204892018001')}
                    className="flex items-center gap-1 text-[#0D6E4F] hover:underline"
                  >
                    {copiedAccount ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAccount ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-slate-600">Routing: 060260783 • Swift: CIBLBDDH • Account Name: Shaheen Cares Trust</p>
              </div>
            ) : (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
                <p className="font-semibold text-slate-700">
                  {isBn 
                    ? `সরাসরি ${paymentMethod} মার্চেন্ট নম্বর: ০১৭১১০০১১২২ এ পেমেন্ট করুন অথবা অনলাইন কুইক গেটওয়ে ব্যবহার করুন।` 
                    : `Send directly to ${paymentMethod} Merchant: 01711001122 or use simulated instant payment.`}
                </p>
                <input
                  type="text"
                  placeholder={isBn ? 'পেমেন্ট এর ট্রানজেকশন আইডি (Trx ID) লিখুন (ঐচ্ছিক)' : 'Enter Transaction ID / Ref (Optional)'}
                  value={trxIdInput}
                  onChange={(e) => setTrxIdInput(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono"
                />
              </div>
            )}
          </div>

          {/* STEP 4: DONOR INFO & TAX RECEIPT */}
          <div>
            <h3 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0D6E4F] text-white text-xs flex items-center justify-center">4</span>
              {isBn ? 'দাতা তথ্য ও ট্যাক্স রসিদ' : 'Donor Info & Tax Exemption'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <input
                type="text"
                placeholder={isBn ? 'আপনার নাম' : 'Full Name'}
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                disabled={isAnonymous}
                className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
              <input
                type="email"
                placeholder={isBn ? 'ইমেইল অ্যাড্রেস' : 'Email Address'}
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
              <input
                type="tel"
                placeholder={isBn ? 'মোবাইল নম্বর' : 'Phone Number'}
                value={donorPhone}
                onChange={(e) => setDonorPhone(e.target.value)}
                className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded border-slate-300 text-[#0D6E4F] focus:ring-[#0D6E4F]"
                />
                <span>{isBn ? 'নাম প্রকাশে অনিচ্ছুক (Anonymous Donor)' : 'Keep My Donation Anonymous'}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={taxExempt}
                  onChange={(e) => setTaxExempt(e.target.checked)}
                  className="rounded border-slate-300 text-[#0D6E4F] focus:ring-[#0D6E4F]"
                />
                <span>{isBn ? 'ট্যাক্স ছাড়ে অফিসিয়াল রসিদ প্রয়োজন (Section 44(4))' : 'Request Tax Exemption Receipt'}</span>
              </label>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-4 px-6 rounded-2xl font-black text-base shadow-xl shadow-[#0D6E4F]/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>{isBn ? 'অনুদান প্রসেস করা হচ্ছে...' : 'Processing Donation...'}</span>
            ) : (
              <>
                <Heart className="w-5 h-5 text-[#E6A119] fill-[#E6A119]" />
                <span>{isBn ? `দান সম্পন্ন করুন (${currency} ${getFinalAmount().toLocaleString()})` : `Complete Donation (${currency} ${getFinalAmount().toLocaleString()})`}</span>
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
};
