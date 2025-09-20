import iphoneImage from "@/assets/images/iphone.png";
import koothrappaliImage from "@/assets/images/koothrappali.png";
import aerodevImage from "@/assets/images/aerodev.png";
import portfolioImage from "@/assets/images/portfolio.png";
import evelandingPage from "@/assets/images/evelanding.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

type Project = {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  image: any;
  tags?: string[];
};

const portfolioProjects: Project[] = [
  // {
  //   company: "Vitafor",
  //   year: "2025",
  //   title: "Vita Credenciamento",
  //   tags: [
  //     "Fullstack",
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Node.js",
  //     "Prisma",
  //     "PostgreSQL",
  //   ],
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/4k7IdSLxh6w",
  //   image: darkSaasLandingPage,
  // },
  // {
  //   company: "Vitafor",
  //   year: "2024",
  //   title: "automação de requisições",
  //   tags: ["Node.js", "TypeScript", "Playwright", "BullMQ", "Redis", "API"],
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/4k7IdSLxh6w",
  //   image: darkSaasLandingPage,
  // },
  // {
  //   company: "Vitafor",
  //   year: "2025",
  //   title: "Monitoramento ecommerce",
  //   tags: ["Next.js", "Node.js", "Cron", "Webhooks", "Observabilidade"],
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/4k7IdSLxh6w",
  //   image: darkSaasLandingPage,
  // },
  // {
  //   company: "Evecoding",
  //   year: "2023",
  //   title: "Eventory",
  //   tags: ["React", "MaterialUI", "Node.js", "Express", "MySQL"],
  //   results: [
  //     { title: "Boosted sales by 20%" },
  //     { title: "Expanded customer reach by 35%" },
  //     { title: "Increased brand awareness by 15%" },
  //   ],
  //   link: "https://eventory-teste.onrender.com",
  //   image: eventoryImage,
  // },
  {
    company: "Evecoding",
    year: "2023",
    title: "Landing Page Eventory",
    tags: ["React", "GSAP", "Styled Components"],
    results: [
      { title: "Design responsivo para qualquer dispositivo" },
      { title: "CTAs destacadas e objetivas" },
      { title: "Experiência do usuário intuitiva e agradável" },
    ],
    link: "https://evelanding.vercel.app",
    image: evelandingPage,
  },
  {
    company: "Apple",
    year: "2023",
    title: "Clone da Landing Page do Iphone 15",
    tags: ["React", "Framer Motion", "Animações"],
    results: [
      { title: "Implementação fiel ao design original" },
      { title: "Animações fluidas com Framer Motion" },
      { title: "UX envolvente e intuitiva" },
    ],
    link: "https://iphone-eta.vercel.app",
    image: iphoneImage,
  },
  {
    company: "AERODEV.",
    year: "2023",
    title: "AERODEV.",
    tags: ["React", "Three.js"],
    results: [
      { title: "Experiência interativa com rolagem animada" },
      { title: "Integração 3D fluida com Three.js" },
      { title: "UX envolvente e intuitiva" },
    ],
    link: "https://aerodev.vercel.app",
    image: aerodevImage,
  },
  {
    company: "Snapgram",
    year: "2024",
    title: "Koothrappali",
    tags: ["React", "TailwindCSS", "Appwrite"],
    results: [
      { title: "Design responsivo" },
      { title: "Feed dinâmico com carregamento eficiente" },
      { title: "Código limpo e bem estruturado" },
    ],
    link: "https://koothrappali.vercel.app",
    image: koothrappaliImage,
  },
  {
    company: "Portfólio",
    year: "2024",
    title: "Portfólio V1",
    tags: ["React", "Framer Motion", "SCSS"],
    results: [
      { title: "Layout profissional que valoriza os projetos" },
      { title: "Apresentação da identidade visual" },
      { title: "Performance otimizada" },
    ],
    link: "https://eduardo-alves-portfolio.vercel.app",
    image: portfolioImage,
  },
  // {
  //   company: "análise de curriculos",
  //   year: "2025",
  //   title: "análise de curriculos com IA",
  //   tags: ["Next.js", "Node.js", "OpenAI API", "Pipelines", "Upload"],
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2025",
  //   title: "API de hábitos",
  //   tags: ["Node.js", "Fastify", "TypeScript", "Prisma", "PostgreSQL"],
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="pb-16 lg:py-24 scroll-mt-[72px] md:scroll-mt-[88px]"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Resultados do mundo real"
          title="Meus Projetos"
          description="Veja como eu transformei conceitos em uma experiência digital"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  {project.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      Veja o site ao vivo
                      <ArrowUpIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none border border-transparent rounded-xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
