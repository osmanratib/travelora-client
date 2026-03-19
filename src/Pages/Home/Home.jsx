import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TouristSpots from '../../Components/TouristSpots/TouristSpots';
import Countries from '../../Components/Countries/Countries';
import VisualSection from '../../Components/VisualSecion/VisualSection';

const Home = () => {
 return (
  <div>
   <h1 className='text-center text-[60px]  font-changaOne uppercase font-bold text-white p-12' >WELCOME TO BANGLADESH </h1>
   <Banner/>
   <TouristSpots/>
   <VisualSection/>                           
   <Countries/>
  </div>
 );
};

export default Home;