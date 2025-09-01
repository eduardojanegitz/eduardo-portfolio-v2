import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <h1>
        <Header />
        <HeroSection />
        <ProjectsSection />
      </h1>
    </div>
  );
}
