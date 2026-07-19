export interface Article {
  slug: string;
  title: string;
  description: string;
  category:
    | "Engineering"
    | "AI"
    | "Product"
    | "Entrepreneurship";

  publishedAt: string;

  readingTime: string;

  featured?: boolean;

  tags: string[];

  component: string;
}

export const articles: Article[] = [
  {
    slug: "why-engineers-should-think-like-founders",

    title: "Why Engineers Should Think Like Founders",

    description:
      "Great engineers don't just build software—they solve business problems. Here's why product thinking matters.",

    category: "Entrepreneurship",

    publishedAt: "2026-07-20",

    readingTime: "5 min read",

    featured: true,

    component: "why-engineers",

    tags: [
      "Engineering",
      "Startups",
      "Product",
      "Career",
    ],
  },

  {
    slug: "building-ai-products-without-hype",

    title: "Building AI Products Without Chasing Hype",

    description:
      "AI is a powerful tool, but only when it solves customer problems.",

    category: "AI",

    publishedAt: "2026-07-18",

    readingTime: "6 min read",

    component: "building-ai",

    tags: [
      "AI",
      "Products",
      "LLM",
    ],
  },

  {
    slug: "lessons-from-enterprise-engineering",

    title: "Lessons From Enterprise Engineering",

    description:
      "Enterprise software teaches lessons every startup founder should know.",

    category: "Engineering",

    publishedAt: "2026-07-16",

    readingTime: "7 min read",

    component: "enterprise",

    tags: [
      "Cloud",
      "Architecture",
      "Backend",
    ],
  },

  {
    slug: "validating-product-ideas-before-writing-code",

    title: "How I Validate Product Ideas Before Writing Code",

    description:
      "Before writing software, validate the problem.",

    category: "Product",

    publishedAt: "2026-07-14",

    readingTime: "6 min read",

    component: "product-validation",

    tags: [
      "MVP",
      "Validation",
      "Business",
    ],
  },
];

export const featuredArticle =
  articles.find((a) => a.featured)!;

export function getArticle(slug: string) {
  return articles.find(
    (article) => article.slug === slug
  );
}

export function getRelatedArticles(
  slug: string,
  category: string
) {
  return articles
    .filter(
      (article) =>
        article.slug !== slug &&
        article.category === category
    )
    .slice(0, 2);
}