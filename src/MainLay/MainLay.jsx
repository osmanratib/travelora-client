import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const MainLay = () => {
 return (
  <div>
   <Navbar/>
   <Outlet/>
   <div className='mt-5' >
    <Footer />
   </div>
  </div>
 );
};
export default MainLay;