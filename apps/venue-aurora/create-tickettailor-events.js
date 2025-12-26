// Script to create test events in Ticket Tailor
// Run with: node create-tickettailor-events.js

const API_KEY = 'sk_10981_281493_69ed33a2c58af0dd36ba1251885aaae9';
const BASE_URL = 'https://api.tickettailor.com/v1';

// Test events matching The Venue Aurora programming
const testEvents = [
  { name: 'Jazz Night with Marcus Williams Quartet', genre: 'Jazz' },
  { name: 'Blues Explosion featuring Chicago Pete', genre: 'Blues' },
  { name: 'The Motown Revival - Soul & R&B Tribute', genre: 'Tribute' },
  { name: 'Fox Valley Big Band - Swing Night', genre: 'Big Band' },
  { name: 'Acoustic Sunday Sessions', genre: 'Acoustic' },
  { name: 'Led Zeppelin Tribute - Hammer of the Gods', genre: 'Tribute' },
  { name: 'Chicago Blues All-Stars', genre: 'Blues' },
  { name: 'Latin Jazz Fiesta', genre: 'Jazz' },
  { name: 'Fleetwood Mac Tribute - Dreams', genre: 'Tribute' },
  { name: 'Aurora Jazz Collective', genre: 'Jazz' },
  { name: 'Delta Blues Showcase', genre: 'Blues' },
  { name: 'Eagles Tribute - Hotel California', genre: 'Tribute' },
  { name: 'Big Band Brunch', genre: 'Big Band' },
  { name: 'Stevie Wonder Tribute - Songs in the Key', genre: 'Tribute' },
  { name: 'Fox River Blues Festival Preview', genre: 'Blues' },
  { name: 'Jazz Fusion Night', genre: 'Jazz' },
  { name: 'Classic Rock Showcase', genre: 'Rock' },
  { name: 'Pink Floyd Tribute - The Wall', genre: 'Tribute' },
  { name: 'Smooth Jazz Evening', genre: 'Jazz' },
  { name: 'Americana Roots Night', genre: 'Americana' },
  { name: 'Queen Tribute - Bohemian Rhapsody', genre: 'Tribute' },
  { name: 'Electric Blues Jam', genre: 'Blues' },
  { name: 'Sinatra & The Rat Pack Tribute', genre: 'Big Band' },
  { name: 'Grateful Dead Tribute - Ripple', genre: 'Tribute' },
  { name: 'Contemporary Jazz Showcase', genre: 'Jazz' },
  { name: 'Blues Brothers Tribute', genre: 'Tribute' },
  { name: 'Swing Dance Night', genre: 'Big Band' },
  { name: 'Tom Petty Tribute - Free Fallin', genre: 'Tribute' },
  { name: 'Jazz Standards Night', genre: 'Jazz' },
  { name: 'Chicago Style Blues Revue', genre: 'Blues' },
];

const descriptions = {
  Jazz: 'An evening of world-class jazz featuring talented musicians. Experience the magic of live jazz in our intimate 190-seat venue.',
  Blues: 'Feel the soul of the blues with authentic performances. Our stage has hosted blues legends and rising stars alike.',
  Tribute: 'Relive the music you love with our incredible tribute performances. These talented artists capture the essence of the originals.',
  'Big Band': 'Step back in time with the sounds of the big band era. Swing, dance, and enjoy classic arrangements.',
  Acoustic: 'An intimate acoustic performance showcasing raw talent and beautiful melodies in our perfect listening room.',
  Rock: 'Rock and roll is alive at The Venue! Experience powerful performances that will have you on your feet.',
  Americana: 'Celebrate American roots music with folk, country, and bluegrass influences in an authentic setting.',
};

async function makeRequest(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Authorization': 'Basic ' + Buffer.from(API_KEY + ':').toString('base64'),
    },
  };

  if (body) {
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    options.body = new URLSearchParams(body).toString();
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  return response.json();
}

async function createEventSeries(event, index) {
  const description = descriptions[event.genre] || descriptions.Jazz;

  // Create the event series
  const series = await makeRequest('/event_series', 'POST', {
    name: event.name,
    currency: 'usd',
    description: `<p>${description}</p><p><strong>Genre:</strong> ${event.genre}</p><p>All ages welcome. Doors open 1 hour before showtime. Full bar available.</p>`,
    online_event: 'false',
    private: 'false',
    timezone: 'America/Chicago',
  });

  if (series.error_code) {
    console.error(`Failed to create series for ${event.name}:`, series);
    return null;
  }

  console.log(`Created series: ${series.name} (${series.id})`);

  // Create a ticket type for this series
  const ticketType = await makeRequest(`/event_series/${series.id}/ticket_types`, 'POST', {
    name: 'General Admission',
    price: (1500 + (index % 10) * 500).toString(), // $15-$60 range in cents
    quantity: '190',
  });

  if (ticketType.error_code) {
    console.error(`Failed to create ticket type for ${event.name}:`, ticketType);
  } else {
    console.log(`  - Created ticket type: ${ticketType.name} ($${ticketType.price / 100})`);
  }

  // Create an occurrence (actual event date)
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 7 + index * 3); // Events spread out every 3 days
  startDate.setHours(19 + (index % 3), 0, 0, 0); // 7pm, 8pm, or 9pm

  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 3); // 3 hour event

  const occurrence = await makeRequest(`/event_series/${series.id}/events`, 'POST', {
    start: startDate.toISOString(),
    end: endDate.toISOString(),
  });

  if (occurrence.error_code) {
    console.error(`Failed to create occurrence for ${event.name}:`, occurrence);
  } else {
    console.log(`  - Created occurrence: ${occurrence.start.date} at ${occurrence.start.time}`);
  }

  return series;
}

async function main() {
  console.log('Creating Ticket Tailor test events...\n');

  const results = [];
  for (let i = 0; i < testEvents.length; i++) {
    try {
      const result = await createEventSeries(testEvents[i], i);
      if (result) {
        results.push(result);
      }
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error creating ${testEvents[i].name}:`, error.message);
    }
  }

  console.log(`\n✓ Created ${results.length} event series in Ticket Tailor`);
}

main();
