import { PhotoAlbumTableRow } from '../../types';
import { dbGetPhotoAlbums, dbSavePhotoAlbums } from '../index';

export async function adminGetPhotoAlbums(): Promise<PhotoAlbumTableRow[]> {
  return await dbGetPhotoAlbums();
}

export async function adminCreatePhotoAlbum(data: Omit<PhotoAlbumTableRow, 'id' | 'created_at'>): Promise<PhotoAlbumTableRow> {
  const rows = await dbGetPhotoAlbums();
  const newId = `album-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: PhotoAlbumTableRow = {
    ...data,
    id: newId,
    created_at: now
  };

  await dbSavePhotoAlbums([newRow, ...rows]);
  return newRow;
}

export async function adminUpdatePhotoAlbum(id: string, updates: Partial<PhotoAlbumTableRow>): Promise<PhotoAlbumTableRow> {
  const rows = await dbGetPhotoAlbums();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Album not found');

  const updated: PhotoAlbumTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSavePhotoAlbums(newRows);
  return updated;
}

export async function adminDeletePhotoAlbum(id: string): Promise<boolean> {
  const rows = await dbGetPhotoAlbums();
  const filtered = rows.filter(r => r.id !== id);
  await dbSavePhotoAlbums(filtered);
  return true;
}
