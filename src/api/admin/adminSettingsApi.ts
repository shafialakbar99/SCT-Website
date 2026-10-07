import { SiteSettingsTableRow, AboutOrganizationTableRow, MissionVisionTableRow } from '../../types';
import { safeStorage } from '../../utils/safeStorage';
import { 
  dbGetSiteSettings, 
  dbSaveSiteSettings, 
  dbGetAboutOrganization, 
  dbSaveAboutOrganization, 
  dbGetMissionVision, 
  dbSaveMissionVision 
} from '../index';

export async function adminGetSiteSettings(): Promise<SiteSettingsTableRow> {
  return await dbGetSiteSettings();
}

export async function adminUpdateSiteSettings(data: Partial<SiteSettingsTableRow>): Promise<SiteSettingsTableRow> {
  const current = await dbGetSiteSettings();
  const updated: SiteSettingsTableRow = {
    ...current,
    ...data,
    updated_at: new Date().toISOString()
  };
  await dbSaveSiteSettings(updated);
  return updated;
}

export async function adminGetAboutOrganization(): Promise<AboutOrganizationTableRow> {
  return await dbGetAboutOrganization();
}

export async function adminUpdateAboutOrganization(data: Partial<AboutOrganizationTableRow>): Promise<AboutOrganizationTableRow> {
  const current = await dbGetAboutOrganization();
  const updated: AboutOrganizationTableRow = {
    ...current,
    ...data,
    updated_at: new Date().toISOString()
  };
  await dbSaveAboutOrganization(updated);
  return updated;
}

export async function adminGetMissionVision(): Promise<MissionVisionTableRow> {
  return await dbGetMissionVision();
}

export async function adminUpdateMissionVision(data: Partial<MissionVisionTableRow>): Promise<MissionVisionTableRow> {
  const current = await dbGetMissionVision();
  const updated: MissionVisionTableRow = {
    ...current,
    ...data,
    updated_at: new Date().toISOString()
  };
  await dbSaveMissionVision(updated);
  return updated;
}

export async function adminResetDatabaseToDefaults(): Promise<void> {
  const keys = safeStorage.getAllKeys().filter(k => k.startsWith('hf_db_'));
  for (const k of keys) {
    safeStorage.removeItem(k);
  }
}

