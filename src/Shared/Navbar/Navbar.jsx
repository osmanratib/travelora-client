import React, { useContext, useState } from 'react';
import logo from '../../../public/Images/ Travelora.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaBars } from "react-icons/fa";
import { TbHomeFilled } from "react-icons/tb";
import { MdPlace } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => navigate('/login'))
      .catch(console.error);
  };

  return (
    <div className="bg-primary-0 text-white w-full sticky top-0 z-50 shadow-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between p-3 md:p-5">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-xl" />
          <h1 className="font-changaOne text-xl md:text-2xl uppercase">Travelora</h1>
        </Link>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-xl">
            <FaBars />
          </button>
        </div>

        <ul
          className={`flex-col lg:flex lg:flex-row lg:items-center gap-5 w-full lg:w-auto bg-primary-0 lg:bg-transparent transition-all duration-300 overflow-hidden ${menuOpen ? 'h-auto py-4' : 'h-0 lg:h-auto'
            }`}
        >
          <NavLink to="/" className={({ isActive }) => isActive ? "text-[#4963c9]" : "text-white"}>
            <li className="flex items-center gap-1 px-4 py-2 lg:p-0 font-bold text-[14px]"><TbHomeFilled /> Home</li>
          </NavLink>

          <NavLink to="/allTouristSpot" className={({ isActive }) => isActive ? "text-[#4963c9]" : "text-white"}>
            <li className="flex items-center gap-1 px-4 py-2 lg:p-0 font-bold text-[14px]"><MdPlace /> Places</li>
          </NavLink>

          <NavLink to="/addTouristSpot" className={({ isActive }) => isActive ? "text-[#4963c9]" : "text-white"}>
            <li className="flex items-center gap-1 px-4 py-2 lg:p-0 font-bold text-[14px]"><TbHomeFilled /> Add Places</li>
          </NavLink>

          <NavLink to="/myList" className={({ isActive }) => isActive ? "text-[#4963c9]" : "text-white"}>
            <li className="flex items-center gap-1 px-4 py-2 lg:p-0 font-bold text-[14px]"><CiViewList /> My List</li>
          </NavLink>

          {user ? (
            <li className="px-4 py-2 lg:p-0">
              <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-1 rounded-md w-full lg:w-auto">Logout</button>
            </li>
          ) : (
            <>
              <li className="px-4 py-2 lg:p-0">
                <Link to="/login" className="bg-white text-black px-4 py-1 rounded-md w-full lg:w-auto block text-center">Login</Link>
              </li>
              <li className="px-4 py-2 lg:p-0">
                <Link to="/register" className="bg-white text-black px-4 py-1 rounded-md w-full lg:w-auto block text-center">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;