import React from "react";
import { Link } from "react-router";
import DealCard from "./DealCard";

const DealOfDay = () => {
  return (
    <section className="pb-12 lg:pb-64">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-7 items-center md:items-end">
          <h2 className="sectn_heading">Deals Of The Day</h2>
          <Link to="/" className="text-primary font-semibold">
            All Deals
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-11 gap-6">
          <DealCard />
          <DealCard />
          <DealCard />
          <DealCard />
        </div>
      </div>
    </section>
  );
};

export default DealOfDay;
