import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePlaces = () => {
  const loadingPlaces = useLoaderData();
  const navigate = useNavigate();

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

    const updateSpot = {
      image: form.image.value,
      touristSpotName: form.touristSpotName.value,
      country: form.country.value,
      location: form.location.value,
      description: form.description.value,
      averageCost: form.averageCost.value,
      seasonality: form.seasonality.value,
      travelTime: form.travelTime.value,
      totalVisitorsPerYear: form.totalVisitorsPerYear.value,
    };

    fetch(`http://localhost:5000/places/${loadingPlaces._id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire('Updated!', 'Your tourist spot has been updated.', 'success');
          navigate('/myList');
        } else {
          Swal.fire('Error!', 'Something went wrong.', 'error');
        }
      });
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* Premium glass container */}
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10 tracking-wider">
          Update Tourist Spot
        </h1>

        <form
          onSubmit={handleForm}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Dynamic input fields */}
          {[
            { label: 'Photo URL', name: 'image', value: image },
            { label: 'Tourist Spot Name', name: 'touristSpotName', value: touristSpotName },
            { label: 'Country Name', name: 'country', value: country },
            { label: 'Location', name: 'location', value: location },
            { label: 'Short Description', name: 'description', value: description },
            { label: 'Average Cost', name: 'averageCost', value: averageCost },
            { label: 'Seasonality', name: 'seasonality', value: seasonality },
            { label: 'Travel Time', name: 'travelTime', value: travelTime },
            { label: 'Total Visitors Per Year', name: 'totalVisitorsPerYear', value: totalVisitorsPerYear },
          ].map((field) => (
            <div key={field.name} className="flex flex-col w-full">
              <label className="text-white font-semibold mb-2">{field.label}:</label>
              <input
                type="text"
                name={field.name}
                defaultValue={field.value}
                required
                className="w-full p-4 rounded-2xl bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                placeholder={`Enter ${field.label.toLowerCase()}`}
              />
            </div>
          ))}

          {/* Submit Button */}
          <div className="col-span-full flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              Update Tourist Spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlaces;