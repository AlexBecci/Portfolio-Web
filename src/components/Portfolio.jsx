import React from "react";
import seshat from "../assets/portfolio/seshat.png";
import fatefulDungeon from "../assets/portfolio/fatefulDungeon.png";
import rickAndMorty from "../assets/portfolio/rickAndMorty.png";
import meteoroClima from "../assets/portfolio/meteoroClima.png";
import toolKitsCrud from "../assets/portfolio/toolKitsCrud.png";

function Portfolio() {
    
  const portfolios = [
    {
      id: 1,
      src: seshat,
      demo:'https://seshat-react.vercel.app/',
      href:'s'
    },
    {
      id: 2,
      src: meteoroClima,
      demo:'https://prevision-meteorologica.vercel.app/',
      href:'s'
    },
    {
      id: 3,
      src: toolKitsCrud,
      demo:'https://react-toolkits-crud.vercel.app/',
      href:'s'
    },
    {
      id: 4,
      src: rickAndMorty,
      demo:'https://test-vercel-seven-theta.vercel.app/',
      href:'s'
    },
    {
      id: 5,
      src: fatefulDungeon,
      demo:'https://alex-becci.itch.io/fateful-dungeon',
      href:'s'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-zinc-50 md:w-screen py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portafolio
          </p>
          <p className="py-6">Echa un vistazo a mis trabajos aquí</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Codigo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
