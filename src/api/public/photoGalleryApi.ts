import { PhotoAlbum, PhotoAlbumTableRow } from '../../types';
import { dbGetPhotoAlbums } from '../index';

export function mapPhotoAlbumRowToModel(row: PhotoAlbumTableRow): PhotoAlbum {
  const rawImages = row.images_json || row.photos_json || [];
  const normalizedImages = rawImages.map((img: any) => ({
    url: img.url || '',
    caption: typeof img.caption === 'object' ? img.caption : { en: img.caption || '', bn: img.caption || '' },
    location: typeof img.location === 'object' ? img.location : { en: row.location_en || '', bn: row.location_bn || '' },
    date: img.date || row.date_str || ''
  }));

  return {
    id: row.id,
    title: { en: row.title_en, bn: row.title_bn },
    category: row.category as any,
    coverImage: row.cover_image,
    date: row.date_str,
    location: { en: row.location_en || '', bn: row.location_bn || '' },
    images: normalizedImages
  };
}

export async function getPhotoAlbums(): Promise<PhotoAlbum[]> {
  const rows = await dbGetPhotoAlbums();
  return rows.map(mapPhotoAlbumRowToModel);
}

export const getPhotoGallery = getPhotoAlbums;
