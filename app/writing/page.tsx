import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { articles } from "@/components/Writing/article-data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArticleCard } from "@/components/Writing/article-card";

export const metadata = {
  title: "Writing | Gautam Sinha",
  description:
    "Articles on engineering, product development, AI, startups and entrepreneurship.",
};

export default function WritingPage() {
  return (
    <main className="container max-w-5xl py-24">

      <div className="mb-16">

        <Badge className="mb-4">
          Writing
        </Badge>

        <h1 className="text-5xl font-bold mb-6">
          Thoughts on Engineering,
          <br />
          Products & Entrepreneurship
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl">
          I write about software engineering,
          AI, startups and product thinking.
        </p>

      </div>

      <div className="space-y-8">

        <div className="grid gap-8">

            {articles.map((article) => (

                <ArticleCard
                    key={article.slug}
                    article={article}
                />

            ))}

        </div>
      </div>

    </main>
  );
}