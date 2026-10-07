import React from 'react';
import { TransparencySection } from '../components/home/TransparencySection';
import { useLanguage } from '../context/LanguageContext';
import { Download, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { initialAuditReports } from '../data/financials';
import { siteContent } from '../data/siteContent';

export const TransparencyPage: React.FC = () => {
  const { t, isBn } = useLanguage();

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="bg-emerald-100 text-[#0D6E4F] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            🛡️ {isBn ? 'স্বচ্ছতা পোর্টালে স্বাগতম' : 'Financial Transparency Hub'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isBn ? 'অর্থনৈতিক স্বচ্ছতা ও বাৎসরিক অডিট' : 'Audited Reports & Governance'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            {isBn ? 'আপনার বিশ্বস্ততার আমানত রক্ষা করা আমাদের ঈমানী ও নৈতিক দায়িত্ব।' : 'Every Taka donated is tracked, audited by Chartered Accountants, and publicly reported.'}
          </p>
        </div>

        <TransparencySection />

        {/* AUDIT REPORTS DOWNLOAD TABLE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#0D6E4F]" />
            <span>{isBn ? 'বার্ষিক নিরিক্ষিত অডিট রিপোর্টসমূহ (PDF)' : 'Published Annual Audit Statements (PDF)'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initialAuditReports.map((report) => (
              <div key={report.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex justify-between items-start">
                  <span className="font-extrabold text-slate-900 text-sm">{report.year}</span>
                  <span className="bg-emerald-100 text-[#0D6E4F] text-[10px] font-bold px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
                <p className="text-xs text-slate-600">Auditor: {report.auditorName}</p>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">{report.fileSize}</span>
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#0D6E4F] text-white px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 hover:bg-[#0A583F]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
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
