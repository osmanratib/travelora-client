import { useLoaderData, useParams } from "react-router-dom";

const CountriesDetails = () => {
 const { countryName } = useParams();
 const places = useLoaderData();
 console.log("Params:", countryName);
 console.log("Places from loader:", places);
 return (
  <div className="mt-20 px-4">
   <h1 className="text-white text-center text-2xl mb-6">
    Tourist Spots in {countryName}
   </h1>

   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {places.map(place => (
     <div key={place._id} className="bg-white p-4 rounded">
      <img src={place.image} className="h-40 w-full object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{place.touristSpotName}</h2>
      <p>{place.location}</p>
      <p>Cost: {place.averageCost}</p>
      <p>Season: {place.seasonality}</p>
     </div>
    ))}
   </div>
  </div>
 );
};

export default CountriesDetails;
