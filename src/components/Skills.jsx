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
    <section className="text-zinc-300 body-font bg-gradient-to-b from-gray-800 to-black md:w-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-amber-50">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Estas son las tecnologías/lenguajes/herramientas con las que he
            trabajado y trabajo actualmente
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className="p-2 sm:w-1/3 w-1/2 sm:pl-16">
              <div className={` my-2 w-40 h-40 items-center  rounded-full bg-slate-900 py-5 shadow-md ${style} hover:scale-105 duration-500`}>
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 text-zinc-50 text-center text-base font-bold">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
