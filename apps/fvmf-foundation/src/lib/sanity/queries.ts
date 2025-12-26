// GROQ queries for FVMF content

// Fetch all featured programs for homepage
export const featuredProgramsQuery = `
  *[_type == "program" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    icon,
    color,
    description,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    impactMetrics,
    "relatedStories": relatedStories[]-> {
      name,
      quote,
      "photo": photo.asset->url
    }
  }
`;

// Fetch featured testimonials for homepage gatefold
export const featuredTestimonialsQuery = `
  *[_type == "testimonial" && featured == true && consentGiven == true] | order(publishedAt desc) [0...4] {
    _id,
    name,
    age,
    instrument,
    quote,
    "photo": photo.asset->url,
    "program": program->title
  }
`;

// Fetch all impact metrics across programs
export const allImpactMetricsQuery = `
  *[_type == "program"] {
    impactMetrics[] {
      value,
      label,
      category
    }
  }
`;

// Fetch team members ordered by display order
export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    "photo": photo.asset->url,
    email,
    linkedin,
    order
  }
`;

// Fetch donation tiers ordered by display order
export const donationTiersQuery = `
  *[_type == "donationTier"] | order(order asc) {
    _id,
    name,
    icon,
    monthlyAmount,
    annualAmount,
    description,
    benefits,
    stripePriceId,
    featured
  }
`;

// Fetch annual reports (newest first)
export const annualReportsQuery = `
  *[_type == "annualReport" && published == true] | order(year desc) {
    _id,
    year,
    title,
    "coverImage": coverImage.asset->url,
    "pdfUrl": pdfFile.asset->url,
    highlights,
    impactMetrics,
    summary
  }
`;

// Fetch single program by slug
export const programBySlugQuery = `
  *[_type == "program" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    icon,
    color,
    description,
    content,
    "coverImage": coverImage.asset->url,
    impactMetrics,
    "relatedStories": relatedStories[]-> {
      _id,
      name,
      age,
      instrument,
      quote,
      "photo": photo.asset->url
    },
    seo,
    publishedAt
  }
`;

// Fetch all programs (for program listing page)
export const allProgramsQuery = `
  *[_type == "program"] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    icon,
    color,
    description,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    featured
  }
`;

// Fetch all testimonials with consent
export const allTestimonialsQuery = `
  *[_type == "testimonial" && consentGiven == true] | order(publishedAt desc) {
    _id,
    name,
    age,
    instrument,
    quote,
    "photo": photo.asset->url,
    "program": program->title,
    featured
  }
`;
