"use client";

import Image from "next/image";

import { Button1 } from "../components";

// import { Button1 } from "./CustomButton";

const Hero = () => {

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonStyle = {
    backgroundColor: "#2B59FF",
    color: "white",
    borderRadius: "9999px",
    marginTop: "2.5rem",
  };


  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        {/* <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}

        <Button1
          // containerStyles="bg-primary-blue text-white rounded-full mt-10"
          // style={buttonStyle}
          className="m-10 text-white rounded-full px-[5px] py-[3px] bg-primary-blue"
          onClick={handleScroll}
        >
          Explore Cars
        </Button1>
        {/* 
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
