import React from "react";
import Banner from "../components/Shop/Banner";
import Products from "../components/Shop/Products";
import DealOfDay from "../components/utils/DealOfDay";
import Subscribe from "../components/utils/Subscribe";

const Shop = () => {
  return (
    <>
      <Banner />
      <Products />
      <DealOfDay />
      <Subscribe />
    </>
  );
};

export default Shop;
