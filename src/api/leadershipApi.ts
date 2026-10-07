import { LeaderProfile, LeadershipMemberTableRow } from '../types';
import { dbGetLeadershipMembers } from './index';
import { chairmanData, ceoData, boardMembersData, staffMembersData } from '../data/leadership';

export function mapLeadershipRowToModel(row: LeadershipMemberTableRow): LeaderProfile {
  return {
    id: row.id,
    memberType: row.member_type as any,
    name: { en: row.name_en, bn: row.name_bn },
    role: { en: row.role_en, bn: row.role_bn },
    designation: { en: row.designation_en || row.role_en, bn: row.designation_bn || row.role_bn },
    imageUrl: row.image_url,
    bio: { en: row.bio_en, bn: row.bio_bn },
    message: row.message_en ? { en: row.message_en, bn: row.message_bn || row.message_en } : undefined,
    quote: row.quote_en ? { en: row.quote_en, bn: row.quote_bn || row.quote_en } : undefined,
    email: row.email,
    phone: row.phone,
    department: row.department,
    joinedYear: row.joined_year,
    displayOrder: row.display_order
  };
}

export async function getLeadershipMembers(): Promise<LeaderProfile[]> {
  const rows = await dbGetLeadershipMembers();
  return rows.map(mapLeadershipRowToModel);
}

export async function getChairmanData(): Promise<LeaderProfile> {
  const all = await getLeadershipMembers();
  const chairman = all.find(m => m.id === 'chairman-1' || m.memberType === 'chairman');
  return chairman || { ...chairmanData, memberType: 'chairman' };
}

export async function getCeoData(): Promise<LeaderProfile> {
  const all = await getLeadershipMembers();
  const ceo = all.find(m => m.id === 'ceo-1' || m.memberType === 'ceo');
  return ceo || { ...ceoData, memberType: 'ceo' };
}

export async function getBoardMembers(): Promise<LeaderProfile[]> {
  const all = await getLeadershipMembers();
  const board = all.filter(m => m.memberType === 'board');
  if (board.length > 0) return board;
  return boardMembersData.map(b => ({ ...b, memberType: 'board' }));
}

export async function getStaffMembers(): Promise<LeaderProfile[]> {
  const all = await getLeadershipMembers();
  const staff = all.filter(m => m.memberType === 'staff');
  if (staff.length > 0) return staff;
  return staffMembersData.map(s => ({ ...s, memberType: 'staff' }));
}

export async function getLeaderById(id: string): Promise<LeaderProfile | undefined> {
  const all = await getLeadershipMembers();
  return all.find(m => m.id === id);
}
