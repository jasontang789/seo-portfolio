// Sanity Client Configuration
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Note: Replace these with your actual Sanity project credentials
// You can get these from https://sanity.io/manage
export const sanityClient = createClient({
  projectId: 'dtw1de0e',
  dataset: 'production',
  apiVersion: '2026-01-01',
  useCdn: true, // Set to false for fresh data during development
});

// Image URL builder helper
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries for fetching content

/**
 * Fetch all published blog posts
 */
export async function getAllPosts() {
  return sanityClient.fetch(`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      featuredImage,
      publishedAt,
      "categories": categories[]->{ title, "slug": slug.current },
      seo
    }
  `);
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      featuredImage,
      content,
      publishedAt,
      "categories": categories[]->{ title, "slug": slug.current },
      seo
    }
  `, { slug });
}

/**
 * Fetch all categories
 */
export async function getAllCategories() {
  return sanityClient.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      description
    }
  `);
}

/**
 * Fetch posts by category
 */
export async function getPostsByCategory(categorySlug: string) {
  return sanityClient.fetch(`
    *[_type == "post" && defined(slug.current) && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      featuredImage,
      publishedAt,
      "categories": categories[]->{ title, "slug": slug.current }
    }
  `, { categorySlug });
}

/**
 * Fetch featured posts (latest 3)
 */
export async function getFeaturedPosts(limit = 3) {
  return sanityClient.fetch(`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      featuredImage,
      publishedAt,
      "categories": categories[]->{ title, "slug": slug.current }
    }
  `, { limit: limit - 1 });
}
