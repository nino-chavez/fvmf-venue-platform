import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about The Venue Aurora: ticket purchasing, parking, accessibility, music genres, food and drinks, age restrictions, and more.',
  keywords: [
    'venue aurora faqs',
    'concert venue questions',
    'aurora il music venue',
    'ticket information',
    'parking downtown aurora',
    'accessibility music venue',
    'fox valley music foundation'
  ],
  openGraph: {
    title: 'Frequently Asked Questions | The Venue Aurora',
    description: 'Find answers to all your questions about The Venue Aurora - tickets, parking, accessibility, and more.',
  },
};

const faqs = [
  {
    question: "What is your phone number?",
    answer: "331-212-8490"
  },
  {
    question: "Can I buy tickets on the day of the show?",
    answer: `Yes you can! You can use Eventbrite to purchase tickets online up until 1 hour before the show.

On the day of any show, you can also purchase tickets at the door - unless the show is sold out. A day-of-show fee will be applied (typically +$5) to the base ticket price.

Don't hesitate to plan ahead: if you're interested in purchasing advance tickets for a future show, the box office stays open through the first half of the night's performance and can sell tickets to any upcoming show on our schedule.`
  },
  {
    question: "How can I contact The Venue?",
    answer: `By Phone: 331-212-8490

By Email: info@themusicvenue.org

In Person: Our office is open by appointment only. Please call ahead to arrange for a tour. Our main entrance is on the Water Street Mall, where there is a doorbell for off-hours access.`
  },
  {
    question: "How can I volunteer?",
    answer: `We are primarily staffed by volunteers, doing everything from serving beer and wine to running security to acting as retail cashiers.

We need your help!

If you are interested in being a volunteer, please contact: LeTisha@themusicvenue.org`
  },
  {
    question: "What is the Fox Valley Music Foundation?",
    answer: `We are a group of music lovers. We are educators. We are promoters. We are preservationists. We are protectionists. We love music. We love the Fox River Valley of Illinois.

We are a 501(c)3 non-profit dedicated to music education and preservation. Please visit foxvalleymusicfoundation.org for more information.`
  },
  {
    question: "Can the bar staff at The Venue accept tips?",
    answer: `All of our bartenders are volunteers for the Fox Valley Music Foundation non-profit organization, and cannot accept tips. Any "tips" (via cash or credit card) you choose to give will be considered donations to the FVMF to support our mission and help us continue to bring in the fantastic music acts you're accustomed to seeing.

Every donation helps us keep the music alive - we are grateful for your support!`
  },
  {
    question: "What kind of music do you have?",
    answer: `At The Venue, we are proud to book nationally-recognized talent in all genres of music from blues and big band, to rock and world music, and everything in between. Frequently, our opening acts feature regional and local musicians and songwriters.

In addition to musical performances, we also host lectures, workshops, and films on the subject of music from time to time. It is our mission to promote music from every angle.`
  },
  {
    question: "Does The Venue serve food and drink?",
    answer: `We offer a menu of local craft beers, cocktails, seltzers, wine, and soft drinks. Try our Crooked V Red Ale or our local Seasonal Cocktail collaboration!

We serve limited concessions, but you are welcome to bring snacks in with you. For a more robust meal, visit one of our local restaurants!`
  },
  {
    question: "Is The Venue handicap accessible?",
    answer: `The ADA entrance to The Venue is located on the south side of the building facing Mundy Park. Access to our stage is wheelchair accessible. Our bathrooms comply with ADA standards.

Fox Valley Music Foundation and The Venue are committed to inclusion and accessibility for all participants and are pleased to provide reasonable accommodations for all events. Please contact our office at 331-212-8490 to make a reasonable accommodation request.`
  },
  {
    question: "Are pets allowed at The Venue?",
    answer: "The Venue is a service-dog friendly environment for both indoor and outdoor shows. Unfortunately, we cannot accept any other animals, no matter how well behaved they may be!"
  },
  {
    question: "Does The Venue have age restrictions?",
    answer: "The majority of our events are all ages. Any exceptions will be noted in the individual event ticket page."
  },
  {
    question: "What is the booking contact information?",
    answer: `Please contact one of our booking team with your band's information for consideration at booking@themusicvenue.org.

NOTE: Rest assured, we do review every submission received. However, due to the sheer number of submissions received, we are unable to reply personally to every submission.`
  },
  {
    question: "Where can we park?",
    answer: "Downtown Aurora has ample street parking, public lots, and parking garages within blocks of The Venue."
  },
  {
    question: "Are there public transportation options?",
    answer: "Yes, the Metra BNSF line travels from Chicago to downtown Aurora, and the Transportation Center is only 4 blocks from The Venue."
  },
  {
    question: "What are your hours?",
    answer: "Our events are generally scheduled between 7PM and 12AM, and our doors open one hour before show time. Specific starting times can be found on each individual event page."
  },
  {
    question: "What items are prohibited?",
    answer: `All bags are subject to search to gain entry. No outside beverages (alcohol or nonalcoholic) are permitted for any events, indoor or outdoor. Empty reusable water containers are permitted and may be filled at our water station.

We do not permit weapons, firearms, or vape devices within The Venue. There is no smoking within 15 feet of any entrance, per Illinois law. Outdoor festivals allow smoking in designated areas only.`
  },
  {
    question: "Does The Venue have a gift shop?",
    answer: "We have a retail area offering a curated collection of Venue-themed items and related memorabilia."
  }
];

export default function FAQsPage() {
  // FAQPage structured data for AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Structured Data for Answer Engine Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Quick summary for AEO - appears in first 100-200 words */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            The Venue Aurora is a 190-seat listening room in Downtown Aurora, Illinois.
            We're located at 21 S. Broadway Ave., open for events 7PM-12AM, and present
            nationally-recognized talent in blues, jazz, rock, and big band. Call us at
            331-212-8490 or email info@themusicvenue.org.
          </p>
        </div>

        {/* FAQ Items with semantic HTML for better AEO */}
        <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h2 className="text-xl font-semibold text-white mb-4" itemProp="name">
                {faq.question}
              </h2>
              <div
                className="text-neutral-300 leading-relaxed whitespace-pre-line"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional context for voice search queries */}
        <div className="mt-16 border-t border-neutral-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Still have questions?</h2>
          <div className="bg-gradient-to-br from-primary-900/30 to-neutral-900 border border-primary-500/20 rounded-xl p-8">
            <p className="text-neutral-300 mb-6">
              We're here to help! Contact The Venue Aurora team:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13312128490" className="text-primary-500 hover:text-primary-400 text-lg">
                  (331) 212-8490
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <a href="mailto:info@themusicvenue.org" className="text-primary-500 hover:text-primary-400">
                  info@themusicvenue.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
