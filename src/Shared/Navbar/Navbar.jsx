import React, { useContext } from 'react';
import logo from '../../../public/Images/ Travelora.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaBars } from "react-icons/fa";
import { TbHomeFilled } from "react-icons/tb";
import { MdPlace } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className='max-w-[1000px] mx-auto  mt-1 text-white ' >
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>Home</li>
              <li>All Tourists Spot</li>
              <li>Add Tourists Spot</li>
              <li>My List</li>
              <a className="btn">Login</a>
              <a className="btn">Register</a>
            </ul>
          </div>
          <a className="flex items-center gap-2 ">
            <div className='w-[40px] h-[40px]  ' >
              <img className='rounded-xl' src={logo} alt="logo" />
            </div>
            <h1 className='font-changaOne text-[25px] uppercase' >Travelora</h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className='flex gap-7 t font-publicSans font-light capitalize  text-[13px] ' >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#4963c9]" : "text-white"
              }
            >
              <li className='flex items-center gap-1 font-bold font-publicSans text-[13px]' > <TbHomeFilled /> Home</li>

            </NavLink>

            <NavLink
              to="/allTouristSpot"
              className={({ isActive }) =>
                isActive ? "text-[#4963c9]" : "text-white"
              }
            >
              <li className='flex items-center gap-1 font-bold font-publicSans text-[13px]' > <MdPlace /> Places</li>

            </NavLink>

            <NavLink
              to="/addTouristSpot"
              className={({ isActive }) =>
                isActive ? "text-[#4963c9]" : "text-white"
              }
            >
              <li className='flex items-center gap-1 font-bold font-publicSans text-[13px]' > <TbHomeFilled /> Add places</li>

            </NavLink>

            <NavLink
              to="/myList"
              className={({ isActive }) =>
                isActive ? "text-[#4963c9]" : "text-white"
              }
            >
              <li className='flex items-center gap-1 font-bold font-publicSans text-[13px]' > <CiViewList /> My List</li>

            </NavLink>


          </ul>
        </div>

        <div className="navbar-end hidden font-publicSans lg:flex gap-4 text-[13px] capitalize" >

          {

            user ? (
              <div className='flex items-center gap-2 ' >
                <h1>{user.email}</h1>
                <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} role="button" className="btn m-1"><FaBars /></div>
                  <ul tabIndex="-1" className="dropdown-content menu bg-primary-0 text-white font-bold font-publicSans rounded-box z-1 w-52  shadow-sm space-y-3 text-[15px]  hover:bg-[#fff] hover:text-black hover:border hover:border-black">
                    <button onClick={handleLogout} ><li> Logout </li></button>
                  </ul>
                </div>
              </div>
            ) : (
              <div className='flex gap-4' >
                <Link className='bg-white text-black px-5 py-1 rounded-md' to={'/login'}> Login</Link>
                <Link className='bg-white text-black px-5 py-1 rounded-md' to={'/Register'}> Register</Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;