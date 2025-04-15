import { FaStar } from "react-icons/fa";
import ProductSlide from "../components/utils/ProductSlide";
import { CiShoppingCart } from "react-icons/ci";

const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};

const ProductDetails = () => {
  const settings = {
    direction: "horizontal", // or "vertical"
    zoom: true, // or false
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex gap-11">
          <div className="w-1/3">
            <ProductSlide settings={settings} api={API.images} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary">
              Seeds of Change Organic Quinoa, Brown
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
              $28.85
              <span className="text-secondary text-base line-through">$32</span>
            </h4>
            <p className="text-base font-normal text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, odio
              minus dolore impedit fuga eum eligendi.
            </p>
            <div className="pt-10 flex items-center gap-5">
              <input
                type="number"
                value={"1"}
                className="border-2 border-brand rounded-xl w-20 text-center py-3 outline-0 text-xl"
              />
              <button className="bg-brand flex items-center justify-center gap-2 text-white font-bold text-lg py-2 px-4 rounded-sm cursor-pointer">
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
