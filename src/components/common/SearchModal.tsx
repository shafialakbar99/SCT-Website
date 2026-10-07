import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, FileText, Image, Video, BookOpen, Newspaper, Heart, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { globalSearch } from '../../api/searchApi';
import { SearchResult } from '../../types';
import { SafeImage } from './SafeImage';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { t, isBn } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search
          const btn = document.getElementById('search-trigger-btn');
          btn?.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      const res = await globalSearch(query);
      setResults(res);
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'campaign': return <Heart className="w-4 h-4 text-[#0D6E4F]" />;
      case 'photo': return <Image className="w-4 h-4 text-blue-600" />;
      case 'video': return <Video className="w-4 h-4 text-red-500" />;
      case 'blog': return <BookOpen className="w-4 h-4 text-amber-600" />;
      case 'news': return <Newspaper className="w-4 h-4 text-purple-600" />;
      case 'event': return <Calendar className="w-4 h-4 text-teal-600" />;
      case 'report': return <FileText className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isBn ? 'ক্যাম্পেইন, ছবি, ভিডিয়ো, প্রতিবেদন বা খবর খুঁজুন...' : 'Search campaigns, photos, videos, blogs, reports...'}
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-base"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 mr-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose} 
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-200 hover:bg-slate-300 rounded-md transition-colors shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {loading && (
            <div className="py-8 text-center text-slate-500 text-sm animate-pulse">
              {isBn ? 'সন্ধান করা হচ্ছে...' : 'Searching archives...'}
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="py-8 text-center text-slate-500 text-sm">
              {isBn ? `"${query}" এর জন্য কোনো ফলাফল পাওয়া যায়নি।` : `No results found for "${query}".`}
            </div>
          )}

          {!query && (
            <div className="py-6 px-2 text-slate-400 text-xs">
              <p className="font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {isBn ? 'জনপ্রিয় অনুসন্ধান' : 'Popular Queries'}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Sylhet Flood Relief', 'Zakat Calculator', 'Solar Wells', 'Orphan Sponsor', 'Annual Audit Report'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 bg-slate-100 hover:bg-[#0D6E4F]/10 hover:text-[#0D6E4F] rounded-full text-slate-600 text-xs transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            {results.map((res) => (
              <div
                key={`${res.type}-${res.id}`}
                onClick={() => handleSelect(res.url)}
                className="group flex items-center p-3 rounded-xl hover:bg-[#0D6E4F]/5 border border-transparent hover:border-[#0D6E4F]/20 cursor-pointer transition-all"
              >
                {res.imageUrl && (
                  <SafeImage
                    src={res.imageUrl}
                    alt=""
                    className="w-12 h-12 object-cover rounded-lg mr-3 shrink-0"
                    fallbackCategory="general"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    {getTypeIcon(res.type)}
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {res.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-[#0D6E4F] truncate transition-colors">
                    {t(res.title)}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0D6E4F] group-hover:translate-x-1 transition-all ml-2 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>{isBn ? 'ফলাফলে ক্লিক করে নেভিগেট করুন' : 'Click result to jump to page'}</span>
          <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded shadow-2xs font-mono text-[10px]">Ctrl+K</kbd> to toggle</span>
        </div>

      </div>
    </div>
  );
};
