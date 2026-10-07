import { SearchResult } from '../../types';
import { getCampaigns } from './campaignApi';
import { getBlogPosts } from './blogApi';
import { getNewsItems } from './newsApi';
import { getEvents } from './eventApi';
import { getPhotoAlbums } from './photoGalleryApi';
import { getVideoItems } from './videoGalleryApi';
import { initialAuditReports } from '../../data/financials';

export async function searchAllEntities(query: string): Promise<SearchResult[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  // 1. Search Campaigns
  const campaigns = await getCampaigns();
  for (const c of campaigns) {
    if (c.title.en.toLowerCase().includes(q) || c.title.bn.toLowerCase().includes(q) || c.summary.en.toLowerCase().includes(q) || c.summary.bn.toLowerCase().includes(q)) {
      results.push({
        id: c.id,
        type: 'campaign',
        title: c.title,
        url: `/campaigns/${c.slug}`,
        category: c.category,
        imageUrl: c.imageUrl
      });
    }
  }

  // 2. Search Photos
  const photos = await getPhotoAlbums();
  for (const p of photos) {
    if (p.title.en.toLowerCase().includes(q) || p.title.bn.toLowerCase().includes(q)) {
      results.push({
        id: p.id,
        type: 'photo',
        title: p.title,
        url: '/gallery/photos',
        category: p.category,
        imageUrl: p.coverImage
      });
    }
  }

  // 3. Search Videos
  const videos = await getVideoItems();
  for (const v of videos) {
    if (v.title.en.toLowerCase().includes(q) || v.title.bn.toLowerCase().includes(q)) {
      results.push({
        id: v.id,
        type: 'video',
        title: v.title,
        url: '/gallery/videos',
        category: 'Video',
        imageUrl: v.thumbnailUrl
      });
    }
  }

  // 4. Search Blogs
  const blogs = await getBlogPosts();
  for (const b of blogs) {
    if (b.title.en.toLowerCase().includes(q) || b.title.bn.toLowerCase().includes(q) || b.summary.en.toLowerCase().includes(q)) {
      results.push({
        id: b.id,
        type: 'blog',
        title: b.title,
        url: `/blog/${b.slug}`,
        category: 'Field Story',
        imageUrl: b.coverImage
      });
    }
  }

  // 5. Search News
  const news = await getNewsItems();
  for (const n of news) {
    if (n.title.en.toLowerCase().includes(q) || n.title.bn.toLowerCase().includes(q)) {
      results.push({
        id: n.id,
        type: 'news',
        title: n.title,
        url: `/news/${n.slug}`,
        category: 'Press Release',
        imageUrl: n.coverImage
      });
    }
  }

  // 6. Search Events
  const events = await getEvents();
  for (const e of events) {
    if (e.title.en.toLowerCase().includes(q) || e.title.bn.toLowerCase().includes(q)) {
      results.push({
        id: e.id,
        type: 'event',
        title: e.title,
        url: `/events/${e.slug}`,
        category: 'Event',
        imageUrl: e.imageUrl
      });
    }
  }

  // 7. Search Audit Reports
  for (const a of initialAuditReports) {
    if (a.title.en.toLowerCase().includes(q) || a.title.bn.toLowerCase().includes(q) || a.year.includes(q)) {
      results.push({
        id: a.id,
        type: 'report',
        title: a.title,
        url: '/transparency',
        category: 'Audit Report'
      });
    }
  }

  return results;
}

export const globalSearch = searchAllEntities;
