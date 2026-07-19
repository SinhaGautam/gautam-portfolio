import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { articles, ArticleLayout, RelatedPosts } from "@/components/Writing";

import WhyEngineers from "@/components/Writing/posts/why-engineers";
import BuildingAI from "@/components/Writing/posts/building-ai";
import Enterprise from "@/components/Writing/posts/enterprise";
import ProductValidation from "@/components/Writing/posts/product-validation";

import {
  Badge,
} from "@/components/ui/badge";

const articleComponents = {

  "why-engineers-should-think-like-founders":
    WhyEngineers,

  "building-ai-products-without-hype":
    BuildingAI,

  "lessons-from-enterprise-engineering":
    Enterprise,

  "validating-product-ideas-before-writing-code":
    ProductValidation,

};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { slug } = await params;

  const article = articles.find(
    (a) => a.slug === slug
  );

  if (!article)
    return {};

  return {

    title: article.title,

    description: article.description,

  };
}

export async function generateStaticParams() {

  return articles.map((article) => ({

    slug: article.slug,

  }));

}

export default async function ArticlePage(
  { params }: Props
) {

  const { slug } = await params;

  const article = articles.find(
    (a) => a.slug === slug
  );

  if (!article)
    notFound();

  const Content =
    articleComponents[
      slug as keyof typeof articleComponents
    ];

  if (!Content)
    notFound();

  return (

  <ArticleLayout
    title={article.title}
    description={article.description}
    category={article.category}
    publishedAt={article.publishedAt}
    readingTime={article.readingTime}
    tags={article.tags}
  >
    <Content />
    <RelatedPosts
        currentSlug={article.slug}
        category={article.category}
    />
  
  </ArticleLayout>
  
  );
}