import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import seshat from "../assets/portfolio/seshat.png";
import fatefulDungeon from "../assets/portfolio/fatefulDungeon.png";
import rickAndMorty from "../assets/portfolio/rickAndMorty.png";
import meteoroClima from "../assets/portfolio/meteoroClima.png";
import toolKitsCrud from "../assets/portfolio/toolKitsCrud.png";
import cineapiolis from "../assets/portfolio/CineAPIolis.png"
import chatbot from "../assets/portfolio/chatbot.png"

function Portfolio() {
  const portfolios = [
    {
      text: "Aplicacion web que permite comunicarse directamente con la API ChatGPT. OpenAI gpt-3.5-turbo-TailwindCss-react",
      style: "shadow-zinc-500",
      title: "Chatbot",
      id: 1,
      src: chatbot,
      demo: "https://chatbot-web-nine.vercel.app/",
      gradient: "to-zinc-500",
      code: "https://github.com/AlexBecci/ChatbotWeb",
    },
    {
      text: "Aplicación para monitorizar el tiempo, utilizando la API de OpenWeatherMap",
      style: "shadow-cyan-500",
      title: "MeteoroClima",
      id: 2,
      src: meteoroClima,
      demo: "https://prevision-meteorologica.vercel.app/",
      gradient: "to-cyan-500",
      code: "https://github.com/AlexBecci/Prevision-meteorologica",
    },
    {
      text: "Anotador básico de tareas aplicando Redux de forma básica e intuitiva.",
      style: "shadow-yellow-500",
      title: "ToolsKitsCrud",
      id: 3,
      src: toolKitsCrud,
      demo: "https://react-toolkits-crud.vercel.app/",
      gradient: "to-yellow-500",
      code: "https://github.com/AlexBecci/React-Toolkits-Crud",
    },
    {
      text: "Pagina web consumiendo api de rick y morty utilizando la API de https://rickandmortyapi.com/",
      style: "shadow-red-500",
      title: "Info Mortys",
      id: 4,
      src: rickAndMorty,
      demo: "https://test-vercel-seven-theta.vercel.app/",
      gradient: "to-red-500",
      code: "https://github.com/AlexBecci/Info-Mortys-web",
    },
    {
      text: " Es un roguelike 2d sobre magia, en un futuro la idea sería que fuera multijugador (cooperativo).",
      style: "shadow-slate-500",
      title: "Fateful Dungeon",
      id: 5,
      src: fatefulDungeon,
      demo: "https://alex-becci.itch.io/fateful-dungeon",
      code: "https://github.com/AlexBecci/Fateful-Dungeon",
      gradient: "to-slate-500",
    },
    {
      text: "Aplicación de Películas con REACT,Tailwind y utilizando la API de the movie database Api",
      style: "shadow-cyan-500",
      title: "CineAPIolis",
      id: 6,
      src: cineapiolis,
      demo: "https://peli-api-olis.vercel.app/",
      code: "https://github.com/AlexBecci/CineAPIolis",
      gradient: "to-cyan-500",
    },
    {
      text: "Seshat es una plataforma del mundo social basada en narrativas",
      style: "shadow-indigo-500",
      title: "Seshat",
      id: 6,
      src: seshat,
      demo: "https://seshat-react.vercel.app/",
      gradient: "to-indigo-500",
      code: "https://github.com/SeshatWriters/seshat-react",
    },
  ];

  return (
    <section name='portfolio' className="text-zinc-300 body-font font0bold bg-gradient-to-b from-black to-gray-800 py-5">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div>
            <h1 className="sm:text-4xl text-3xl title-font mb-4 text-white font-bold inline border-b-4 border-emerald-500 ">
              Portafolio
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base  py-6">
              Echa un vistazo a mis trabajos aquí
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 px-10">
          {portfolios.map(
            ({ title, id, src, demo, code, style, text, gradient }) => (
              <div key={id} className="p-4 sm:w-1/2 lg:w-1/3 sm:mb-0 mb-6 py-10">
                <div className={`rounded-lg h-64 overflow-hidden  shadow-md ${style}`}>
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={src}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-amber-100 mt-5">
                  {title}
                </h2>
                <p className="text-base leading-relaxed my-4">{text}</p>
                <div className="flex">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={demo}
                    smooth
                    duration={500}
                    className={`text-base  mx-2 group text-amber-100 w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-slate-900 ${gradient} hover:cursor-pointer`}
                  >
                    Demo
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={code}
                    smooth
                    duration={500}
                    className={`text-base  mx-2 ml-10 group text-amber-100 w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-slate-900 ${gradient} hover:cursor-pointer`}
                  >
                    Code
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
