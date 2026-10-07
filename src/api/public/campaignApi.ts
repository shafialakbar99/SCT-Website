import { Campaign, CampaignTableRow } from '../../types';
import { dbGetCampaigns, dbSaveCampaigns } from '../index';

export function mapCampaignRowToModel(row: CampaignTableRow): Campaign {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, bn: row.title_bn },
    summary: { en: row.summary_en, bn: row.summary_bn },
    description: { en: row.description_en, bn: row.description_bn },
    category: row.category as any,
    imageUrl: row.image_url,
    goalAmount: Number(row.goal_amount),
    raisedAmount: Number(row.raised_amount),
    donorCount: Number(row.donor_count),
    daysLeft: Number(row.days_left),
    location: { en: row.location_en, bn: row.location_bn },
    isUrgent: Boolean(row.is_urgent),
    isFeatured: Boolean(row.is_featured),
    isZakatEligible: Boolean(row.is_zakat_eligible),
    isEmergency: Boolean(row.is_emergency),
    directBeneficiaries: row.direct_beneficiaries,
    targetAreaCount: row.target_area_count,
    updates: row.updates_json || [],
    expenseBreakdown: row.expense_breakdown_json || []
  };
}

export async function getCampaigns(): Promise<Campaign[]> {
  const rows = await dbGetCampaigns();
  return rows.map(mapCampaignRowToModel);
}

export async function getCampaignBySlug(slug: string): Promise<Campaign | undefined> {
  const rows = await dbGetCampaigns();
  const found = rows.find(r => r.slug === slug);
  return found ? mapCampaignRowToModel(found) : undefined;
}

export async function createCampaign(campaign: Omit<Campaign, 'id'>): Promise<Campaign> {
  const rows = await dbGetCampaigns();
  const newId = `camp-${Date.now()}`;
  const newCampaign: Campaign = {
    ...campaign,
    id: newId
  };

  const newRow: CampaignTableRow = {
    id: newId,
    slug: campaign.slug,
    title_en: campaign.title.en,
    title_bn: campaign.title.bn,
    summary_en: campaign.summary.en,
    summary_bn: campaign.summary.bn,
    description_en: campaign.description.en,
    description_bn: campaign.description.bn,
    category: campaign.category,
    image_url: campaign.imageUrl,
    goal_amount: campaign.goalAmount,
    raised_amount: campaign.raisedAmount,
    donor_count: campaign.donorCount,
    days_left: campaign.daysLeft,
    location_en: campaign.location?.en || 'Bangladesh',
    location_bn: campaign.location?.bn || 'বাংলাদেশ',
    is_urgent: campaign.isUrgent || false,
    is_featured: campaign.isFeatured || false,
    is_zakat_eligible: campaign.isZakatEligible || false,
    is_emergency: campaign.isEmergency || false,
    direct_beneficiaries: campaign.directBeneficiaries,
    target_area_count: campaign.targetAreaCount,
    updates_json: campaign.updates || [],
    expense_breakdown_json: campaign.expenseBreakdown || [],
    created_at: new Date().toISOString()
  };

  await dbSaveCampaigns([newRow, ...rows]);
  return newCampaign;
}
