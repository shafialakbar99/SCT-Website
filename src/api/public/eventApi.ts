import { EventItem } from '../../types';
import { initialEvents } from '../../data/events';

export async function getEvents(): Promise<EventItem[]> {
  return initialEvents;
}

export async function getEventBySlug(slug: string): Promise<EventItem | undefined> {
  const found = initialEvents.find(r => r.slug === slug || r.id === slug);
  return found;
}

export async function registerForEvent(slugOrId: string, _info?: any): Promise<boolean> {
  const found = initialEvents.find(r => r.slug === slugOrId || r.id === slugOrId);
  if (found) {
    found.registeredCount = (found.registeredCount || 0) + 1;
    return true;
  }
  return false;
}
