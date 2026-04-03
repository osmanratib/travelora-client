import { useLoaderData } from "react-router-dom";

const PlaceDetails = () => {
 const place = useLoaderData();

 return (
  <div className="mt-20 px-4 text-white">
   <div className="max-w-2xl mx-auto bg-gray-800 p-5 rounded">
    <img
     src={place.image}
     alt={place.touristSpotName}
     className="w-full h-60 object-cover rounded"
    />

    <h1 className="text-2xl font-bold mt-4">
     {place.touristSpotName}
    </h1>

    <p className="mt-2">Location: {place.location}</p>
    <p>Country: {place.countryName}</p>
    <p>Cost: {place.averageCost}</p>
    <p>Season: {place.seasonality}</p>
    <p>Visitors per year: {place.totalVisitorsPerYear}</p>
    <p className="mt-3">{place.description}</p>
   </div>
  </div>
 );
};

export default PlaceDetails;