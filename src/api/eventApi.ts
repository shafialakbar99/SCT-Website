import { EventItem, EventTableRow } from '../types';
import { dbGetEvents, dbSaveEvent } from './index';

export function mapEventRowToModel(row: EventTableRow): EventItem {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, bn: row.title_bn },
    description: { en: row.description_en, bn: row.description_bn },
    eventDate: row.event_date,
    time: row.time_str,
    location: { en: row.location_en, bn: row.location_bn },
    imageUrl: row.image_url,
    category: { en: row.category_en, bn: row.category_bn },
    registeredCount: row.registered_count
  };
}

export async function getEvents(): Promise<EventItem[]> {
  const rows = await dbGetEvents();
  return rows.map(mapEventRowToModel);
}

export async function getEventBySlug(slug: string): Promise<EventItem | undefined> {
  const events = await getEvents();
  return events.find(e => e.slug === slug || e.id === slug);
}

export async function registerForEvent(eventId: string, _volunteerData: { name: string; phone: string }): Promise<void> {
  const rows = await dbGetEvents();
  const row = rows.find(x => x.id === eventId || x.slug === eventId);
  if (row) {
    row.registered_count = (row.registered_count || 0) + 1;
    await dbSaveEvent(row);
  }
}
