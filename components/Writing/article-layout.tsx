import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ArticleLayoutProps {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  children: React.ReactNode;
}

export function ArticleLayout({
  title,
  description,
  category,
  publishedAt,
  readingTime,
  tags,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="container mx-auto max-w-4xl px-6 pt-32 pb-20">
          <div>
            <Link
              href="/#writing"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Writing
            </Link>
          </div>

          <Badge className="mt-8">
            {category}
          </Badge>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {title}
          </h1>

          <p className="mt-8 text-xl leading-9 text-muted-foreground max-w-3xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-8 mt-10 text-muted-foreground">

            <div className="flex items-center gap-2">

              <CalendarDays className="h-4 w-4" />

              {new Date(publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}

            </div>

            <div className="flex items-center gap-2">

              <Clock3 className="h-4 w-4" />

              {readingTime}

            </div>

          </div>

          <div className="flex flex-wrap gap-3 mt-8">

            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}

          </div>

          <Separator className="my-14" />

          <article className="space-y-12">

            {children}

          </article>

        </section>

      </main>

      <Footer />
    </>
  );
}