import React, { useContext } from 'react';
import logo from '../../../public/Images/ Travelora.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaBars } from "react-icons/fa";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate() ; 

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
    <div className='max-w-[1000px] mx-auto  mt-1 ' >
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
          <ul className='flex gap-7 font-publicSans font-light capitalize  text-[13px] ' >
            <Link to={'/'} ><li>Home</li></Link>
            <Link to={'/allTouristSpot'} ><li>All Tourists Spot</li></Link>
            <Link to={'/addTouristSpot'}><li>Add Tourists Spot</li></Link>
            <Link to={'/myList'}>my list</Link>
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
                <Link className='bg-primary-0 text-white px-5 py-1 rounded-md' to={'/login'}> Login</Link>
                <Link className='bg-primary-0 text-white px-5 py-1 rounded-md' to={'/Register'}> Register</Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;