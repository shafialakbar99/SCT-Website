import { LeaderProfile } from '../../types';
import { chairmanData, ceoData, boardMembersData, staffMembersData } from '../../data/leadership';

export async function getChairman(): Promise<LeaderProfile | null> {
  return chairmanData;
}

export async function getCeo(): Promise<LeaderProfile | null> {
  return ceoData;
}

export async function getBoardMembers(): Promise<LeaderProfile[]> {
  return boardMembersData;
}

export async function getStaffMembers(): Promise<LeaderProfile[]> {
  return staffMembersData;
}

export const getChairmanData = getChairman;
export const getCeoData = getCeo;
export const getLeadershipMembers = async (): Promise<LeaderProfile[]> => {
  return [chairmanData, ceoData, ...boardMembersData, ...staffMembersData];
};
