import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Building digital experiences that make a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m a <span className="text-foreground font-medium">Senior Full-Stack .NET Engineer</span> with
                    4+ years of enterprise experience building secure,
                    distributed applications. I specialize in{" "}
                    <span className="text-foreground font-medium">
                      Generative AI
                    </span>{" "}
                    and{" "}
                    <span className="text-foreground font-medium">
                      Cloud-Native Systems
                    </span>
                    , using .NET, C#, NodeJS, React/Angular, and both SQL and
                    NoSQL databases.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I have hands-on experience designing and implementing
                    Generative AI solutions using Azure OpenAI,
                    Retrieval-Augmented Generation (RAG), vector databases
                    (pgvector), and event-driven microservices architecture.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My expertise includes containerization with Docker and
                    Kubernetes, secure API development, CI/CD pipelines, and
                    scalable system design. I&apos;m currently expanding my
                    Azure-native deployment capabilities while specializing in
                    enterprise AI architecture and prompt engineering.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Pune, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Education</p>
                      <p className="text-sm text-muted-foreground">
                        B.Tech in Electrical & Electronics Engineering
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Dr APJ Abdul Kalam Technical University, 2019
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Focus</p>
                      <p className="text-sm text-muted-foreground">
                        Generative AI, RAG, Cloud-Native Systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
