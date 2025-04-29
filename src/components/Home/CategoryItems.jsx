import React from "react";
import { Link } from "react-router";

const CategoryItems = ({data}) => {
  return (
    <div>
      <Link
        to="/"
        className="p-2 md:p-6 mx-2 rounded-xl bg-[#F2FCE4] w-fit text-center transition-all hover:shadow-xl inline-block"
      >
        <img src="/burger-caregory.png" alt="burger-caregory" />
        <h3 className="pt-2 md:pt-4 font-bold text-xs md:text-base text-primary">
         {data?.name}
        </h3>
        <p className="text-secondary font-normal text-xs md:text-sm">
          26 items
        </p>
      </Link>
    </div>
  );
};

export default CategoryItems;
