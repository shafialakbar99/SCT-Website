import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { expenseAllocationData, initialAuditReports } from '../../../data/financials';

export const TransparencySection: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: AUDIT GUARANTEE & STATS */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#138086]/10 text-[#138086] text-xs font-extrabold uppercase">
              <ShieldCheck className="w-4 h-4 text-[#138086]" />
              <span>{isBn ? 'স্বচ্ছতা ও জবাবদিহিতা' : '100% Financial Integrity'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B365D] tracking-tight leading-tight">
              {isBn 
                ? 'স্বচ্ছতা ও কৌশলগত পরিকল্পনার মাধ্যমে স্থায়ী প্রভাব সৃষ্টি' 
                : 'Strategic Governance & Transparent Financial Operations'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isBn
                ? 'শাহীন কেয়ার্স ট্রাস্ট (SCT) বাংলাদেশের ট্রাস্ট আইন ১৮৮২-এর অধীনে সুসংগঠিতভাবে পরিচালিত। আমরা বিশেষ চাহিদাসম্পন্ন শিশু, যুব কর্মসংস্থান ও প্রবীণদের দীর্ঘমেয়াদী কল্যাণে শতভাগ স্বচ্ছতার সাথে প্রতিটি কার্যক্রম বাস্তবায়ন করি।'
                : 'Shaheen Cares Trust operates under transparent financial disclosures certified by independent governance boards and trust laws. Our resources directly support long-term intergenerational care ecosystems.'}
            </p>

            <div className="space-y-3 pt-2">
              {[
                isBn ? 'বাংলাদেশের ট্রাস্ট আইন ১৮৮২ (Trust Act of 1882)-এর অধীনে নিবন্ধিত' : 'Established under Bangladesh Trust Act of 1882',
                isBn ? '২০২৬-২০৩১ পাঁচ বছর মেয়াদী কৌশলগত বাজেট কাঠামো' : 'Five-Year Strategic Budget Framework (2026–2031)',
                isBn ? 'প্রথম প্রজেক্ট (SPUS): ৩ বছর মেয়াদী ১৩.২৭ মিলিয়ন টাকা স্বচ্ছ বাজেট' : 'SPUS Project: BDT 13.27M (~$108K) Transparent 3-Year Allocation'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#138086] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/transparency"
                className="bg-[#1B365D] hover:bg-[#104E7A] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center gap-2 transition-colors"
              >
                <span>{isBn ? 'সম্পূর্ণ কৌশল ও অডিট পরিকল্পনা দেখুন' : 'View Full Financial Strategy'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT: EXPENSE BREAKDOWN VISUAL BARS */}
          <div className="lg:col-span-6 bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-slate-200">
            <h3 className="font-extrabold text-[#1B365D] text-base sm:text-lg mb-6 border-b border-slate-200 pb-3">
              {isBn ? 'প্রকল্পভিত্তিক বাজেট বরাদ্দ চিত্র' : 'Strategic Program Expense Allocation'}
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
              <span className="text-slate-500 line-clamp-1">
                {isBn ? 'পরিচালনা পর্ষদ:' : 'Governance:'} {initialAuditReports[0].auditorName}
              </span>
              <a
                href={initialAuditReports[0].pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#138086] hover:underline flex items-center gap-1 font-bold shrink-0"
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