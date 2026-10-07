import { NewsItem, NewsItemTableRow } from '../../types';
import { dbGetNews } from '../index';

export function mapNewsRowToModel(row: NewsItemTableRow): NewsItem {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, bn: row.title_bn },
    summary: { en: row.summary_en, bn: row.summary_bn },
    content: { en: row.content_en, bn: row.content_bn },
    source: { en: row.source_en || 'Humanity First Press', bn: row.source_bn || 'হিউম্যানিটি ফার্স্ট প্রেস' },
    publishedAt: row.published_at,
    coverImage: row.cover_image,
    pdfUrl: row.pdf_url || row.pdf_attachment_url,
    pdfAttachmentUrl: row.pdf_attachment_url || row.pdf_url
  };
}

export async function getNewsItems(): Promise<NewsItem[]> {
  const rows = await dbGetNews();
  return rows.map(mapNewsRowToModel);
}

export async function getNewsItemBySlug(slug: string): Promise<NewsItem | undefined> {
  const rows = await dbGetNews();
  const found = rows.find(r => r.slug === slug);
  return found ? mapNewsRowToModel(found) : undefined;
}

export const getNews = getNewsItems;
export const getNewsBySlug = getNewsItemBySlug;
