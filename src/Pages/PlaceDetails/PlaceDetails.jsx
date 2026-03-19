import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBackward } from "react-icons/fa";
import { GiFireplace } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
const PlaceDetails = () => {
 const placeDetails = useLoaderData();
 const { image, touristSpotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear } = placeDetails;

 return (
  <div className='h-screen' >

   <Link to={'/allTouristSpot'} >
    <button className='btn ml-6 bg-primary-0 text-white font-publicSans' > <FaBackward /> Back</button>
   </Link>

   <section className='flex justify-center gap-10 items-center max-w-[1000px] mx-auto p-10 mt-8 ' >

    <div className="image">
     <img className='h-[600px] w-[1200px] rounded-lg' src={image} alt="place image" />
    </div>

    <div className='space-y-6' >

     <h1 className='text-[#0000009c] text-[16px] font-publicSans flex gap-3 items-center ' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase flex gap-3 items-center ' > <GiFireplace /> Place : </span>{touristSpotName}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans flex gap-3 items-center' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase flex gap-3 items-center' > <FaFlag /> Country Name : </span>{country}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans flex gap-3 items-center' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase flex gap-3 items-center' > <CiLocationArrow1 /> Location : </span>{location}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans flex gap-7 items-center' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase flex ' >About </span><span className='w-[400px]' >{description}</span></h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans flex gap-3 items-center' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase flex gap-3 items-center' > <FaRegMoneyBillAlt /> Cost : </span>{averageCost}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans flex gap-3 items-center' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase flex gap-3 items-center' > <TiWeatherCloudy /> Seasonality : </span>{seasonality}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans flex gap-3 items-center' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase flex gap-3 items-center' > <MdAccessTimeFilled /> Best time to travel : </span>{travelTime}</h1>
     <h1 className='text-[#0000009c] text-[16px] font-publicSans flex gap-3 items-center' ><span className='text-[#000] text-[17px] font-publicSans font-extrabold uppercase flex gap-3 items-center' > <IoIosPeople /> Total people go there : </span>{totalVisitorsPerYear}</h1>

    </div>


   </section>

  </div>
 );
};

export default PlaceDetails;