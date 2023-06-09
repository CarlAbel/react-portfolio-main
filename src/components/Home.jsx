import HeroImage from "../assets/migAnimated.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-[976px] px-4 md:flex-row md:h-full">
        <div className="flex flex-col justify-center -mt-32 md:mt-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Front end Web Developer
          </h2>
          <p className="text:md md:text-xl font-medium text-gray-500 py-4 max-w-lg">
            I am newly graduated web developer with focus on front end developing and with a bit of back end developing. I have 2 years of experience building and designing software.
            Currently, I love to work on web applications and homepages using technologies like
            React, ViteJs, TailwindCSS, Netlify, render.com and CMS systems(Wordpress, Shopify) etc.. 
            Im also currently learning Next.js and Vue.js.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-4/6 my-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
