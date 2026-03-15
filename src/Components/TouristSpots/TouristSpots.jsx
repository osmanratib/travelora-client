import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GiFireplace } from "react-icons/gi";

const TouristSpots = () => {
 const placeData = useLoaderData();
 return (
  <div>
   <h1 className='text-center text-[60px] m-12 font-changaOne uppercase font-bold text-primary-0 ' > Tourist spot </h1>
   <div className="card grid grid-cols-[repeat(3,0.7fr)] justify-center items-center  p-10 gap-10">
    {
     placeData.slice(0,6).map(place => (
      <div key={place._id} className='flex gap-5 items-center justify-center  rounded-xl  p-5 bg-primary-0 w-[450px] h-[300px] mb-5' >
       <div>
        <div className="image relative -top-14  border-[4px] border-solid border-[#166599] rounded-2xl ">
         <img src={place.image} alt="image" className='h-[200px] w-[400px] rounded-xl' />
        </div>
        <div className='-mt-10' >
         <h1 className='font-bold flex items-center gap-3 text-[14px] font-publicSans  uppercase text-white' > <GiFireplace /> {place.touristSpotName}</h1>
        </div>
        <Link to={`/places/${place._id}`} >
         <button className='px-7 py-1 bg-white rounded font-bold font-publicSans mt-2' >View details</button>
       </Link>
       </div>
      </div>
     ))
    }
   </div>
  </div>
 );
};

export default TouristSpots;