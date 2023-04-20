import React from "react";
import CMSMegaMenu from "../assets/portfolio/CMS-cropped-finish.JPG";
import landrupApp from "../assets/portfolio/landrup-dans-cropped-finish.JPG";
import trainerApp from "../assets/portfolio/trainer-app-cropped-finish.JPG";
import hifiCorner from "../assets/portfolio/hifi-corner-cropped-finish.JPG";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: CMSMegaMenu,
      url: "https://plugins.dk/new/ean/"
    },
    {
      id: 2,
      src: landrupApp,
      url: "https://github.com/CarlAbel"
    },
    {
      id: 3,
      src: trainerApp,
      url: "https://github.com/CarlAbel"
    },
    {
      id: 4,
      src: hifiCorner,
      url: "https://github.com/CarlAbel"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                onClick={() => window.open(url)}
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 min-h-[235px]"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(url)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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

