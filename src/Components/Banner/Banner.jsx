import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const slides = [
  { title: "Rangamati", image: "/Images/BannerImages/rangamati.jpg" },
  { title: "Cox Bazar", image: "/Images/BannerImages/coxbazar.jpg" },
  { title: "Sylhet", image: "/Images/BannerImages/sylhet.jpg" },
  { title: "Sundarban", image: "/Images/BannerImages/shundarban.jpg" },
  { title: "Bandarban", image: "/Images/BannerImages/Bandarban.jpg" },
  { title: "Sajek Valley", image: "/Images/BannerImages/sajek.jpg" },
];

export default function App() {
  return (
    <Swiper
      cssMode={true}
      mousewheel={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
      className="mySwiper max-w-[1000px] mx-auto rounded-2xl"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${slide.image}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "500px",
          }}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-[100px] text-white font-changaOne">{slide.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}