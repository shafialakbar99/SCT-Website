import { LeaderProfile, LeadershipMemberTableRow } from '../../types';
import { dbGetLeadershipMembers } from '../index';

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

export async function getChairman(): Promise<LeaderProfile | null> {
  const rows = await dbGetLeadershipMembers();
  const found = rows.find(r => r.member_type === 'chairman');
  return found ? mapLeadershipRowToModel(found) : null;
}

export async function getCeo(): Promise<LeaderProfile | null> {
  const rows = await dbGetLeadershipMembers();
  const found = rows.find(r => r.member_type === 'ceo');
  return found ? mapLeadershipRowToModel(found) : null;
}

export async function getBoardMembers(): Promise<LeaderProfile[]> {
  const rows = await dbGetLeadershipMembers();
  return rows
    .filter(r => r.member_type === 'board')
    .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
    .map(mapLeadershipRowToModel);
}

export async function getStaffMembers(): Promise<LeaderProfile[]> {
  const rows = await dbGetLeadershipMembers();
  return rows
    .filter(r => r.member_type === 'staff')
    .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
    .map(mapLeadershipRowToModel);
}

export const getChairmanData = getChairman;
export const getCeoData = getCeo;
