import { NewsItem, NewsItemTableRow } from '../types';
import { dbGetNews } from './index';

export function mapNewsRowToModel(row: NewsItemTableRow): NewsItem {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, bn: row.title_bn },
    summary: { en: row.summary_en, bn: row.summary_bn },
    content: { en: row.content_en, bn: row.content_bn },
    source: { en: row.source_en || 'Official Notice', bn: row.source_bn || 'অফিসিয়াল প্রেস রিলিজ' },
    coverImage: row.cover_image,
    publishedAt: row.published_at,
    pdfUrl: row.pdf_url
  };
}

export async function getNewsItems(): Promise<NewsItem[]> {
  const rows = await dbGetNews();
  return rows.map(mapNewsRowToModel);
}

export async function getNewsItemBySlug(slug: string): Promise<NewsItem | undefined> {
  const news = await getNewsItems();
  return news.find(n => n.slug === slug || n.id === slug);
}
