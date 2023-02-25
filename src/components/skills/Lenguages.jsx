import React from "react";
import html from "../../assets/html.png";
import javaScript from "../../assets/javaScript.png";
import css from "../../assets/css.png";
import typescript from "../../assets/typescript.png";
import c from "../../assets/c.png";

function Lenguages() {
  const languages = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: `shadow-blue-500`,
    },
    {
      id: 3,
      src: javaScript,
      title: "javaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TYPESCRIPT",
      style: "shadow-teal-500",
    },
    {
      id: 5,
      src: c,
      title: "C++",
      style: "shadow-indigo-500",
    },
  ];

  return (
    <div className="">
      <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline">
        Tecnologías
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {languages.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lenguages;
