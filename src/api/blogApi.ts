import { BlogPost, BlogPostTableRow } from '../types';
import { dbGetBlogs } from './index';

export function mapBlogRowToModel(row: BlogPostTableRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, bn: row.title_bn },
    summary: { en: row.summary_en, bn: row.summary_bn },
    content: { en: row.content_en, bn: row.content_bn },
    category: { en: row.category_en, bn: row.category_bn },
    author: {
      name: row.author_name,
      role: { en: row.author_role_en || 'Author', bn: row.author_role_bn || 'লেখক' },
      avatar: row.author_avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop'
    },
    coverImage: row.cover_image,
    publishedAt: row.published_at,
    readTimeMinutes: row.read_time_minutes,
    tags: row.tags_json || []
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const rows = await dbGetBlogs();
  return rows.map(mapBlogRowToModel);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(b => b.slug === slug || b.id === slug);
}
