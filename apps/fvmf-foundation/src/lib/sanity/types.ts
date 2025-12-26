// TypeScript types for Sanity content

export interface ImpactMetric {
  value: string;
  label: string;
  category?: 'students' | 'financial' | 'programs' | 'impact';
}

export interface Program {
  _id: string;
  title: string;
  subtitle?: string;
  icon: string;
  color: 'blue' | 'gold' | 'orange';
  description: string;
  slug: string;
  coverImage: string;
  content?: any[]; // Portable Text
  impactMetrics?: ImpactMetric[];
  relatedStories?: Testimonial[];
  featured: boolean;
  publishedAt?: string;
  seo?: SEO;
}

export interface Testimonial {
  _id: string;
  name: string;
  age: number;
  instrument?: string;
  quote: string;
  photo: string;
  program?: string;
  fullStory?: any[]; // Portable Text
  yearsInProgram?: number;
  featured: boolean;
  consentGiven: boolean;
  publishedAt?: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: any[]; // Portable Text
  photo?: string;
  email?: string;
  linkedin?: string;
  order: number;
}

export interface AnnualReport {
  _id: string;
  year: number;
  title: string;
  coverImage?: string;
  pdfUrl: string;
  highlights: string[];
  impactMetrics?: ImpactMetric[];
  summary: string;
  published: boolean;
}

export interface DonationTier {
  _id: string;
  name: string;
  icon: string;
  monthlyAmount: number;
  annualAmount: number;
  description: string;
  benefits: string[];
  stripePriceId?: string;
  order: number;
  featured: boolean;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex: boolean;
}
