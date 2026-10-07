import { SponsorshipTableRow } from '../../types';
import { dbGetSponsorships, dbSaveSponsorships } from '../index';

export async function adminGetSponsorships(): Promise<SponsorshipTableRow[]> {
  return await dbGetSponsorships();
}

export async function adminCreateSponsorship(data: Omit<SponsorshipTableRow, 'id' | 'created_at'>): Promise<SponsorshipTableRow> {
  const rows = await dbGetSponsorships();
  const newId = `sp-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: SponsorshipTableRow = {
    ...data,
    id: newId,
    created_at: now
  };

  await dbSaveSponsorships([newRow, ...rows]);
  return newRow;
}

export async function adminUpdateSponsorship(id: string, updates: Partial<SponsorshipTableRow>): Promise<SponsorshipTableRow> {
  const rows = await dbGetSponsorships();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Sponsorship profile not found');

  const updated: SponsorshipTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveSponsorships(newRows);
  return updated;
}

export async function adminToggleSponsorshipStatus(id: string): Promise<SponsorshipTableRow> {
  const rows = await dbGetSponsorships();
  const item = rows.find(r => r.id === id);
  if (!item) throw new Error('Sponsorship profile not found');

  return await adminUpdateSponsorship(id, {
    is_sponsored: !item.is_sponsored
  });
}

export async function adminDeleteSponsorship(id: string): Promise<boolean> {
  const rows = await dbGetSponsorships();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveSponsorships(filtered);
  return true;
}
