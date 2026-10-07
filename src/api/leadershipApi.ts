import { LeaderProfile } from '../types';
import { chairmanData, ceoData, boardMembersData, staffMembersData } from '../data/leadership';

export async function getLeadershipMembers(): Promise<LeaderProfile[]> {
  return [chairmanData, ceoData, ...boardMembersData, ...staffMembersData];
}

export async function getChairmanData(): Promise<LeaderProfile> {
  return chairmanData;
}

export async function getCeoData(): Promise<LeaderProfile> {
  return ceoData;
}

export async function getBoardMembers(): Promise<LeaderProfile[]> {
  return boardMembersData;
}

export async function getStaffMembers(): Promise<LeaderProfile[]> {
  return staffMembersData;
}

export async function getLeaderById(id: string): Promise<LeaderProfile | undefined> {
  const all = [chairmanData, ceoData, ...boardMembersData, ...staffMembersData];
  return all.find(m => m.id === id);
}
