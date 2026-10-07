/**
 * Core Data Types & Database Entity Models for Humanity First BD
 */

export type Language = 'en' | 'bn';

export type Localized = {
  en: string;
  bn: string;
};

export type ThemeMode = 'hope-humanity' | 'teal-coral';

// ==========================================
// 1. APPLICATION & UI DOMAIN MODELS
// ==========================================

export interface Campaign {
  id: string;
  slug: string;
  title: Localized;
  summary: Localized;
  description: Localized;
  category: 'emergency' | 'education' | 'water' | 'healthcare' | 'zakat' | 'ramadan' | string;
  imageUrl: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  daysLeft: number;
  isZakatEligible: boolean;
  isEmergency: boolean;
  isUrgent?: boolean;
  isFeatured?: boolean;
  directBeneficiaries?: number;
  targetAreaCount?: number;
  location: Localized;
  expenseBreakdown?: { category: Localized; percentage: number }[];
  updates?: { date: string; title: Localized; text: Localized; imageUrl?: string }[];
}

export interface Donation {
  id: string;
  campaignId?: string;
  campaignTitle?: Localized;
  amount: number;
  currency: string;
  donorName: string;
  isAnonymous: boolean;
  paymentMethod: 'bKash' | 'Nagad' | 'Rocket' | 'Bank Transfer' | 'Card / PayPal' | string;
  trxId: string;
  createdAt: string;
  taxExemptionRequested: boolean;
}

export interface FeaturedDonor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'zakat' | 'corporate';
  amountBDT: number;
  currency: string;
  avatarUrl: string;
  location: Localized;
  badge: Localized;
  campaignTitle: Localized;
  date: string;
  isAnonymous: boolean;
  quote?: Localized;
  isCorporate?: boolean;
  companyLogo?: string;
  trxId: string;
}

export interface PhotoAlbum {
  id: string;
  title: Localized;
  category: 'flood' | 'water' | 'education' | 'medical' | 'distribution' | string;
  coverImage: string;
  images: { url: string; caption: Localized; location: Localized; date: string }[];
  date: string;
  location: Localized;
}

export interface VideoItem {
  id: string;
  title: Localized;
  category: 'reports' | 'interviews' | 'highlights' | 'documentary' | string;
  thumbnailUrl: string;
  youtubeId: string;
  duration: string;
  date: string;
  summary: Localized;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: Localized;
  summary: Localized;
  content: Localized;
  category: Localized;
  author: { name: string; role: Localized; avatar: string };
  coverImage: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
}

export interface NewsItem {
  id: string;
  slug: string;
  title: Localized;
  summary: Localized;
  content: Localized;
  source: Localized;
  coverImage: string;
  publishedAt: string;
  pdfUrl?: string;
  pdfAttachmentUrl?: string;
}

export interface Sponsorship {
  id: string;
  title: Localized;
  type: 'orphan' | 'student' | 'family' | string;
  childName: string;
  age: number;
  gender: 'boy' | 'girl' | string;
  location: Localized;
  monthlyAmountBDT: number;
  imageUrl: string;
  academicGrade: string;
  story: Localized;
  isSponsored: boolean;
}

export interface AuditReport {
  id: string;
  year: string;
  title: Localized;
  pdfUrl: string;
  fileSize: string;
  auditorName: string;
  summary: Localized;
}

export interface EventItem {
  id: string;
  slug: string;
  title: Localized;
  description: Localized;
  eventDate: string;
  time: string;
  location: Localized;
  imageUrl: string;
  category: Localized;
  registeredCount: number;
}

export interface FAQItem {
  id: string;
  category: 'zakat' | 'donation' | 'volunteer' | 'transparency';
  question: Localized;
  answer: Localized;
}

export interface VolunteerApplication {
  fullName: string;
  email: string;
  phone: string;
  district: string;
  upazila?: string;
  skills: string[];
  availability: 'weekends' | 'fulltime' | 'emergency_only';
  motivation?: string;
}

export interface SearchResult {
  id: string;
  type: 'campaign' | 'photo' | 'video' | 'blog' | 'news' | 'event' | 'report';
  title: Localized;
  url: string;
  category: string;
  imageUrl?: string;
}

export interface SiteContent {
  id?: string;
  orgName: Localized;
  orgTagline: Localized;
  regInfo: Localized;
  taxInfo: Localized;
  emergencyTicker: Localized;
  hotline: Localized;
  email: Localized;
  whatsapp: Localized;
  address: Localized;
  nav: Record<string, Localized>;
  quickDonateWidget: {
    title: Localized;
    subtitle: Localized;
    frequency: {
      oneTime: Localized;
      monthly: Localized;
    };
    amounts: number[];
    customAmount: Localized;
    selectPayment: Localized;
    donateBtn: Localized;
    secureBadge: Localized;
  };
  counters: Record<string, Localized>;
  bankDetails: {
    bankName: Localized;
    accountName: Localized;
    accountNo: Localized;
    branch: Localized;
    routingNo: Localized;
    swiftCode: Localized;
  };
}

export type SiteSettings = SiteContent;

export interface LeaderProfile {
  id: string;
  memberType?: 'chairman' | 'ceo' | 'board' | 'staff';
  name: Localized;
  role: Localized;
  designation: Localized;
  imageUrl: string;
  bio: Localized;
  message?: Localized;
  quote?: Localized;
  email?: string;
  phone?: string;
  department?: string;
  joinedYear?: string;
  displayOrder?: number;
}

export interface AboutOrganization {
  id?: string;
  heroTitle: Localized;
  heroSubtitle: Localized;
  overview: Localized;
  zakatPolicy: Localized;
  coreValues: {
    title: Localized;
    desc: Localized;
  }[];
  historyMilestones: {
    year: string;
    title: Localized;
    desc: Localized;
  }[];
  stats: {
    label: Localized;
    value: Localized;
  }[];
}

export interface MissionVisionData {
  id?: string;
  missionTitle: Localized;
  missionDesc: Localized;
  missionPoints: Localized[];
  visionTitle: Localized;
  visionDesc: Localized;
  visionPoints: Localized[];
  roadmapYear: string;
}

// ==========================================
// 2. DEDICATED DATABASE TABLE ROW MODELS
// ==========================================

export interface SiteSettingsTableRow {
  id: string;
  org_name_en: string;
  org_name_bn: string;
  org_tagline_en: string;
  org_tagline_bn: string;
  reg_info_en: string;
  reg_info_bn: string;
  tax_info_en: string;
  tax_info_bn: string;
  emergency_ticker_en: string;
  emergency_ticker_bn: string;
  hotline_en: string;
  hotline_bn: string;
  email_en: string;
  email_bn: string;
  whatsapp_en: string;
  whatsapp_bn: string;
  address_en: string;
  address_bn: string;
  nav_json: Record<string, Localized>;
  quick_donate_json: any;
  counters_json: Record<string, Localized>;
  bank_details_json: any;
  created_at?: string;
  updated_at?: string;
}

export interface AboutOrganizationTableRow {
  id: string;
  hero_title_en: string;
  hero_title_bn: string;
  hero_subtitle_en: string;
  hero_subtitle_bn: string;
  overview_en: string;
  overview_bn: string;
  zakat_policy_en: string;
  zakat_policy_bn: string;
  core_values_json: { title: Localized; desc: Localized }[];
  history_milestones_json: { year: string; title: Localized; desc: Localized }[];
  stats_json: { label: Localized; value: Localized }[];
  created_at?: string;
  updated_at?: string;
}

export interface MissionVisionTableRow {
  id: string;
  mission_title_en: string;
  mission_title_bn: string;
  mission_desc_en: string;
  mission_desc_bn: string;
  mission_points_json: Localized[];
  vision_title_en: string;
  vision_title_bn: string;
  vision_desc_en: string;
  vision_desc_bn: string;
  vision_points_json: Localized[];
  roadmap_year: string;
  created_at?: string;
  updated_at?: string;
}

export interface LeadershipMemberTableRow {
  id: string;
  member_type: 'chairman' | 'ceo' | 'board' | 'staff' | string;
  name_en: string;
  name_bn: string;
  role_en: string;
  role_bn: string;
  designation_en?: string;
  designation_bn?: string;
  image_url: string;
  photo_url?: string;
  category?: string;
  bio_en: string;
  bio_bn: string;
  message_en?: string;
  message_bn?: string;
  quote_en?: string;
  quote_bn?: string;
  email?: string;
  phone?: string;
  department?: string;
  joined_year?: string;
  display_order?: number;
  order_index?: number;
  created_at?: string;
  updated_at?: string;
}

export interface CampaignTableRow {
  id: string;
  slug: string;
  title_en: string;
  title_bn: string;
  summary_en: string;
  summary_bn: string;
  description_en: string;
  description_bn: string;
  category: 'emergency' | 'education' | 'water' | 'healthcare' | 'zakat' | 'ramadan' | string;
  image_url: string;
  goal_amount: number;
  raised_amount: number;
  donor_count: number;
  days_left: number;
  is_zakat_eligible: boolean;
  is_emergency: boolean;
  is_urgent?: boolean;
  is_featured?: boolean;
  direct_beneficiaries?: number;
  target_area_count?: number;
  location_en: string;
  location_bn: string;
  expense_breakdown_json?: { category: Localized; percentage: number }[];
  updates_json?: { date: string; title: Localized; text: Localized; imageUrl?: string }[];
  created_at?: string;
  updated_at?: string;
}

export interface DonationTableRow {
  id: string;
  campaign_id?: string;
  campaign_title_en?: string;
  campaign_title_bn?: string;
  donor_name: string;
  amount: number;
  currency: string;
  payment_method: string;
  trx_id: string;
  is_anonymous: boolean;
  tax_exemption_requested: boolean;
  created_at: string;
  updated_at?: string;
}

export interface FeaturedDonorTableRow {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'zakat' | 'corporate';
  amount_bdt: number;
  currency: string;
  avatar_url: string;
  location_en: string;
  location_bn: string;
  badge_en: string;
  badge_bn: string;
  campaign_title_en: string;
  campaign_title_bn: string;
  date_str: string;
  is_anonymous: boolean;
  quote_en?: string;
  quote_bn?: string;
  is_corporate?: boolean;
  company_logo?: string;
  trx_id: string;
  created_at?: string;
  updated_at?: string;
}

export interface PhotoAlbumTableRow {
  id: string;
  title_en: string;
  title_bn: string;
  category: string;
  cover_image: string;
  date_str: string;
  location_en: string;
  location_bn: string;
  images_json?: { url: string; caption?: Localized; location?: Localized; date?: string; title?: string }[];
  photos_json?: { url: string; caption?: Localized; location?: Localized; date?: string; title?: string }[];
  created_at?: string;
  updated_at?: string;
}

export interface VideoItemTableRow {
  id: string;
  title_en: string;
  title_bn: string;
  category: string;
  thumbnail_url: string;
  youtube_id: string;
  duration: string;
  date_str: string;
  summary_en?: string;
  summary_bn?: string;
  created_at?: string;
  updated_at?: string;
}

export interface BlogPostTableRow {
  id: string;
  slug: string;
  title_en: string;
  title_bn: string;
  summary_en: string;
  summary_bn: string;
  content_en: string;
  content_bn: string;
  category_en: string;
  category_bn: string;
  author_name: string;
  author_en?: string;
  author_bn?: string;
  author_role_en?: string;
  author_role_bn?: string;
  author_avatar?: string;
  cover_image: string;
  published_at: string;
  read_time_minutes: number;
  read_time_min?: number;
  tags_json?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface NewsItemTableRow {
  id: string;
  slug: string;
  title_en: string;
  title_bn: string;
  summary_en: string;
  summary_bn: string;
  content_en: string;
  content_bn: string;
  source_en?: string;
  source_bn?: string;
  cover_image: string;
  pdf_url?: string;
  pdf_attachment_url?: string;
  published_at: string;
  created_at?: string;
  updated_at?: string;
}

export interface SponsorshipTableRow {
  id: string;
  title_en: string;
  title_bn: string;
  name_en?: string;
  name_bn?: string;
  type: 'orphan' | 'student' | 'family' | string;
  child_name: string;
  age: number;
  gender: 'boy' | 'girl' | string;
  location_en: string;
  location_bn: string;
  class_level_en?: string;
  class_level_bn?: string;
  monthly_amount_bdt: number;
  monthly_cost_bdt?: number;
  monthly_cost_usd?: number;
  image_url: string;
  photo_url?: string;
  academic_grade: string;
  ambition_en?: string;
  ambition_bn?: string;
  story_en: string;
  story_bn: string;
  is_sponsored: boolean;
  status?: 'available' | 'sponsored' | 'urgent' | string;
  sponsored_by?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AuditReportTableRow {
  id: string;
  year_str: string;
  year?: string;
  title_en: string;
  title_bn: string;
  pdf_url: string;
  file_url?: string;
  file_size: string;
  file_size_mb?: number;
  auditor_name: string;
  auditor_en?: string;
  auditor_bn?: string;
  summary_en: string;
  summary_bn: string;
  total_income_bdt?: number;
  total_expense_bdt?: number;
  published_date?: string;
  created_at?: string;
  updated_at?: string;
}

export interface EventTableRow {
  id: string;
  slug: string;
  title_en: string;
  title_bn: string;
  description_en: string;
  description_bn: string;
  event_date: string;
  date_str?: string;
  time_str: string;
  location_en: string;
  location_bn: string;
  venue_en?: string;
  venue_bn?: string;
  image_url: string;
  category_en: string;
  category_bn: string;
  type?: string;
  volunteer_slots?: number;
  registered_volunteers?: number;
  registered_count: number;
  status?: 'upcoming' | 'ongoing' | 'completed' | string;
  created_at?: string;
  updated_at?: string;
}

export interface FAQTableRow {
  id: string;
  category: 'zakat' | 'donation' | 'volunteer' | 'transparency' | string;
  question_en: string;
  question_bn: string;
  answer_en: string;
  answer_bn: string;
  order_index?: number;
  created_at?: string;
  updated_at?: string;
}

export interface VolunteerTableRow {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  district: string;
  upazila?: string;
  skills?: string;
  availability?: string;
  motivation?: string;
  preferred_domain?: string;
  available_hours_per_week?: number;
  notes?: string;
  status?: 'pending' | 'approved' | 'rejected';
  created_at?: string;
  updated_at?: string;
}

// Aliases for compatibility
export type FaqTableRow = FAQTableRow;
export type LeadershipTableRow = LeadershipMemberTableRow;
export type SiteConfigTableRow = SiteSettingsTableRow;
export type LeadershipMember = LeaderProfile;

