#!/usr/bin/env node

/**
 * Cleanup existing blog content from Sanity
 */

const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function cleanup() {
  try {
    console.log('🧹 Cleaning up existing blog content...\n');

    // Delete all posts
    const posts = await client.fetch('*[_type == "post"]._id');
    if (posts.length > 0) {
      console.log(`Deleting ${posts.length} posts...`);
      for (const id of posts) {
        await client.delete(id);
      }
      console.log('✅ Posts deleted');
    }

    // Delete all categories
    const categories = await client.fetch('*[_type == "category"]._id');
    if (categories.length > 0) {
      console.log(`Deleting ${categories.length} categories...`);
      for (const id of categories) {
        await client.delete(id);
      }
      console.log('✅ Categories deleted');
    }

    // Delete all authors
    const authors = await client.fetch('*[_type == "author"]._id');
    if (authors.length > 0) {
      console.log(`Deleting ${authors.length} authors...`);
      for (const id of authors) {
        await client.delete(id);
      }
      console.log('✅ Authors deleted');
    }

    console.log('\n🎉 Cleanup complete!');
    console.log('\nNext: Run node scripts/seed-blog-content.js to recreate content with fixes\n');

  } catch (error) {
    console.error('❌ Error during cleanup:', error);
    process.exit(1);
  }
}

cleanup();
