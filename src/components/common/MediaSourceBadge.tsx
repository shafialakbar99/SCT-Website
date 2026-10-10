import React from 'react';
import { Tv, Newspaper, Globe, Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MediaSourceBadgeProps {
  sourceType?: 'tv' | 'newspaper' | 'portal' | 'official' | string;
  sourceName?: string;
  fallbackSource?: { en: string; bn: string } | string;
  size?: 'sm' | 'md' | 'lg';
  showExternalIndicator?: boolean;
}

export const MediaSourceBadge: React.FC<MediaSourceBadgeProps> = ({
  sourceType,
  sourceName = '',
  fallbackSource,
  size = 'md',
  showExternalIndicator = false,
}) => {
  const { isBn, t } = useLanguage();

  const name = sourceName || (typeof fallbackSource === 'object' ? t(fallbackSource) : fallbackSource || '');
  const lowerName = name.toLowerCase();

  // Determine channel styling based on source identity
  let bgClasses = 'bg-slate-100 text-slate-800 border-slate-200';
  let dotColor = 'bg-slate-500';
  let IconComponent = Newspaper;
  let channelLabel = isBn ? 'সংবাদ মাধ্যম' : 'Media Outlet';

  if (lowerName.includes('ekushey') || lowerName.includes('একুশে')) {
    bgClasses = 'bg-gradient-to-r from-[#9B111E] to-[#7B0D18] text-white border-[#E6A119]/40 shadow-xs';
    dotColor = 'bg-[#E6A119]';
    IconComponent = Tv;
    channelLabel = isBn ? 'একুশে টিভি • টিভি সম্প্রচার' : 'Ekushey TV • Broadcast';
  } else if (lowerName.includes('rtv') || lowerName.includes('আরটিভি')) {
    bgClasses = 'bg-gradient-to-r from-[#D71920] to-[#0B5EA8] text-white border-white/20 shadow-xs';
    dotColor = 'bg-white';
    IconComponent = Tv;
    channelLabel = isBn ? 'আরটিভি অনলাইন • টিভি মিডিয়া' : 'RTV Online • TV Portal';
  } else if (lowerName.includes('bangla affairs') || lowerName.includes('বাংলা অ্যাফেয়ার্স')) {
    bgClasses = 'bg-gradient-to-r from-[#0D6E4F] to-[#0A4D37] text-white border-emerald-300/30';
    dotColor = 'bg-emerald-300';
    IconComponent = Globe;
    channelLabel = isBn ? 'বাংলা অ্যাফেয়ার্স • সংবাদ পোর্টাল' : 'Bangla Affairs • News Portal';
  } else if (lowerName.includes('morning bell') || lowerName.includes('মর্নিং বেল')) {
    bgClasses = 'bg-gradient-to-r from-[#1B365D] to-[#104E7A] text-white border-amber-300/30';
    dotColor = 'bg-[#E6A119]';
    IconComponent = Newspaper;
    channelLabel = isBn ? 'ডেইলি মর্নিং বেল • ইংরেজি দৈনিক' : 'The Daily Morning Bell • Daily';
  } else if (lowerName.includes('dhaka mail') || lowerName.includes('ঢাকা মেইল')) {
    bgClasses = 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white border-cyan-200/30';
    dotColor = 'bg-cyan-200';
    IconComponent = Globe;
    channelLabel = isBn ? 'ঢাকা মেইল • জাতীয় অনলাইন' : 'Dhaka Mail • National Portal';
  } else if (lowerName.includes('khaborer kantha') || lowerName.includes('খবরের কণ্ঠ') || lowerName.includes('khabor')) {
    bgClasses = 'bg-gradient-to-r from-[#8B1E4A] to-[#671235] text-white border-rose-300/30';
    dotColor = 'bg-rose-300';
    IconComponent = Newspaper;
    channelLabel = isBn ? 'খবরের কণ্ঠ • সংবাদ পোর্টাল' : 'Khaborer Kantha • News';
  } else if (sourceType === 'official' || lowerName.includes('sct') || lowerName.includes('secretariat') || lowerName.includes('ট্রাস্ট')) {
    bgClasses = 'bg-gradient-to-r from-[#1B365D] to-[#132847] text-white border-[#E6A119]/50 shadow-xs';
    dotColor = 'bg-[#E6A119]';
    IconComponent = ShieldCheck;
    channelLabel = isBn ? 'শাহীন কেয়ার্স ট্রাস্ট • অফিসিয়াল' : 'Shaheen Cares Trust • Official';
  } else if (sourceType === 'tv') {
    bgClasses = 'bg-rose-700 text-white border-rose-600';
    dotColor = 'bg-amber-300';
    IconComponent = Tv;
    channelLabel = isBn ? 'টিভি সম্প্রচার' : 'TV Broadcast';
  }

  const sizeClasses = {
    sm: 'text-[9.5px] px-2 py-0.5 gap-1',
    md: 'text-[11px] px-2.5 py-1 gap-1.5',
    lg: 'text-xs px-3 py-1.5 gap-2'
  }[size];

  const iconSizes = {
    sm: 'w-2.5 h-2.5',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  }[size];

  return (
    <span
      className={`inline-flex items-center font-bold rounded-full border transition-transform shrink-0 ${bgClasses} ${sizeClasses}`}
      title={name}
    >
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 animate-pulse ${dotColor}`} />
      <IconComponent className={`${iconSizes} shrink-0 opacity-90`} />
      <span className="truncate tracking-wide">{channelLabel}</span>
      {showExternalIndicator && (
        <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-80 shrink-0" />
      )}
    </span>
  );
};
