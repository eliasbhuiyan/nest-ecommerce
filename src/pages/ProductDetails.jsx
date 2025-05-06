import { FaStar } from "react-icons/fa";
import ProductSlide from "../components/utils/ProductSlide";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};

const ProductDetails = () => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState("1")
  const params = useParams()
  const settings = {
    direction: "horizontal", // or "vertical"
    zoom: true, // or false
  };

  const [productData, setProductData] = useState({});
  useEffect(() => {
    const api = async () => {
      const options = {
        method: "GET",
        url: `https://api.escuelajs.co/api/v1/products`,
        headers: { accept: "application/json" },
      };

      try {
        const res = await axios.request(options);
        res.data.find((item)=>{
         if(item.slug == params.slug){
          setProductData(item);
         }
        })
      } catch (error) {
        console.error(error);
      }
    };
    api();
  }, []);

  const handelAddCard = ()=>{
    dispatch(addToCart({quantity, productData}))
  }
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex gap-11">
          <div className="w-1/3">
            <ProductSlide settings={settings} api={productData.images} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary">
              {productData?.title}
            </h2>
            <div className="flex gap-3 py-2.5">
              <ul className="flex text-amber-400 text-xs">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
              <p className="text-xs font-normal text-secondary">(4.0)</p>
            </div>
            <h4 className="text-sm md:text-4xl font-bold text-brand py-4">
              ${productData?.price}
              <span className="text-secondary text-base line-through">{productData.price + 100}</span>
            </h4>
            <p className="text-base font-normal text-secondary">
              {productData?.description}
            </p>
            <div className="pt-10 flex items-center gap-5">
              <input
                onChange={(e)=> setQuantity(e.target.value)}
                min="1"
                type="number"
                className="border-2 border-brand rounded-xl w-20 text-center py-3 outline-0 text-xl"
              />
              <button onClick={handelAddCard} className="bg-brand flex items-center justify-center gap-2 text-white font-bold text-lg py-2 px-4 rounded-sm cursor-pointer">
                <CiShoppingCart />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
