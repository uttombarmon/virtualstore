"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
function Banner() {
  const banners: string[] = [
    "https://i.postimg.cc/159f1n0K/banner1.png",
    "https://i.postimg.cc/15J4mmJ1/banner2.png",
    "https://i.postimg.cc/902zMz6C/banner3.png",
  ];
  return (
    <div className=" h-[calc(100vh-64px)] w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {banners.map((e, index) => (
          <SwiperSlide
            key={e}
            virtualIndex={index}
            className=" w-full h-full bg-amber-200"
          >
            <Image
              src={e}
              alt="Banner Slider"
              fill={true}
              className=" w-full h-full bg-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
