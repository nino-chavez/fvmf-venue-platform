# FVMF Foundation - Image Guidelines for Content Creators

**Last Updated:** December 27, 2025

---

## Overview

This guide helps content creators upload images with the correct dimensions to ensure they display properly across the FVMF Foundation website.

---

## Image Requirements by Content Type

### News & Updates - Card Image

**Used In:**
- News listing page (post cards)
- Featured posts section

**Recommended Dimensions:**
- **Width:** 600px
- **Height:** 400px
- **Aspect Ratio:** 3:2
- **File Format:** JPG or PNG
- **File Size:** Under 1MB

**Display Behavior:**
- **Post Cards:** Displayed at 600×400px (or scaled proportionally)
- **Cropping:** Images use `object-cover` which crops from the center
- **Container Height:** 192px (mobile) to 224px (featured cards)

**Best Practices:**
1. ✅ Keep important subjects in the **center** of the image
2. ✅ Avoid placing text or faces near the edges
3. ✅ Use horizontal (landscape) orientation
4. ✅ Choose a compelling, representative image for the article
5. ❌ Don't use vertical (portrait) images - they will be severely cropped

### News & Updates - Hero Image

**Used In:**
- Post detail page (top hero section)

**Recommended Dimensions:**
- **Width:** 1920px
- **Height:** 1080px
- **Aspect Ratio:** 16:9
- **File Format:** JPG or PNG
- **File Size:** Under 2MB

**Display Behavior:**
- **Hero Section:** Full width, responsive height (400px mobile, 500px tablet, 600px desktop)
- **Overlay:** Dark gradient overlay for text readability
- **Cropping:** Images use `object-cover` centered

**Best Practices:**
1. ✅ Keep important subjects **centered horizontally and vertically**
2. ✅ Ensure good contrast (dark overlay will be applied)
3. ✅ Use high-impact, wide images that work well with text overlay
4. ✅ Avoid busy backgrounds that compete with headline text
5. ❌ Don't place critical details at extreme edges

**Example Safe Zone:**
```
┌────────────────────────────────────┐
│                                    │ Top 10% - May be cropped
│  ┌──────────────────────────────┐  │
│  │                              │  │
│  │   SAFE ZONE                  │  │ Center 60% - Always visible
│  │   Place important content    │  │
│  │   here (faces, text, logos)  │  │
│  │                              │  │
│  └──────────────────────────────┘  │
│                                    │ Bottom 10% - May be cropped
└────────────────────────────────────┘
```

---

### Standalone Pages - Hero Image

**Used In:**
- Page detail view (hero section)

**Recommended Dimensions:**
- **Width:** 1920px
- **Height:** 800px
- **Aspect Ratio:** 2.4:1 (wide)
- **File Format:** JPG or PNG
- **File Size:** Under 2MB

**Display Behavior:**
- **Hero Section:** Cropped to full width × 400px height
- **Overlay:** Dark gradient overlay applied for text readability

**Best Practices:**
1. ✅ Use wide, panoramic images
2. ✅ Ensure good contrast for white text overlay
3. ✅ Place important subjects in the center horizontally
4. ❌ Avoid busy backgrounds that compete with text

---

### Content Images (in Portable Text)

**Used In:**
- Post body content
- Page body content

**Recommended Dimensions:**
- **Width:** 1200px to 2400px
- **Height:** Variable (maintain natural aspect ratio)
- **File Format:** JPG or PNG
- **File Size:** Under 1MB per image

**Display Behavior:**
- **Max Width:** 800px (article width)
- **Responsive:** Scales down on mobile devices
- **Maintains Aspect Ratio:** No cropping

**Best Practices:**
1. ✅ Use any aspect ratio that suits the content
2. ✅ Add descriptive alt text for accessibility
3. ✅ Add captions to provide context
4. ✅ Optimize images before upload (compress)

---

## Image Upload Checklist

Before uploading any image to Sanity Studio:

- [ ] **Check dimensions** - Does it match recommended size?
- [ ] **Test safe zone** - Is important content in the center 60%?
- [ ] **Optimize file size** - Is it under 2MB?
- [ ] **Add alt text** - Descriptive text for screen readers
- [ ] **Add caption** (optional) - Context for readers
- [ ] **Preview** - How does it look when cropped?

---

## Tools for Image Preparation

### Free Online Tools

1. **Resize Images:**
   - [Squoosh.app](https://squoosh.app/) - Compress and resize
   - [TinyPNG](https://tinypng.com/) - Compress JPG/PNG
   - [Canva](https://www.canva.com/) - Design and resize (free account)

2. **Check Aspect Ratio:**
   - Upload to Canva
   - Create custom dimension (1920×1080 for news, 1920×800 for pages)
   - See how your image fits

3. **Crop to Safe Zone:**
   - Use Canva's grid feature
   - Center important elements
   - Export at recommended dimensions

---

## Common Issues and Solutions

### Issue: Image is cut off on post card
**Cause:** Image is vertical/portrait orientation
**Solution:** Use horizontal/landscape images (16:9 ratio)

### Issue: Hero image shows unexpected cropping
**Cause:** Important content is near the edges
**Solution:** Re-crop image with important subjects centered

### Issue: Image looks blurry
**Cause:** Original image is too small (upscaled)
**Solution:** Use higher resolution source (minimum 1920px wide)

### Issue: Image takes long to load
**Cause:** File size is too large (over 2MB)
**Solution:** Compress using Squoosh or TinyPNG before upload

---

## Accessibility Requirements

All images MUST have alt text:

**Good Alt Text:**
- ✅ "Students learning guitar at FVMF summer workshop"
- ✅ "Crowd enjoying live performance at The Venue Aurora"
- ✅ "FVMF volunteer teaching music theory to young student"

**Bad Alt Text:**
- ❌ "Image" or "Photo"
- ❌ "IMG_1234.jpg"
- ❌ Leaving alt text empty (unless purely decorative)

**Alt Text Guidelines:**
1. Describe what's happening in the image
2. Include relevant context (who, what, where)
3. Keep it concise (under 125 characters)
4. Don't start with "Image of..." (screen readers announce it's an image)

---

## Quick Reference Chart

| Content Type | Dimensions | Aspect Ratio | Max File Size |
|--------------|------------|--------------|---------------|
| News Card Image | 600×400px | 3:2 | 1MB |
| News Hero Image | 1920×1080px | 16:9 | 2MB |
| Page Hero Image | 1920×800px | 2.4:1 | 2MB |
| Content Image | 1200-2400px wide | Any | 1MB |

---

## Need Help?

If you're unsure about image sizing or need assistance:

1. Check this guide first
2. Test your image in Sanity Studio preview
3. Ask the development team if issues persist

**Remember:** It's better to upload a slightly larger image than needed (the system will resize) than to upload one that's too small (will look pixelated).
