import { useEffect, useRef, useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";

const Tabs = () => {
  return (
    <>
      <div className="tabs tabs-bordered space-x-3">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab font-semibold"
          aria-label="Best Seller"
        />
        <div className="tab-content py-10">Tab Content 1</div>

        <input
          type="radio"
          name="my_tabs_1"
          className="tab font-semibold"
          aria-label="New Arrival"
          checked
        />
        <div className="tab-content py-10">
          <div className="flex gap-4 justify-center md:justify-normal flex-wrap items-center">
            <div className="flex-col bg-[#ededed] w-[13rem] h-[25rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
              <div className="flex  cursor-pointer">
                <img
                  src="https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"
                  className=" h-26 w-26 object-cover"
                  alt=""
                />
              </div>
              <p className="mt-2 text-center font-semibold">
                Iphone 14 pro Max (256GB) Deep Purple (MQT99882X)
              </p>
              <span className="mt-2 text-xl font-semibold cursor-pointer">
                $900
              </span>

              <button className="btn mt-2 btn-neutral h-8 w-36">Buy Now</button>
            </div>
            <div className="flex-col bg-[#ededed] w-[13rem] h-[25rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
              <div className="flex  cursor-pointer">
                <img
                  src="https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"
                  className=" h-26 w-26 object-cover"
                  alt=""
                />
              </div>
              <p className="mt-2 text-center font-semibold">
                Iphone 14 pro Max (256GB) Deep Purple (MQT99882X)
              </p>
              <span className="mt-2 text-xl font-semibold cursor-pointer">
                $900
              </span>

              <button className="btn mt-2 btn-neutral h-8 w-36">Buy Now</button>
            </div>
            <div className="flex-col bg-[#ededed] w-[13rem] h-[25rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
              <div className="flex  cursor-pointer">
                <img
                  src="https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"
                  className=" h-26 w-26 object-cover"
                  alt=""
                />
              </div>
              <p className="mt-2 text-center font-semibold">
                Iphone 14 pro Max (256GB) Deep Purple (MQT99882X)
              </p>
              <span className="mt-2 text-xl font-semibold cursor-pointer">
                $900
              </span>

              <button className="btn mt-2 btn-neutral h-8 w-36">Buy Now</button>
            </div>
            <div className="flex-col bg-[#ededed] w-[13rem] h-[25rem] py-5 px-3 cursor-pointer z-10 rounded-lg items-center justify-center flex ">
              <div className="flex  cursor-pointer">
                <img
                  src="https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"
                  className=" h-26 w-26 object-cover"
                  alt=""
                />
              </div>
              <p className="mt-2 text-center font-semibold">
                Iphone 14 pro Max (256GB) Deep Purple (MQT99882X)
              </p>
              <span className="mt-2 text-xl font-semibold cursor-pointer">
                $900
              </span>

              <button className="btn mt-2 btn-neutral h-8 w-36">Buy Now</button>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          className="tab font-semibold"
          aria-label="Featured Products"
        />
        <div className="tab-content py-10">Tab content 3</div>
      </div>
    </>
  );
};

export default Tabs;
