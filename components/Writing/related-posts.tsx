import { articles, Article } from "@/components/Writing/article-data";
import { ArticleCard } from "./article-card";

interface Props {
  currentSlug: string;
  category: string;
}

export function RelatedPosts({
  currentSlug,
  category,
}: Props) {
  const related = articles
    .filter(
      (article) =>
        article.slug !== currentSlug &&
        article.category === category
    )
    .slice(0, 2);

  if (!related.length) {
    return null;
  }

  return (
    <section className="mt-24">

      <h2 className="text-3xl font-bold mb-8">
        Continue Reading
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {related.map((article) => (

          <ArticleCard
            key={article.slug}
            article={article}
          />

        ))}

      </div>

    </section>
  );
}