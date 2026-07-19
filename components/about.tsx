import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Engineer, builder, and future founder          
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m a <span className="text-foreground font-medium">Full-Stack Software Engineer</span> who enjoys building products that sit at the intersection of backend systems, user experience, and practical problem-solving.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
I started programming because I wanted a career.
Over time I realized software is one of the most powerful tools for building businesses.
Today I work as an engineer while preparing for a future where I build products of my own.
Everything I learn—from enterprise systems to AI—moves me one step closer to that goal.                   </p>
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
                      <p className="font-medium text-foreground">Open To</p>
                      <p className="text-sm text-muted-foreground">
                        Freelance projects, startup collaboration, and interesting product conversations
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
