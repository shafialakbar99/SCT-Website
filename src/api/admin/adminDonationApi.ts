import { DonationTableRow } from '../../types';
import { dbGetDonations, dbSaveDonations } from '../index';

export interface DonationFilterOptions {
  searchQuery?: string;
  paymentMethod?: string;
  campaignId?: string;
  taxExemptionOnly?: boolean;
  dateFrom?: string;
  dateTo?: string;
}

export async function adminGetDonations(filters?: DonationFilterOptions): Promise<DonationTableRow[]> {
  let rows = await dbGetDonations();

  if (filters) {
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      rows = rows.filter(r => 
        r.donor_name.toLowerCase().includes(q) ||
        r.trx_id.toLowerCase().includes(q) ||
        r.campaign_title_en.toLowerCase().includes(q) ||
        r.campaign_title_bn.toLowerCase().includes(q)
      );
    }
    if (filters.paymentMethod && filters.paymentMethod !== 'all') {
      rows = rows.filter(r => r.payment_method.toLowerCase() === filters.paymentMethod?.toLowerCase());
    }
    if (filters.campaignId && filters.campaignId !== 'all') {
      rows = rows.filter(r => r.campaign_id === filters.campaignId);
    }
    if (filters.taxExemptionOnly) {
      rows = rows.filter(r => r.tax_exemption_requested);
    }
  }

  return rows;
}

export async function adminCreateDonation(data: Omit<DonationTableRow, 'id' | 'created_at'>): Promise<DonationTableRow> {
  const rows = await dbGetDonations();
  const newId = `don-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: DonationTableRow = {
    ...data,
    id: newId,
    created_at: now
  };

  await dbSaveDonations([newRow, ...rows]);
  return newRow;
}

export async function adminDeleteDonation(id: string): Promise<boolean> {
  const rows = await dbGetDonations();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveDonations(filtered);
  return true;
}

export function exportDonationsToCSV(donations: DonationTableRow[]): string {
  const headers = ['ID', 'Donor Name', 'Campaign', 'Amount (BDT)', 'Currency', 'Payment Method', 'TRX ID', 'Tax Exemption', 'Date'];
  const rows = donations.map(d => [
    `"${d.id}"`,
    `"${d.donor_name.replace(/"/g, '""')}"`,
    `"${d.campaign_title_en.replace(/"/g, '""')}"`,
    d.amount,
    d.currency,
    `"${d.payment_method}"`,
    `"${d.trx_id}"`,
    d.tax_exemption_requested ? 'Yes' : 'No',
    `"${d.created_at || ''}"`
  ]);

  return [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
}
