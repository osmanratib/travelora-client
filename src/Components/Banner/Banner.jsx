import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function App() {
 return (
  <>
   <Swiper
    cssMode={true}
    // navigation={true}
    pagination={true}
    mousewheel={true}
    autoplay={{
     delay: 2500,
     disableOnInteraction: false,
    }}
    // keyboard={true}
    modules={[Navigation, Autoplay ,  Pagination, Mousewheel, Keyboard]}
    className="mySwiper max-w-[1000px] mx-auto rounded-2xl  "
   >
    <SwiperSlide 
     style={{
       background : "linear-gradient(rgba(0,0,0,0.45) , rgba(0,0,0,0.45)) , url('../../../public/Images/BannerImages/rangamati.jpg')",
       backgroundRepeat :"no-repeat" , 
       backgroundPosition :"center" , 
       backgroundSize : "cover" ,
       height :"500px"
     }}
    ><span className='text-[100px] text-white font-changaOne  flex justify-center   ' >Rangamati</span>
    </SwiperSlide>

    <SwiperSlide
     style={{
      background: "linear-gradient(rgba(0,0,0,0.45) , rgba(0,0,0,0.45)) , url('../../../public/Images/BannerImages/coxbazar.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "500px"
     }}
    ><span className='text-[100px] text-white font-changaOne  flex justify-center   ' >Cox Bazar</span>
    </SwiperSlide>


    <SwiperSlide
     style={{
      background: "linear-gradient(rgba(0,0,0,0.45) , rgba(0,0,0,0.45)) , url('../../../public/Images/BannerImages/sylhet.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "500px"
     }}
    ><span className='text-[100px] text-white font-changaOne  flex justify-center   ' >Sylhet</span>
    </SwiperSlide>

    <SwiperSlide
     style={{
      background: "linear-gradient(rgba(0,0,0,0.45) , rgba(0,0,0,0.45)) , url('../../../public/Images/BannerImages/shundarban.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "500px"
     }}
    ><span className='text-[100px] text-white font-changaOne  flex justify-center   ' >shundarban</span>
    </SwiperSlide>

    <SwiperSlide
     style={{
      background: "linear-gradient(rgba(0,0,0,0.45) , rgba(0,0,0,0.45)) , url('../../../public/Images/BannerImages/Bandarban.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "500px"
     }}
    ><span className='text-[100px] text-white font-changaOne  flex justify-center   ' >Bandarban</span>
    </SwiperSlide>

    
    <SwiperSlide
     style={{
      background: "linear-gradient(rgba(0,0,0,0.45) , rgba(0,0,0,0.45)) , url('../../../public/Images/BannerImages/sajek.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "500px"
     }}
    ><span className='text-[100px] text-white font-changaOne  flex justify-center   ' >sajek valley</span>
    </SwiperSlide>
   </Swiper>


   
  </>
 );
}
