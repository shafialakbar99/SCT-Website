import { VolunteerTableRow } from '../../types';
import { dbGetVolunteers, dbSaveVolunteers } from '../index';

export async function adminGetVolunteers(): Promise<VolunteerTableRow[]> {
  return await dbGetVolunteers();
}

export async function adminUpdateVolunteerStatus(id: string, status: 'pending' | 'approved' | 'rejected'): Promise<VolunteerTableRow> {
  const rows = await dbGetVolunteers();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Volunteer applicant not found');

  const updated: VolunteerTableRow = {
    ...rows[index],
    status
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveVolunteers(newRows);
  return updated;
}

export async function adminDeleteVolunteer(id: string): Promise<boolean> {
  const rows = await dbGetVolunteers();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveVolunteers(filtered);
  return true;
}
