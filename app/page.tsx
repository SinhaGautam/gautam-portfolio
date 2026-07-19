import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
//import { Skills } from "@/components/skills";
//import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WritingPreview } from "@/components/Writing";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Projects />
      <WritingPreview />
      <Contact />
      <Footer />
    </main>
  );
}
