// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import required modules
import { Grid, Pagination } from "swiper/modules";

import {
  AiOutlineHeart,
  AiOutlineMobile,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import { MdCamera, MdComputer, MdHeadphones, MdWatch } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";

const CardCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          2048: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex-col bg-[#ededed] w-[10rem] h-[8rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
            <div className="flex cursor-pointer">
              <AiOutlineMobile size={24} />
            </div>

            <span className="mt-2 font-semibold cursor-pointer">Mobiles</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex-col bg-[#ededed] w-[10rem] h-[8rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
            <div className="flex cursor-pointer">
              <MdWatch size={24} />
            </div>

            <span className="mt-2 font-semibold cursor-pointer">
              Smart Watches
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex-col bg-[#ededed] w-[10rem] h-[8rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
            <div className="flex cursor-pointer">
              <MdCamera size={24} />
            </div>

            <span className="mt-2 font-semibold cursor-pointer">Cameras</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex-col bg-[#ededed] w-[10rem] h-[8rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
            <div className="flex cursor-pointer">
              <MdHeadphones size={24} />
            </div>

            <span className="mt-2 font-semibold cursor-pointer">
              Headphones
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex-col bg-[#ededed] w-[10rem] h-[8rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
            <div className="flex cursor-pointer">
              <MdComputer size={24} />
            </div>

            <span className="mt-2 font-semibold cursor-pointer">Computers</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex-col bg-[#ededed] w-[10rem] h-[8rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
            <div className="flex cursor-pointer">
              <SiYoutubegaming size={24} />
            </div>

            <span className="mt-2 font-semibold cursor-pointer">Gaming</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardCarousel;
