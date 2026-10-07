import { 
  dbGetCampaigns, 
  dbGetDonations, 
  dbGetVolunteers, 
  dbGetBlogs, 
  dbGetEvents, 
  dbGetSponsorships 
} from '../index';

export interface AdminDashboardMetrics {
  totalRaisedBDT: number;
  totalDonationCount: number;
  activeCampaignsCount: number;
  totalCampaignsCount: number;
  pendingVolunteersCount: number;
  totalVolunteersCount: number;
  totalSponsorshipsCount: number;
  sponsoredChildrenCount: number;
  totalBlogsCount: number;
  upcomingEventsCount: number;
  recentDonations: Array<{
    id: string;
    donorName: string;
    amount: number;
    currency: string;
    campaignTitle: string;
    paymentMethod: string;
    date: string;
  }>;
  recentVolunteers: Array<{
    id: string;
    name: string;
    email: string;
    phone: string;
    district: string;
    status: string;
    date: string;
  }>;
}

export async function adminGetDashboardMetrics(): Promise<AdminDashboardMetrics> {
  const campaigns = await dbGetCampaigns();
  const donations = await dbGetDonations();
  const volunteers = await dbGetVolunteers();
  const blogs = await dbGetBlogs();
  const events = await dbGetEvents();
  const sponsorships = await dbGetSponsorships();

  const totalRaisedBDT = donations.reduce((sum, d) => sum + (d.currency === 'USD' ? Number(d.amount) * 120 : Number(d.amount)), 0);
  const activeCampaigns = campaigns.filter(c => Number(c.days_left) > 0);
  const pendingVolunteers = volunteers.filter(v => v.status === 'pending');
  const sponsoredChildren = sponsorships.filter(s => s.is_sponsored);
  const upcomingEvents = events.filter(e => e.status === 'upcoming' || new Date(e.event_date || e.date_str || '').getTime() > Date.now());

  const recentDonations = donations.slice(0, 6).map(d => ({
    id: d.id,
    donorName: d.donor_name,
    amount: Number(d.amount),
    currency: d.currency,
    campaignTitle: d.campaign_title_en || 'Emergency Relief',
    paymentMethod: d.payment_method,
    date: d.created_at || 'Just now'
  }));

  const recentVolunteers = volunteers.slice(0, 5).map(v => ({
    id: v.id,
    name: v.full_name,
    email: v.email,
    phone: v.phone,
    district: v.district,
    status: v.status || 'pending',
    date: v.created_at || 'Recent'
  }));

  return {
    totalRaisedBDT,
    totalDonationCount: donations.length,
    activeCampaignsCount: activeCampaigns.length,
    totalCampaignsCount: campaigns.length,
    pendingVolunteersCount: pendingVolunteers.length,
    totalVolunteersCount: volunteers.length,
    totalSponsorshipsCount: sponsorships.length,
    sponsoredChildrenCount: sponsoredChildren.length,
    totalBlogsCount: blogs.length,
    upcomingEventsCount: upcomingEvents.length,
    recentDonations,
    recentVolunteers
  };
}
