// Documents
import { program } from './documents/program';
import { testimonial } from './documents/testimonial';
import { teamMember } from './documents/teamMember';
import { annualReport } from './documents/annualReport';
import { donationTier } from './documents/donationTier';

// Objects
import { impactMetric } from './objects/impactMetric';
import { seo } from './objects/seo';

export const schemaTypes = [
  // Documents
  program,
  testimonial,
  teamMember,
  annualReport,
  donationTier,

  // Objects
  impactMetric,
  seo,
];
