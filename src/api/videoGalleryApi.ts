import { VideoItem, VideoItemTableRow } from '../types';
import { dbGetVideoItems } from './index';

export function mapVideoRowToModel(row: VideoItemTableRow): VideoItem {
  return {
    id: row.id,
    title: { en: row.title_en, bn: row.title_bn },
    category: row.category as any,
    thumbnailUrl: row.thumbnail_url,
    youtubeId: row.youtube_id,
    duration: row.duration,
    date: row.date_str,
    summary: { en: row.summary_en || '', bn: row.summary_bn || '' }
  };
}

export async function getVideoGallery(): Promise<VideoItem[]> {
  const rows = await dbGetVideoItems();
  return rows.map(mapVideoRowToModel);
}
