import React, { useContext, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GiFireplace } from "react-icons/gi";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const TouristSpots = () => {
  const { loading } = useContext(AuthContext);
  const placeData = useLoaderData();

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!placeData) return;
    let loadedCount = 0;
    placeData.slice(0, 6).forEach(place => {
      const img = new Image();
      img.src = place.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 6) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === 6) setImagesLoaded(true);
      };
    });
  }, [placeData]);

  if (loading || !imagesLoaded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <span className="loading loading-spinner loading-lg text-neutral"></span>
        <h2 className="text-white text-xl font-semibold">Loading Tourist Spots...</h2>
      </div>
    );
  }

  return (
    <div className='min-h-screen px-5 md:px-10 py-10 mt-11'>
      <h1 className='text-center text-[25px] font-changaOne uppercase md:text-[28px] mb-12 font-bold text-white tracking-wide'>
        Tourist Spots
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {placeData.slice(0, 6).map(place => (
          <div
            key={place._id}
            className='group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-[350px]'
          >
            <div className='overflow-hidden'>
              <img
                src={place.image}
                alt="place"
                loading='lazy'
                className='h-[220px] w-full object-cover group-hover:scale-110 transition duration-500'
              />
            </div>
            <div className='p-5 text-white'>
              <h2 className='flex items-center gap-2 text-lg font-semibold uppercase tracking-wide'>
                <GiFireplace className="text-orange-400" />
                {place.touristSpotName}
              </h2>
              <p className='text-sm text-gray-300 mt-2'>{place.location}</p>
              <Link to={`/places/${place._id}`}>
                <button className='mt-4 w-full py-2 bg-gradient-to-r bg-[#ffffffee] text-black rounded-lg font-semibold hover:scale-105 transition'>
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristSpots;