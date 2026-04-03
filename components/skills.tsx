import {
  Server,
  Layout,
  Database,
  Brain,
  Cloud,
  GitBranch,
  MessageSquare,
  Layers,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      ".NET 9",
      "ASP.NET Core Web API",
      "C#",
      "Node.js",
      "REST APIs",
      "Event-driven Architecture",
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "SQL Server",
      "Oracle",
      "MongoDB",
      "pgvector (Vector DB)",
    ],
  },
  {
    title: "Generative AI",
    icon: Brain,
    skills: [
      "Azure OpenAI",
      "RAG Architecture",
      "Prompt Engineering",
      "LLM Fundamentals",
      "Vector Search",
      "AI Worker Architecture",
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: [
      "Microsoft Azure",
      "Azure OpenAI",
      "App Services",
      "AKS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranch,
    skills: ["Azure DevOps", "GitHub Actions", "Git", "Helm"],
  },
  {
    title: "Messaging",
    icon: MessageSquare,
    skills: ["RabbitMQ", "Event-driven Systems"],
  },
  {
    title: "Architecture",
    icon: Layers,
    skills: [
      "Microservices",
      "Distributed Systems",
      "Secure SDLC",
      "RBAC",
      "JWT",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            I use the latest tools and technologies to build functional and
            scalable products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group hover:border-primary/50 transition-colors"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="h-5 w-5" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
