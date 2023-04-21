import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import netlify from "../assets/netlify.png";
import render from "../assets/render.png";
import nodejs from "../assets/nodejs.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML5",
      style: "shadow-orange-500",
      url: "https://www.geeksforgeeks.org/html/",
     
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      url: "https://react.dev/",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node.js + Express",
      style: "shadow-green-600",
      url: "https://nodejs.dev/en/learn/",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
      url: "https://tailwindcss.com/",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      url: "https://github.com/CarlAbel",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
      url: "https://www.mongodb.com/",
    },
    {
      id: 9,
      src: netlify,
      title: "Netlify",
      style: "shadow-sky-300",
      url: "https://www.netlify.com/",
    },

    {
      id: 10,
      src: render,
      title: "render.com",
      style: "shadow-green-200",
      url: "https://render.com/",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full md:h-full text-white">
        <div className="mt-20">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, url, ratings }) => (
            <div
              key={id}
              onClick={() => window.open(url)}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto rounded-md" />
              <p className="mt-4 font-medium ">{title}</p>
              <p className="mt-4">{ratings}</p> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
