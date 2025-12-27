/**
 * Generate AI images for FVMF Foundation website using OpenRouter API
 *
 * This script generates authentic venue-themed images for:
 * - Venue gallery cards (interior, stage, audience)
 * - Event card backgrounds
 * - Hero section backgrounds
 */

import fs from 'fs'
import path from 'path'

interface ImagePrompt {
  filename: string
  prompt: string
  category: 'venue' | 'event' | 'hero'
}

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'

// Image prompts following the authentic, lived-in aesthetic
const imagePrompts: ImagePrompt[] = [
  // Venue gallery images
  {
    filename: 'venue-interior.jpg',
    category: 'venue',
    prompt: 'Professional photograph of an intimate 200-seat music venue interior in Aurora, Illinois. Warm amber and blue stage lighting illuminating empty seats and a small stage. Exposed brick walls, vintage industrial details, cozy listening room atmosphere. The aesthetic should feel lived-in, authentic, and welcoming - like a beloved neighborhood venue, not a corporate space. High quality, cinematic lighting, shot on DSLR.'
  },
  {
    filename: 'venue-stage.jpg',
    category: 'venue',
    prompt: 'Professional photograph of a small music venue stage setup in downtown Aurora. Microphones, guitar stands, drum kit visible. Warm stage lights creating an intimate atmosphere. Professional sound equipment, wood stage floor, vintage-inspired details. Authentic grassroots music venue aesthetic - gritty, real, passionate. Not overly polished or corporate. Shot on DSLR, cinematic composition.'
  },
  {
    filename: 'venue-audience.jpg',
    category: 'venue',
    prompt: 'Professional photograph of an engaged audience at an intimate live music venue. People of diverse ages enjoying a performance, warm venue lighting, authentic community atmosphere. 200-seat capacity listening room in Aurora, Illinois. Captures the energy and connection of live music - real people, real venue, real community. Shot on DSLR, photojournalistic style, warm color palette.'
  },

  // Event card backgrounds
  {
    filename: 'event-blues.jpg',
    category: 'event',
    prompt: 'Abstract artistic photograph of blues music performance. Silhouette of guitarist on stage with dramatic blue lighting, smoke effects, intimate venue atmosphere. Moody, atmospheric, high contrast. Professional music photography, cinematic lighting, authentic blues club aesthetic.'
  },
  {
    filename: 'event-acoustic.jpg',
    category: 'event',
    prompt: 'Abstract artistic photograph of acoustic music performance. Close-up of acoustic guitar strings and fingers, warm amber lighting, intimate setting. Shallow depth of field, bokeh background lights, warm color palette. Professional music photography, captures the intimacy of singer-songwriter performances.'
  },
  {
    filename: 'event-jazz.jpg',
    category: 'event',
    prompt: 'Abstract artistic photograph of jazz performance. Saxophone player in profile with purple and orange stage lighting, smoke atmosphere, intimate venue setting. Dynamic composition, high contrast, professional music photography. Captures the energy and sophistication of live jazz.'
  },
  {
    filename: 'event-rock.jpg',
    category: 'event',
    prompt: 'Abstract artistic photograph of rock music performance. Drummer mid-performance with dynamic red and orange lighting, motion blur on drumsticks, high energy. Professional concert photography, authentic rock club atmosphere, gritty and real aesthetic.'
  },
  {
    filename: 'event-folk.jpg',
    category: 'event',
    prompt: 'Abstract artistic photograph of folk music performance. Banjo or mandolin close-up with warm golden lighting, intimate coffeehouse atmosphere. Soft focus background, warm wood tones, authentic grassroots music aesthetic. Professional music photography, inviting and welcoming mood.'
  }
]

/**
 * Generate image using OpenRouter API with image generation model
 */
async function generateImage(imagePrompt: ImagePrompt): Promise<void> {
  if (!OPENROUTER_API_KEY) {
    throw new Error('OPENROUTER_API_KEY environment variable is required')
  }

  console.log(`\n🎨 Generating: ${imagePrompt.filename}`)
  console.log(`   Prompt: ${imagePrompt.prompt.substring(0, 100)}...`)

  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://foxvalleymusicfoundation.com',
        'X-Title': 'FVMF Image Generator'
      },
      body: JSON.stringify({
        model: 'openai/dall-e-3', // High-quality image generation
        messages: [
          {
            role: 'user',
            content: imagePrompt.prompt
          }
        ],
        // Image generation parameters
        max_tokens: 1024,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`OpenRouter API error: ${response.status} ${errorText}`)
    }

    const data = await response.json()

    // Extract image URL from response
    const imageUrl = extractImageUrl(data)

    if (!imageUrl) {
      console.error('Response data:', JSON.stringify(data, null, 2))
      throw new Error('No image URL found in response')
    }

    // Download and save image
    await downloadImage(imageUrl, imagePrompt.filename)

    console.log(`   ✓ Saved: public/images/${imagePrompt.filename}`)

  } catch (error) {
    console.error(`   ✗ Failed to generate ${imagePrompt.filename}:`, error)
    throw error
  }
}

/**
 * Extract image URL from OpenRouter response
 */
function extractImageUrl(data: any): string | null {
  // OpenRouter returns image URLs in various formats depending on the model
  // Try multiple extraction paths

  if (data.choices?.[0]?.message?.content) {
    const content = data.choices[0].message.content

    // Check if content is a URL
    if (typeof content === 'string' && content.startsWith('http')) {
      return content
    }

    // Check if content contains markdown image
    const markdownMatch = content.match(/!\[.*?\]\((https?:\/\/[^\)]+)\)/)
    if (markdownMatch) {
      return markdownMatch[1]
    }

    // Check if content contains plain URL
    const urlMatch = content.match(/(https?:\/\/[^\s]+)/)
    if (urlMatch) {
      return urlMatch[1]
    }
  }

  // Check for image_url in data field
  if (data.data?.[0]?.url) {
    return data.data[0].url
  }

  return null
}

/**
 * Download image from URL and save to public/images/
 */
async function downloadImage(url: string, filename: string): Promise<void> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.status}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const outputDir = path.join(process.cwd(), 'public', 'images')
  const outputPath = path.join(outputDir, filename)

  // Ensure directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(outputPath, buffer)
}

/**
 * Main execution
 */
async function main() {
  console.log('🎸 FVMF Venue Image Generator')
  console.log('=' .repeat(50))

  if (!OPENROUTER_API_KEY) {
    console.error('\n❌ Error: OPENROUTER_API_KEY environment variable is required')
    console.error('\nSet it with:')
    console.error('  export OPENROUTER_API_KEY="your-api-key-here"')
    process.exit(1)
  }

  console.log(`\n📊 Generating ${imagePrompts.length} images...`)

  // Generate images sequentially to avoid rate limits
  for (const prompt of imagePrompts) {
    try {
      await generateImage(prompt)
      // Add delay between requests to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`\n❌ Failed to generate ${prompt.filename}`)
      console.error(error)
      // Continue with next image even if one fails
    }
  }

  console.log('\n✅ Image generation complete!')
  console.log('\nGenerated images saved to: public/images/')
}

// Run script
main().catch(error => {
  console.error('\n❌ Fatal error:', error)
  process.exit(1)
})
