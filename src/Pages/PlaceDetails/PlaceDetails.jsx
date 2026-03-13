import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PlaceDetails = () => { 
 const placeDetails = useLoaderData()  ;
 const { image, touristSpotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear} = placeDetails ; 

 return (
  <div>
  
      <button className='btn ml-7 bg-primary-0 text-white font-publicSans' >Back</button>
       
       <section className='flex justify-center gap-10 items-center border border-primary-0 max-w-[1000px] mx-auto p-10 mt-8 ' >
     
      <div className="image">
       <img className='h-[600px] w-[1200px] rounded-lg' src={image} alt="place image" />
      </div> 

      <div className='space-y-6' >

     <h1 className='text-[#0000009c] text-[16px] font-publicSans' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase' >Place : </span>{touristSpotName}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase' >Country Name : </span>{country}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase' >Location : </span>{location}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase' >About : </span>{description}</h1> 
     <h1 className='text-[#0000009c] text-[16px] font-publicSans' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase' >Cost : </span>{averageCost}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase' >Seasonality : </span>{seasonality}</h1> 
     <h1 className='text-[#0000009c] text-[16px] font-publicSans' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase' >Best time to travel : </span>{travelTime}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase' > Total people go there : </span>{totalVisitorsPerYear}</h1>
    
    </div>


       </section>

  </div>
 );
};

export default PlaceDetails;