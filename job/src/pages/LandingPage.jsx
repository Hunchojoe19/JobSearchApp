import React from "react";
import worker from "../assets/worker.png";
import Group from "../assets/Group.png";
import logos from "../assets/logos.png";

const LandingPage = () => {
  return (
    <section id="landing">
      <div className="w-full h-[90vh] flex justify-center items-center ">
        <div className="container mx-auto w-full h-full">
          <div className="w-full h-1/2 items-center flex flex-col text-fold ">
            <div className="w-1/2 h-1/2 flex justify-center items-center my-4">
              <img src={worker} alt="worker" className="h-full" />
            </div>
            <div className="my-16">
              <h1 className="text-4xl text-center font-mono">
                Hire The Best Person Within 24 Hours
              </h1>
              <p className="text-center font-sans mt-4">
                Receive carefully screened terms from remote developers that
                best meet your time zone and work methodology.
              </p>
              <div className="flex flex-col justify-center items-center space-y-4">
                <button className="w-[200px] h-[50px] border-none rounded-xl bg-cyan-600 flex items-center justify-center mx-auto my-8 text-white text-['Inter'] text-bold p-8">
                  Apply Now
                </button>
                <button className="w-[200px] h-[50px] border-none rounded-xl bg-orange-400 flex items-center justify-center mx-auto my-4 text-white text-['Inter'] text-bold p-8">
                  Hire Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <img src={Group} alt="team" />
        <img src={logos} alt="sponsors" />
      </div>
    </section>
  );
};

export default LandingPage;
