import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <h1>
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
      </h1>
    </div>
  );
}
