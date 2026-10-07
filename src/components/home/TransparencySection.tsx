import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { expenseAllocationData, initialAuditReports } from '../../data/financials';

export const TransparencySection: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: AUDIT GUARANTEE & STATS */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-extrabold uppercase">
              <ShieldCheck className="w-4 h-4 text-[#0D6E4F]" />
              <span>{isBn ? 'স্বচ্ছতা ও জবাবদিহিতা' : '100% Financial Integrity'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {isBn 
                ? 'আপনার অনুদানের ৮৫%+ টাকা সরাসরি অভাবী মানুষের সেবায় ব্যবহূত হয়' 
                : '85%+ Program Expense Guarantee Backed by Independent Audits'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isBn
                ? 'হিউম্যানিটি ফাস্ট বিডি বাংলাদেশে অন্যতম স্বচ্ছ ও বিশ্বস্ত সংস্থা। চার্টার্ড অ্যাকাউন্ট্যান্টস ফার্ম দ্বারা প্রতি বছর অডিট সম্পন্ন করা হয় এবং তা সর্বসাধারণের জন্য উন্মুক্ত থাকে।'
                : 'We operate under stringent financial disclosures certified annually by Chartered Accountants. 88.4% of funds go directly into field relief programs.'}
            </p>

            <div className="space-y-3 pt-2">
              {[
                isBn ? 'এনজিও বিষয়ক ব্যুরো রেজি নং: ২৮৪৭ অনুযায়ী নিবন্ধিত' : 'Government NGO Affairs Bureau Reg #2847 Certified',
                isBn ? 'আয়কর আইনের ৪৪(৪) ধারা মতে ১০০% কর অব্যাহতি' : 'Income Tax Act Sec 44(4) Tax Deductible Receipts Issued',
                isBn ? 'শরীয়াহ বোর্ডের তত্ত্বাবধানে ১০০% যাকাত পৃথককরণ' : 'Shariah Board Audited 100% Zakat Segregation Engine'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0D6E4F] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/transparency"
                className="bg-[#0D6E4F] hover:bg-[#0A583F] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center gap-2"
              >
                <span>{isBn ? 'অডিট রিপোর্ট ডাউনলোড করুন' : 'View Full Financial Audit'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT: EXPENSE BREAKDOWN VISUAL BARS */}
          <div className="lg:col-span-6 bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-slate-200">
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-6 border-b border-slate-200 pb-3">
              {isBn ? '২০২৫-২০২৬ অর্থবছরের ফান্ড বরাদ্দ চিত্র' : 'FY 2025-26 Expense Allocation Breakdown'}
            </h3>

            <div className="space-y-4">
              {expenseAllocationData.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>{isBn ? item.nameBn : item.nameEn}</span>
                    <span className="text-slate-900 font-extrabold">{item.value}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.value}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Latest Audit Report Download Link */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500">
                {isBn ? 'সর্বশেষ অডিট:' : 'Latest Audit:'} {initialAuditReports[0].auditorName}
              </span>
              <a
                href={initialAuditReports[0].pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#0D6E4F] hover:underline flex items-center gap-1 font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF ({initialAuditReports[0].fileSize})</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
