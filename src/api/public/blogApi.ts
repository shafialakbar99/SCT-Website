import { BlogPost } from '../../types';
import { initialBlogs } from '../../data/blogs';

export async function getBlogPosts(): Promise<BlogPost[]> {
  return initialBlogs;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const found = initialBlogs.find(r => r.slug === slug || r.id === slug);
  return found;
}

export const getBlogs = getBlogPosts;
export const getBlogBySlug = getBlogPostBySlug;
