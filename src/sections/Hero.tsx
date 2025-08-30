import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Disponível para novos projetos
            </div>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
          Construindo experiências do usuário excepcionais
        </h1>
        <p className="mt-4 text-center text-white/60">
          Eu vou ver o que coloco aqui de descrição. Vamos discutir no seu
          próximo projeto
        </p>
        <div className="flex flex-col items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore meu trabalho</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>🤝</span>
            <span className="font-semibold">Vamos conectar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
