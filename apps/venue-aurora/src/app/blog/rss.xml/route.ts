import { client, isSanityConfigured } from '../../../../sanity/lib/client';
import { postsQuery } from '../../../../sanity/lib/queries';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  author: {
    name: string;
  };
  categories?: Array<{
    title: string;
  }>;
}

async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured) {
    return [];
  }
  try {
    return await client.fetch(postsQuery);
  } catch (error) {
    console.error('Error fetching posts for RSS:', error);
    return [];
  }
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = await getPosts();

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://venueaurora.com/blog/${post.slug.current}</link>
      <guid isPermaLink="true">https://venueaurora.com/blog/${post.slug.current}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>noreply@venueaurora.com (${escapeXml(post.author.name)})</author>
      ${post.excerpt ? `<description>${escapeXml(post.excerpt)}</description>` : ''}
      ${
        post.categories
          ? post.categories.map((cat) => `<category>${escapeXml(cat.title)}</category>`).join('\n      ')
          : ''
      }
    </item>`
    )
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Venue Aurora Blog</title>
    <link>https://venueaurora.com/blog</link>
    <description>Stories, insights, and updates from The Venue Aurora. Discover artist spotlights, event previews, and tips for enjoying live music in Downtown Aurora.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://venueaurora.com/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
