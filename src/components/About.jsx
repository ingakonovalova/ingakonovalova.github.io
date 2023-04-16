import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Nice to see you here. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am hard-working full-stack software engineer with almost two years of
              experience in software development. Familiar with building
              front-end solutions with React based on Figma designs, backend
              logic with Node.js and writing tests in Jest. In addition to that,
              have experience with microservices that produce and consume Kafka
              events. Motivated to do high-quality work and grow professionally
              by finding new ways to get knowledge myself or learning from my
              colleagues. Always ready to collaborate as well as work
              independently. Valuable addition to the teams due to existing QA
              and Support Engineering background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
