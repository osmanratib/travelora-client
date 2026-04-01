import React, { useEffect, useRef } from "react";
import Banner from "../../Components/Banner/Banner";
import TouristSpots from "../../Components/TouristSpots/TouristSpots";
import Countries from "../../Components/Countries/Countries";
import VisualSection from "../../Components/VisualSecion/VisualSection";
import Typewriter from "typewriter-effect/dist/core";
import InfiniteLoop from "../../Components/InfiniteLoop/InfiniteLoop";

const Home = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (!typewriterRef.current) return;

    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
      deleteSpeed: 50,
    });

    typewriter
      .typeString("WELCOME TO SOUTH ASIA")
      .pauseFor(2000)
      .deleteAll()
      .typeString("EXPLORE THE BEAUTY OF ASIA")
      .pauseFor(2000)
      .start();
  }, []);

  return (
    <div className="w-full overflow-hidden">

      <h1
        ref={typewriterRef}
        className="
          text-center 
          font-changaOne 
          font-bold 
          text-white 
          uppercase
          px-4
          py-6
          text-2xl
          sm:text-3xl
          md:text-5xl
          lg:text-6xl
        "
      >
        WELCOME TO SOUTH ASIA
      </h1>

      <div className="space-y-10 md:space-y-16">
        <Banner />
        <TouristSpots />
        <VisualSection />
        <InfiniteLoop />
        <Countries />
      </div>

    </div>
  );
};

export default Home;