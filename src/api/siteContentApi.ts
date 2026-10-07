import { SiteContent, AboutOrganization, MissionVisionData, SiteSettingsTableRow, AboutOrganizationTableRow, MissionVisionTableRow } from '../types';
import { dbGetSiteSettings, dbSaveSiteSettings, dbGetAboutOrganization, dbGetMissionVision } from './index';
import { initialSiteContent, initialAboutData, initialMissionVisionData } from '../data/siteContent';

export function mapSiteSettingsRowToModel(row: SiteSettingsTableRow): SiteContent {
  return {
    id: row.id,
    orgName: { en: row.org_name_en, bn: row.org_name_bn },
    orgTagline: { en: row.org_tagline_en, bn: row.org_tagline_bn },
    regInfo: { en: row.reg_info_en, bn: row.reg_info_bn },
    taxInfo: { en: row.tax_info_en, bn: row.tax_info_bn },
    emergencyTicker: { en: row.emergency_ticker_en, bn: row.emergency_ticker_bn },
    hotline: { en: row.hotline_en, bn: row.hotline_bn },
    email: { en: row.email_en, bn: row.email_bn },
    whatsapp: { en: row.whatsapp_en, bn: row.whatsapp_bn },
    address: { en: row.address_en, bn: row.address_bn },
    nav: row.nav_json || initialSiteContent.nav,
    quickDonateWidget: row.quick_donate_json || initialSiteContent.quickDonateWidget,
    counters: row.counters_json || initialSiteContent.counters,
    bankDetails: row.bank_details_json || initialSiteContent.bankDetails
  };
}

export function mapAboutRowToModel(row: AboutOrganizationTableRow): AboutOrganization {
  return {
    id: row.id,
    heroTitle: { en: row.hero_title_en, bn: row.hero_title_bn },
    heroSubtitle: { en: row.hero_subtitle_en, bn: row.hero_subtitle_bn },
    overview: { en: row.overview_en, bn: row.overview_bn },
    zakatPolicy: { en: row.zakat_policy_en, bn: row.zakat_policy_bn },
    coreValues: row.core_values_json || initialAboutData.coreValues,
    historyMilestones: row.history_milestones_json || initialAboutData.historyMilestones,
    stats: row.stats_json || initialAboutData.stats
  };
}

export function mapMissionVisionRowToModel(row: MissionVisionTableRow): MissionVisionData {
  return {
    id: row.id,
    missionTitle: { en: row.mission_title_en, bn: row.mission_title_bn },
    missionDesc: { en: row.mission_desc_en, bn: row.mission_desc_bn },
    missionPoints: row.mission_points_json || initialMissionVisionData.missionPoints,
    visionTitle: { en: row.vision_title_en, bn: row.vision_title_bn },
    visionDesc: { en: row.vision_desc_en, bn: row.vision_desc_bn },
    visionPoints: row.vision_points_json || initialMissionVisionData.visionPoints,
    roadmapYear: row.roadmap_year || initialMissionVisionData.roadmapYear
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  const row = await dbGetSiteSettings();
  return mapSiteSettingsRowToModel(row);
}

export async function updateSiteContent(content: Partial<SiteContent>): Promise<SiteContent> {
  const current = await getSiteContent();
  const updated: SiteContent = {
    ...current,
    ...content
  };

  const row: SiteSettingsTableRow = {
    id: 'site_content_default',
    org_name_en: updated.orgName.en,
    org_name_bn: updated.orgName.bn,
    org_tagline_en: updated.orgTagline.en,
    org_tagline_bn: updated.orgTagline.bn,
    reg_info_en: updated.regInfo.en,
    reg_info_bn: updated.regInfo.bn,
    tax_info_en: updated.taxInfo.en,
    tax_info_bn: updated.taxInfo.bn,
    emergency_ticker_en: updated.emergencyTicker.en,
    emergency_ticker_bn: updated.emergencyTicker.bn,
    hotline_en: updated.hotline.en,
    hotline_bn: updated.hotline.bn,
    email_en: updated.email.en,
    email_bn: updated.email.bn,
    whatsapp_en: updated.whatsapp.en,
    whatsapp_bn: updated.whatsapp.bn,
    address_en: updated.address.en,
    address_bn: updated.address.bn,
    nav_json: updated.nav,
    quick_donate_json: updated.quickDonateWidget,
    counters_json: updated.counters,
    bank_details_json: updated.bankDetails,
    updated_at: new Date().toISOString()
  };

  await dbSaveSiteSettings(row);
  return updated;
}

export async function getAboutOrganization(): Promise<AboutOrganization> {
  const row = await dbGetAboutOrganization();
  return mapAboutRowToModel(row);
}

export async function getMissionVisionData(): Promise<MissionVisionData> {
  const row = await dbGetMissionVision();
  return mapMissionVisionRowToModel(row);
}
