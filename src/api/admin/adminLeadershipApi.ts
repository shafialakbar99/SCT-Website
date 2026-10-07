import { LeadershipMemberTableRow } from '../../types';
import { dbGetLeadershipMembers, dbSaveLeadershipMembers } from '../index';

export async function adminGetLeadershipMembers(): Promise<LeadershipMemberTableRow[]> {
  const rows = await dbGetLeadershipMembers();
  return [...rows].sort((a, b) => (a.order_index ?? a.display_order ?? 0) - (b.order_index ?? b.display_order ?? 0));
}

export async function adminCreateLeadershipMember(data: Omit<LeadershipMemberTableRow, 'id' | 'created_at'>): Promise<LeadershipMemberTableRow> {
  const rows = await dbGetLeadershipMembers();
  const newId = `lead-${Date.now()}`;
  const now = new Date().toISOString();

  const newRow: LeadershipMemberTableRow = {
    ...data,
    id: newId,
    order_index: data.order_index ?? rows.length + 1,
    created_at: now
  };

  await dbSaveLeadershipMembers([...rows, newRow]);
  return newRow;
}

export async function adminUpdateLeadershipMember(id: string, updates: Partial<LeadershipMemberTableRow>): Promise<LeadershipMemberTableRow> {
  const rows = await dbGetLeadershipMembers();
  const index = rows.findIndex(r => r.id === id);
  if (index === -1) throw new Error('Leadership member not found');

  const updated: LeadershipMemberTableRow = {
    ...rows[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  const newRows = [...rows];
  newRows[index] = updated;
  await dbSaveLeadershipMembers(newRows);
  return updated;
}

export async function adminDeleteLeadershipMember(id: string): Promise<boolean> {
  const rows = await dbGetLeadershipMembers();
  const filtered = rows.filter(r => r.id !== id);
  await dbSaveLeadershipMembers(filtered);
  return true;
}

export const adminGetLeadership = adminGetLeadershipMembers;
export const adminCreateLeadership = adminCreateLeadershipMember;
export const adminUpdateLeadership = adminUpdateLeadershipMember;
export const adminDeleteLeadership = adminDeleteLeadershipMember;

