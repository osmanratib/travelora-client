import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MyList = () => {
 const { user } = useContext(AuthContext);
 const [places, setPlaces] = useState([]);

 useEffect(() => {
  if (user?.email) {
   fetch(`http://localhost:5000/myPLaces?email=${user.email}`)
    .then((res) => res.json())
    .then((data) => setPlaces(data))
    .catch((err) => console.error(err));
  }
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
    fetch(`http://localhost:5000/places/${id}`, {
     method: "DELETE",
    })
     .then((res) => res.json())
     .then((data) => {
      if (data.deletedCount > 0) {
       Swal.fire("Deleted!", "Your tourist spot has been deleted.", "success");
       const filterSpots = places.filter((place) => place._id !== id);
       setPlaces(filterSpots);
      }
     });
   }
  });
 };



 return (
  <div className="p-5 max-w-[1200px] mx-auto">
   <h1 className="text-3xl font-bold mb-5">My Tourist Spots</h1>
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
        <img src={place.image} alt={place.touristSpotName} className="w-20 h-20 object-cover mx-auto" />
       </td>
       <td className="border px-4 py-2">{place.touristSpotName}</td>
       <td className="border px-4 py-2">{place.country}</td>
       <td className="border px-4 py-2">{place.location}</td>
       <td className="border px-4 py-2 space-x-2">
           <Link to={`/updatePlace/${place._id}`} >
            <button
             className="bg-primary-0 px-3 py-1 rounded text-white"
           >
             <FaEdit />
           </button></Link>
        <button
         onClick={() => handleDelete(place._id)}
         className="bg-red-600 px-3 py-1 rounded text-white"
        >
        <MdDelete/>
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
