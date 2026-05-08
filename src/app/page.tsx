import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}