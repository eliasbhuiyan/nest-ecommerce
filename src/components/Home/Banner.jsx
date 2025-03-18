import React from "react";
import { IoIosSend } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "15px", width: "100%" }}>
        <ul className="flex justify-center text-[0px] gap-1.5"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3.5 h-3.5 rounded-full border-2 border-black cursor-pointer">
        {i + 1}
      </div>
    ),
  };
  return (
    <section className="mt-7 banner_slider">
      <div className="container px-0">
        <Slider {...settings}>
          <div>
            <div
              className="px-6 py-14 lg:p-24 bg-no-repeat bg-cover rounded-4xl bg-center md:bg-right"
              style={{ backgroundImage: "url('/banner.png')" }}
            >
              <h1 className="font-bold text-2xl md:text-3xl lg:text-7xl text-primary max-w-2xl">
                Fresh Vegetables Big discount
              </h1>
              <p className="pt-5 md:pt-10 pb-5 md:pb-16 text-xl lg:text-3xl font-normal text-secondary">
                Save up to 50% off on your first order
              </p>
              <div className="bg-white rounded-full max-w-md flex items-center gap-1 pl-2">
                <IoIosSend className="text-4xl text-secondary" />
                <input
                  type="email"
                  placeholder="Your emaill address"
                  className="w-full outline-0"
                />
                <button className="py-2 px-3 md:py-6 md:px-10 bg-brand rounded-4xl text-white text-base cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className="px-6 py-14 lg:p-24 bg-no-repeat bg-cover rounded-4xl bg-center md:bg-right"
              style={{ backgroundImage: "url('/banner.png')" }}
            >
              <h1 className="font-bold text-2xl md:text-3xl lg:text-7xl text-primary max-w-2xl">
                Fresh Vegetables Big discount
              </h1>
              <p className="pt-5 md:pt-10 pb-5 md:pb-16 text-xl lg:text-3xl font-normal text-secondary">
                Save up to 50% off on your first order
              </p>
              <div className="bg-white rounded-full max-w-md flex items-center gap-1 pl-2">
                <IoIosSend className="text-4xl text-secondary" />
                <input
                  type="email"
                  placeholder="Your emaill address"
                  className="w-full outline-0"
                />
                <button className="py-2 px-3 md:py-6 md:px-10 bg-brand rounded-4xl text-white text-base cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
