import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const touristSpotName = form.touristSpotName.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const email = user?.email;
    const username = user?.displayName;

    const spot = { image, touristSpotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear, email, username };

    fetch('http://localhost:5000/places', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(spot)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire("Your Form Is Submitted");
          form.reset();
        } else {
          Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" });
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 bg-[#1b2a35]">
      <form onSubmit={handleForm} className="w-full max-w-[1300px] p-6 rounded-xl bg-[#2c505ba9] grid grid-cols-3 gap-6">
        <h1 className='col-span-3 text-center text-white font-changaOne text-[30px]'>Add Tourist Spots</h1>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Photo URL:</label>
          <input name="image" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Enter photo URL" />
        </div>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Tourist Spot Name:</label>
          <input name="touristSpotName" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Enter tourist spot name" />
        </div>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Country Name:</label>
          <input name="country" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Enter country name" />
        </div>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Location:</label>
          <input name="location" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Enter location" />
        </div>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Short Description:</label>
          <input name="description" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Enter short description" />
        </div>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Average Cost:</label>
          <input name="averageCost" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Enter average cost" />
        </div>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Seasonality:</label>
          <input name="seasonality" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Best season to visit" />
        </div>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Travel Time:</label>
          <input name="travelTime" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Enter travel time" />
        </div>

        <div className="flex flex-col">
          <label className='text-white font-bold text-[20px]'>Total Visitors Per Year:</label>
          <input name="totalVisitorsPerYear" required className="p-3 rounded-xl bg-[#010101b8] text-white outline-none" placeholder="Yearly visitors" />
        </div>

        <div className="col-span-3 flex justify-center">
          <button type="submit" className="bg-white text-black w-full max-w-[400px] py-3 rounded-md font-bold uppercase btn mt-6 hover:bg-primary-1 transition-colors">
            Add Tourist Spot
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddTouristsSpot;