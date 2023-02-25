import React from "react";
import git from '../../assets/git.png'
import visualCode from '../../assets/visualCode.jpg'
import vercel from '../../assets/vercel.png'
import gitHub from '../../assets/gitHub.png'

function Tools() {
  const tools = [
    {
      id: 1,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: visualCode,
      title: "VisualCode",
      style: `shadow-blue-500`,
    },
    {
      id: 3,
      src: vercel,
      title: "Vercel",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: gitHub,
      title: "GitHub",
      style: "shadow-cyan-500",
    },
  ];

  return (
    <div>
      <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline">
        Herramientas
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 lg:pb-80">
        {tools.map(({ id, src, title, style }) => (
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

export default Tools;
