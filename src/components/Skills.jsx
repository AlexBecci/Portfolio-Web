import React from "react";
import Lenguages from "./skills/Lenguages";
import Techs from "./skills/Techs";
import Tools from "./skills/Tools";

function Skills() {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-zinc-50">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            Estas son Tecnologías/Herramientas/Lenguajes de programación con las
            que he trabajado
          </p>
        </div>
        <Lenguages/>
        <Techs/>
        <Tools />
      </div>
    </div>
  );
}

export default Skills;
