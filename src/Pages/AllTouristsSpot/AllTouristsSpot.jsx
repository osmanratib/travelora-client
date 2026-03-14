import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllTouristsSpot = () => {


     const placeData = useLoaderData();

     const [displayData, setDisplayData] = useState(placeData);


     const handleLoweSort = () => {
          const sorted = placeData.filter(item => item.averageCost <= 10000);
          setDisplayData(sorted);
     }

     const handleHighSort = () => {
          const sorted = placeData.filter(item => item.averageCost >= 10000);
          setDisplayData(sorted);
     }



     return (
          <div className='relative -top-1'>
               <div className="allPlaces flex">
                    <div className="leftSide h-screen bg-primary-0 w-[400px]">
                         <h1 className='text-center  text-[20px] m-12 text-white font-changaOne ' >Find Your Favorite Place</h1>

                         <div className="dropdown dropdown-start ml-12">
                              <div tabIndex={0} role="button" className="btn m-1">Find your place</div>
                              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                   <button onClick={handleLoweSort}><li><a>Low Cost</a></li></button>
                                   <button onClick={handleHighSort}><li><a>high cost</a></li></button>
                              </ul>
                         </div>


                    </div>
                    <div className={`rightSide ${displayData.length <= 3 ? "h-screen" : "h-full"} bg-[#2c505ba9]`}>
                         <div className='grid grid-cols-3 gap-5 p-10' >
                              {
                                   displayData.map(places => (
                                        <div key={placeData._id} >
                                             <div className="card  border p-6 bg-white">
                                                  <div className="image">
                                                       <img className='w-[500px] h-[200px] rounded-xl' src={places.image} alt="places image" />
                                                  </div>
                                                  <div className="content mt-5 w-full text-black font-publicSans text-[14px] font-semibold space-y-3  text-left">
                                                       <h1>
                                                            <span className='font-publicSans font-extrabold text-[14px] capitalize ' >place name :   </span>
                                                            {places.touristSpotName}
                                                       </h1>


                                                       <h1>
                                                            <span className='font-publicSans font-extrabold text-[14px] capitalize ' >Average cost :   </span>
                                                            {places.averageCost} taka
                                                       </h1>

                                                       <h1>
                                                            <span className='font-publicSans font-extrabold text-[14px] capitalize ' >Total Visitor per year  :  </span>  {places.totalVisitorsPerYear}
                                                       </h1>

                                                       <h1>
                                                            <span className='font-publicSans font-extrabold text-[14px] capitalize ' >Travel Duration : </span> {places.travelTime}
                                                       </h1>

                                                       <h1>
                                                            <span className='font-publicSans font-extrabold text-[14px] capitalize ' >Best Time : </span>
                                                            {places.seasonality}
                                                       </h1>
                                                       <Link to={`/places/${places._id}`} >

                                                            <button className='bg-primary-0 px-5 py-2 rounded-lg text-white ' > place Details</button>

                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                   ))
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AllTouristsSpot;