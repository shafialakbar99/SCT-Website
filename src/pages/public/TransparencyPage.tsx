import React from 'react';
import { TransparencySection } from '../../components/public/home/TransparencySection';
import { useLanguage } from '../../context/LanguageContext';
import { Download, ShieldCheck, FileText, Building2, CheckCircle2 } from 'lucide-react';
import { initialAuditReports } from '../../data/financials';
import { siteContent } from '../../data/siteContent';

export const TransparencyPage: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="bg-[#138086]/10 text-[#138086] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isBn ? 'স্বচ্ছতা পোর্টালে স্বাগতম' : 'Financial Governance & Transparency Hub'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1B365D] tracking-tight">
            {isBn ? 'আর্থিক স্বচ্ছতা ও প্রাতিষ্ঠানিক জবাবদিহিতা' : 'Audited Statements & Financial Governance'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isBn 
              ? 'শাহীন কেয়ার্স ট্রাস্ট (SCT) ১৮৮২ সালের ট্রাস্ট আইনের অধীন নিবন্ধিত। প্রতিটি অনুদান স্বাধীন অডিট ও সর্বোচ্চ স্বচ্ছতার সাথে পরিচালিত।' 
              : 'Shaheen Cares Trust operates under strict financial disclosures certified by independent audits and governance boards.'}
          </p>
        </div>

        {/* FINANCIAL SUMMARY / CHARTS SECTION */}
        <TransparencySection />

        {/* AUDIT REPORTS DOWNLOAD TABLE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <h2 className="text-lg font-extrabold text-[#1B365D] border-b border-slate-100 pb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#138086]" />
            <span>{isBn ? 'প্রকাশিত বাজেট ও কৌশলগত পরিকল্পনা রিপোর্টসমূহ (PDF)' : 'Published Financial & Strategic Reports (PDF)'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initialAuditReports.map((report) => (
              <div key={report.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-[#138086]/30 transition-all">
                <div className="flex justify-between items-start">
                  <span className="font-extrabold text-[#1B365D] text-sm">{report.year}</span>
                  <span className="bg-[#138086]/10 text-[#138086] text-[10px] font-bold px-2 py-0.5 rounded border border-[#138086]/20">
                    Verified
                  </span>
                </div>
                
                <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                  {isBn ? report.title.bn : report.title.en}
                </h3>

                <p className="text-xs text-slate-600 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{report.auditorName}</span>
                </p>

                <p className="text-[11px] text-slate-500 bg-white p-2.5 rounded-lg border border-slate-100 leading-snug">
                  {isBn ? report.summary.bn : report.summary.en}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">{report.fileSize}</span>
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#1B365D] text-white hover:bg-[#104E7A] px-3.5 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-colors text-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};