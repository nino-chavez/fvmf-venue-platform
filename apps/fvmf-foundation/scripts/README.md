# FVMF Image Generation Scripts

## Overview

This directory contains scripts for generating AI images for the FVMF Foundation website using OpenRouter API.

## Setup

### 1. Get OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (starts with `sk-or-...`)

### 2. Set Environment Variable

```bash
# Option 1: Set in your shell (temporary)
export OPENROUTER_API_KEY="sk-or-v1-your-key-here"

# Option 2: Add to .env.local (persistent)
echo 'OPENROUTER_API_KEY="sk-or-v1-your-key-here"' >> .env.local

# Option 3: Add to your shell profile (persistent across sessions)
echo 'export OPENROUTER_API_KEY="sk-or-v1-your-key-here"' >> ~/.zshrc
source ~/.zshrc
```

## Usage

### Generate All Venue Images

```bash
# From the fvmf-foundation directory
npm run generate:images

# Or run directly with tsx
npx tsx scripts/generate-venue-images.ts
```

This will generate:

**Venue Gallery Images:**
- `venue-interior.jpg` - Intimate 200-seat listening room interior
- `venue-stage.jpg` - Stage setup with professional equipment
- `venue-audience.jpg` - Engaged audience at live performance

**Event Card Backgrounds:**
- `event-blues.jpg` - Blues performance atmosphere
- `event-acoustic.jpg` - Acoustic singer-songwriter vibe
- `event-jazz.jpg` - Jazz performance energy
- `event-rock.jpg` - Rock show dynamics
- `event-folk.jpg` - Folk music intimacy

## Image Models

The script uses **Flux 1.1 Pro** (`black-forest-labs/flux-1.1-pro`) via OpenRouter, which provides:

- High-quality photorealistic images
- Professional photography aesthetic
- Authentic venue atmosphere
- Proper lighting and composition

## Cost Estimates

OpenRouter pricing for Flux 1.1 Pro:
- ~$0.04 per image (1024x1024)
- Total for 8 images: ~$0.32

## Customization

### Add New Image Prompts

Edit `scripts/generate-venue-images.ts` and add to the `imagePrompts` array:

```typescript
{
  filename: 'your-image.jpg',
  category: 'venue',
  prompt: 'Your detailed prompt here...'
}
```

### Change Image Model

Edit the `model` parameter in the API request:

```typescript
model: 'black-forest-labs/flux-1.1-pro', // Current
// Or try:
model: 'stability-ai/stable-diffusion-xl',
model: 'openai/dall-e-3',
```

See [OpenRouter Models](https://openrouter.ai/models) for available options.

## Aesthetic Guidelines

Our image prompts follow the **authentic venue aesthetic**:

✅ **DO:**
- Warm, welcoming lighting (amber, blue, orange)
- Lived-in, authentic atmosphere
- Real community connections
- Gritty, passionate energy
- Professional but not corporate
- Grassroots music venue vibe

❌ **DON'T:**
- Overly polished or sterile
- Corporate or generic
- Cold or minimal aesthetics
- Stock photo feeling
- Disconnected from reality

## Troubleshooting

### "OPENROUTER_API_KEY environment variable is required"

Make sure you've set the environment variable:

```bash
echo $OPENROUTER_API_KEY
# Should output: sk-or-v1-...
```

### "OpenRouter API error: 401"

Your API key is invalid or expired. Get a new one from OpenRouter.ai.

### "OpenRouter API error: 429"

You've hit the rate limit. The script includes a 2-second delay between requests. If you still hit limits, increase the delay in the script.

### Images look wrong or low quality

Try adjusting the prompt or changing the model. See customization section above.

## Next Steps

After generating images:

1. Review images in `public/images/`
2. Update image references in components:
   - `src/app/page.tsx` (venue gallery)
   - `src/app/programs/page.tsx` (event cards)
3. Optimize images for web (WebP conversion)
4. Test responsive behavior at different screen sizes

## Additional Scripts

### Convert to WebP (Coming Soon)

```bash
npm run optimize:images
```

This will convert all JPG/PNG images to WebP format for better performance.
