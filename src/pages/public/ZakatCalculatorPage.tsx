import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Calculator, ArrowRight, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { calculateZakat, ZakatCalculationResult } from '../../api/public/zakatApi';

export const ZakatCalculatorPage: React.FC = () => {
  const { isBn } = useLanguage();
  const navigate = useNavigate();

  const [cash, setCash] = useState<string>('150000');
  const [gold, setGold] = useState<string>('200000');
  const [silver, setSilver] = useState<string>('15000');
  const [inventory, setInventory] = useState<string>('50000');
  const [investments, setInvestments] = useState<string>('0');
  const [debts, setDebts] = useState<string>('30000');

  const [result, setResult] = useState<ZakatCalculationResult | null>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await calculateZakat({
      cashInHandAndBank: Number(cash) || 0,
      goldValueBDT: Number(gold) || 0,
      silverValueBDT: Number(silver) || 0,
      businessInventoryBDT: Number(inventory) || 0,
      investmentsBDT: Number(investments) || 0,
      debtsAndLiabilitiesBDT: Number(debts) || 0
    });
    setResult(res);
  };

  const handleAllocate = () => {
    if (result && result.zakatDueBDT > 0) {
      navigate('/donate', {
        state: { amount: result.zakatDueBDT, paymentMethod: 'bKash' }
      });
    }
  };

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="bg-[#E6A119]/20 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            🌙 {isBn ? 'শরীয়াহ সম্মত যাকাত ক্যালকুলেটর' : 'Shariah Compliant Zakat Calculator'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'আপনার যাকাত নির্ভুলভাবে হিসাব করুন' : 'Calculate Your Annual Zakat Obligation'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            {isBn 
              ? 'নেসাব পরিমাণ (৮৫,০০০ টাকা) এর সমান বা বেশি সম্পদের ওপর ২.৫% যাকাত প্রযোজ্য।' 
              : 'Assessing 2.5% obligation on net wealth exceeding Nisab threshold (~85,000 BDT).'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CALCULATOR FORM */}
          <form onSubmit={handleCalculate} className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
            
            <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#0D6E4F]" />
              <span>{isBn ? 'সম্পদের তালিকা (টাকায়)' : 'Asset Values in BDT'}</span>
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                1. {isBn ? 'নগদ টাকা ও ব্যাংক ব্যালেন্স' : 'Cash in Hand & Bank Accounts'}
              </label>
              <input
                type="number"
                value={cash}
                onChange={(e) => setCash(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                2. {isBn ? 'স্বর্ণ ও অলঙ্কারের বর্তমান বাজারমূল্য' : 'Gold Value in BDT'}
              </label>
              <input
                type="number"
                value={gold}
                onChange={(e) => setGold(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                3. {isBn ? 'রুপা ও রুপার সামগ্রী' : 'Silver Value in BDT'}
              </label>
              <input
                type="number"
                value={silver}
                onChange={(e) => setSilver(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                4. {isBn ? 'ব্যবসার স্টক ও মালামাল' : 'Business Inventory Stock'}
              </label>
              <input
                type="number"
                value={inventory}
                onChange={(e) => setInventory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                5. {isBn ? 'শেয়ার, সঞ্চয়পত্র ও বিনিয়োগ' : 'Investments & Mutual Funds'}
              </label>
              <input
                type="number"
                value={investments}
                onChange={(e) => setInvestments(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D6E4F]"
              />
            </div>

            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-red-600 mb-1">
                6. {isBn ? '(-) স্বল্পমেয়াদী ঋণ ও দেনা' : '(-) Immediate Debts & Liabilities'}
              </label>
              <input
                type="number"
                value={debts}
                onChange={(e) => setDebts(e.target.value)}
                className="w-full px-3 py-2 bg-red-50/50 border border-red-200 rounded-xl text-xs font-bold text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-3 px-4 rounded-xl font-extrabold text-sm shadow-md transition-all mt-4"
            >
              {isBn ? 'যাকাত হিসাব করুন' : 'Calculate My Zakat'}
            </button>

          </form>

          {/* RESULT CARD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
              <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E6A119]" />
                <span>{isBn ? 'হিসাব সারসংক্ষেপ' : 'Zakat Calculation Result'}</span>
              </h3>

              {!result ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  {isBn ? 'বামপাশের ফর্মে আপনার সম্পদের তথ্য দিন।' : 'Fill out the form on the left to view your Nisab & Zakat amount.'}
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 bg-slate-50 rounded-2xl space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{isBn ? 'মোট সম্পদ:' : 'Total Assets:'}</span>
                      <span className="font-bold text-slate-900">৳{result.totalAssetsBDT.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>{isBn ? 'নিট যাকাতযোগ্য সম্পদ:' : 'Net Wealth:'}</span>
                      <span className="font-bold">৳{result.netZakatatableBDT.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-200">
                      <span className="text-slate-500">{isBn ? 'নেসাব সীমা:' : 'Nisab Threshold:'}</span>
                      <span className="font-bold text-slate-800">৳{result.nisabThresholdBDT.toLocaleString()}</span>
                    </div>
                  </div>

                  {result.isEligibleForZakat ? (
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                      <span className="text-xs font-bold text-[#0D6E4F] uppercase">
                        {isBn ? 'আপনার ওপর যাকাত ফরজ হয়েছে' : 'Zakat is Obligatory'}
                      </span>
                      <div className="text-3xl font-black text-[#0D6E4F]">
                        ৳{result.zakatDueBDT.toLocaleString()}
                      </div>
                      <p className="text-[11px] text-slate-600">
                        {isBn ? 'নিট সম্পদের ২.৫% হিসেবে আপনার মোট যাকাত।' : '2.5% of your net zakatatable wealth.'}
                      </p>

                      <button
                        onClick={handleAllocate}
                        className="w-full bg-[#0D6E4F] hover:bg-[#0A583F] text-white py-3 px-4 rounded-xl text-xs font-extrabold shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>{isBn ? 'আমার যাকাত ১০০% যাকাত ফন্ডে দান করুন' : 'Allocate My Zakat to Zakat Fund'}</span>
                        <ArrowRight className="w-4 h-4 text-[#E6A119]" />
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-center space-y-1">
                      <AlertCircle className="w-6 h-6 text-amber-600 mx-auto" />
                      <h4 className="text-xs font-bold text-slate-900">{isBn ? 'যাকাত ফরজ হয়নি' : 'Not Eligible for Zakat'}</h4>
                      <p className="text-[11px] text-slate-600">
                        {isBn ? 'আপনার নিট সম্পদ নেসাব সীমার নিচে।' : 'Your net wealth is below the Nisab threshold.'}
                      </p>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
