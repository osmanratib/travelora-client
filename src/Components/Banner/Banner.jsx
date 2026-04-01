import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import { FaCircle, FaRegCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  { title: "Rangamati", image: "/Images/BannerImages/rangamati.jpg" },
  { title: "Cox Bazar", image: "/Images/BannerImages/coxbazar.jpg" },
  { title: "Sylhet", image: "/Images/BannerImages/sylhet.jpg" },
  { title: "Sundarban", image: "/Images/BannerImages/shundarban.jpg" },
  { title: "Bandarban", image: "/Images/BannerImages/Bandarban.jpg" },
  { title: "Sajek Valley", image: "/Images/BannerImages/sajek.jpg" },
];

export default function CustomSwiper() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative max-w-[1200px] mx-auto">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Mousewheel, Keyboard]}
        className="rounded-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                w-full 
                h-[250px] 
                sm:h-[350px] 
                md:h-[450px] 
                lg:h-[500px] 
                rounded-xl 
                flex items-center justify-center
              "
              style={{
                background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${slide.image}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h1
                className="
                  text-white 
                  font-changaOne 
                  text-2xl 
                  sm:text-4xl 
                  md:text-6xl 
                  lg:text-8xl 
                  text-center
                "
              >
                {slide.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current.slideTo(idx)}
            className="text-white"
          >
            {activeIndex === idx ? <FaCircle size={12} /> : <FaRegCircle size={12} />}
          </button>
        ))}
      </div>

      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}