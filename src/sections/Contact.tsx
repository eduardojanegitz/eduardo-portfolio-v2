"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400
         text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative 
         overflow-hidden z-0"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Vamos criar algo incrível juntos
              </h2>
              <p className="text-sm md:text-base mt-2">
                Pronto para trazer o seu projeto para a realizadade? Vamos nos
                conectar e discutir os seus objetivos
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  window.location.href =
                    "mailto:edu0alves00@gmail.com?subject=" +
                    encodeURIComponent("Contato pelo portfólio") +
                    "&body=" +
                    encodeURIComponent(
                      "Olá, Eduardo! Gostaria de conversar sobre..."
                    );
                }}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950"
              >
                <span className="font-semibold">Contate-me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
