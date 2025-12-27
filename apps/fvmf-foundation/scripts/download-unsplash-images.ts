/**
 * Download curated venue photos from Unsplash
 *
 * This script downloads high-quality, free-to-use photos from Unsplash
 * that match the authentic venue aesthetic for FVMF Foundation.
 *
 * Unsplash API is free and doesn't require authentication for download URLs.
 */

import fs from 'fs'
import path from 'path'

interface UnsplashImage {
  filename: string
  unsplashId: string
  photographer: string
  description: string
  category: 'venue' | 'event'
}

// Curated images from Unsplash with authentic venue aesthetic
const images: UnsplashImage[] = [
  // Venue Gallery Images
  {
    filename: 'venue-interior.jpg',
    unsplashId: '4dKy7d3lkKM', // Intimate venue interior with warm lighting
    photographer: 'Aranxa Esteve',
    description: 'Intimate concert venue with warm lighting',
    category: 'venue'
  },
  {
    filename: 'venue-stage.jpg',
    unsplashId: 'Nyvq2juw4_o', // Small stage setup with instruments
    photographer: 'Marius Masalar',
    description: 'Small venue stage with professional audio equipment',
    category: 'venue'
  },
  {
    filename: 'venue-audience.jpg',
    unsplashId: 'hzgs56Ze49s', // Engaged audience at concert
    photographer: 'Anthony DELANOIX',
    description: 'Engaged audience at intimate live performance',
    category: 'venue'
  },

  // Event Card Backgrounds
  {
    filename: 'event-blues.jpg',
    unsplashId: 'gcsNOsPEXfs', // Blues/rock guitarist on stage
    photographer: 'Abhilash Sahoo',
    description: 'Blues guitarist with dramatic stage lighting',
    category: 'event'
  },
  {
    filename: 'event-acoustic.jpg',
    unsplashId: 'nGrfKmtwv24', // Acoustic guitar performer
    photographer: 'Zachary Pearson',
    description: 'Acoustic guitar with warm, intimate lighting',
    category: 'event'
  },
  {
    filename: 'event-jazz.jpg',
    unsplashId: 'K4mSJ7kc0As', // Saxophone player
    photographer: 'Eric Krull',
    description: 'Jazz saxophone with moody stage lighting',
    category: 'event'
  },
  {
    filename: 'event-rock.jpg',
    unsplashId: 'MohB4LCIPyM', // Drums with dramatic lighting
    photographer: 'Dominik Scythe',
    description: 'Rock drummer mid-performance with dynamic lighting',
    category: 'event'
  },
  {
    filename: 'event-folk.jpg',
    unsplashId: 'EfhCUc_fjrU', // Folk instruments
    photographer: 'Namroud Gorguis',
    description: 'Folk instruments with warm, natural lighting',
    category: 'event'
  }
]

/**
 * Download image from Unsplash
 */
async function downloadImage(image: UnsplashImage): Promise<void> {
  // Unsplash download URL (high quality, free to use)
  const downloadUrl = `https://unsplash.com/photos/${image.unsplashId}/download?force=true`

  console.log(`\n📸 Downloading: ${image.filename}`)
  console.log(`   Photo by: ${image.photographer}`)
  console.log(`   Description: ${image.description}`)

  try {
    // Fetch image
    const response = await fetch(downloadUrl, {
      headers: {
        'User-Agent': 'FVMF-Foundation-Website/1.0'
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to download: ${response.status} ${response.statusText}`)
    }

    // Follow redirect to get actual image
    const imageResponse = await fetch(response.url)

    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.status}`)
    }

    const arrayBuffer = await imageResponse.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Save to public/images/
    const outputDir = path.join(process.cwd(), 'public', 'images')
    const outputPath = path.join(outputDir, image.filename)

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true})
    }

    fs.writeFileSync(outputPath, buffer)

    console.log(`   ✓ Saved: public/images/${image.filename}`)

  } catch (error) {
    console.error(`   ✗ Failed to download ${image.filename}:`, error)
    throw error
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🎸 FVMF Unsplash Image Downloader')
  console.log('=' .repeat(50))
  console.log(`\n📊 Downloading ${images.length} curated venue photos...`)
  console.log('\nAll photos are from Unsplash (unsplash.com) and are free to use')
  console.log('under the Unsplash License (https://unsplash.com/license)\n')

  let successCount = 0
  let failCount = 0

  // Download images sequentially to be polite to Unsplash
  for (const image of images) {
    try {
      await downloadImage(image)
      successCount++

      // Add small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      failCount++
      console.error(`\n❌ Failed to download ${image.filename}`)
      // Continue with next image even if one fails
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log(`✅ Download complete!`)
  console.log(`   Success: ${successCount}/${images.length}`)
  if (failCount > 0) {
    console.log(`   Failed: ${failCount}/${images.length}`)
  }
  console.log('\nImages saved to: public/images/')

  // Create attribution file
  const attributionPath = path.join(process.cwd(), 'public', 'images', 'ATTRIBUTIONS.md')
  const attributionContent = `# Photo Credits

All photos from [Unsplash](https://unsplash.com) - Free to use under the [Unsplash License](https://unsplash.com/license)

## Venue Gallery

- **venue-interior.jpg** - Photo by [${images[0].photographer}](https://unsplash.com/photos/${images[0].unsplashId})
- **venue-stage.jpg** - Photo by [${images[1].photographer}](https://unsplash.com/photos/${images[1].unsplashId})
- **venue-audience.jpg** - Photo by [${images[2].photographer}](https://unsplash.com/photos/${images[2].unsplashId})

## Event Backgrounds

- **event-blues.jpg** - Photo by [${images[3].photographer}](https://unsplash.com/photos/${images[3].unsplashId})
- **event-acoustic.jpg** - Photo by [${images[4].photographer}](https://unsplash.com/photos/${images[4].unsplashId})
- **event-jazz.jpg** - Photo by [${images[5].photographer}](https://unsplash.com/photos/${images[5].unsplashId})
- **event-rock.jpg** - Photo by [${images[6].photographer}](https://unsplash.com/photos/${images[6].unsplashId})
- **event-folk.jpg** - Photo by [${images[7].photographer}](https://unsplash.com/photos/${images[7].unsplashId})
`

  fs.writeFileSync(attributionPath, attributionContent)
  console.log('\n📝 Created ATTRIBUTIONS.md with photo credits')
}

// Run script
main().catch(error => {
  console.error('\n❌ Fatal error:', error)
  process.exit(1)
})
