import { initialCampaigns } from '../data/campaigns';
import { initialDonations, featuredDonorsData } from '../data/donations';
import { initialPhotoAlbums } from '../data/photoGallery';
import { initialVideoGallery } from '../data/videoGallery';
import { initialBlogs } from '../data/blogs';
import { initialNews } from '../data/news';
import { initialSponsorships } from '../data/sponsorships';
import { initialAuditReports } from '../data/financials';
import { initialEvents } from '../data/events';
import { initialFAQs } from '../data/faqs';
import { initialSiteContent, initialAboutData, initialMissionVisionData } from '../data/siteContent';
import { chairmanData, ceoData, boardMembersData, staffMembersData } from '../data/leadership';
import {
  CampaignTableRow,
  DonationTableRow,
  FeaturedDonorTableRow,
  PhotoAlbumTableRow,
  VideoItemTableRow,
  BlogPostTableRow,
  NewsItemTableRow,
  SponsorshipTableRow,
  AuditReportTableRow,
  EventTableRow,
  FAQTableRow,
  VolunteerTableRow,
  LeadershipMemberTableRow,
  SiteSettingsTableRow,
  AboutOrganizationTableRow,
  MissionVisionTableRow
} from '../types';

import { safeStorage } from '../utils/safeStorage';

export const VITE_USE_MOCK = true;
export const API_BASE_URL = '/api';

const delay = (ms = 150) => new Promise(res => setTimeout(res, ms));

// Helper for separate typed localStorage tables
function getTableData<T>(tableName: string, defaultData: T[]): T[] {
  try {
    const raw = safeStorage.getItem(`hf_db_${tableName}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error(`Error reading ${tableName} from storage:`, err);
  }
  try {
    safeStorage.setItem(`hf_db_${tableName}`, JSON.stringify(defaultData));
  } catch (err) {
    console.error(`Error writing default ${tableName}:`, err);
  }
  return defaultData;
}

function saveTableData<T>(tableName: string, data: T[]): void {
  try {
    safeStorage.setItem(`hf_db_${tableName}`, JSON.stringify(data));
  } catch (err) {
    console.error(`Error saving ${tableName} to storage:`, err);
  }
}

// -------------------------------------------------------------
// 1. CAMPAIGNS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultCampaignRows: CampaignTableRow[] = initialCampaigns.map(c => ({
  id: c.id,
  slug: c.slug,
  title_en: c.title.en,
  title_bn: c.title.bn,
  summary_en: c.summary.en,
  summary_bn: c.summary.bn,
  description_en: c.description.en,
  description_bn: c.description.bn,
  category: c.category,
  image_url: c.imageUrl,
  goal_amount: c.goalAmount,
  raised_amount: c.raisedAmount,
  donor_count: c.donorCount,
  days_left: c.daysLeft,
  is_zakat_eligible: c.isZakatEligible,
  is_emergency: c.isEmergency,
  location_en: c.location.en,
  location_bn: c.location.bn,
  expense_breakdown_json: c.expenseBreakdown,
  updates_json: c.updates,
  created_at: '2026-06-01T00:00:00Z',
  updated_at: '2026-08-01T00:00:00Z'
}));

export async function dbGetCampaigns(): Promise<CampaignTableRow[]> {
  await delay();
  return getTableData<CampaignTableRow>('campaigns', defaultCampaignRows);
}

export async function dbSaveCampaigns(rows: CampaignTableRow[]): Promise<CampaignTableRow[]> {
  await delay();
  saveTableData('campaigns', rows);
  return rows;
}

export async function dbSaveCampaign(row: CampaignTableRow): Promise<CampaignTableRow> {
  await delay();
  const all = getTableData<CampaignTableRow>('campaigns', defaultCampaignRows);
  const idx = all.findIndex(item => item.id === row.id);
  if (idx >= 0) {
    all[idx] = { ...all[idx], ...row, updated_at: new Date().toISOString() };
  } else {
    all.unshift({
      ...row,
      id: row.id || `camp-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  }
  saveTableData('campaigns', all);
  return row;
}

// -------------------------------------------------------------
// 2. DONATIONS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultDonationRows: DonationTableRow[] = initialDonations.map(d => ({
  id: d.id,
  campaign_id: d.campaignId,
  campaign_title_en: d.campaignTitle?.en,
  campaign_title_bn: d.campaignTitle?.bn,
  donor_name: d.donorName,
  amount: d.amount,
  currency: d.currency,
  payment_method: d.paymentMethod,
  trx_id: d.trxId,
  is_anonymous: d.isAnonymous,
  tax_exemption_requested: d.taxExemptionRequested,
  created_at: d.createdAt
}));

export async function dbGetDonations(): Promise<DonationTableRow[]> {
  await delay();
  return getTableData<DonationTableRow>('donations', defaultDonationRows);
}

export async function dbSaveDonations(rows: DonationTableRow[]): Promise<DonationTableRow[]> {
  await delay();
  saveTableData('donations', rows);
  return rows;
}

export async function dbInsertDonation(row: DonationTableRow): Promise<DonationTableRow> {
  await delay();
  const all = getTableData<DonationTableRow>('donations', defaultDonationRows);
  all.unshift(row);
  saveTableData('donations', all);
  return row;
}

// -------------------------------------------------------------
// 3. FEATURED DONORS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultFeaturedDonorRows: FeaturedDonorTableRow[] = featuredDonorsData.map(f => ({
  id: f.id,
  name: f.name,
  tier: f.tier,
  amount_bdt: f.amountBDT,
  currency: f.currency,
  avatar_url: f.avatarUrl,
  location_en: f.location.en,
  location_bn: f.location.bn,
  badge_en: f.badge.en,
  badge_bn: f.badge.bn,
  campaign_title_en: f.campaignTitle.en,
  campaign_title_bn: f.campaignTitle.bn,
  date_str: f.date,
  is_anonymous: f.isAnonymous,
  quote_en: f.quote?.en,
  quote_bn: f.quote?.bn,
  is_corporate: f.isCorporate,
  company_logo: f.companyLogo,
  trx_id: f.trxId,
  created_at: '2026-01-01T00:00:00Z'
}));

export async function dbGetFeaturedDonors(): Promise<FeaturedDonorTableRow[]> {
  await delay();
  return getTableData<FeaturedDonorTableRow>('featured_donors', defaultFeaturedDonorRows);
}

// -------------------------------------------------------------
// 4. EVENTS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultEventRows: EventTableRow[] = initialEvents.map(e => ({
  id: e.id,
  slug: e.slug,
  title_en: e.title.en,
  title_bn: e.title.bn,
  description_en: e.description.en,
  description_bn: e.description.bn,
  event_date: e.eventDate,
  time_str: e.time,
  location_en: e.location.en,
  location_bn: e.location.bn,
  image_url: e.imageUrl,
  category_en: e.category.en,
  category_bn: e.category.bn,
  registered_count: e.registeredCount,
  created_at: '2026-06-15T00:00:00Z'
}));

export async function dbGetEvents(): Promise<EventTableRow[]> {
  await delay();
  return getTableData<EventTableRow>('events', defaultEventRows);
}

export async function dbSaveEvents(rows: EventTableRow[]): Promise<EventTableRow[]> {
  await delay();
  saveTableData('events', rows);
  return rows;
}

export async function dbSaveEvent(row: EventTableRow): Promise<EventTableRow> {
  await delay();
  const all = getTableData<EventTableRow>('events', defaultEventRows);
  const idx = all.findIndex(item => item.id === row.id || item.slug === row.slug);
  if (idx >= 0) {
    all[idx] = { ...all[idx], ...row };
  } else {
    all.unshift({
      ...row,
      id: row.id || `evt-${Date.now()}`,
      created_at: new Date().toISOString()
    });
  }
  saveTableData('events', all);
  return row;
}

// -------------------------------------------------------------
// 5. BLOG POSTS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultBlogRows: BlogPostTableRow[] = initialBlogs.map(b => ({
  id: b.id,
  slug: b.slug,
  title_en: b.title.en,
  title_bn: b.title.bn,
  summary_en: b.summary.en,
  summary_bn: b.summary.bn,
  content_en: b.content.en,
  content_bn: b.content.bn,
  category_en: b.category.en,
  category_bn: b.category.bn,
  author_name: b.author.name,
  author_role_en: b.author.role.en,
  author_role_bn: b.author.role.bn,
  author_avatar: b.author.avatar,
  cover_image: b.coverImage,
  published_at: b.publishedAt,
  read_time_minutes: b.readTimeMinutes,
  tags_json: b.tags,
  created_at: b.publishedAt
}));

export async function dbGetBlogs(): Promise<BlogPostTableRow[]> {
  await delay();
  return getTableData<BlogPostTableRow>('blog_posts', defaultBlogRows);
}

export async function dbSaveBlogs(rows: BlogPostTableRow[]): Promise<BlogPostTableRow[]> {
  await delay();
  saveTableData('blog_posts', rows);
  return rows;
}

// -------------------------------------------------------------
// 6. NEWS ITEMS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultNewsRows: NewsItemTableRow[] = initialNews.map(n => ({
  id: n.id,
  slug: n.slug,
  title_en: n.title.en,
  title_bn: n.title.bn,
  summary_en: n.summary.en,
  summary_bn: n.summary.bn,
  content_en: n.content.en,
  content_bn: n.content.bn,
  source_en: n.source.en,
  source_bn: n.source.bn,
  cover_image: n.coverImage,
  pdf_url: n.pdfUrl,
  published_at: n.publishedAt,
  created_at: n.publishedAt
}));

export async function dbGetNews(): Promise<NewsItemTableRow[]> {
  await delay();
  return getTableData<NewsItemTableRow>('news_items', defaultNewsRows);
}

export async function dbSaveNews(rows: NewsItemTableRow[]): Promise<NewsItemTableRow[]> {
  await delay();
  saveTableData('news_items', rows);
  return rows;
}

// -------------------------------------------------------------
// 7. PHOTO ALBUMS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultPhotoAlbumRows: PhotoAlbumTableRow[] = initialPhotoAlbums.map(p => ({
  id: p.id,
  title_en: p.title.en,
  title_bn: p.title.bn,
  category: p.category,
  cover_image: p.coverImage,
  date_str: p.date,
  location_en: p.location.en,
  location_bn: p.location.bn,
  images_json: p.images,
  created_at: '2026-05-01T00:00:00Z'
}));

export async function dbGetPhotoAlbums(): Promise<PhotoAlbumTableRow[]> {
  await delay();
  return getTableData<PhotoAlbumTableRow>('photo_albums', defaultPhotoAlbumRows);
}

export async function dbSavePhotoAlbums(rows: PhotoAlbumTableRow[]): Promise<PhotoAlbumTableRow[]> {
  await delay();
  saveTableData('photo_albums', rows);
  return rows;
}

// -------------------------------------------------------------
// 8. VIDEO ITEMS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultVideoRows: VideoItemTableRow[] = initialVideoGallery.map(v => ({
  id: v.id,
  title_en: v.title.en,
  title_bn: v.title.bn,
  category: v.category,
  thumbnail_url: v.thumbnailUrl,
  youtube_id: v.youtubeId,
  duration: v.duration,
  date_str: v.date,
  summary_en: v.summary.en,
  summary_bn: v.summary.bn,
  created_at: '2026-05-01T00:00:00Z'
}));

export async function dbGetVideoItems(): Promise<VideoItemTableRow[]> {
  await delay();
  return getTableData<VideoItemTableRow>('video_items', defaultVideoRows);
}

export async function dbSaveVideoItems(rows: VideoItemTableRow[]): Promise<VideoItemTableRow[]> {
  await delay();
  saveTableData('video_items', rows);
  return rows;
}

// -------------------------------------------------------------
// 9. SPONSORSHIPS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultSponsorshipRows: SponsorshipTableRow[] = initialSponsorships.map(s => ({
  id: s.id,
  title_en: s.title.en,
  title_bn: s.title.bn,
  type: s.type,
  child_name: s.childName,
  age: s.age,
  gender: s.gender,
  location_en: s.location.en,
  location_bn: s.location.bn,
  monthly_amount_bdt: s.monthlyAmountBDT,
  image_url: s.imageUrl,
  academic_grade: s.academicGrade,
  story_en: s.story.en,
  story_bn: s.story.bn,
  is_sponsored: s.isSponsored,
  created_at: '2026-01-01T00:00:00Z'
}));

export async function dbGetSponsorships(): Promise<SponsorshipTableRow[]> {
  await delay();
  return getTableData<SponsorshipTableRow>('sponsorships', defaultSponsorshipRows);
}

export async function dbSaveSponsorships(rows: SponsorshipTableRow[]): Promise<SponsorshipTableRow[]> {
  await delay();
  saveTableData('sponsorships', rows);
  return rows;
}

// -------------------------------------------------------------
// 10. AUDIT REPORTS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultAuditRows: AuditReportTableRow[] = initialAuditReports.map(a => ({
  id: a.id,
  year_str: a.year,
  title_en: a.title.en,
  title_bn: a.title.bn,
  pdf_url: a.pdfUrl,
  file_size: a.fileSize,
  auditor_name: a.auditorName,
  summary_en: a.summary.en,
  summary_bn: a.summary.bn,
  created_at: '2026-01-01T00:00:00Z'
}));

export async function dbGetAuditReports(): Promise<AuditReportTableRow[]> {
  await delay();
  return getTableData<AuditReportTableRow>('audit_reports', defaultAuditRows);
}

export async function dbSaveAuditReports(rows: AuditReportTableRow[]): Promise<AuditReportTableRow[]> {
  await delay();
  saveTableData('audit_reports', rows);
  return rows;
}

// -------------------------------------------------------------
// 11. FAQS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultFaqRows: FAQTableRow[] = initialFAQs.map(f => ({
  id: f.id,
  category: f.category,
  question_en: f.question.en,
  question_bn: f.question.bn,
  answer_en: f.answer.en,
  answer_bn: f.answer.bn,
  created_at: '2026-01-01T00:00:00Z'
}));

export async function dbGetFAQs(): Promise<FAQTableRow[]> {
  await delay();
  return getTableData<FAQTableRow>('faqs', defaultFaqRows);
}

export async function dbSaveFAQs(rows: FAQTableRow[]): Promise<FAQTableRow[]> {
  await delay();
  saveTableData('faqs', rows);
  return rows;
}

export const dbGetFaqs = dbGetFAQs;
export const dbSaveFaqs = dbSaveFAQs;

// -------------------------------------------------------------
// 12. VOLUNTEERS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultVolunteerRows: VolunteerTableRow[] = [
  {
    id: 'vol-1',
    full_name: 'Tariqul Islam',
    email: 'tariqul@example.com',
    phone: '01711223344',
    district: 'Sylhet',
    upazila: 'Golapganj',
    skills: 'Medical & First Aid, Rescue Operations',
    availability: 'weekends',
    motivation: 'Dedicated to emergency rescue and post-flood medical camp support.',
    status: 'approved',
    created_at: '2026-06-15T10:00:00Z'
  },
  {
    id: 'vol-2',
    full_name: 'Farzana Akter',
    email: 'farzana@example.com',
    phone: '01899887766',
    district: 'Feni',
    upazila: 'Chhagalnaiya',
    skills: 'Food Distribution, Logistics Support',
    availability: 'emergency_only',
    motivation: 'Ready to mobilize for rapid cooked meal packing and relief convoy delivery.',
    status: 'pending',
    created_at: '2026-07-20T14:30:00Z'
  }
];

export async function dbGetVolunteers(): Promise<VolunteerTableRow[]> {
  await delay();
  return getTableData<VolunteerTableRow>('volunteers', defaultVolunteerRows);
}

export async function dbSaveVolunteers(rows: VolunteerTableRow[]): Promise<VolunteerTableRow[]> {
  await delay();
  saveTableData('volunteers', rows);
  return rows;
}

export async function dbInsertVolunteer(row: VolunteerTableRow): Promise<VolunteerTableRow> {
  await delay();
  const all = getTableData<VolunteerTableRow>('volunteers', defaultVolunteerRows);
  all.unshift(row);
  saveTableData('volunteers', all);
  return row;
}

// -------------------------------------------------------------
// 13. LEADERSHIP MEMBERS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultLeadershipRows: LeadershipMemberTableRow[] = [
  {
    id: chairmanData.id,
    member_type: 'chairman',
    name_en: chairmanData.name.en,
    name_bn: chairmanData.name.bn,
    role_en: chairmanData.role.en,
    role_bn: chairmanData.role.bn,
    designation_en: chairmanData.designation.en,
    designation_bn: chairmanData.designation.bn,
    image_url: chairmanData.imageUrl,
    bio_en: chairmanData.bio.en,
    bio_bn: chairmanData.bio.bn,
    message_en: chairmanData.message?.en,
    message_bn: chairmanData.message?.bn,
    quote_en: chairmanData.quote?.en,
    quote_bn: chairmanData.quote?.bn,
    display_order: 1
  },
  {
    id: ceoData.id,
    member_type: 'ceo',
    name_en: ceoData.name.en,
    name_bn: ceoData.name.bn,
    role_en: ceoData.role.en,
    role_bn: ceoData.role.bn,
    designation_en: ceoData.designation.en,
    designation_bn: ceoData.designation.bn,
    image_url: ceoData.imageUrl,
    bio_en: ceoData.bio.en,
    bio_bn: ceoData.bio.bn,
    message_en: ceoData.message?.en,
    message_bn: ceoData.message?.bn,
    quote_en: ceoData.quote?.en,
    quote_bn: ceoData.quote?.bn,
    display_order: 2
  },
  ...boardMembersData.map((b, idx) => ({
    id: b.id,
    member_type: 'board' as const,
    name_en: b.name.en,
    name_bn: b.name.bn,
    role_en: b.role.en,
    role_bn: b.role.bn,
    designation_en: b.designation.en,
    designation_bn: b.designation.bn,
    image_url: b.imageUrl,
    bio_en: b.bio.en,
    bio_bn: b.bio.bn,
    display_order: idx + 3
  })),
  ...staffMembersData.map((s, idx) => ({
    id: s.id,
    member_type: 'staff' as const,
    name_en: s.name.en,
    name_bn: s.name.bn,
    role_en: s.role.en,
    role_bn: s.role.bn,
    designation_en: s.designation.en,
    designation_bn: s.designation.bn,
    image_url: s.imageUrl,
    bio_en: s.bio.en,
    bio_bn: s.bio.bn,
    email: s.email,
    phone: s.phone,
    department: s.department,
    display_order: idx + 20
  }))
];

export async function dbGetLeadershipMembers(): Promise<LeadershipMemberTableRow[]> {
  await delay();
  return getTableData<LeadershipMemberTableRow>('leadership_members', defaultLeadershipRows);
}

export async function dbSaveLeadershipMembers(rows: LeadershipMemberTableRow[]): Promise<LeadershipMemberTableRow[]> {
  await delay();
  saveTableData('leadership_members', rows);
  return rows;
}

// -------------------------------------------------------------
// 14. SITE SETTINGS TABLE REPOSITORY
// -------------------------------------------------------------
const defaultSiteSettingsRow: SiteSettingsTableRow = {
  id: 'site_content_default',
  org_name_en: initialSiteContent.orgName.en,
  org_name_bn: initialSiteContent.orgName.bn,
  org_tagline_en: initialSiteContent.orgTagline.en,
  org_tagline_bn: initialSiteContent.orgTagline.bn,
  reg_info_en: initialSiteContent.regInfo.en,
  reg_info_bn: initialSiteContent.regInfo.bn,
  tax_info_en: initialSiteContent.taxInfo.en,
  tax_info_bn: initialSiteContent.taxInfo.bn,
  emergency_ticker_en: initialSiteContent.emergencyTicker.en,
  emergency_ticker_bn: initialSiteContent.emergencyTicker.bn,
  hotline_en: initialSiteContent.hotline.en,
  hotline_bn: initialSiteContent.hotline.bn,
  email_en: initialSiteContent.email.en,
  email_bn: initialSiteContent.email.bn,
  whatsapp_en: initialSiteContent.whatsapp.en,
  whatsapp_bn: initialSiteContent.whatsapp.bn,
  address_en: initialSiteContent.address.en,
  address_bn: initialSiteContent.address.bn,
  nav_json: initialSiteContent.nav,
  quick_donate_json: initialSiteContent.quickDonateWidget,
  counters_json: initialSiteContent.counters,
  bank_details_json: initialSiteContent.bankDetails
};

export async function dbGetSiteSettings(): Promise<SiteSettingsTableRow> {
  await delay();
  const rows = getTableData<SiteSettingsTableRow>('site_settings', [defaultSiteSettingsRow]);
  return rows[0] || defaultSiteSettingsRow;
}

export async function dbSaveSiteSettings(row: SiteSettingsTableRow): Promise<SiteSettingsTableRow> {
  await delay();
  saveTableData('site_settings', [row]);
  return row;
}

// -------------------------------------------------------------
// 15. ABOUT ORGANIZATION TABLE REPOSITORY
// -------------------------------------------------------------
const defaultAboutRow: AboutOrganizationTableRow = {
  id: 'about_default',
  hero_title_en: initialAboutData.heroTitle.en,
  hero_title_bn: initialAboutData.heroTitle.bn,
  hero_subtitle_en: initialAboutData.heroSubtitle.en,
  hero_subtitle_bn: initialAboutData.heroSubtitle.bn,
  overview_en: initialAboutData.overview.en,
  overview_bn: initialAboutData.overview.bn,
  zakat_policy_en: initialAboutData.zakatPolicy.en,
  zakat_policy_bn: initialAboutData.zakatPolicy.bn,
  core_values_json: initialAboutData.coreValues,
  history_milestones_json: initialAboutData.historyMilestones,
  stats_json: initialAboutData.stats
};

export async function dbGetAboutOrganization(): Promise<AboutOrganizationTableRow> {
  await delay();
  const rows = getTableData<AboutOrganizationTableRow>('about_organization', [defaultAboutRow]);
  return rows[0] || defaultAboutRow;
}

export async function dbSaveAboutOrganization(row: AboutOrganizationTableRow): Promise<AboutOrganizationTableRow> {
  await delay();
  saveTableData('about_organization', [row]);
  return row;
}

// -------------------------------------------------------------
// 16. MISSION VISION TABLE REPOSITORY
// -------------------------------------------------------------
const defaultMissionVisionRow: MissionVisionTableRow = {
  id: 'mission_vision_default',
  mission_title_en: initialMissionVisionData.missionTitle.en,
  mission_title_bn: initialMissionVisionData.missionTitle.bn,
  mission_desc_en: initialMissionVisionData.missionDesc.en,
  mission_desc_bn: initialMissionVisionData.missionDesc.bn,
  mission_points_json: initialMissionVisionData.missionPoints,
  vision_title_en: initialMissionVisionData.visionTitle.en,
  vision_title_bn: initialMissionVisionData.visionTitle.bn,
  vision_desc_en: initialMissionVisionData.visionDesc.en,
  vision_desc_bn: initialMissionVisionData.visionDesc.bn,
  vision_points_json: initialMissionVisionData.visionPoints,
  roadmap_year: initialMissionVisionData.roadmapYear
};

export async function dbGetMissionVision(): Promise<MissionVisionTableRow> {
  await delay();
  const rows = getTableData<MissionVisionTableRow>('mission_vision', [defaultMissionVisionRow]);
  return rows[0] || defaultMissionVisionRow;
}

export async function dbSaveMissionVision(row: MissionVisionTableRow): Promise<MissionVisionTableRow> {
  await delay();
  saveTableData('mission_vision', [row]);
  return row;
}
