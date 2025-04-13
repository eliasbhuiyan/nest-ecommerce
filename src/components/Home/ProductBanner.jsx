import React from "react";
import PoductBannerItem from "./PoductBannerItem";
const ProductBanner = () => {
  return (
    <section className="pb-12">
      <div className="container flex flex-col sm:flex-row gap-6">
        <PoductBannerItem bg="/product-banner.png" url="/">
          Everyday Fresh & Clean with Our Products
        </PoductBannerItem>
        <PoductBannerItem bg="/product-banner.png" url="/">
          Make your Breakfast Healthy and Easy
        </PoductBannerItem>
        <PoductBannerItem bg="/product-banner.png" url="/">
          The best Organic Products Online
        </PoductBannerItem>
      </div>
    </section>
  );
};

export default ProductBanner;
