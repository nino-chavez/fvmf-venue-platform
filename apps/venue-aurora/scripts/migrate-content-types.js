const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '8hfq0d88',
  dataset: 'production',
  apiVersion: '2024-12-26',
  token: 'skIBfGWUTzyq6GaDnYRGF5LYD6KHjK4Sw6SyszibKrAGx5RpFkfVHMBFfFIO7vUGdItAJdfB9LCt5ENGDZ7hyKKz7rMTCe5rlla4XwIxmtfrkc4u8YZRILPhfGauNHWlBU8Y3nk6UmbfSiYILtyBiwGCcvyfyhUG4IeLvCVOgUjYeFd9jsB1',
  useCdn: false
});

async function migrateContentTypes() {
  console.log('Fetching all documents that need contentType field...');

  const documents = await client.fetch(`
    *[_type in ["post", "author", "category"] && !defined(contentType)]{ _id, _type }
  `);

  console.log(`Found ${documents.length} documents to update`);

  if (documents.length === 0) {
    console.log('No documents need updating');
    return;
  }

  const transaction = client.transaction();

  documents.forEach(doc => {
    console.log(`  Tagging ${doc._type} (${doc._id}) with contentType=venue`);
    transaction.patch(doc._id, {
      set: { contentType: 'venue' }
    });
  });

  console.log('\nApplying transaction...');
  const result = await transaction.commit();
  console.log('✓ Successfully tagged', result.results.length, 'documents with contentType=venue');

  console.log('\nVerifying...');
  const tagged = await client.fetch(`
    *[_type in ["post", "author", "category"] && contentType == "venue"]{ _type }
  `);
  console.log('✓ Confirmed', tagged.length, 'documents now have contentType=venue');
}

migrateContentTypes().catch(console.error);
