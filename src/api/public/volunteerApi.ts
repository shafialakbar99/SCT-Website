import { VolunteerTableRow, VolunteerApplication } from '../../types';
import { dbInsertVolunteer } from '../index';

export type VolunteerApplicationInput = VolunteerApplication | {
  name?: string;
  fullName?: string;
  email: string;
  phone: string;
  district: string;
  upazila?: string;
  skills: string | string[];
  availability?: string;
  preferredDomain?: string;
  motivation?: string;
};

export async function submitVolunteerApplication(input: VolunteerApplicationInput): Promise<boolean> {
  const name = ('fullName' in input && input.fullName) ? input.fullName : ('name' in input && input.name) ? input.name : 'Anonymous Volunteer';
  const skillsStr = Array.isArray(input.skills) ? input.skills.join(', ') : (input.skills || '');
  
  const newRow: VolunteerTableRow = {
    id: `vol-${Date.now()}`,
    full_name: name,
    email: input.email,
    phone: input.phone,
    district: input.district,
    upazila: input.upazila || '',
    skills: skillsStr,
    availability: input.availability || 'weekends',
    motivation: input.motivation || '',
    status: 'pending',
    created_at: new Date().toISOString()
  };

  await dbInsertVolunteer(newRow);
  return true;
}
