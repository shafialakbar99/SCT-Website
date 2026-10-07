import { FAQTableRow } from '../../types';
import { dbGetFaqs, dbSaveFaqs } from '../index';

export async function adminGetFaqs(): Promise<FAQTableRow[]> {
  return await dbGetFaqs();
}

export async function adminCreateFaq(data: Omit<FAQTableRow, 'id' | 'created_at'>): Promise<FAQTableRow> {
  const rows = await dbGetFaqs();
  const newId = `faq-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: FAQTableRow = {
    ...data,
    id: newId,
    order_index: data.order_index ?? rows.length + 1,
    created_at: now
  };

  await dbSaveFaqs([...rows, newRow]);
  return newRow;
}

export async function adminUpdateFaq(id: string, updates: Partial<FAQTableRow>): Promise<FAQTableRow> {
  const rows = await dbGetFaqs();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('FAQ not found');

  const updated: FAQTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveFaqs(newRows);
  return updated;
}

export async function adminDeleteFaq(id: string): Promise<boolean> {
  const rows = await dbGetFaqs();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveFaqs(filtered);
  return true;
}
