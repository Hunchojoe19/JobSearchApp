import React from "react";
import worker from "../assets/worker.png";

import Hero from "./Hero";

const LandingPage = () => {
  return (
    <section id="landing">
      <div className="container flex justify-center items-center lg:h-[90vh] xl:h-[90vh]">
        <div className="container mx-auto w-full h-full">
          <div className="w-full h-1/2 items-center flex flex-col text-fold md:flex-row-reverse mt-12">
            <div className="w-1/2 h-[30vh] flex justify-center items-center my-4 md:w-[50%] mx-8">
              <img
                src={worker}
                alt="worker"
                className="mx-8 mt-4 lg:mt-[16rem]"
              />
            </div>
            <div className="mt-12 md:mt-24 flex flex-col justify-center items-center md:w-[50%] lg:mt-[10rem]">
              <div className="lg:mb-32">
                <h1 className="text-4xl text-center font-mono sm:leading-0 mt-0 md:text-7xl lg:leading-[80px]">
                  Hire The Best Person Within 24 Hours
                </h1>
                <p className="text-center font-sans mt-4 sm:leading-0 md:text-xl lg:text-2xl mt-12">
                  Receive carefully screened terms from remote developers that
                  best meet your time zone and work methodology.
                </p>
              </div>
              <div className="flex justify-center items-center space-y-4 sm:flex-col md:flex-row space-x-2 mt-12 ml-8 justify-center items-center lg:flex flex-row justify-between justify-between items-center space-x-16 xl:flex-row justify-between items-center space-x-16">
                <button className="w-[200px] h-[50px] border-none rounded-xl bg-cyan-600 flex items-center justify-center mx-auto my-5 text-white text-['Inter'] text-bold p-8 sm:mt-9">
                  Apply Now
                </button>
                <button className="w-[200px] h-[50px] border-none rounded-xl bg-brightRed flex items-center justify-center mx-auto text-white text-['Inter'] text-bold p-8">
                  Hire Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-48 md:mt-[-10rem]">
        <Hero />
      </div>
    </section>
  );
};

export default LandingPage;
