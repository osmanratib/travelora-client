import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TouristSpots from '../../Components/TouristSpots/TouristSpots';
import Countries from '../../Components/Countries/Countries';
import VisualSection from '../../Components/VisualSecion/VisualSection';
import Typewriter from 'typewriter-effect/dist/core';

const Home = () => { 
 React.useEffect(() => {
  const typewriter = new Typewriter(document.getElementById('typewriter-text'), {
   loop: true,
   delay: 75,
   deleteSpeed: 50,
  });

  typewriter
   .typeString('WELCOME TO South Asia')
   .pauseFor(2000)
   .deleteAll()
   .typeString('EXPLORE THE BEAUTY OF ASIA')
   .pauseFor(2000)
   .start();
 }, []);
 return (
  <div> 

    <h1 
    id='typewriter-text'
    className='text-center text-[40px]  font-changaOne uppercase font-bold text-white p-12' >WELCOME TO South Asia </h1>
 

   <Banner/>
   <TouristSpots/>
   <VisualSection/>                           
   <Countries/>
  </div>
 );
};

export default Home;