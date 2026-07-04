import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Nav />
      <div>
        <About />
        <Projects />
        <ContactSection />
      </div>
    </div>
  );
}
