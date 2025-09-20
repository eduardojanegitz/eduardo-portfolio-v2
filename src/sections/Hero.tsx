import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="
        relative z-0 overflow-x-clip
        min-h-[100svh]
        py-14 md:py-48 lg:py-14
      "
    >
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <div className="hidden sm:block size-[620px] hero-ring" />
        <div className="hidden sm:block size-[820px] hero-ring" />
        <div className="hidden md:block size-[1020px] hero-ring" />
        <div className="hidden lg:block size-[1220px] hero-ring" />

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldorbit
          orbitduration="30s"
          shouldspin
          spinduration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <div className="hidden sm:block">
          <HeroOrbit
            size={440}
            rotation={79}
            shouldorbit
            orbitduration="32s"
            shouldspin
            spinduration="4s"
          >
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
        </div>
        <div className="hidden md:block">
          <HeroOrbit
            size={530}
            rotation={178}
            shouldorbit
            orbitduration="34s"
            shouldspin
            spinduration="8s"
          >
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
        </div>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldorbit
          orbitduration="36s"
          shouldspin
          spinduration="12s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <div className="hidden md:block">
          <HeroOrbit
            size={520}
            rotation={-41}
            shouldorbit
            orbitduration="38s"
            shouldspin
            spinduration="15s"
          >
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
        </div>
        <div className="hidden sm:block">
          <HeroOrbit
            size={590}
            rotation={98}
            shouldorbit
            orbitduration="40s"
            shouldspin
            spinduration="18s"
          >
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
        </div>
        <div className="hidden sm:block">
          <HeroOrbit size={650} rotation={-5} shouldorbit orbitduration="42s">
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
        </div>
        <div className="hidden md:block">
          <HeroOrbit size={710} rotation={144} shouldorbit orbitduration="44s">
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
        </div>
        <div className="hidden lg:block">
          <HeroOrbit size={720} rotation={85} shouldorbit orbitduration="46s">
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
        </div>
        <div className="hidden lg:block">
          <HeroOrbit
            size={800}
            rotation={-71}
            shouldorbit
            orbitduration="48s"
            shouldspin
            spinduration="25s"
          >
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
        </div>
      </div>

      <div className="container relative z-10">
        <div
          className="
            mx-auto flex max-w-2xl flex-col items-center justify-center
            min-h-[calc(100svh-72px)]  /* ajuste p/ altura da sua navbar */
            md:translate-y-2 lg:translate-y-4  /* desce um pouco em telas maiores */
          "
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              <div
                className="absolute -inset-6 blur-3xl bg-emerald-500/10 rounded-full"
                aria-hidden
              />
              <Image
                src={memojiImage}
                alt="Ilustração de desenvolvedor no notebook"
                className="size-[90px] md:size-[100px] drop-shadow-xl"
                priority
              />
            </div>

            <div className="-mt-1 bg-gray-950/80 backdrop-blur border border-white/10 px-3.5 py-1 inline-flex items-center gap-2.5 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <span className="bg-green-500 size-2.5 rounded-full relative">
                <span className="bg-green-500/80 absolute inset-0 rounded-full animate-ping-large" />
              </span>
              <span className="text-[13px] md:text-sm font-medium">
                Disponível para novos projetos
              </span>
            </div>
          </div>

          <div className="mt-5 text-center px-2">
            <h1 className="font-serif leading-tight tracking-wide text-[clamp(26px,7vw,56px)]">
              <span className="bg-gradient-to-r from-emerald-200 via-white to-emerald-200 bg-clip-text text-transparent">
                Desenvolvedor Fullstack: Construindo experiências modernas e
                escaláveis
              </span>
            </h1>

            <p className="mt-3 text-white/70 text-[15px] md:text-lg">
              +3 anos em <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
              <strong>Node.js</strong> e <strong>TypeScript</strong>. Unindo
              experiência em suporte e desenvolvimento com{" "}
              <strong>comunicação clara</strong> e colaboração para transformar
              ideias em produtos prontos para crescer.
            </p>

            <div className="mt-5 hidden md:flex flex-wrap justify-center gap-2 text-xs text-white/60">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Foco em performance
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                UX de ponta a ponta
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">
                Colaboração e clareza
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-7 gap-3 md:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors px-5 md:px-6 h-11 md:h-12 rounded-xl cursor-pointer"
              aria-label="Ver meus projetos"
            >
              <span className="font-semibold">Ver meus projetos</span>
              <ArrowDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-11 md:h-12 px-5 md:px-6 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold hover:brightness-95 transition"
              aria-label="Entrar em contato"
            >
              <span>🤝</span>
              <span>Vamos conversar</span>
            </a>
          </div>

          <div className="mt-5 md:mt-6 text-center text-xs text-white/50">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5">
              Resposta rápida • Código limpo • Entregas confiáveis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
