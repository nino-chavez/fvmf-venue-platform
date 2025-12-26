import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function NewsUpdatesPage() {
  const newsArticles = [
    {
      date: 'Dec 4, 2025',
      title: 'Fox Valley Music Foundation Hosts Inclusive Holiday Concert Supported by Dunham Foundation Grant',
      excerpt: 'Special Holiday Performance for WDSRA, NEDSRA, and SEASPAR!',
      slug: 'inclusive-holiday-concert-2025',
    },
    {
      date: 'Oct 15, 2025',
      title: 'Painter Lewis Achenbach Joins Delmark Day & Masterclass at The Venue',
      excerpt: 'Get ready for a fusion of art and music that transforms sound into visual expression!',
      slug: 'lewis-achenbach-delmark-day',
    },
    {
      date: 'Oct 7, 2025',
      title: 'Fox Valley Music Foundation & Delmark Records Present 2nd Masterclass Series Event',
      excerpt: 'Bringing the power and magic of the blues to the community, thanks to a grant from Live Music Society.',
      slug: 'delmark-masterclass-series-2',
    },
    {
      date: 'Oct 3, 2025',
      title: 'Empowered Voices Take the Stage: She Said Series Spotlights Lynne Jordan at The Venue',
      excerpt: 'Join us for an evening of conversation and music with Anne Harris & Lynne Jordan!',
      slug: 'she-said-lynne-jordan',
    },
    {
      date: 'Sep 7, 2025',
      title: '"Jazz Sessions" Brings Music and Community Together at The Venue',
      excerpt: 'Monthly "Jazz Sessions" series returns!',
      slug: 'jazz-sessions-returns',
    },
    {
      date: 'Aug 12, 2025',
      title: "Dunham Foundation Grant Advances Fox Valley Music Foundation's Mission to Serve the Community Through the Power of Music",
      excerpt: 'Funding will support the new "Rhythms For All" series, creating inclusive concert experiences for special needs and neurodivergent audiences.',
      slug: 'dunham-grant-rhythms-for-all',
    },
    {
      date: 'Jul 3, 2025',
      title: 'Fox Valley Music Foundation Presents Delmark Day!',
      excerpt: "Join us for A Full Day of Blues, Beats, & Musical Legacy at The Venue - Funded by Live Music Society's Music In Action Grant",
      slug: 'delmark-day-2025',
    },
    {
      date: 'Jul 2, 2025',
      title: 'Cesar Rosas & The Chi-Town Playboys w/ Special Guest Jimmy Burns - July 13 at The Venue',
      excerpt: 'FVMF & The Venue are thrilled to announce an upcoming concert featuring Cesar Rosas and The Chi-Town Playboys wsg Jimmy Burns on July 13.',
      slug: 'cesar-rosas-jimmy-burns',
    },
    {
      date: 'Jun 23, 2025',
      title: 'Fox Valley Music Foundation Receives Live Music Society Grant',
      excerpt: 'FVMF & The Venue to Partner with Delmark Records for Quarterly Series',
      slug: 'live-music-society-grant',
    },
    {
      date: 'Apr 19, 2025',
      title: 'Statement from FVMF and AFS',
      excerpt: '',
      slug: 'fvmf-afs-statement',
    },
    {
      date: 'Mar 31, 2025',
      title: "The Venue's GM Appointed to the Aurora Regional Economic Alliance Board",
      excerpt: "The Venue's Sam Dempsey Appointed to the Board of Directors for the Aurora Regional Economic Alliance",
      slug: 'sam-dempsey-area-board',
    },
    {
      date: 'Mar 13, 2025',
      title: "Aurora's The Venue Recognized in 2025 'Best Of The West' Voting",
      excerpt: 'Best Place for Live Music!',
      slug: 'best-of-the-west-2025',
    },
    {
      date: 'Feb 7, 2025',
      title: 'The Venue & Fox Valley Music Foundation Present: Second Saturday Family Groove with Mr. Dave!',
      excerpt: "Great music for the kids (that won't make parents lose their minds!)",
      slug: 'family-groove-mr-dave',
    },
    {
      date: 'Jan 17, 2025',
      title: 'FVMF Receives Illinois Arts Council Grant to Support The Venue in 2025',
      excerpt: 'IAC supports our efforts to bring affordable, high-quality live music to the community.',
      slug: 'illinois-arts-council-grant-2025',
    },
    {
      date: 'Oct 14, 2024',
      title: "Fox Valley Music Foundation's The Venue Receives \"Live Independent\" Certification",
      excerpt: 'The new national certification program identifies and supports the Live Independent Entertainment Community.',
      slug: 'live-independent-certification',
    },
    {
      date: 'Sep 16, 2024',
      title: '"She Said..." tickets now on sale!',
      excerpt: 'Join us for this well-deserved focus on women in music.',
      slug: 'she-said-tickets-on-sale',
    },
    {
      date: 'Aug 22, 2024',
      title: 'The Venue Appoints New Rentals Manager',
      excerpt: 'The Venue is excited to announce the appointment of LeTisha Pitre as their new Rentals Manager',
      slug: 'new-rentals-manager',
    },
    {
      date: 'Jul 8, 2024',
      title: 'July 9: Fix the Tix Day of Advocacy!',
      excerpt: 'If you buy concert tickets, please take note!',
      slug: 'fix-the-tix-advocacy',
    },
    {
      date: 'Jun 12, 2024',
      title: 'Meet Fox Valley Music Foundation at Blues On The Fox!',
      excerpt: 'Look for us at the 2024 Blues on the Fox Festival!',
      slug: 'blues-on-the-fox-2024',
    },
    {
      date: 'Jun 5, 2024',
      title: 'Fox Valley Music Foundation & The Venue Celebrate 5th Anniversary',
      excerpt: 'The Venue Celebrates 5th Anniversary with Spectacular Weekend of Shows',
      slug: '5th-anniversary-celebration',
    },
  ]

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Latest News
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed">
              Welcome to our "Latest News & Events" page! Here, you'll find all the latest updates, announcements, and happenings at Fox Valley Music Foundation and The Venue.
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Whether you're a dedicated follower or a newcomer, this page will keep you informed and connected to what's happening. Check back regularly to explore the latest developments and join us in celebrating all the moments that shape our journey!
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {newsArticles.map((article, index) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Gradient placeholder for images */}
                  <div
                    className="h-48"
                    style={{
                      background: `linear-gradient(135deg, ${
                        index % 3 === 0
                          ? '#667eea, #764ba2'
                          : index % 3 === 1
                          ? '#f093fb, #f5576c'
                          : '#4facfe, #00f2fe'
                      })`,
                    }}
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    )}
                    <Link
                      href={`/news-updates/${article.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                    >
                      Read More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Never miss an update! Follow us on social media or visit The Venue website for the latest show announcements and news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.facebook.com/foxvalleymusicfoundation"
                target="_blank"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Follow on Facebook
              </Link>
              <Link
                href="https://www.instagram.com/fvmf21southbroadway"
                target="_blank"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow on Instagram
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
