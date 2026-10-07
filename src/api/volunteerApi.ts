import { VolunteerApplication, VolunteerTableRow } from '../types';
import { dbInsertVolunteer } from './index';

export async function submitVolunteerApplication(app: VolunteerApplication): Promise<boolean> {
  const row: VolunteerTableRow = {
    id: `vol-${Date.now()}`,
    full_name: app.fullName,
    email: app.email,
    phone: app.phone,
    district: app.district,
    upazila: app.upazila,
    skills: app.skills.join(', '),
    availability: app.availability,
    motivation: app.motivation,
    created_at: new Date().toISOString()
  };

  await dbInsertVolunteer(row);
  return true;
}
