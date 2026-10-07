import { EventItem, EventTableRow } from '../../types';
import { dbGetEvents, dbSaveEvent } from '../index';

export function mapEventRowToModel(row: EventTableRow): EventItem {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, bn: row.title_bn },
    description: { en: row.description_en, bn: row.description_bn },
    category: { en: row.category_en, bn: row.category_bn },
    imageUrl: row.image_url,
    eventDate: row.event_date,
    time: row.time_str,
    location: { en: row.location_en, bn: row.location_bn },
    registeredCount: row.registered_count || 0
  };
}

export async function getEvents(): Promise<EventItem[]> {
  const rows = await dbGetEvents();
  return rows.map(mapEventRowToModel);
}

export async function getEventBySlug(slug: string): Promise<EventItem | undefined> {
  const rows = await dbGetEvents();
  const found = rows.find(r => r.slug === slug || r.id === slug);
  return found ? mapEventRowToModel(found) : undefined;
}

export async function registerForEvent(slugOrId: string, _info?: any): Promise<boolean> {
  const rows = await dbGetEvents();
  const found = rows.find(r => r.slug === slugOrId || r.id === slugOrId);
  if (found) {
    found.registered_count = (found.registered_count || 0) + 1;
    await dbSaveEvent(found);
    return true;
  }
  return false;
}
