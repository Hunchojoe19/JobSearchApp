import React from "react";
import Group from "../assets/Group.png";
import logos from "../assets/logos.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col justify-center items-center md:mt-[-12rem] lg:mt-[8rem]">
        <img src={Group} alt="team" className="hidden md:block" />
        <img
          src={logos}
          alt="sponsors"
          className="h-[200px] mt-6 md:h-[400px] w-[400px] md:w-[800px] lg:w-[800px] xl:w-[1200px]"
        />
      </div>
    </section>
  );
};

export default Hero;
