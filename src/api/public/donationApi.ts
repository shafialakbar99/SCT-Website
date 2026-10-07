import { Donation, FeaturedDonor, DonationTableRow, FeaturedDonorTableRow } from '../../types';
import { dbGetDonations, dbSaveDonations, dbGetFeaturedDonors } from '../index';

export function mapDonationRowToModel(row: DonationTableRow): Donation {
  return {
    id: row.id,
    campaignId: row.campaign_id,
    campaignTitle: { en: row.campaign_title_en, bn: row.campaign_title_bn },
    amount: Number(row.amount),
    currency: row.currency,
    donorName: row.donor_name,
    isAnonymous: Boolean(row.is_anonymous),
    paymentMethod: row.payment_method,
    trxId: row.trx_id,
    createdAt: row.created_at || '',
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

export async function getDonations(): Promise<Donation[]> {
  const rows = await dbGetDonations();
  return rows.map(mapDonationRowToModel);
}

export async function submitDonation(donation: Omit<Donation, 'id' | 'createdAt'>): Promise<Donation> {
  const rows = await dbGetDonations();
  const newId = `don-${Date.now()}`;
  const now = new Date().toISOString();

  const newDonation: Donation = {
    ...donation,
    id: newId,
    createdAt: now
  };

  const newRow: DonationTableRow = {
    id: newId,
    campaign_id: donation.campaignId,
    campaign_title_en: donation.campaignTitle?.en || 'General Emergency Fund',
    campaign_title_bn: donation.campaignTitle?.bn || 'সাধারণ জরুরি তহবিল',
    amount: donation.amount,
    currency: donation.currency,
    donor_name: donation.donorName,
    is_anonymous: donation.isAnonymous,
    payment_method: donation.paymentMethod,
    trx_id: donation.trxId,
    tax_exemption_requested: donation.taxExemptionRequested || false,
    created_at: now
  };

  await dbSaveDonations([newRow, ...rows]);
  return newDonation;
}

export async function getFeaturedDonors(): Promise<FeaturedDonor[]> {
  const rows = await dbGetFeaturedDonors();
  return rows.map(mapFeaturedDonorRowToModel);
}
