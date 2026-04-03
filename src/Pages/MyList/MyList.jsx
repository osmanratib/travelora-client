import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(!!user);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch(`http://localhost:5000/myPlaces?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDeletingId(id);
        fetch(`http://localhost:5000/places/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setDeletingId(null);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Tourist spot removed.", "success");
              setPlaces((prev) => prev.filter((p) => p._id !== id));
            }
          })
          .catch(() => setDeletingId(null));
      }
    });
  };

  if (!user) {
    return (
      <div className="text-center mt-20 text-gray-400 text-lg">
        Please login to view your tourist spots.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-blue-500"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
          My Tourist Spots
        </h1>

        <div className="hidden lg:block overflow-x-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg">
          <table className="min-w-full table-auto text-white">
            <thead>
              <tr className="bg-white/10">
                <th className="border px-4 py-3 text-left">Image</th>
                <th className="border px-4 py-3 text-left">Name</th>
                <th className="border px-4 py-3 text-left">Country</th>
                <th className="border px-4 py-3 text-left">Location</th>
                <th className="border px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {places.map((place) => (
                <tr
                  key={place._id}
                  className="hover:bg-white/10 transition-colors duration-300"
                >
                  <td className="border px-4 py-2">
                    <img
                      src={place.image}
                      alt={place.touristSpotName}
                      className="w-20 h-20 object-cover rounded-lg mx-auto"
                    />
                  </td>
                  <td className="border px-4 py-2">{place.touristSpotName}</td>
                  <td className="border px-4 py-2">{place.country}</td>
                  <td className="border px-4 py-2">{place.location}</td>
                  <td className="border px-4 py-2 flex space-x-2 justify-center">
                    <Link to={`/updatePlace/${place._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg transition">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(place._id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg transition"
                    >
                      {deletingId === place._id ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        <MdDelete />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {places.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-5">
              No tourist spots found.
            </div>
          )}
          {places.map((place) => (
            <div
              key={place._id}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg flex flex-col items-center"
            >
              <img
                src={place.image}
                alt={place.touristSpotName}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-white font-bold text-lg">{place.touristSpotName}</h2>
              <p className="text-gray-200">{place.country}</p>
              <p className="text-gray-200">{place.location}</p>
              <div className="flex space-x-3 mt-3">
                <Link to={`/updatePlace/${place._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg transition">
                    <FaEdit />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(place._id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg transition"
                >
                  {deletingId === place._id ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <MdDelete />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;