import React from "react";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import ProductBanner from "../components/Home/ProductBanner";
import PopularProducts from "../components/Home/PopularProducts";
import BestSells from "../components/Home/BestSells";
import DealOfDay from "../components/Home/DealOfDay";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <ProductBanner />
      <PopularProducts />
      <BestSells />
      <DealOfDay />
    </>
  );
};

export default Home;
