import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, BookOpen, Calendar, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BlogPost, NewsItem } from '../../types';
import { getBlogPosts } from '../../api/blogApi';
import { getNewsItems } from '../../api/newsApi';
import { SafeImage } from '../common/SafeImage';

export const BlogNewsHighlights: React.FC = () => {
  const { t, isBn } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    getBlogPosts().then((res) => setBlogs(res.slice(0, 2)));
    getNewsItems().then((res) => setNews(res.slice(0, 2)));
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: FIELD BLOGS */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0D6E4F]" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {isBn ? 'ফিল্ড স্টোরি ও ব্লগ' : 'Field Stories & Insights'}
                </h3>
              </div>
              <Link to="/blog" className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1">
                <span>{isBn ? 'সবগুলো পড়ুন' : 'Read All'}</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-6">
              {blogs.map((b) => (
                <div key={b.id} className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex gap-4">
                  <SafeImage
                    src={b.coverImage}
                    alt={typeof b.title === 'object' ? b.title.en : ''}
                    className="w-28 h-28 object-cover rounded-xl shrink-0"
                    fallbackCategory="education"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#0D6E4F] bg-emerald-50 px-2 py-0.5 rounded">
                        {t(b.category)}
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-sm hover:text-[#0D6E4F] transition-colors line-clamp-2 mt-1">
                        <Link to={`/blog/${b.slug}`}>{t(b.title)}</Link>
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {b.author.name}</span>
                      <span>{b.readTimeMinutes} min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: PRESS RELEASES & NEWS */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {isBn ? 'সংবাদ ও অফিসিয়াল নোটিশ' : 'Official Press & News'}
                </h3>
              </div>
              <Link to="/news" className="text-xs font-bold text-[#0D6E4F] hover:underline flex items-center gap-1">
                <span>{isBn ? 'সবগুলো দেখুন' : 'View All'}</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-6">
              {news.map((n) => (
                <div key={n.id} className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex gap-4">
                  <SafeImage
                    src={n.coverImage}
                    alt={typeof n.title === 'object' ? n.title.en : ''}
                    className="w-28 h-28 object-cover rounded-xl shrink-0"
                    fallbackCategory="general"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                        {t(n.source)}
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-sm hover:text-[#0D6E4F] transition-colors line-clamp-2 mt-1">
                        <Link to={`/news/${n.slug}`}>{t(n.title)}</Link>
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <Calendar className="w-3 h-3" /> {n.publishedAt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
