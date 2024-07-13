import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'r47l1sus', // replace with your Sanity project ID
  dataset: 'production', // replace with your dataset name
  useCdn: true, // set to `false` to always fetch fresh data
  apiVersion: '2023-07-13', // use the current date to ensure you're using the latest API version
});

export default client;
