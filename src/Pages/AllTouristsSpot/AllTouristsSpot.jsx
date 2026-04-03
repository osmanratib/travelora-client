import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllTouristsSpot = () => {
     const placeData = useLoaderData();
     const [displayData, setDisplayData] = useState(placeData);

     const handleLowSort = () => {
          const sorted = placeData.filter(item => item.averageCost <= 10000);
          setDisplayData(sorted);
     }

     const handleHighSort = () => {
          const sorted = placeData.filter(item => item.averageCost >= 10000);
          setDisplayData(sorted);
     }

     return (
          <div className='relative'>
               <div className="flex flex-col md:flex-row">
                    <div className="leftSide bg-primary-0 w-full md:w-[300px] lg:w-[400px] h-auto md:h-screen p-5 md:p-8">
                         <h1 className='text-center text-[20px] mb-8 text-white font-changaOne'>Find Your Favorite Place</h1>

                         <div className="dropdown dropdown-start">
                              <div tabIndex={0} role="button" className="btn m-1 w-full">Find your place</div>
                              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                                   <button onClick={handleLowSort}><li><a>Low Cost</a></li></button>
                                   <button onClick={handleHighSort}><li><a>High Cost</a></li></button>
                              </ul>
                         </div>
                    </div>

                    <div className={`rightSide bg-[#2c505ba9] flex-1 ${displayData.length <= 3 ? "min-h-screen" : "h-full"} p-5 md:p-10`}>
                         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                              {displayData.map(place => (
                                   <div key={place._id} className="card border p-4 bg-white rounded-xl flex flex-col">
                                        <div className="image mb-4">
                                             <img className='w-full h-[200px] md:h-[180px] lg:h-[200px] rounded-xl object-cover' src={place.image} alt={place.touristSpotName} />
                                        </div>
                                        <div className="content flex flex-col gap-2 text-black font-publicSans text-[14px] font-semibold">
                                             <h1>
                                                  <span className='font-extrabold capitalize'>Place Name: </span>{place.touristSpotName}
                                             </h1>
                                             <h1>
                                                  <span className='font-extrabold capitalize'>Average Cost: </span>{place.averageCost} Taka
                                             </h1>
                                             <h1>
                                                  <span className='font-extrabold capitalize'>Total Visitor per Year: </span>{place.totalVisitorsPerYear}
                                             </h1>
                                             <h1>
                                                  <span className='font-extrabold capitalize'>Travel Duration: </span>{place.travelTime}
                                             </h1>
                                             <h1>
                                                  <span className='font-extrabold capitalize'>Best Time: </span>{place.seasonality}
                                             </h1>
                                             <Link to={`/places/${place._id}`}>
                                                  <button className='bg-primary-0 px-4 py-2 rounded-lg text-white mt-3'>Place Details</button>
                                             </Link>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AllTouristsSpot;