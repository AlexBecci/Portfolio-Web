import React from "react";
import git from "../assets/git.png";
import visualCode from "../assets/visualCode.jpg";
import vercel from "../assets/vercel.png";
import gitHub from "../assets/gitHub.png";
import reactImage from "../assets/reactImage.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.jpg";
import materialUi from "../assets/materialUi.png";
import html from "../assets/html.png";
import javaScript from "../assets/javaScript.png";
import css from "../assets/css.png";
import typescript from "../assets/typescript.png";
import c from "../assets/c.png";

function Skills() {
  const techs = [
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
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-teal-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: `shadow-blue-500`,
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-indigo-500",
    },
    {
      id: 9,
      src: materialUi,
      title: "Material Ui",
      style: "shadow-cyan-500",
    },
    {
      id: 10,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: visualCode,
      title: "VisualCode",
      style: `shadow-blue-500`,
    },
    {
      id: 12,
      src: vercel,
      title: "Vercel",
      style: "shadow-white",
    },
    {
      id: 13,
      src: gitHub,
      title: "GitHub",
      style: "shadow-emerald-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-zinc-50">
        <div>
          <p className="text-4xl font-bold border-b-4 border-emerald-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            Estas son las tecnologías/lenguajes/herramientas con las que he
            trabajado y trabajo actualmente{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-zinc-50">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
