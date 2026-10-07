import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { BlogPost } from '../../../types';
import { getBlogPosts } from '../../../api/public/blogApi';
import { SafeImage } from '../../common/SafeImage';

export const FieldStoriesBlogSection: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogPosts().then((res) => setBlogs(res.slice(0, 3)));
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0D6E4F] text-xs font-black uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isBn ? 'সরেজমিন অভিজ্ঞতা ও বাস্তব গল্প' : 'Voices from the Field'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B365D] tracking-tight">
              {isBn ? 'মাঠপর্যায়ের গল্প ও ব্লগ' : 'Field Stories & Impact Articles'}
            </h2>
          </div>

          <Link
            to="/blog"
            className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{isBn ? 'সবগুলো আর্টিকেল পড়ুন' : 'Read All Articles'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative rounded-2xl overflow-hidden mb-4 h-48">
                  <SafeImage
                    src={b.coverImage}
                    alt={typeof b.title === 'object' ? b.title.en : ''}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    fallbackCategory="education"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D6E4F] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {t(b.category)}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-2">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-[#138086]" />
                    <span>{b.author.name}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{b.readTimeMinutes} min read</span>
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#0D6E4F] transition-colors line-clamp-2">
                  <Link to={`/blog/${b.slug}`}>{t(b.title)}</Link>
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-normal">
                  {t(b.summary)}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0D6E4F]">
                <Link to={`/blog/${b.slug}`} className="hover:underline flex items-center gap-1">
                  <span>{isBn ? 'সম্পূর্ণ পড়ুন' : 'Read Full Story'}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
