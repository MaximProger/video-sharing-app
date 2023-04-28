import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'lhsj2l17',
  dataset: 'production',
  apiVersion: '2023-04-28',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
