"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/arquitetura-limpa.jpg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Música",
    emoji: "🎵",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fotografia",
    emoji: "📷",
    left: "5%",
    top: "35%",
  },
  {
    title: "Academia",
    emoji: "🏋️‍♂️",
    left: "45%",
    top: "35%",
  },
  {
    title: "Jogos",
    emoji: "🎮",
    left: "28%",
    top: "5%",
  },
  {
    title: "Fórmula 1",
    emoji: "🏎️",
    left: "50%",
    top: "5%",
  },
];

export const AboutSection = () => {
  const contraintRef = useRef(null);

  return (
    <section id="about-me" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Descubra meu mundo"
          description="Aqui você encontra um pouco sobre quem eu sou, o que faço e as paixões que me movem"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Meus livros"
                description="Explore as leituras que influenciam minha forma de pensar e trabalhar"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Ferramentas que me ajudam a criar"
                description="Tecnologias e ferramentas que uso para transformar ideias em realidade"
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Meus interesses fora do código"
                description="Conheça as atividades e hobbies que me ajudam a equilibrar minha vida pessoal e profissional"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={contraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={contraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after-content-['']
              after:absolute after:inset-0 after:outline after-outline-2 after:-outline-offset-2
              after:rounded-full after:outline-gray-950/30"
              >
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
