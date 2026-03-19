import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLay = () => {
 return (
  <div>
   <Navbar />
   <div className='bg-primary-0' >
    <Outlet />
   </div>
   <div>
    <Footer />
   </div>
  </div>
 );
};
export default MainLay;