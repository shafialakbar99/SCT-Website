import { PhotoAlbum } from '../../types';
import { initialPhotoAlbums } from '../../data/photoGallery';

export async function getPhotoAlbums(): Promise<PhotoAlbum[]> {
  return initialPhotoAlbums;
}

export const getPhotoGallery = getPhotoAlbums;
