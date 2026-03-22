
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
  const [loadingCountries, setLoadingCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/countries')
      .then(res => res.json())
      .then(data => {
        setLoadingCountries(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load countries');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-white">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen px-4 py-8 mt-36">
    <h1 className="text-center text-white font-changaOne text-[22px] m-12 underline uppercase" >Explore Countries</h1>

      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loadingCountries.map(country => (
          <Link
            to={`/ country / ${ encodeURIComponent(country.countryName) } `}
            key={country._id || country.countryName}
            className="group relative block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 w-full"
          >
            <img
              src={country.image}
              alt={country.countryName}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-2">
              <h2 className="text-sm font-semibold text-gray-800 mb-1">
                {country.countryName}
              </h2>
              <p className="text-xs text-gray-600 line-clamp-2">
                {country.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}; 

export default Countries ; 


