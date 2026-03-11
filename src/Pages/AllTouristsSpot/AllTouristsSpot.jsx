import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllTouristsSpot = () => {
 const placeData = useLoaderData() ; 
 return (
  <div>
       <h1>{placeData.length}</h1>
  </div>
 );
};

export default AllTouristsSpot;