import { VideoItemTableRow } from '../../types';
import { dbGetVideoItems, dbSaveVideoItems } from '../index';

export async function adminGetVideoItems(): Promise<VideoItemTableRow[]> {
  return await dbGetVideoItems();
}

export async function adminCreateVideoItem(data: Omit<VideoItemTableRow, 'id' | 'created_at'>): Promise<VideoItemTableRow> {
  const rows = await dbGetVideoItems();
  const newId = `vid-${Date.now()}`;
  const now = new Date().toISOString();

  // If thumbnail_url not provided, auto-generate from YouTube ID
  const thumbnail_url = data.thumbnail_url || (data.youtube_id ? `https://img.youtube.com/vi/${data.youtube_id}/maxresdefault.jpg` : '');

  const newRow: VideoItemTableRow = {
    ...data,
    thumbnail_url,
    id: newId,
    created_at: now
  };

  await dbSaveVideoItems([newRow, ...rows]);
  return newRow;
}

export async function adminUpdateVideoItem(id: string, updates: Partial<VideoItemTableRow>): Promise<VideoItemTableRow> {
  const rows = await dbGetVideoItems();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Video item not found');

  let thumbnail_url = updates.thumbnail_url || rows[index].thumbnail_url;
  if (updates.youtube_id && !updates.thumbnail_url) {
    thumbnail_url = `https://img.youtube.com/vi/${updates.youtube_id}/maxresdefault.jpg`;
  }

  const updated: VideoItemTableRow = {
    ...rows[index],
    ...updates,
    thumbnail_url,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveVideoItems(newRows);
  return updated;
}

export async function adminDeleteVideoItem(id: string): Promise<boolean> {
  const rows = await dbGetVideoItems();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveVideoItems(filtered);
  return true;
}
