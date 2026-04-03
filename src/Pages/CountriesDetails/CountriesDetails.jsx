import { Link, useLoaderData, useParams } from "react-router-dom";

const CountriesDetails = () => {
 const { countryName } = useParams();
 const places = useLoaderData();

 return (
  <div className="mt-20 px-4">
   <h1 className="text-white text-center text-2xl mb-6">
    {countryName
     ? `Tourist spots in ${countryName}`
     : "No country match from database"}
   </h1>

   {places && places.length > 0 ? (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
     {places.map((place) => (
      <div key={place._id} className="bg-white p-4 rounded shadow">
       <img
        src={place.image}
        alt={place.touristSpotName}
        className="h-40 w-full object-cover rounded"
       />

       <h2 className="text-lg font-bold mt-2">
        {place.touristSpotName}
       </h2>

       <p>Location: {place.location}</p>
       <p>Country: {place.country}</p>
       <p>Cost: {place.averageCost}</p>
       <p>Season: {place.seasonality}</p>

       <Link
        to={`/places/${place._id}`}
        className="inline-block bg-black text-white px-6 py-2 rounded mt-3"
       >
        View Details
       </Link>
      </div>
     ))}
    </div>
   ) : (
    <h2 className="text-white text-center text-xl">
     No places found
    </h2>
   )}
  </div>
 );
};

export default CountriesDetails;