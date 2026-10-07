import { VideoItem, VideoItemTableRow } from '../../types';
import { dbGetVideoItems } from '../index';

export function mapVideoItemRowToModel(row: VideoItemTableRow): VideoItem {
  return {
    id: row.id,
    title: { en: row.title_en, bn: row.title_bn },
    youtubeId: row.youtube_id,
    thumbnailUrl: row.thumbnail_url,
    duration: row.duration,
    category: row.category as any,
    date: row.date_str || '',
    summary: { en: row.summary_en || '', bn: row.summary_bn || '' }
  };
}

export async function getVideoItems(): Promise<VideoItem[]> {
  const rows = await dbGetVideoItems();
  return rows.map(mapVideoItemRowToModel);
}

export const getVideoGallery = getVideoItems;
