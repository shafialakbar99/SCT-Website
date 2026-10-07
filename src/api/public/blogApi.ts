import { BlogPost, BlogPostTableRow } from '../../types';
import { dbGetBlogs } from '../index';

export function mapBlogRowToModel(row: BlogPostTableRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, bn: row.title_bn },
    summary: { en: row.summary_en, bn: row.summary_bn },
    content: { en: row.content_en, bn: row.content_bn },
    category: { en: row.category_en, bn: row.category_bn },
    author: {
      name: row.author_name || (row.author_en ? row.author_en : 'Humanity First'),
      role: { en: row.author_role_en || 'Field Worker', bn: row.author_role_bn || 'মাঠ কর্মী' },
      avatar: row.author_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120'
    },
    publishedAt: row.published_at,
    coverImage: row.cover_image,
    readTimeMinutes: row.read_time_minutes || row.read_time_min || 4,
    tags: row.tags_json || []
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const rows = await dbGetBlogs();
  return rows.map(mapBlogRowToModel);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const rows = await dbGetBlogs();
  const found = rows.find(r => r.slug === slug);
  return found ? mapBlogRowToModel(found) : undefined;
}

export const getBlogs = getBlogPosts;
export const getBlogBySlug = getBlogPostBySlug;
