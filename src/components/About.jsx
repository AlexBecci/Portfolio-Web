import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-zinc-100"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-500">
            Sobre MÍ
          </p>
        </div>
        <p className="text-xl mt-20">
          Soy una persona autodidacta, responsable y comprometida con mi
          trabajo. Diariamente estoy aprendiendo nuevas tecnologías y
          herramientas para mejorar mis habilidades. <br />
          Tengo 20 años, soy de Argentina, apasionado por el desarrollo web, el
          desarrollo de videojuegos y el fútbol.
          <br />
          Estudiante de desarrollo y producción de videojuegos.
        </p>
        <br />
        <p className="text-xl">
          Busco un entorno organizado y agradable donde pueda crecer como
          profesional y llevar a cabo grandes desafíos e iniciativas.
        </p>
      </div>
    </div>
  );
}

export default About;
