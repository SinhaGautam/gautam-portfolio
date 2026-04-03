"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Open to opportunities
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Hey, I&apos;m{" "}
            <span className="text-primary">Gautam Sinha</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Senior Full-Stack .NET Engineer
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            Specializing in <span className="text-foreground font-medium">Generative AI</span> &{" "}
            <span className="text-foreground font-medium">Cloud-Native Systems</span>. 4+ years
            building secure, distributed applications using .NET, React, and Azure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/SinhaGautam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/gautamsinha1116"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:gsinha289@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
