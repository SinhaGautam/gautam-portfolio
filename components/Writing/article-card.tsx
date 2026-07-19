import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Article } from "@/components/Writing/article-data";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({
  article,
}: ArticleCardProps) {
  return (
      <Card className="group h-full transition-all hover:border-primary hover:shadow-lg cursor-pointer">

        <CardHeader>

          <div className="flex flex-wrap gap-2 mb-4">

            <Badge variant="secondary">
              {article.category}
            </Badge>

            <Badge variant="outline">
              {article.readingTime}
            </Badge>

          </div>

          <CardTitle className="group-hover:text-primary transition-colors text-2xl">
            {article.title}
          </CardTitle>

        </CardHeader>

        <CardContent>

          <p className="text-muted-foreground leading-7">
            {article.description}
          </p>

          <div className="mt-6 text-primary font-medium group-hover:underline transition-all">
              <Link href={`/writing/${article.slug}`}>
                  Read Article
                  {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
              </Link>
          </div>
        </CardContent>

      </Card>
  );
}