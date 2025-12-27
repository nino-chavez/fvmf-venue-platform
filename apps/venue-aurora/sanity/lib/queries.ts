import { groq } from 'next-sanity';

// Get all published posts
export const postsQuery = groq`
  *[_type == "post" && contentType == "venue" && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      caption
    },
    author-> {
      name,
      slug,
      image {
        asset-> {
          _id,
          url
        }
      },
      role
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    }
  }
`;

// Get a single post by slug
export const postQuery = groq`
  *[_type == "post" && contentType == "venue" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    _updatedAt,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      caption
    },
    author-> {
      name,
      slug,
      image {
        asset-> {
          _id,
          url
        }
      },
      role,
      bio
    },
    categories[]-> {
      _id,
      title,
      slug,
      color,
      description
    },
    body,
    relatedEvent,
    seo,
    featured
  }
`;

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category" && contentType == "venue"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color,
    "postCount": count(*[_type == "post" && contentType == "venue" && references(^._id)])
  }
`;

// Get posts by category
export const postsByCategoryQuery = groq`
  *[_type == "post" && contentType == "venue" && references($categoryId) && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    author-> {
      name,
      slug,
      role
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    }
  }
`;

// Get featured posts
export const featuredPostsQuery = groq`
  *[_type == "post" && contentType == "venue" && featured == true && publishedAt < now()] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    author-> {
      name,
      role
    }
  }
`;

// Get related posts (same categories, exclude current post)
export const relatedPostsQuery = groq`
  *[_type == "post" && contentType == "venue" && _id != $postId && count((categories[]->slug.current)[@ in $categories]) > 0 && publishedAt < now()] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    author-> {
      name
    }
  }
`;

// Get all authors
export const authorsQuery = groq`
  *[_type == "author" && contentType == "venue"] | order(name asc) {
    _id,
    name,
    slug,
    role,
    image {
      asset-> {
        _id,
        url
      }
    },
    "postCount": count(*[_type == "post" && contentType == "venue" && references(^._id)])
  }
`;

// Get posts by author
export const postsByAuthorQuery = groq`
  *[_type == "post" && contentType == "venue" && author._ref == $authorId && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    categories[]-> {
      _id,
      title,
      slug,
      color
    }
  }
`;

// Get post slugs for static generation
export const postSlugsQuery = groq`
  *[_type == "post" && contentType == "venue" && defined(slug.current)][].slug.current
`;
