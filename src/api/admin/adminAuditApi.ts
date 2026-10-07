import { AuditReportTableRow } from '../../types';
import { dbGetAuditReports, dbSaveAuditReports } from '../index';

export async function adminGetAuditReports(): Promise<AuditReportTableRow[]> {
  return await dbGetAuditReports();
}

export async function adminCreateAuditReport(data: Omit<AuditReportTableRow, 'id' | 'created_at'>): Promise<AuditReportTableRow> {
  const rows = await dbGetAuditReports();
  const newId = `audit-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: AuditReportTableRow = {
    ...data,
    id: newId,
    created_at: now
  };

  await dbSaveAuditReports([newRow, ...rows]);
  return newRow;
}

export async function adminUpdateAuditReport(id: string, updates: Partial<AuditReportTableRow>): Promise<AuditReportTableRow> {
  const rows = await dbGetAuditReports();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Audit report not found');

  const updated: AuditReportTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveAuditReports(newRows);
  return updated;
}

export async function adminDeleteAuditReport(id: string): Promise<boolean> {
  const rows = await dbGetAuditReports();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveAuditReports(filtered);
  return true;
}
