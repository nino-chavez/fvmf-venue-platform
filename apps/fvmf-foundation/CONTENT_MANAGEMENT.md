# Content Management System Guide

The FVMF Foundation website uses Sanity CMS for content management. This allows content managers to create and update website content without touching code.

## Accessing the CMS

### Local Development
1. Start the development server: `npm run dev`
2. Navigate to: `http://localhost:3000/studio`
3. Sign in with your Sanity credentials

### Production
Navigate to: `https://your-domain.com/studio`

## Content Types

### 📰 News & Updates (Blog)
Manage news articles, event announcements, and community updates.

**Fields:**
- **Title**: The headline for the article
- **Slug**: URL-friendly version (auto-generated from title)
- **Excerpt**: Short summary (max 200 characters) for preview cards
- **Featured Image**: Main image with alt text
- **Category**: Event, Program Update, Community News, Press Release, or Behind the Scenes
- **Tags**: Keywords for filtering/searching
- **Content**: Rich text editor with images, headings, links
- **Author**: Author name (defaults to "FVMF Team")
- **Published At**: Date and time
- **Featured Post**: Toggle to show prominently on homepage
- **SEO**: Meta description, keywords, social sharing image

**Use Cases:**
- Announce upcoming shows/events
- Share program updates
- Highlight volunteer/community stories
- Press releases
- Behind-the-scenes content

**Best Practices:**
- Keep excerpts under 200 characters
- Always include alt text for images
- Use categories consistently
- Featured posts appear on homepage (limit to 3-5 active)

---

### 📄 Pages (Standalone Content)
Create custom pages for programs, initiatives, or any standalone content.

**Fields:**
- **Title**: Page title
- **Slug**: URL path (e.g., "rhythms-for-all" → `/pages/rhythms-for-all`)
- **Excerpt**: Short description for preview
- **Hero Image**: Large header image
- **Content**: Rich text with images and formatting
- **Call to Action**: Optional button (text + URL)
- **Published At**: Date and time
- **SEO**: Meta description, keywords, social image

**Use Cases:**
- Individual program detail pages (She Said, Rhythms For All, etc.)
- Special initiative pages
- Campaign landing pages
- Event-specific pages

**Example Usage:**
Instead of hardcoding program details in code, create a "Page" for each program:
- "She Said Series" page with full history, lineup, photos
- "Rhythms For All" page with program details, testimonials
- "Delmark Day" page with past events, artist bios

---

### 🎵 Programs
Manage the core programs offered by FVMF.

**Use Cases:**
- Program metadata and summaries
- Link to detailed Page documents for full content

---

### 💬 Student Stories (Testimonials)
Collect and display testimonials from students and community members.

---

### 👥 Team Members
Manage foundation team, board members, and volunteers.

---

### 📊 Annual Reports
Upload and display annual impact reports.

---

### 💝 Donation Tiers
Configure donation levels and benefits for the donation page.

---

## Common Workflows

### Creating a News Article

1. Go to **News & Updates** in the studio
2. Click **"Create"**
3. Fill in:
   - Title: "Summer Concert Series Announced"
   - Category: Event Announcement
   - Excerpt: Brief summary (150-200 characters)
   - Featured Image: Upload with alt text
   - Content: Full article with rich formatting
   - Tags: summer, concerts, 2025
4. Set **Published At** to desired date/time
5. Toggle **Featured Post** if it should appear on homepage
6. Click **Publish**

### Creating a Program Detail Page

1. Go to **Pages** in the studio
2. Click **"Create"**
3. Fill in:
   - Title: "She Said Series: Celebrating Women in Music"
   - Slug: "she-said-series" (becomes `/pages/she-said-series`)
   - Hero Image: Program branding/photo
   - Content: Full program history, details, lineup, etc.
   - Call to Action: "View Upcoming Shows" → link to themusicvenue.org
4. Click **Publish**

### Updating Existing Content

1. Find the document in the appropriate section
2. Click to edit
3. Make changes
4. Click **Publish** to save

---

## Rich Text Editor Features

The content editor supports:

- **Headings**: H2, H3, H4 for section organization
- **Text formatting**: Bold, italic, code
- **Links**: Internal or external with "open in new tab" option
- **Images**: Upload inline images with captions and alt text
- **Quotes**: Blockquote styling
- **Lists**: Bulleted and numbered lists

---

## SEO Best Practices

Every Page and Post has an SEO section:

- **Meta Description**: 150-160 characters summarizing the page
- **Keywords**: Relevant search terms (comma-separated)
- **Social Sharing Image**: Image for Facebook/Twitter previews
  - Recommended: 1200x630px
  - Should include branding/text overlay

---

## Integration with Website

### News & Updates
- Homepage displays featured posts
- `/news-updates` page lists all posts
- Individual posts at `/news-updates/[slug]`
- Filtered by category
- Sortable by date

### Pages
- Accessible at `/pages/[slug]`
- Can be linked from navigation or other content
- Use for long-form program details
- Link from program cards to full page

---

## Access & Permissions

Contact your Sanity admin to:
- Add new users
- Configure roles (Editor, Admin, Viewer)
- Set up custom workflows
- Configure content approval processes

---

## Support

For technical support:
- **Sanity Issues**: Contact Sanity support or your developer
- **Content Questions**: Refer to this guide or contact your content lead
- **Schema Changes**: Contact your development team

---

## Tips for Content Managers

1. **Draft First**: Use Sanity's draft mode to preview before publishing
2. **Consistent Categories**: Stick to defined categories for better organization
3. **Image Optimization**: Use web-optimized images (WebP/JPEG, under 500KB)
4. **Alt Text**: Always add descriptive alt text for accessibility
5. **Regular Updates**: Keep news fresh - aim for 1-2 posts per week
6. **Featured Posts**: Limit to 3-5 to avoid overwhelming homepage
7. **SEO**: Fill out meta descriptions for better search visibility
8. **Slugs**: Keep URLs short, descriptive, and URL-friendly

---

## Next Steps

Once your schemas are deployed to Sanity:
1. Access the studio at `/studio`
2. Create your first Page or Post
3. Preview content on your local site
4. Publish when ready!
