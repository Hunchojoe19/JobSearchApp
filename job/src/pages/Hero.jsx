import React from "react";
import Group from "../assets/Group.png";
import logos from "../assets/logos.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <img src={Group} alt="team" className="hidden md:block" />
        <img src={logos} alt="sponsors" className="mt-6 lg:" />
      </div>
    </section>
  );
};

export default Hero;
