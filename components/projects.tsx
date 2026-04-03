import { Github, ExternalLink, Brain, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Enterprise Knowledge Platform with Generative AI & RAG",
    description:
      "A comprehensive Retrieval-Augmented Generation (RAG) pipeline using Azure OpenAI and pgvector for semantic document search and grounded AI responses.",
    icon: Brain,
    highlights: [
      "Designed and implemented a RAG pipeline using Azure OpenAI and pgvector for semantic document search",
      "Built an isolated AI worker service triggered via RabbitMQ events for document ingestion and embedding generation",
      "Implemented advanced prompt engineering techniques to enforce context grounding and minimize hallucinations",
      "Developed secure project-level isolation with RBAC, JWT authentication, and full audit logging",
    ],
    technologies: [
      ".NET 9",
      "ASP.NET Core",
      "Azure OpenAI",
      "RAG",
      "PostgreSQL",
      "pgvector",
      "RabbitMQ",
      "Angular",
      "Docker",
      "Microservices",
      "JWT",
      "RBAC",
    ],
    github: "https://github.com/enterprise-rag-system",
    architecture: "Microservices + Event-Driven + AI Worker Isolation",
  },
  {
    title: "Buy Nothing — AI-Assisted Satirical Web Application",
    description:
      "A production-ready full-stack web application leveraging AI-assisted development workflows for rapid UI and API generation.",
    icon: ShoppingCart,
    highlights: [
      "Designed and developed a production-ready full-stack web application using AI-assisted development workflows",
      "Implemented REST APIs, secure payment integration (Razorpay), and email notifications",
      "MongoDB-based data persistence with full CRUD operations",
      "Deployed and maintained on cloud platforms (Vercel) with CI/CD pipelines",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Vercel",
    ],
    github: "https://github.com/BuyNothingFunApp",
    live: "https://nothing-client-app.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Bringing ideas to life with clean code and modern architecture
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-balance">
                      {project.title}
                    </CardTitle>
                    {project.architecture && (
                      <Badge variant="outline" className="text-xs">
                        {project.architecture}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.live && (
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
