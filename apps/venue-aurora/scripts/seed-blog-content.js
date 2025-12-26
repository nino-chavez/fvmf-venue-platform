#!/usr/bin/env node

/**
 * Seed Blog Content for The Venue Aurora
 *
 * Creates initial blog posts optimized for SEO/AEO/GEO:
 * - Local keywords (Aurora IL, Fox Valley, Downtown Aurora)
 * - Music venue queries
 * - Event discovery content
 * - Community engagement
 */

const { createClient } = require('@sanity/client');
const crypto = require('crypto');
require('dotenv').config({ path: '.env.local' });

// Helper to generate unique keys for blocks
function generateKey() {
  return crypto.randomBytes(12).toString('hex');
}

// Helper to add keys to body blocks
function addKeysToBlocks(blocks) {
  return blocks.map(block => ({
    ...block,
    _key: generateKey(),
    ...(block.children && {
      children: block.children.map(child => ({
        ...child,
        _key: generateKey(),
      })),
    }),
  }));
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN || '', // We'll use API without token for now
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Author data
const author = {
  _type: 'author',
  name: 'The Venue Aurora Team',
  slug: {
    _type: 'slug',
    current: 'venue-aurora-team',
  },
  role: 'Content Team',
  bio: 'The official content team of The Venue Aurora, bringing you the latest news, artist spotlights, and behind-the-scenes stories from Downtown Aurora\'s premier listening room.',
};

// Categories optimized for SEO
const categories = [
  {
    _type: 'category',
    title: 'Venue News',
    slug: { _type: 'slug', current: 'venue-news' },
    description: 'Updates and announcements from The Venue Aurora',
    color: '#FF5722',
  },
  {
    _type: 'category',
    title: 'Artist Spotlight',
    slug: { _type: 'slug', current: 'artist-spotlight' },
    description: 'Featured artists and performer interviews',
    color: '#9C27B0',
  },
  {
    _type: 'category',
    title: 'Local Music Scene',
    slug: { _type: 'slug', current: 'local-music-scene' },
    description: 'Fox Valley and Chicago area music news',
    color: '#2196F3',
  },
  {
    _type: 'category',
    title: 'Venue Guide',
    slug: { _type: 'slug', current: 'venue-guide' },
    description: 'Tips for enjoying your visit to The Venue Aurora',
    color: '#4CAF50',
  },
  {
    _type: 'category',
    title: 'Community',
    slug: { _type: 'slug', current: 'community' },
    description: 'Community stories and Fox Valley Music Foundation news',
    color: '#FFC107',
  },
];

// Blog posts optimized for SEO/AEO/GEO
const blogPosts = [
  {
    title: 'Welcome to The Venue Aurora: Downtown Aurora\'s Premier Listening Room',
    slug: 'welcome-venue-aurora-downtown-aurora-listening-room',
    excerpt: 'Discover The Venue Aurora, a 190-seat intimate concert hall in Downtown Aurora, IL. Experience world-class blues, jazz, rock, and big band in the heart of the Fox Valley.',
    publishedAt: new Date('2025-01-15T10:00:00Z').toISOString(),
    categoryRefs: ['venue-news', 'community'],
    featured: true,
    seo: {
      metaTitle: 'The Venue Aurora | Live Music in Downtown Aurora, IL',
      metaDescription: 'The Venue Aurora is a 190-seat listening room in Downtown Aurora, Illinois presenting nationally-recognized blues, jazz, and rock artists. Part of Fox Valley Music Foundation.',
      keywords: ['venue aurora', 'downtown aurora music', 'aurora il concerts', 'fox valley live music', 'listening room illinois', 'aurora concert hall'],
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Welcome to The Venue Aurora, Downtown Aurora\'s premier destination for live music! We\'re thrilled to launch our new blog, your go-to source for artist spotlights, event previews, and behind-the-scenes stories from the Fox Valley\'s most intimate concert experience.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'What Makes The Venue Aurora Special?' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The Venue Aurora is more than just a concert hall—it\'s a 190-seat listening room where music lovers can experience world-class performances in an intimate setting. Located in the heart of Downtown Aurora, Illinois, we\'re proud to present nationally-recognized talent in blues, jazz, rock, big band, and more.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Our Mission' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Operated by the Fox Valley Music Foundation, a 501(c)(3) nonprofit organization, The Venue Aurora is dedicated to bringing exceptional live music to the Fox Valley community. Every show supports our mission to make live music accessible and affordable for all.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'What to Expect on This Blog' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'We\'ll be sharing:' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Artist spotlights and exclusive interviews' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Event previews and concert recaps' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Behind-the-scenes venue stories' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Tips for enjoying live music in Aurora' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Fox Valley music scene news' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Community impact stories' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Join the Community' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Whether you\'re a longtime jazz enthusiast, blues aficionado, or just discovering live music, The Venue Aurora offers something special. Check our calendar for upcoming shows, and don\'t forget to subscribe to our newsletter to stay connected!' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'See you at the next show!' }],
      },
    ],
  },
  {
    title: 'Your Guide to The Venue Aurora: Parking, Seating, and What to Expect',
    slug: 'guide-venue-aurora-parking-seating-what-to-expect',
    excerpt: 'Planning your first visit to The Venue Aurora? Get insider tips on parking in Downtown Aurora, choosing the best seats, and making the most of your concert experience.',
    publishedAt: new Date('2025-01-18T14:00:00Z').toISOString(),
    categoryRefs: ['venue-guide'],
    featured: true,
    seo: {
      metaTitle: 'Venue Aurora Guide: Parking, Seating & Concert Tips | Aurora, IL',
      metaDescription: 'First-time visitor guide to The Venue Aurora. Find parking in Downtown Aurora, learn about our 190-seat listening room layout, and get tips for the best concert experience.',
      keywords: ['venue aurora parking', 'downtown aurora parking', 'venue aurora seating', 'aurora il concert venue', 'venue aurora tips', 'first time visitor'],
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Planning your first visit to The Venue Aurora? This comprehensive guide covers everything you need to know for a perfect concert experience in Downtown Aurora.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Getting to The Venue Aurora' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Located in the heart of Downtown Aurora at [address], The Venue is easily accessible from I-88 and Route 59. Downtown Aurora offers convenient public parking within walking distance of the venue.' }],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Parking Options in Downtown Aurora' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Free parking is available after 6 PM in several Downtown Aurora locations:' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Broadway Parking Deck (2 blocks from venue)' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'River Street surface lots' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'On-street metered parking (free after 6 PM)' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Listening Room Experience' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The Venue Aurora is a 190-seat listening room designed for intimate concert experiences. Unlike larger venues, every seat offers excellent sightlines and pristine acoustics. Our cabaret-style seating arrangement includes tables where you can enjoy drinks throughout the show.' }],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Choosing Your Seats' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'All seats at The Venue Aurora offer great views, but here are some tips:' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Front tables: Closest to the stage, perfect for true music aficionados' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Center sections: Optimal acoustics and balanced viewing angles' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Rear tables: Great value with full stage visibility' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'What to Bring (and What to Leave Home)' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The Venue Aurora welcomes concert-goers 21 and over (some shows are all-ages—check event details). Bring your ID for age verification and drink service. We recommend arriving 30-45 minutes before showtime to find parking, get settled, and grab a drink before the music starts.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Accessibility' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The Venue Aurora is fully ADA compliant with accessible seating, restrooms, and entrances. Contact us in advance if you have specific accessibility needs, and we\'ll ensure your visit is comfortable.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Ready to Experience Live Music in Aurora?' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Browse our upcoming shows and purchase tickets today. We can\'t wait to welcome you to The Venue Aurora!' }],
      },
    ],
  },
  {
    title: 'Why Downtown Aurora is Becoming the Fox Valley\'s Music Hub',
    slug: 'downtown-aurora-fox-valley-music-hub',
    excerpt: 'Discover how Downtown Aurora is emerging as the Fox Valley\'s premier destination for live music, arts, and culture. From The Venue Aurora to historic Paramount Theatre, explore Aurora\'s music scene.',
    publishedAt: new Date('2025-01-22T11:00:00Z').toISOString(),
    categoryRefs: ['local-music-scene', 'community'],
    featured: false,
    seo: {
      metaTitle: 'Downtown Aurora: Fox Valley\'s Growing Music & Arts Scene',
      metaDescription: 'Downtown Aurora, IL is becoming a music destination with The Venue Aurora, Paramount Theatre, and RiverEdge Park. Discover the Fox Valley\'s thriving arts and culture scene.',
      keywords: ['downtown aurora music', 'fox valley music scene', 'aurora il arts', 'live music aurora', 'aurora cultural district', 'fox valley concerts'],
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Over the past decade, Downtown Aurora has transformed into a vibrant cultural destination, and music is at the heart of this renaissance. With venues like The Venue Aurora, the historic Paramount Theatre, and RiverEdge Park hosting major festivals, the Fox Valley is quickly becoming a must-visit music destination.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'A Rich Musical Heritage' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Aurora\'s connection to music runs deep. From the legendary blues artists who once traveled through the Fox Valley to today\'s thriving local music scene, Downtown Aurora has always been a place where musicians and music lovers gather.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Venue Aurora\'s Role' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'As part of the Fox Valley Music Foundation, The Venue Aurora fills a unique niche in the region\'s music ecosystem. Our 190-seat listening room brings nationally-recognized blues, jazz, and rock artists to an intimate setting—something you won\'t find in larger concert halls.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Beyond The Venue: Aurora\'s Music Scene' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Downtown Aurora offers diverse musical experiences:' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'The Paramount Theatre: Broadway shows and classic concerts in a beautifully restored venue' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'RiverEdge Park: Summer concerts and major music festivals along the Fox River' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Local bars and restaurants: Live music weekly in intimate settings' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Waubonsee Community College: Educational performances and student showcases' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Community Impact' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The growth of Downtown Aurora\'s music scene has created a ripple effect. Local businesses thrive before and after shows, restaurants stay open later, and the area has become a destination for visitors from across the Chicago suburbs and beyond.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'The Future is Bright' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'With continued investment in arts and culture, Downtown Aurora is poised to become one of the Midwest\'s premier music destinations. The Venue Aurora is proud to be part of this journey, bringing world-class artists to the Fox Valley and supporting the next generation of music lovers.' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Join us in celebrating Aurora\'s musical renaissance—check out our upcoming shows and be part of the story!' }],
      },
    ],
  },
  {
    title: '5 Reasons to Choose Intimate Venues Over Large Concert Halls',
    slug: 'intimate-venues-vs-large-concert-halls',
    excerpt: 'Why listening rooms like The Venue Aurora offer superior concert experiences compared to arena shows. Discover the benefits of intimate music venues in the Fox Valley.',
    publishedAt: new Date('2025-01-25T09:00:00Z').toISOString(),
    categoryRefs: ['venue-guide'],
    featured: false,
    seo: {
      metaTitle: 'Intimate Music Venues vs Large Halls | The Venue Aurora',
      metaDescription: 'Discover why intimate listening rooms offer better acoustics, artist interaction, and memorable concert experiences compared to large venues. Learn about The Venue Aurora\'s 190-seat listening room.',
      keywords: ['intimate music venue', 'listening room', 'small concert venue benefits', 'aurora il live music', 'intimate concert experience', 'venue aurora'],
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'There\'s something magical about experiencing live music in an intimate setting. While arena concerts have their place, listening rooms like The Venue Aurora offer unique advantages that enhance every aspect of the concert experience.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '1. Superior Acoustics and Sound Quality' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'In a 190-seat listening room, every seat offers pristine sound quality. Unlike massive venues where sound can be muddled or too loud, intimate venues are acoustically designed for clarity. You\'ll hear every note, every lyric, and every subtle musical nuance the way the artist intended.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '2. No Bad Seats' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'At The Venue Aurora, there are no obstructed views or nosebleed sections. Whether you\'re in the front row or toward the back, you\'re close enough to see every expression, every guitar solo, and every moment of the performance.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '3. Artist Connection and Interaction' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'In intimate settings, artists often interact with the audience between songs, share stories, and create spontaneous moments that simply can\'t happen in larger venues. Many performers say their favorite shows are in rooms like ours, where they can truly connect with their audience.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '4. Comfortable, Relaxed Atmosphere' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Forget standing in crowds or navigating massive venues. The Venue Aurora offers table seating where you can enjoy drinks throughout the show. It\'s more like an elegant jazz club than a typical concert hall—sophisticated, comfortable, and designed for serious music appreciation.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: '5. Support for Artists and Community' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'When you attend shows at intimate venues, more of your ticket price goes directly to supporting artists and the local music community. As a Fox Valley Music Foundation nonprofit, The Venue Aurora reinvests in bringing quality live music to the region and keeping ticket prices accessible.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Experience the Difference' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'If you\'ve never experienced a show in a listening room, we invite you to discover what you\'ve been missing. Check out our upcoming blues, jazz, and rock performances—your next favorite concert memory is waiting at The Venue Aurora.' }],
      },
    ],
  },
  {
    title: 'Fox Valley Music Foundation: Supporting Live Music in Our Community',
    slug: 'fox-valley-music-foundation-supporting-live-music',
    excerpt: 'Learn about the Fox Valley Music Foundation\'s mission to bring affordable, high-quality live music to Aurora and the greater Fox Valley region through The Venue Aurora.',
    publishedAt: new Date('2025-01-28T13:00:00Z').toISOString(),
    categoryRefs: ['community'],
    featured: false,
    seo: {
      metaTitle: 'Fox Valley Music Foundation | Supporting Live Music in Aurora, IL',
      metaDescription: 'Fox Valley Music Foundation is a 501(c)(3) nonprofit dedicated to bringing affordable live music to Aurora and the Fox Valley. Learn about our mission and The Venue Aurora.',
      keywords: ['fox valley music foundation', 'nonprofit music venue', 'aurora il nonprofit', 'live music foundation', 'community music program', '501c3 music'],
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Behind every great show at The Venue Aurora is the Fox Valley Music Foundation—a 501(c)(3) nonprofit organization dedicated to making live music accessible and affordable for our community.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Our Mission' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'The Fox Valley Music Foundation was established with a simple but powerful goal: to enrich the cultural life of the Fox Valley by presenting world-class musical performances in an intimate, welcoming environment. As a nonprofit, we reinvest every dollar back into our programming, keeping ticket prices accessible while booking nationally-recognized talent.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'What We Do' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Through The Venue Aurora, we present over 50 concerts annually, spanning blues, jazz, rock, big band, and more. But we\'re more than just a concert venue:' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'We provide affordable access to live music for all community members' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'We support working musicians by offering fair compensation and excellent performance conditions' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'We contribute to Downtown Aurora\'s economic and cultural vitality' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'We educate audiences about diverse musical genres and traditions' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Community Impact' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Since our founding, we\'ve welcomed thousands of music lovers through our doors, hosted hundreds of artists, and created countless memorable moments. Every ticket sold, every donation received, and every volunteer hour contributed helps us continue this important work.' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'How You Can Support' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'As a nonprofit, we rely on community support to thrive. Here\'s how you can help:' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Attend shows and spread the word to friends and family' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Make a tax-deductible donation to support our programming' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Volunteer at events (help with setup, hospitality, or ticket sales)' }],
      },
      {
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: 'Become a member for exclusive benefits and priority seating' }],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Join Our Community' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Whether you\'re a longtime supporter or discovering us for the first time, we invite you to be part of the Fox Valley Music Foundation family. Together, we\'re building a vibrant musical community that enriches lives and brings people together through the universal language of music.' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Learn more about how you can support live music in the Fox Valley on our donation page.' }],
      },
    ],
  },
];

async function seedContent() {
  try {
    console.log('🎵 Starting blog content seeding for The Venue Aurora...\n');

    // Create author
    console.log('Creating author profile...');
    const createdAuthor = await client.create(author);
    console.log('✅ Author created:', createdAuthor.name);

    // Create categories
    console.log('\nCreating categories...');
    const createdCategories = {};
    for (const category of categories) {
      const created = await client.create(category);
      createdCategories[category.slug.current] = created._id;
      console.log(`✅ Category created: ${created.title}`);
    }

    // Create blog posts
    console.log('\nCreating blog posts...');
    for (const post of blogPosts) {
      const postDoc = {
        _type: 'post',
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        author: {
          _type: 'reference',
          _ref: createdAuthor._id,
        },
        publishedAt: post.publishedAt,
        excerpt: post.excerpt,
        categories: post.categoryRefs.map((ref) => ({
          _type: 'reference',
          _ref: createdCategories[ref],
          _key: generateKey(),
        })),
        body: addKeysToBlocks(post.body),
        featured: post.featured,
        seo: post.seo,
      };

      const created = await client.create(postDoc);
      console.log(`✅ Post created: "${created.title}"`);
    }

    console.log('\n🎉 Blog seeding complete!');
    console.log(`\nCreated:`);
    console.log(`- 1 author profile`);
    console.log(`- ${categories.length} categories`);
    console.log(`- ${blogPosts.length} blog posts (${blogPosts.filter(p => p.featured).length} featured)`);
    console.log('\n📍 Next steps:');
    console.log('1. Visit http://localhost:3000/studio to view content in Sanity Studio');
    console.log('2. Visit http://localhost:3000/blog to see the blog listing');
    console.log('3. Click any post to view the full article\n');

  } catch (error) {
    console.error('❌ Error seeding content:', error);
    if (error.response) {
      console.error('Response:', await error.response.text());
    }
    process.exit(1);
  }
}

seedContent();
