import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BlogPost } from '../../types';
import { getBlogPostBySlug } from '../../api/public/blogApi';
import { SafeImage } from '../../components/common/SafeImage';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, isBn } = useLanguage();
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      getBlogPostBySlug(slug).then(setBlog);
    }
  }, [slug]);

  if (!blog) {
    return <div className="py-20 text-center">Blog post not found</div>;
  }

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0D6E4F]">
          <ArrowLeft className="w-4 h-4" />
          <span>{isBn ? 'সকল ব্লগে ফিরে যান' : 'Back to Blogs'}</span>
        </Link>

        <span className="bg-[#0D6E4F]/10 text-[#0D6E4F] text-xs font-bold px-3 py-1 rounded-full uppercase">
          {t(blog.category)}
        </span>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          {t(blog.title)}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold border-y border-slate-200 py-3">
          <span className="flex items-center gap-1"><User className="w-4 h-4" /> {blog.author.name}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.publishedAt}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {blog.readTimeMinutes} min read</span>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg h-80 sm:h-96">
          <SafeImage
            src={blog.coverImage}
            alt={t(blog.title)}
            className="w-full h-full object-cover"
            fallbackCategory="education"
          />
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 leading-relaxed text-sm text-slate-700 space-y-4">
          <p className="text-base font-semibold text-slate-900 border-l-4 border-[#0D6E4F] pl-4 italic">
            {t(blog.excerpt)}
          </p>
          <div className="space-y-4 pt-2">
            <p>{t(blog.content)}</p>
          </div>
        </div>

        <div className="bg-[#0D6E4F] rounded-3xl p-8 text-white text-center space-y-4 shadow-xl">
          <h3 className="text-xl font-bold">{isBn ? 'এই মানুষটির মতো আরও হাজারো জীবনের পাশে দাঁড়ান' : 'Help Transform More Lives Like This'}</h3>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 bg-[#E6A119] text-slate-900 px-6 py-3 rounded-xl font-black text-xs shadow-md"
          >
            <Heart className="w-4 h-4 fill-slate-900" />
            <span>{isBn ? 'এখনই অনুদান দিন' : 'Donate Now'}</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
