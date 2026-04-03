import { Building2, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Member of Technical Staff (SDE-2)",
    company: "EdgeVerve Systems Limited",
    location: "Pune",
    period: "Mar 2025 – Present",
    highlights: [
      "Led cloud modernization initiatives by migrating legacy Windows-based systems to containerized microservices on Kubernetes, achieving 90% reduction in unplanned downtime",
      "Directed enterprise database migration from SQL Server and Oracle to PostgreSQL, enhancing scalability and performance",
      "Designed and implemented secure, event-driven REST APIs using .NET and Node.js for real-time auditing and compliance enforcement",
      "Strengthened engineering practices by enforcing CI/CD standards and mentoring engineers to reduce production defects",
    ],
    current: true,
  },
  {
    title: "Product Engineer (SDE-1)",
    company: "EdgeVerve Systems Limited",
    location: "Pune",
    period: "Feb 2022 – Mar 2025",
    highlights: [
      "Designed and developed scalable backend APIs and event-driven services using .NET and Node.js",
      "Architected an automated patching and upgrade framework that accelerated customer upgrade cycles",
      "Containerized and deployed applications using Docker, Kubernetes, and Helm",
      "Provided L3 production support for critical P1/P2 incidents, maintaining 95% SLA compliance",
    ],
    current: false,
  },
  {
    title: "Product Engineering",
    company: "Oppo Mobiles India Ltd.",
    location: "Greater Noida",
    period: "Oct 2019 – Mar 2020",
    highlights: [
      "Performed production engineering data analysis and process optimization in a high-volume manufacturing environment",
      "Generated MIS reports and conducted data validation to support defect reduction initiatives",
    ],
    current: false,
  },
];

const certifications = [
  "Angular (Full App) with Angular Material, Angularfire & NgRx",
  "Kubernetes for the Absolute Beginners - Hands-on",
  "Docker for the Absolute Beginners - Hands-on-DevOps",
  "Amazon Web Services Cloud Practitioner",
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            4+ years of enterprise experience building secure, distributed
            applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1 md:-translate-x-1.5 mt-8">
                  {exp.current && (
                    <span className="absolute -inset-1 rounded-full bg-primary/50 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-1">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4" />
                            <span>
                              {exp.company}, {exp.location}
                            </span>
                          </div>
                        </div>
                        {exp.current && (
                          <Badge variant="default" className="shrink-0">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="py-2 px-4 text-sm"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
