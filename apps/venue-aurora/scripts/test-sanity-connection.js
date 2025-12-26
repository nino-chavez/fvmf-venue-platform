#!/usr/bin/env node

/**
 * Test script to verify Sanity connection
 */

const { createClient } = require('next-sanity');
require('dotenv').config({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

console.log('Testing Sanity Connection...\n');
console.log('Project ID:', projectId);
console.log('Dataset:', dataset);
console.log('');

if (!projectId || projectId === 'placeholder') {
  console.error('❌ ERROR: NEXT_PUBLIC_SANITY_PROJECT_ID not set or is placeholder');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function testConnection() {
  try {
    console.log('Attempting to fetch posts...');
    const posts = await client.fetch('*[_type == "post"]');

    console.log('✅ Connection successful!');
    console.log(`Found ${posts.length} post(s) in the dataset\n`);

    if (posts.length === 0) {
      console.log('ℹ️  No posts found. This is expected for a new project.');
      console.log('   Log in to /studio to create your first post!\n');
    } else {
      console.log('Posts:');
      posts.forEach((post, i) => {
        console.log(`  ${i + 1}. ${post.title || '(No title)'}`);
      });
      console.log('');
    }

    // Test authors
    const authors = await client.fetch('*[_type == "author"]');
    console.log(`Found ${authors.length} author(s)`);

    // Test categories
    const categories = await client.fetch('*[_type == "category"]');
    console.log(`Found ${categories.length} categor${categories.length === 1 ? 'y' : 'ies'}`);

    console.log('\n✅ All Sanity queries working correctly!');
    console.log('🎉 Your blog is ready to use!');
    console.log('\nNext steps:');
    console.log('1. Visit http://localhost:3000/studio to access Sanity Studio');
    console.log('2. Create author profiles for your team');
    console.log('3. Create blog categories');
    console.log('4. Publish your first blog post\n');

  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('\nTroubleshooting:');
    console.error('1. Verify project ID and dataset in .env.local');
    console.error('2. Check that the dataset exists in Sanity dashboard');
    console.error('3. Ensure CORS is configured for localhost:3000');
    console.error('4. Visit https://www.sanity.io/manage to check project settings\n');
    process.exit(1);
  }
}

testConnection();
