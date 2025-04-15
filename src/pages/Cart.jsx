import React from "react";
import Breadcramp from "../components/utils/Breadcramp";
import CartItems from "../components/utils/CartItem";

const Cart = () => {
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
              <CartItems />
              <CartItems />
              <CartItems />
            </tbody>
          </table>
          <div className="w-3/12 px-16 pt-4 pb-12 bg-[#e9e8e8] text-center h-fit">
            <h3 className="font-primary font-semibold text-3xl mb-16">
              Cart Totals
            </h3>
            <div className="flex justify-between">
              <p className="font-primary font-medium text-base">Subtotal</p>
              <p className="font-primary font-medium text-base text-secondary">
                BDT. 43534
              </p>
            </div>
            <div className="flex justify-between pt-8 pb-10">
              <p className="font-primary font-medium text-base">Total</p>
              <p className="font-primary font-medium text-base text-brand">
                BDT. 34534
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
