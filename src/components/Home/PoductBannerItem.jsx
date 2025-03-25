import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const PoductBannerItem = ({ bg, url, children }) => {
  return (
    <div
      className={`p-5 lg:py-20 lg:px-12 bg-no-repeat bg-cover rounded-xl bg-center w-full bg-[url('${bg}')]`}
    >
      <h2 className="font-bold text-lg lg:text-2xl text-primary xl:w-62 pb-4">
        {children}
      </h2>
      <Link
        to={url}
        className="bg-brand py-2 px-2.5 rounded-lg text-white text-xs flex items-center gap-1 w-fit"
      >
        Shop Now <FaArrowRight />
      </Link>
    </div>
  );
};

export default PoductBannerItem;
