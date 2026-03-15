import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TouristSpots from '../../Components/TouristSpots/TouristSpots';

const Home = () => {
 return (
  <div>
   <h1 className='text-center text-[60px] m-12 font-changaOne uppercase font-bold text-primary-0' >WELCOME TO BANGLADESH </h1>
   <Banner/>
   <TouristSpots/>
  </div>
 );
};

export default Home;