import { Campaign, CampaignTableRow } from '../types';
import { dbGetCampaigns, dbSaveCampaign } from './index';

// Mapper from CampaignTableRow to Campaign UI model
export function mapCampaignRowToModel(row: CampaignTableRow): Campaign {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, bn: row.title_bn },
    summary: { en: row.summary_en, bn: row.summary_bn },
    description: { en: row.description_en, bn: row.description_bn },
    category: row.category,
    imageUrl: row.image_url,
    goalAmount: Number(row.goal_amount),
    raisedAmount: Number(row.raised_amount),
    donorCount: row.donor_count,
    daysLeft: row.days_left,
    isZakatEligible: Boolean(row.is_zakat_eligible),
    isEmergency: Boolean(row.is_emergency),
    location: { en: row.location_en, bn: row.location_bn },
    expenseBreakdown: row.expense_breakdown_json,
    updates: row.updates_json
  };
}

export async function getCampaigns(): Promise<Campaign[]> {
  const rows = await dbGetCampaigns();
  return rows.map(mapCampaignRowToModel);
}

export async function getCampaignBySlug(slug: string): Promise<Campaign | undefined> {
  const campaigns = await getCampaigns();
  return campaigns.find(c => c.slug === slug || c.id === slug);
}

export async function createCampaign(campaignData: Partial<Campaign>): Promise<Campaign> {
  const id = `camp-${Date.now()}`;
  const slug = campaignData.slug || id;

  const row: CampaignTableRow = {
    id,
    slug,
    title_en: campaignData.title?.en || 'New Campaign',
    title_bn: campaignData.title?.bn || 'নতুন ক্যাম্পেইন',
    summary_en: campaignData.summary?.en || '',
    summary_bn: campaignData.summary?.bn || '',
    description_en: campaignData.description?.en || '',
    description_bn: campaignData.description?.bn || '',
    category: campaignData.category || 'emergency',
    image_url: campaignData.imageUrl || 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop',
    goal_amount: campaignData.goalAmount || 500000,
    raised_amount: 0,
    donor_count: 0,
    days_left: campaignData.daysLeft || 30,
    is_zakat_eligible: campaignData.isZakatEligible ?? true,
    is_emergency: campaignData.isEmergency ?? false,
    location_en: campaignData.location?.en || 'Bangladesh',
    location_bn: campaignData.location?.bn || 'বাংলাদেশ',
    expense_breakdown_json: campaignData.expenseBreakdown,
    updates_json: campaignData.updates
  };

  const saved = await dbSaveCampaign(row);
  return mapCampaignRowToModel(saved);
}

export async function addDonationToCampaign(campaignId: string, amount: number): Promise<void> {
  const rows = await dbGetCampaigns();
  const row = rows.find(x => x.id === campaignId || x.slug === campaignId);
  if (row) {
    row.raised_amount = Number(row.raised_amount) + amount;
    row.donor_count = (row.donor_count || 0) + 1;
    await dbSaveCampaign(row);
  }
}
