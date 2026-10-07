import { CampaignTableRow } from '../../types';
import { dbGetCampaigns, dbSaveCampaigns } from '../index';

export async function adminGetCampaigns(): Promise<CampaignTableRow[]> {
  return await dbGetCampaigns();
}

export async function adminGetCampaignById(id: string): Promise<CampaignTableRow | undefined> {
  const rows = await dbGetCampaigns();
  return rows.find(r => r.id === id);
}

export async function adminCreateCampaign(data: Omit<CampaignTableRow, 'id' | 'created_at'>): Promise<CampaignTableRow> {
  const rows = await dbGetCampaigns();
  const newId = `camp-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: CampaignTableRow = {
    ...data,
    id: newId,
    slug: data.slug || data.title_en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    created_at: now
  };

  await dbSaveCampaigns([newRow, ...rows]);
  return newRow;
}

export async function adminUpdateCampaign(id: string, updates: Partial<CampaignTableRow>): Promise<CampaignTableRow> {
  const rows = await dbGetCampaigns();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Campaign not found');

  const updated: CampaignTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveCampaigns(newRows);
  return updated;
}

export async function adminDeleteCampaign(id: string): Promise<boolean> {
  const rows = await dbGetCampaigns();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveCampaigns(filtered);
  return true;
}

export async function adminToggleCampaignStatus(id: string, field: 'is_urgent' | 'is_emergency' | 'is_zakat_eligible' | 'is_featured'): Promise<CampaignTableRow> {
  const rows = await dbGetCampaigns();
  const campaign = rows.find(r => r.id === id);
  if (!campaign) throw new Error('Campaign not found');

  return await adminUpdateCampaign(id, {
    [field]: !campaign[field]
  });
}
