import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

import { articles, featuredArticle } from "@/components/Writing/article-data";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "./article-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function WritingPreview() {
  const latestArticles = articles
    .filter((article) => !article.featured)
    .slice(0, 3);

  return (
    <section id="writing" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Hero */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <Badge className="mb-4">
            Writing
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering.
            <br />
            Products.
            <br />
            Entrepreneurship.
          </h2>

          <p className="text-lg text-muted-foreground leading-8">
            I document what I'm learning while building software,
            shipping products and working toward entrepreneurship.
          </p>

        </div>

        {/* Featured */}

        <Card className="mb-16 border-primary/30">

          <CardHeader>

            <Badge className="w-fit mb-4">
              Featured Article
            </Badge>

            <CardTitle className="text-3xl">

              {featuredArticle.title}

            </CardTitle>

            <p className="text-muted-foreground leading-8 mt-4">

              {featuredArticle.description}

            </p>

          </CardHeader>

          <CardContent className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex gap-3">

              <Badge variant="secondary">

                {featuredArticle.category}

              </Badge>

              <Badge variant="outline">

                {featuredArticle.readingTime}

              </Badge>

            </div>

            <Button asChild>

              <Link href={`/writing/${featuredArticle.slug}`}>

                Read Article

                <ArrowRight className="ml-2 h-4 w-4" />

              </Link>

            </Button>

          </CardContent>

        </Card>

        {/* Latest */}

        <div className="mb-16">

          <div className="flex items-center justify-between mb-8">

            <h3 className="text-3xl font-bold">
              Latest Articles
            </h3>
{/* 
            <Button variant="ghost" asChild>

              <Link href="/#writing">

                View All

                <ArrowRight className="ml-2 h-4 w-4" />

              </Link>

            </Button> */}

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {latestArticles.map((article) => (

              <ArticleCard
                key={article.slug}
                article={article}
              />

            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="text-center">

          <BookOpen className="mx-auto h-10 w-10 text-primary mb-5" />

          <h3 className="text-2xl font-bold mb-4">
            More articles coming soon
          </h3>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-8">
            I regularly write about software engineering,
            AI, backend architecture, product development,
            startups and the lessons I learn while building.
          </p>

        </div>

      </div>
    </section>
  );
}