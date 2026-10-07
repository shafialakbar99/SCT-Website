import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BlogPost } from '../types';
import { getBlogPosts } from '../api/blogApi';
import { SafeImage } from '../components/common/SafeImage';

export const BlogPage: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogPosts().then(setBlogs);
  }, []);

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            📖 {isBn ? 'ফিল্ড রিপোর্ট ও ব্লগ' : 'Field Stories & Blog'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            {isBn ? 'বাস্তব জীবনের ঘুরে দাঁড়ানোর গল্প' : 'Stories of Resilience & Hope'}
          </h1>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <div key={b.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col group">
              <div className="relative h-52 overflow-hidden">
                <SafeImage
                  src={b.coverImage}
                  alt={typeof b.title === 'object' ? b.title.en : ''}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackCategory="education"
                />
                <span className="absolute top-3 left-3 bg-[#0D6E4F] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {t(b.category)}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base hover:text-[#0D6E4F] transition-colors line-clamp-2">
                    <Link to={`/blog/${b.slug}`}>{t(b.title)}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">{t(b.excerpt)}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {b.author.name}</span>
                  <Link to={`/blog/${b.slug}`} className="text-[#0D6E4F] hover:underline flex items-center gap-1 font-bold">
                    <span>{isBn ? 'পড়ুন' : 'Read'}</span> <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
