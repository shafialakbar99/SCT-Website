import { BlogPostTableRow } from '../../types';
import { dbGetBlogs, dbSaveBlogs } from '../index';

export async function adminGetBlogs(): Promise<BlogPostTableRow[]> {
  return await dbGetBlogs();
}

export async function adminCreateBlog(data: Omit<BlogPostTableRow, 'id' | 'created_at'>): Promise<BlogPostTableRow> {
  const rows = await dbGetBlogs();
  const newId = `blog-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: BlogPostTableRow = {
    ...data,
    id: newId,
    slug: data.slug || data.title_en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    created_at: now
  };

  await dbSaveBlogs([newRow, ...rows]);
  return newRow;
}

export async function adminUpdateBlog(id: string, updates: Partial<BlogPostTableRow>): Promise<BlogPostTableRow> {
  const rows = await dbGetBlogs();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Blog post not found');

  const updated: BlogPostTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveBlogs(newRows);
  return updated;
}

export async function adminDeleteBlog(id: string): Promise<boolean> {
  const rows = await dbGetBlogs();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveBlogs(filtered);
  return true;
}
