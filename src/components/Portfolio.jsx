import React from "react";
import CMSMegaMenu from "../assets/portfolio/CMS-cropped-finish.JPG";
import landrupApp from "../assets/portfolio/landrup-dans-cropped-finish.JPG";
import trainerApp from "../assets/portfolio/trainer-app-cropped-finish.JPG";
import hifiCorner from "../assets/portfolio/hifi-corner-cropped-finish.JPG";
import pestoPasta from "../assets/portfolio/PestoPasta.png";
import figmaLand from "../assets/portfolio/FigmaLand.png";
import rooster from "../assets/portfolio/rooster.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: CMSMegaMenu,
      url: "https://plugins.dk/new/ean/",
      title: "CMS/WP (with elementorPro) with woocomerce shop with Mega Menu made at internship - Internship took the page down...",
      style: "shadow-orange-200",
    },
    {
      id: 2,
      src: landrupApp,
      url: "https://github.com/CarlAbel",
      title: "Landrup Dans - Figma to React.js, TailwindCSS, JS, data RESTful web-API written with Express and MySQL - school project",
      style: "shadow-purple-600"
    },
    {
      id: 3,
      src: pestoPasta,
      url: "https://github.com/CarlAbel",
      title: "Pesto Pasta - Figma to HTML5, CSS, JS",
      style: "shadow-red-500"
    },
    {
      id: 4,
      src: figmaLand,
      url: "https://github.com/CarlAbel",
      title: "Figma Land - Figma to HTML5, CSS, JS",
      style: "shadow-blue-600"
    },
    {
      id: 5,
      src: trainerApp,
      url: "https://github.com/CarlAbel",
      title: "Trainer App - Figma to React.js, TailwindCSS, JS, data RESTful web-API written with Express and MySQL - school project",
      style: "shadow-sky-300"
      
    },
    {
      id: 6,
      src: hifiCorner,
      url: "https://github.com/CarlAbel",
      title: "HIFIcorner - Freestyle project with HTML5, CSS, JS",
      style: "shadow-green-600"
    },
    {
      id: 7,
      src: rooster,
      url: "https://caweb-roosterwebopgave.netlify.app/",
      title: "Rooster-Webopgave - Project with HTML5, CSS, JS",
      style: "shadow-green-600"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-32 md:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-0">
          {portfolios.map(({ id, src, url, title, style }) => (
            <div key={id} className={`shadow-md rounded-lg ${style}`}>
              
              <img
                onClick={() => window.open(url)}
                src={src}
                alt="portofolio"
                className="rounded-md duration-200 hover:scale-105 min-h-[235px]"
              />
              <div className="flex-col">
                <h2 className="px-4 py-2 font-medium">{title}</h2>
                <button onClick={() => window.open(url)} className="px-8 py-2 my-4 mx-4 duration-200 hover:scale-105 bg-slate-700 rounded-lg font-semibold">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

