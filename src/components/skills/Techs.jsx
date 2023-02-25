import React from "react";
import reactImage from "../../assets/reactImage.png";
import tailwind from "../../assets/tailwind.png";
import bootstrap from "../../assets/bootstrap.jpg";
import materialUi from "../../assets/materialUi.png";

function Techs() {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: tailwind,
      title: "Tailwind",
      style: `shadow-blue-500`,
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: materialUi,
      title: "Material Ui",
      style: "shadow-cyan-500",
    },
  ];

  return (
    <div>
      <p className="text-2xl font-bold border-b-4 border-gray-500 p-2 inline">
        Tecnologías
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
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

export default Techs;
