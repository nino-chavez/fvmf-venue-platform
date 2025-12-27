# 🎸 FVMF Image Generation Guide

## Quick Start (3 Steps)

### 1. Get OpenRouter API Key

Visit [openrouter.ai/keys](https://openrouter.ai/keys) and create an API key.

### 2. Set Environment Variable

```bash
export OPENROUTER_API_KEY="sk-or-v1-your-key-here"
```

### 3. Generate Images

```bash
npm run generate:images
```

That's it! Images will be saved to `public/images/`.

---

## What Gets Generated

### Venue Gallery Images (for Homepage)
- **venue-interior.jpg** - Intimate 200-seat listening room
- **venue-stage.jpg** - Stage with professional equipment
- **venue-audience.jpg** - Engaged audience at live show

### Event Card Backgrounds (for Programs Page)
- **event-blues.jpg** - Blues performance atmosphere
- **event-acoustic.jpg** - Acoustic singer-songwriter
- **event-jazz.jpg** - Jazz performance energy
- **event-rock.jpg** - Rock show dynamics
- **event-folk.jpg** - Folk music intimacy

---

## Cost

Approximately **$0.32 total** for all 8 images using Flux 1.1 Pro model.

---

## Aesthetic Direction

All prompts are designed to capture the **authentic venue aesthetic**:

- ✅ Warm, welcoming lighting (amber, blue, orange)
- ✅ Lived-in, authentic atmosphere
- ✅ Real community connections
- ✅ Gritty, passionate energy
- ✅ Professional but not corporate
- ❌ NOT overly polished or sterile
- ❌ NOT generic stock photos

---

## After Generation

1. **Review Images**
   ```bash
   open public/images/
   ```

2. **Update Components**

   The script uses filenames that match the components:
   - Homepage venue gallery → `venue-*.jpg`
   - Event cards → `event-*.jpg`

3. **Update Image Paths in Code**

   **Homepage (`src/app/page.tsx`):**
   ```typescript
   // Replace existing images with:
   <Image src="/images/venue-interior.jpg" ... />
   <Image src="/images/venue-stage.jpg" ... />
   <Image src="/images/venue-audience.jpg" ... />
   ```

   **Programs Page (`src/app/programs/page.tsx`):**
   ```typescript
   // Replace gradient backgrounds with:
   <Image src="/images/event-blues.jpg" ... />
   <Image src="/images/event-acoustic.jpg" ... />
   // etc.
   ```

4. **Optimize (Optional)**

   Convert to WebP for better performance:
   ```bash
   npm run optimize:images  # Coming soon
   ```

---

## Troubleshooting

### "OPENROUTER_API_KEY environment variable is required"

Check if it's set:
```bash
echo $OPENROUTER_API_KEY
```

Should output `sk-or-v1-...`. If not, set it again.

### "OpenRouter API error: 401"

Your API key is invalid. Get a new one from [openrouter.ai/keys](https://openrouter.ai/keys).

### "OpenRouter API error: 429" (Rate Limit)

The script already has 2-second delays between requests. If you still hit limits, wait a minute and try again.

### Images look wrong

1. Check the generated images in `public/images/`
2. If they don't match the aesthetic, edit the prompts in `scripts/generate-venue-images.ts`
3. Re-run `npm run generate:images`

---

## Advanced: Customize Prompts

Edit `scripts/generate-venue-images.ts`:

```typescript
const imagePrompts: ImagePrompt[] = [
  {
    filename: 'your-custom-image.jpg',
    category: 'venue',
    prompt: 'Your detailed prompt here. Be specific about:
      - Setting (intimate venue, 200 seats, Aurora IL)
      - Lighting (warm amber and blue)
      - Atmosphere (lived-in, authentic, welcoming)
      - Technical specs (shot on DSLR, cinematic)
      - What to avoid (corporate, generic, cold)'
  },
  // ... more prompts
]
```

Then run:
```bash
npm run generate:images
```

---

## Alternative: Use Free Stock Photos

If you don't want to use AI generation, high-quality venue photos can be found at:

- [Unsplash](https://unsplash.com/s/photos/music-venue)
- [Pexels](https://pexels.com/search/live-music/)
- [Pixabay](https://pixabay.com/images/search/concert/)

Search terms:
- "intimate music venue"
- "small concert hall"
- "live music performance"
- "acoustic performance"
- "blues club"

---

## Need Help?

See full documentation in `scripts/README.md`.
