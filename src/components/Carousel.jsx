import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={true}
        effect="fade"
        modules={[Autoplay, A11y, Navigation]}
      >
        <SwiperSlide>
          {" "}
          {/* <div className="flex justify-center h-[85vh] items-center absolute w-full">
            <button className="btn btn-warn  hover:bg-base-200 hover:text-black w-60 ">
              Shop Now
            </button>
          </div> */}
          <img
            src="https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover h-[85vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="flex justify-center h-[85vh] items-center absolute w-full">
            <button className="btn btn-warn  hover:bg-base-200 hover:text-black w-60 ">
              Shop Now
            </button>
          </div> */}
          <img
            src="https://images.unsplash.com/photo-1509386175345-24d4e16ae35f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover h-[85vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="flex justify-center h-[85vh] items-center absolute w-full">
            <button className="btn btn-warn  hover:bg-base-200 hover:text-black w-60 ">
              Shop Now
            </button>
          </div> */}
          <img
            src="https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover h-[85vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="flex justify-center h-[85vh] items-center absolute w-full">
            <button className="btn btn-warn  hover:bg-base-200 hover:text-black w-60 ">
              Shop Now
            </button>
          </div> */}
          <img
            src="https://images.unsplash.com/photo-1560369457-fb1181a7ac4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full object-cover h-[85vh]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
