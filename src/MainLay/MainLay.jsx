import React, { useEffect } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const MainLay = () => {
 

 useEffect(() => {
  const lenis = new Lenis({
   smooth: true,
   lerp: 0.1,
   direction: 'vertical',
  });

  function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => lenis.destroy();
 }, []);
 



 return (
  <div className="bg-primary-0 text-gray-900">
   <Navbar />

   <main className="min-h-screen">
    <Outlet />
   </main>

   <Footer />
  </div>
 );
};

export default MainLay;