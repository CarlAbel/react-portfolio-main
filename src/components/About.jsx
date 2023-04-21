

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mb-20 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 mt-48 md:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-md mt-12 md:text-xl">
        My name is Carl A, and I'm a 26-year-old newly graduated front-end web developer from Roskilde Technical School. I aspire to become a full-stack web developer one day. During my studies, which began in August 2021 and just ended March 2023, I was introduced to the world of web development, specifically front-end development. We gained practical experience with HTML, CSS, Javascript, Tailwind CSS, and Emotion CSS, as well as various frameworks like Gulp, React, Next.js, and Node.js, mostly developing in React.js. Before starting my studies, I played around with page builders like Shopify and WordPress. And i have approximately four years of experience with audio production and sound manipulation in Fruity Loops.
        </p>
        <br />
        <p className="text-md md:text-xl">
        Although I don't have previous experience as a web developer, I did complete two 6-week internships (totaling 12 weeks) in the field. Prior to my studies, I worked as a technician for AREPA/Envista Forensics for four years, both in Denmark and abroad. Through my studies, I've discovered my passion for front-end development and aim to learn all aspects of web development, marketing, design, and databases. Ultimately, I hope to become a full-stack developer one day.
        </p>
      </div>
    </div>
  );
};

export default About;
