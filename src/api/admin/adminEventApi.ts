import { EventTableRow } from '../../types';
import { dbGetEvents, dbSaveEvents } from '../index';

export async function adminGetEvents(): Promise<EventTableRow[]> {
  return await dbGetEvents();
}

export async function adminCreateEvent(data: Omit<EventTableRow, 'id' | 'created_at'>): Promise<EventTableRow> {
  const rows = await dbGetEvents();
  const newId = `event-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: EventTableRow = {
    ...data,
    id: newId,
    slug: data.slug || data.title_en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    created_at: now
  };

  await dbSaveEvents([newRow, ...rows]);
  return newRow;
}

export async function adminUpdateEvent(id: string, updates: Partial<EventTableRow>): Promise<EventTableRow> {
  const rows = await dbGetEvents();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Event not found');

  const updated: EventTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveEvents(newRows);
  return updated;
}

export async function adminDeleteEvent(id: string): Promise<boolean> {
  const rows = await dbGetEvents();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveEvents(filtered);
  return true;
}
