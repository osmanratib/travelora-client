import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GiFireplace } from "react-icons/gi";
import { AuthContext } from '../../AuthProvider/AuthProvider';

// Lazy Image Component (VERY IMPORTANT)
const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="h-[220px] w-full bg-gray-800">
      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

const TouristSpots = () => {
  const { loading } = useContext(AuthContext);
  const placeData = useLoaderData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-neutral"></span>
      </div>
    );
  }

  return (
    <div className='min-h-screen px-5 md:px-10 py-10 mt-11'>
      <h1 className='text-center text-[25px] font-changaOne uppercase md:text-[28px] mb-10 font-bold text-white'>
        Tourist Spots
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeData.slice(0, 6).map(place => (
          <div
            key={place._id}
            className='bg-white/10 rounded-xl overflow-hidden w-full max-w-[320px] mx-auto'
          >
            <LazyImage
              src={place.image}
              alt={place.touristSpotName}
            />

            <div className='p-4 text-white'>
              <h2 className='flex items-center gap-2 text-md font-semibold uppercase'>
                <GiFireplace className="text-orange-400" />
                {place.touristSpotName}
              </h2>

              <p className='text-sm text-gray-300 mt-1'>
                {place.location}
              </p>

              <Link to={`/places/${place._id}`}>
                <button className='mt-3 w-full py-2 bg-white text-black rounded-md font-semibold'>
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