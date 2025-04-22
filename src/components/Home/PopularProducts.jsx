import { useEffect, useState } from "react";
import ProductItem from "../utils/ProductItem";
import axios from "axios";

const PopularProducts = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const api = async () => {
      const options = {
        method: "GET",
        url: "https://api.freeapi.app/api/v1/ecommerce/products",
        params: { page: "1", limit: "10" },
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
          <h2 className="sectn_heading">Popular Products</h2>
          <ul className="flex flex-wrap text-base font-light text-primary gap-2 md:gap-7">
            <li>
              <button className="hover:text-brand cursor-pointer">All</button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                Milks & Dairies
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                Coffes & Teas
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                {" "}
                Pet Foods
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                Vegetables
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                Fruits
              </button>
            </li>
          </ul>
        </div>
        <div className="pt-11 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
          {productList.map((item) => (
            <ProductItem key={item._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
