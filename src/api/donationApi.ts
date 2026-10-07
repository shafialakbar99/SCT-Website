import { Donation, DonationTableRow, FeaturedDonor, FeaturedDonorTableRow } from '../types';
import { dbGetDonations, dbInsertDonation, dbGetFeaturedDonors } from './index';
import { addDonationToCampaign } from './campaignApi';

export function mapDonationRowToModel(row: DonationTableRow): Donation {
  return {
    id: row.id,
    campaignId: row.campaign_id,
    campaignTitle: row.campaign_title_en ? { en: row.campaign_title_en, bn: row.campaign_title_bn || row.campaign_title_en } : undefined,
    amount: Number(row.amount),
    currency: row.currency,
    donorName: row.donor_name,
    isAnonymous: Boolean(row.is_anonymous),
    paymentMethod: row.payment_method as any,
    trxId: row.trx_id,
    createdAt: row.created_at,
    taxExemptionRequested: Boolean(row.tax_exemption_requested)
  };
}

export function mapFeaturedDonorRowToModel(row: FeaturedDonorTableRow): FeaturedDonor {
  return {
    id: row.id,
    name: row.name,
    tier: row.tier,
    amountBDT: Number(row.amount_bdt),
    currency: row.currency,
    avatarUrl: row.avatar_url,
    location: { en: row.location_en, bn: row.location_bn },
    badge: { en: row.badge_en, bn: row.badge_bn },
    campaignTitle: { en: row.campaign_title_en, bn: row.campaign_title_bn },
    date: row.date_str,
    isAnonymous: Boolean(row.is_anonymous),
    quote: row.quote_en ? { en: row.quote_en, bn: row.quote_bn || row.quote_en } : undefined,
    isCorporate: Boolean(row.is_corporate),
    companyLogo: row.company_logo,
    trxId: row.trx_id
  };
}

export async function getFeaturedDonors(): Promise<FeaturedDonor[]> {
  const rows = await dbGetFeaturedDonors();
  return rows.map(mapFeaturedDonorRowToModel);
}

export async function getDonations(): Promise<Donation[]> {
  const rows = await dbGetDonations();
  return rows.map(mapDonationRowToModel);
}

export async function submitDonation(donationData: Partial<Donation>): Promise<Donation> {
  const newDonation: Donation = {
    id: `don-${Date.now()}`,
    campaignId: donationData.campaignId || 'general',
    campaignTitle: donationData.campaignTitle || { en: 'General Emergency Relief Fund', bn: 'সাধারণ জরুরি ত্রাণ ফান্ড' },
    amount: donationData.amount || 1000,
    currency: donationData.currency || 'BDT',
    donorName: donationData.isAnonymous ? 'Anonymous Donor' : (donationData.donorName || 'Generous Donor'),
    isAnonymous: !!donationData.isAnonymous,
    paymentMethod: donationData.paymentMethod || 'bKash',
    trxId: donationData.trxId || `BK${Math.floor(Math.random() * 89999999 + 10000000)}`,
    createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
    taxExemptionRequested: !!donationData.taxExemptionRequested
  };

  const row: DonationTableRow = {
    id: newDonation.id,
    campaign_id: newDonation.campaignId,
    campaign_title_en: newDonation.campaignTitle?.en,
    campaign_title_bn: newDonation.campaignTitle?.bn,
    donor_name: newDonation.donorName,
    amount: newDonation.amount,
    currency: newDonation.currency,
    payment_method: newDonation.paymentMethod,
    trx_id: newDonation.trxId,
    is_anonymous: newDonation.isAnonymous,
    tax_exemption_requested: newDonation.taxExemptionRequested,
    created_at: newDonation.createdAt
  };

  await dbInsertDonation(row);

  if (newDonation.campaignId) {
    await addDonationToCampaign(newDonation.campaignId, newDonation.amount);
  }

  return newDonation;
}
