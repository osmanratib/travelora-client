import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePlaces = () => {

 const loadingPlaces = useLoaderData();
 const navigate = useNavigate() ; 

 const {
  image,
  touristSpotName,
  country,
  location,
  description,
  averageCost,
  seasonality,
  travelTime,
  totalVisitorsPerYear,
 } = loadingPlaces;

 const handleForm = (event) => {
  event.preventDefault();

  const form = event.target;
  const image = form.image.value
  const touristSpotName = form.touristSpotName.value
  const country = form.country.value
  const location = form.location.value
  const description = form.description.value
  const averageCost = form.averageCost.value
  const seasonality = form.seasonality.value
  const travelTime = form.travelTime.value
  const totalVisitorsPerYear = form.totalVisitorsPerYear.value

  console.log(image, touristSpotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear);

  const updateSpot = { image, touristSpotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear }

  fetch(`http://localhost:5000/places/${loadingPlaces._id}`, {
   method: "PUT",
   headers: {
    "content-type": "application/json"
   },
   body: JSON.stringify(updateSpot)
  })
   .then(res => res.json())
   .then(data => {
    console.log(data)
    if (data.acknowledged === true) {
     Swal.fire("Your Form Is updated");
     navigate('/myList')
    }
    else {
     Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
     });
    }
   })
 }

 return (
  <div>
   <form onSubmit={handleForm} >

    <h1 className='text-center text-primary-0 font-changaOne text-[30px] mt-16'>
     Update Tourist Spots
    </h1>

    <div className='grid grid-cols-3 gap-6 bg-[#2c505ba9] rounded-xl border max-w-[1300px] mt-10 mx-auto p-5 justify-center3'>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Photo Url :</h1>
      <input defaultValue={image} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='image' />
     </div>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Tourist Spot Name :</h1>
      <input defaultValue={touristSpotName} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='touristSpotName' />
     </div>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Country Name :</h1>
      <input defaultValue={country} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='country' />
     </div>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Location :</h1>
      <input defaultValue={location} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='location' />
     </div>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Short Description :</h1>
      <input defaultValue={description} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='description' />
     </div>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Average Cost :</h1>
      <input defaultValue={averageCost} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='averageCost' />
     </div>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Seasonality :</h1>
      <input defaultValue={seasonality} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='seasonality' />
     </div>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Travel Time :</h1>
      <input defaultValue={travelTime} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='travelTime' />
     </div>

     <div>
      <h1 className='text-[20px] font-publicSans font-bold text-white'>Total Visitors Per Year :</h1>
      <input defaultValue={totalVisitorsPerYear} required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" name='totalVisitorsPerYear' />
     </div>

    </div>

    <button className='flex justify-center w-full cursor-pointer'>
     <input type="submit" className='bg-primary-0 text-white w-[1300px] h-[50px] text-center py-2 rounded-md font-bold font-publicSans uppercase m-6 cursor-pointer select-none' value={"Update Tourist Spot"} />
    </button>

   </form>
  </div>
 );
};

export default UpdatePlaces;
