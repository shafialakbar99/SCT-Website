import { NewsItemTableRow } from '../../types';
import { dbGetNews, dbSaveNews } from '../index';

export async function adminGetNews(): Promise<NewsItemTableRow[]> {
  return await dbGetNews();
}

export async function adminCreateNews(data: Omit<NewsItemTableRow, 'id' | 'created_at'>): Promise<NewsItemTableRow> {
  const rows = await dbGetNews();
  const newId = `news-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: NewsItemTableRow = {
    ...data,
    id: newId,
    slug: data.slug || data.title_en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    created_at: now
  };

  await dbSaveNews([newRow, ...rows]);
  return newRow;
}

export async function adminUpdateNews(id: string, updates: Partial<NewsItemTableRow>): Promise<NewsItemTableRow> {
  const rows = await dbGetNews();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('News item not found');

  const updated: NewsItemTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveNews(newRows);
  return updated;
}

export async function adminDeleteNews(id: string): Promise<boolean> {
  const rows = await dbGetNews();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveNews(filtered);
  return true;
}
