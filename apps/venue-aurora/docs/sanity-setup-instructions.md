# Sanity CMS Setup Instructions

## Overview

This guide walks you through setting up Sanity CMS for The Venue Aurora blog. Sanity provides a free tier that includes:
- 3 users (perfect for a small blog team)
- 10GB assets storage
- 10,000 API requests per day
- Unlimited API CDN requests

---

## Step 1: Create a Sanity Account

1. **Go to Sanity.io**
   - Visit: https://www.sanity.io/
   - Click "Get Started" or "Sign Up"

2. **Sign Up**
   - Option 1: Sign up with GitHub (recommended for developers)
   - Option 2: Sign up with Google
   - Option 3: Sign up with email

3. **Verify Your Email**
   - Check your email for verification link
   - Click the link to verify your account

---

## Step 2: Create a New Sanity Project

1. **Log in to Sanity Manage**
   - Go to: https://www.sanity.io/manage
   - You should see the Sanity dashboard

2. **Create a New Project**
   - Click "Create project" button
   - Fill in the project details:
     - **Project name**: "The Venue Aurora" (or your preferred name)
     - **Organization**: Select your organization or create a new one
   - Click "Create project"

3. **Choose a Plan**
   - Select **"Free"** plan (no credit card required)
   - Click "Continue"

4. **Note Your Project ID**
   - After creation, you'll see your Project ID
   - **IMPORTANT**: Copy this ID - you'll need it for configuration
   - Example format: `abc123de`

---

## Step 3: Create a Dataset

1. **In the Project Settings**
   - You should see "Datasets" section
   - Click "Add dataset"

2. **Configure Dataset**
   - **Name**: `production` (recommended)
   - **Visibility**: Public (for public blog content)
   - Click "Create"

---

## Step 4: Configure Environment Variables

1. **Create `.env.local` File**
   - In your project root, create a file named `.env.local`
   - This file should NOT be committed to git (already in .gitignore)

2. **Add Sanity Credentials**

   Open `.env.local` and add:

   ```bash
   # Existing Eventbrite credentials (keep these)
   EVENTBRITE_PRIVATE_TOKEN=your_existing_token
   EVENTBRITE_ORG_ID=your_existing_org_id

   # Sanity CMS
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Replace Placeholder Values**
   - Replace `your_project_id_here` with the Project ID from Step 2
   - Keep `production` as the dataset name (unless you chose a different name)

4. **Save the File**

---

## Step 5: Verify Installation

1. **Check Dependencies**

   All Sanity dependencies should already be installed:
   - `sanity`
   - `next-sanity`
   - `@sanity/image-url`
   - `@portabletext/react`
   - `@sanity/vision`
   - `styled-components`

   If not, install them:
   ```bash
   npm install next-sanity @sanity/image-url @portabletext/react sanity @sanity/vision styled-components --legacy-peer-deps
   ```

2. **Test Local Development**
   ```bash
   npm run dev
   ```

3. **Access Sanity Studio**
   - Open your browser
   - Navigate to: `http://localhost:3000/studio`
   - You should see the Sanity Studio login screen

4. **Log In to Studio**
   - Use the same credentials you used to create your Sanity account
   - You should now see the Sanity Studio interface

---

## Step 6: Configure CORS for Studio

Sanity Studio needs permission to access your Sanity project from your domain.

1. **Go to Project Settings**
   - Visit: https://www.sanity.io/manage
   - Select your project: "The Venue Aurora"
   - Click "API" in the left sidebar

2. **Add CORS Origin**
   - Scroll to "CORS Origins" section
   - Click "Add CORS origin"

   For **Local Development**:
   - **Origin**: `http://localhost:3000`
   - **Allow credentials**: ✓ (checked)
   - Click "Save"

   For **Production** (when you deploy):
   - Click "Add CORS origin" again
   - **Origin**: `https://venueaurora.com` (or your actual domain)
   - **Allow credentials**: ✓ (checked)
   - Click "Save"

---

## Step 7: Create Your First Content

### Create an Author Profile

1. **In Sanity Studio** (`http://localhost:3000/studio`)
2. Click "Authors" in the left sidebar
3. Click "+ Create" button
4. Fill in your details:
   - **Name**: Your name
   - **Slug**: Auto-generated (or customize)
   - **Role**: e.g., "Blog Manager", "Volunteer Writer"
   - **Image**: Upload a headshot (optional)
   - **Bio**: 2-3 sentences about you
   - **Email**: Your email (optional)
5. Click "Publish" in the bottom-right

### Create a Category

1. Click "Categories" in the left sidebar
2. Click "+ Create"
3. Fill in:
   - **Title**: e.g., "Venue News"
   - **Slug**: Auto-generated
   - **Description**: Brief description
   - **Color**: Pick a color for the badge (optional)
4. Click "Publish"

Create a few more categories like:
- Artist Spotlight
- Event Recap
- Community
- Behind the Scenes

### Create Your First Blog Post

1. Click "Blog Posts" in the left sidebar
2. Click "+ Create" → "Post"
3. Fill in:
   - **Title**: Your post title
   - **Slug**: Auto-generated from title
   - **Author**: Select the author you created
   - **Published At**: Select today's date
   - **Excerpt**: 1-2 sentence summary
   - **Main Image**: Upload a featured image
   - **Categories**: Select 1-3 categories
   - **Body**: Write your content using the rich text editor
4. Optionally:
   - Toggle "Featured" ON to show in featured section
   - Fill in SEO settings for better search optimization
5. Click "Publish"

---

## Step 8: Verify on Your Website

1. **Ensure Dev Server is Running**
   ```bash
   npm run dev
   ```

2. **Visit the Blog Page**
   - Go to: `http://localhost:3000/blog`
   - You should see your published post

3. **Click to Read Full Post**
   - Click on your post title
   - Verify the full post displays correctly

4. **Check RSS Feed**
   - Go to: `http://localhost:3000/blog/rss.xml`
   - You should see an XML feed with your post

---

## Step 9: Invite Team Members (Optional)

If you want to add volunteer writers:

1. **Go to Project Settings**
   - Visit: https://www.sanity.io/manage
   - Select your project
   - Click "Members" in the left sidebar

2. **Invite Members**
   - Click "Invite member"
   - Enter their email address
   - Select role:
     - **Administrator**: Full access (be careful with this)
     - **Editor**: Can create and publish content (recommended for writers)
     - **Viewer**: Read-only access
   - Click "Send invite"

3. **They'll Receive an Email**
   - Invitees get an email with signup link
   - They create a Sanity account (if they don't have one)
   - They can then access the Studio at `https://venueaurora.com/studio`

4. **Create Author Profiles**
   - After they join, create Author profiles for each team member
   - They can then be assigned as post authors

---

## Step 10: Deploy to Production

### Update Vercel Environment Variables

1. **Log in to Vercel Dashboard**
   - Go to: https://vercel.com/dashboard
   - Select your "venue-aurora" project

2. **Add Environment Variables**
   - Go to Settings → Environment Variables
   - Add the following variables:
     - **Key**: `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - **Value**: Your Sanity Project ID
     - **Environments**: Production, Preview, Development
   - Click "Save"

   - **Key**: `NEXT_PUBLIC_SANITY_DATASET`
     - **Value**: `production`
     - **Environments**: Production, Preview, Development
   - Click "Save"

3. **Redeploy**
   - Go to Deployments tab
   - Click the three dots (...) on the latest deployment
   - Click "Redeploy"
   - Or push a new commit to trigger automatic deployment

4. **Verify Production**
   - After deployment completes, visit: `https://venueaurora.com/blog`
   - Your posts should appear on the live site

5. **Add Production CORS** (if not done in Step 6)
   - Go back to Sanity CORS settings
   - Add `https://venueaurora.com` as allowed origin

---

## Ongoing Maintenance

### Publishing Workflow

1. Writers log in to `/studio`
2. Create posts as drafts
3. Publish when ready
4. Changes appear on the website immediately (or within 60 seconds due to caching)

### Content Revalidation

The website uses Next.js ISR (Incremental Static Regeneration) with:
- Blog listing page: Revalidates every hour
- Individual posts: Revalidated on-demand when published
- RSS feed: Dynamic (always fresh)

To manually trigger revalidation, you can:
1. Publish or unpublish a post in Studio (this triggers rebuild)
2. Redeploy on Vercel
3. Wait for automatic revalidation (every hour for blog listing)

### Backup and Export

Sanity stores all your content. To export for backup:

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Export dataset
sanity dataset export production backup.tar.gz --project your-project-id
```

Store the backup file securely (e.g., Google Drive, Dropbox).

---

## Troubleshooting

### "Configuration must contain projectId" Error

**Problem**: Build fails or Studio won't load.

**Solution**:
1. Verify `.env.local` exists and has correct values
2. Restart dev server: `npm run dev`
3. Clear Next.js cache: `rm -rf .next`
4. Rebuild: `npm run build`

### "Dataset not found" Error

**Problem**: Can't fetch posts.

**Solution**:
1. Verify dataset name in Sanity dashboard matches `.env.local`
2. Check you created the dataset in Sanity (Step 3)
3. Ensure `NEXT_PUBLIC_SANITY_DATASET=production`

### Studio Shows "Forbidden" or CORS Error

**Problem**: Can't access Studio from your domain.

**Solution**:
1. Add CORS origin in Sanity project settings (Step 6)
2. Include `http://localhost:3000` for local dev
3. Include `https://venueaurora.com` for production
4. Check "Allow credentials" is enabled

### Posts Don't Appear on Website

**Problem**: Published posts don't show on `/blog`.

**Solution**:
1. Check "Published At" date is not in the future
2. Verify you clicked "Publish" (not just "Save")
3. Wait 2-3 minutes for cache to clear
4. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Images Won't Upload

**Problem**: Can't upload images to posts.

**Solution**:
1. Check file size (max 10MB on free tier)
2. Use supported formats: JPG, PNG, WebP
3. Compress large images before uploading
4. Verify you have storage quota remaining

### "Module not found" Errors During Build

**Problem**: Build fails with missing Sanity modules.

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# If still failing, install Sanity packages explicitly
npm install next-sanity @sanity/image-url @portabletext/react sanity @sanity/vision styled-components --legacy-peer-deps
```

---

## Resources

- **Sanity Dashboard**: https://www.sanity.io/manage
- **Sanity Documentation**: https://www.sanity.io/docs
- **Volunteer Guide**: `/docs/sanity-studio-volunteer-guide.md`
- **Support**: support@sanity.io (for Sanity-specific issues)

---

## Summary Checklist

- [ ] Created Sanity account
- [ ] Created Sanity project and noted Project ID
- [ ] Created `production` dataset
- [ ] Added environment variables to `.env.local`
- [ ] Added CORS origins (localhost and production domain)
- [ ] Tested Studio access at `/studio`
- [ ] Created first Author profile
- [ ] Created blog categories
- [ ] Published first blog post
- [ ] Verified post appears on website
- [ ] Added environment variables to Vercel
- [ ] Deployed to production
- [ ] Shared volunteer guide with team members

**Congratulations!** Your blog CMS is now fully configured and ready to use.
