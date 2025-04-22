import React, { useEffect, useState } from "react";
import ProductItem from "../utils/ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../utils/SliderArrows";
import axios from "axios";
const BestSells = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow customStyle="absolute bottom-1/2 right-5" />,
    prevArrow: <PrevArrow customStyle="absolute bottom-1/2 left-5" />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const api = async () => {
      const options = {
        method: "GET",
        url: "https://api.freeapi.app/api/v1/ecommerce/products",
        params: { page: "2", limit: "10" },
        headers: { accept: "application/json" },
      };

      try {
        const res = await axios.request(options);
        setProductList(res.data.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    api();
  }, []);
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-7 items-center md:items-end">
          <h2 className="sectn_heading">Daily Best Sells</h2>
          <ul className="flex flex-wrap text-base font-light text-primary gap-2 md:gap-7">
            <li>
              <button className="hover:text-brand cursor-pointer">
                Featured
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                Popular
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                New added
              </button>
            </li>
          </ul>
        </div>
        <div className="pt-11 flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/4">
            <img
              src="/bestsellBanner.png"
              alt="bestsellBanner"
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-3/4">
            <Slider {...settings}>
              {productList.map((item) => (
                <ProductItem key={item._id} data={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSells;
