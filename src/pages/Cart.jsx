import React, { useEffect } from "react";
import Breadcramp from "../components/utils/Breadcramp";
import CartItems from "../components/utils/CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartData = useSelector((state)=>state.cart.cart)
  // console.log(cartData);
  let sum = 0;
  cartData.forEach((item)=>{
    sum += item.quantity *  item.productData.price;    
  })
  return (
    <section>
      <div className="py-8 border-b border-[#CACACA]">
        <div className="container">
          <Breadcramp />
        </div>
      </div>
      <div className="container py-12">
        <h2 className="text-6xl text-primary font-bold">Your Cart</h2>
        <p className="text-secondary font-normal py-6">
          There are 3 products in your cart
        </p>
        <div className="flex gap-4">
          <table className="w-9/12">
            <thead>
              <tr>
                <th className="bg-[#e9e8e8] py-4 font-primary font-medium text-base">
                  Product
                </th>
                <th className="bg-[#e9e8e8] py-4 font-primary font-medium text-base">
                  Price
                </th>
                <th className="bg-[#e9e8e8] py-4 font-primary font-medium text-base">
                  Quantity
                </th>
                <th className="bg-[#e9e8e8] py-4 font-primary font-medium text-base">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {
                cartData.map((item)=>(
                  <CartItems key={item.productData.id} data={item}/>
                ))
              }
            </tbody>
          </table>
          <div className="w-3/12 px-16 pt-4 pb-12 bg-[#e9e8e8] text-center h-fit">
            <h3 className="font-primary font-semibold text-3xl mb-16">
              Cart Totals
            </h3>
            <div className="flex justify-between">
              <p className="font-primary font-medium text-base">Subtotal</p>
              <p className="font-primary font-medium text-base text-secondary">
                $ {sum}
              </p>
            </div>
            <div className="flex justify-between pt-8 pb-10">
              <p className="font-primary font-medium text-base">Total</p>
              <p className="font-primary font-medium text-base text-brand">
                $ {sum}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
