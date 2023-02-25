import React from "react";
import seshat from "../assets/portfolio/seshat.png";
import fatefulDungeon from "../assets/portfolio/fatefulDungeon.png";
import rickAndMorty from "../assets/portfolio/rickAndMorty.png";
import meteoroClima from "../assets/portfolio/meteoroClima.png";
import toolKitsCrud from "../assets/portfolio/toolKitsCrud.png";

function Portfolio() {
  const portfolios = [
    {
      title:'Seshat',
      id: 1,
      src: seshat,
      demo: "https://seshat-react.vercel.app/",
      code: "https://github.com/SeshatWriters/seshat-react",
    },
    {
      title:'MeteoroClima',
      id: 2,
      src: meteoroClima,
      demo: "https://prevision-meteorologica.vercel.app/",
      code: "https://github.com/AlexBecci/Prevision-meteorologica",
    },
    {
      title:'ToolsKitsCrud',
      id: 3,
      src: toolKitsCrud,
      demo: "https://react-toolkits-crud.vercel.app/",
      code: "https://github.com/AlexBecci/React-Toolkits-Crud",
    },
    {
      title:'Info Mortys',
      id: 4,
      src: rickAndMorty,
      demo: "https://test-vercel-seven-theta.vercel.app/",
      code: "https://github.com/AlexBecci/Info-Mortys-web",
    },
    {
      title:'Fateful Dungeon',
      id: 5,
      src: fatefulDungeon,
      demo: "https://alex-becci.itch.io/fateful-dungeon",
      code: "https://github.com/AlexBecci/Fateful-Dungeon",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-zinc-100 md:w-screen py-10 lg:pb-48"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-72">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-500">
            Portafolio
          </p>
          <p className="py-6">Echa un vistazo a mis trabajos aquí</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ title,id, src, demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="text-center text-lg font-semibold m-1">{title}</p>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-yellow-500">
                    Demo
                  </button>
                </a>
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-yellow-500">
                    Codigo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
