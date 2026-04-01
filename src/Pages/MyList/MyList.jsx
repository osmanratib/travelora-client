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
      text: "You won't be able to revert this!",
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
              Swal.fire(
                "Deleted!",
                "Your tourist spot has been deleted.",
                "success"
              );

              setPlaces((prev) =>
                prev.filter((place) => place._id !== id)
              );
            }
          })
          .catch((err) => {
            console.error(err);
            setDeletingId(null);
          });
      }
    });
  };

  if (!user) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Please login to see your tourist spots.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-5 max-w-[1200px] mx-auto min-h-screen">
      <h1 className="text-center text-primary-0 font-changaOne text-[30px] m-5">
        My Tourist Spot
      </h1>

      <table className="w-full table-auto border-collapse border border-gray-500 text-center">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Country</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {places.map((place) => (
            <tr key={place._id} className="hover:bg-gray-200">
              <td className="border px-4 py-2">
                <img
                  src={place.image}
                  alt={place.touristSpotName}
                  className="w-20 h-20 object-cover mx-auto"
                />
              </td>

              <td className="border px-4 py-2">
                {place.touristSpotName}
              </td>

              <td className="border px-4 py-2">{place.country}</td>

              <td className="border px-4 py-2">{place.location}</td>

              <td className="border px-4 py-2 space-x-2">
                <Link to={`/updatePlace/${place._id}`}>
                  <button className="bg-primary-0 px-3 py-1 rounded text-white">
                    <FaEdit />
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(place._id)}
                  className="bg-red-600 px-3 py-1 rounded text-white"
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

          {places.length === 0 && (
            <tr>
              <td colSpan={5} className="py-5 text-gray-500">
                No tourist spots found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;