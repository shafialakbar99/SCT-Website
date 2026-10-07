import { VideoItem } from '../../types';
import { initialVideoGallery } from '../../data/videoGallery';

export async function getVideoItems(): Promise<VideoItem[]> {
  return initialVideoGallery;
}

export const getVideoGallery = getVideoItems;
