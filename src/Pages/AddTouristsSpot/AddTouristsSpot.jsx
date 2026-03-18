import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddTouristsSpot = () => {

  const { user } = useContext(AuthContext)
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
    const email = user?.email
    const username = user?.displayName

    console.log(image, touristSpotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear, email, username);

    const spot = { image, touristSpotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear, email, username }

    fetch('http://localhost:5000/places', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(spot)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire("Your Form Is Submitted");
          form.reset();

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
    <div className='h-screen' >
      <form onSubmit={handleForm}  >

        <h1 className='text-center  text-primary-0 font-changaOne text-[30px] mt-16' >Add Tourist Spots</h1>
        <div className='grid grid-cols-3 gap-6 bg-[#2c505ba9] rounded-xl border max-w-[1300px] mt-10 mx-auto p-5 justify-center3'>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white ' >Photo Url : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter photo URL' name='image' />
          </div>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white ' >Tourist Spot Name : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter tourist spot name' name='touristSpotName' />
          </div>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white' >Country Name : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter country name' name='country' />
          </div>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white' >Location : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter location' name='location' />
          </div>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white' >Short Description : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter short description' name='description' />
          </div>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white' >Average Cost : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter average cost' name='averageCost' />
          </div>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white' >Seasonality : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter best season to visit' name='seasonality' />
          </div>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white' >Travel Time : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter travel time' name='travelTime' />
          </div>

          <div>
            <h1 className='text-[20px] font-publicSans font-bold text-white' >Total Visitors Per Year : </h1>
            <input required className='w-[400px] h-[50px] border outline-none bg-[#010101b8] rounded-xl p-3 text-white' type="text" placeholder='Enter yearly visitor count' name='totalVisitorsPerYear' />
          </div>

        </div>

        <button className='flex justify-center w-full cursor-pointer' >
          <input type="submit" className='bg-primary-0 text-white w-[1300px] h-[50px] text-center py-2 rounded-md font-bold font-publicSans uppercase m-6 cursor-pointer select-none ' value={"Add tourist Spot"} />
        </button>
      </form>


    </div>
  );
};

export default AddTouristsSpot;
