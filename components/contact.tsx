"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gautamsinha1116",
    href: "https://linkedin.com/in/gautamsinha1116",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/SinhaGautam",
    href: "https://github.com/SinhaGautam",
  },
  {
    icon: Mail,
    label: "Email",
    value: "gsinha289@gmail.com",
    href: "mailto:gsinha289@gmail.com",
  }
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData?.error || "Unable to send message. Please try again later.",
        );
      }

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      toast({
        title: "Message sent",
        description: "Thanks for reaching out! I will get back to you soon.",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      toast({
        title: "Submission failed",
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Have a project in mind or just want to chat? I&apos;d love to hear from
            you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              through any of these channels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group"
                >
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {link.label}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {link.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                  />
                </Field>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting || submitted}
                >
                  {submitted ? (
                    "Message Sent!"
                  ) : isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
