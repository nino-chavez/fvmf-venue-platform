// Documents
import { program } from './documents/program';
import { page } from './documents/page';
import { post } from './documents/post';
import { testimonial } from './documents/testimonial';
import { teamMember } from './documents/teamMember';
import { annualReport } from './documents/annualReport';
import { donationTier } from './documents/donationTier';

// Objects
import { impactMetric } from './objects/impactMetric';
import { seo } from './objects/seo';

export const schemaTypes = [
  // Documents
  page,
  post,
  program,
  testimonial,
  teamMember,
  annualReport,
  donationTier,

  // Objects
  impactMetric,
  seo,
];
