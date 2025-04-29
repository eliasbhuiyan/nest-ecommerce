import React, { useEffect, useState } from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import ProductItem from "../utils/ProductItem";
import axios from "axios";

const Products = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const api = async () => {
      const options = {
        method: "GET",
        url: "https://api.escuelajs.co/api/v1/products",
        params: { page: "1", limit: "10" },
        headers: { accept: "application/json" },
      };

      try {
        const res = await axios.request(options);
        console.log(res.data);
        setProductList(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    api();
  }, []);
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between">
          <p>We found {productList.length} items for you!</p>
          <div className="flex items-center gap-2 p-2 border border-[#CACACA] rounded">
            <AiTwotoneAppstore />
            <label htmlFor="show">Show: </label>
            <select id="show" >
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6">
          {productList.map((item) => (
            <ProductItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
