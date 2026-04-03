import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const [imagePreview, setImagePreview] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const spot = {
      image: form.image.value,
      touristSpotName: form.touristSpotName.value,
      country: form.country.value.trim(),
      location: form.location.value,
      description: form.description.value,
      averageCost: form.averageCost.value,
      seasonality: form.seasonality.value,
      travelTime: form.travelTime.value,
      totalVisitorsPerYear: form.totalVisitorsPerYear.value,
      email: user?.email,
      username: user?.displayName,
    };

    fetch('http://localhost:5000/places', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(spot)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire("✅ Spot Added Successfully!");
          form.reset();
          setImagePreview("");
        } else {
          Swal.fire("❌ Something went wrong!");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-10">

      <form
        onSubmit={handleForm}
        className="w-full max-w-6xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 md:p-10 shadow-2xl
                   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
     
        <h1 className="col-span-full text-center text-white text-2xl md:text-3xl font-bold tracking-wide">
          Add Tourist Spot
        </h1>

        
        <div className="col-span-full flex flex-col gap-3">
          <input
            name="image"
            required
            onChange={(e) => setImagePreview(e.target.value)}
            placeholder="Image URL"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {imagePreview && (
            <img
              src={imagePreview}
              alt="preview"
              className="h-48 w-full object-cover rounded-lg border border-white/20"
            />
          )}
        </div>

        {[
          { name: "touristSpotName", label: "Tourist Spot Name" },
          { name: "country", label: "Country" },
          { name: "location", label: "Location" },
          { name: "averageCost", label: "Average Cost" },
          { name: "travelTime", label: "Travel Time" },
          { name: "totalVisitorsPerYear", label: "Visitors Per Year" },
        ].map((field, i) => (
          <div key={i} className="relative">
            <input
              name={field.name}
              required
              placeholder=" "
              className="peer w-full p-3 rounded-lg bg-white/20 text-white outline-none"
            />
            <label className="absolute left-3 top-3 text-gray-300 text-sm transition-all 
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm
              peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-blue-300
              bg-[#2c5364] px-1 rounded">
              {field.label}
            </label>
          </div>
        ))}

      
        <div className="relative">
          <select
            name="seasonality"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white outline-none"
          >
            <option value="">Select Season</option>
            <option>Summer</option>
            <option>Winter</option>
            <option>Monsoon</option>
          </select>
        </div>

        {/* Description */}
        <div className="col-span-full">
          <textarea
            name="description"
            required
            rows="4"
            placeholder="Description..."
            className="w-full p-3 rounded-lg bg-white/20 text-white outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-1/2 lg:w-1/3 py-3 rounded-lg font-bold text-black 
                       bg-white
                       hover:scale-105 hover:shadow-xl transition duration-300"
          >
            Add Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;