import { NewsItem } from '../../types';
import { initialNews } from '../../data/news';

export async function getNewsItems(): Promise<NewsItem[]> {
  return initialNews;
}

export async function getNewsItemBySlug(slug: string): Promise<NewsItem | undefined> {
  const found = initialNews.find(r => r.slug === slug || r.id === slug);
  return found;
}

export const getNews = getNewsItems;
export const getNewsBySlug = getNewsItemBySlug;
