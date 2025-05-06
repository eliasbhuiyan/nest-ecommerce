import React from "react";

const CartItems = ({data}) => {  
  return (
    <tr>
      <td className="pt-5 border-b border-[#CACACA]">
        <div className="flex items-center gap-9 pl-8">
          <div className="w-28 rounded-xl overflow-hidden">
            <img src={data?.productData?.images[0]} className="w-full" alt="product" />
          </div>
          <p className="font-primary font-normal text-base text-secondary">
            {data?.productData?.title}
          </p>
        </div>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <p className="font-primary font-normal text-base text-secondary text-center">
         $ {data?.productData?.price}
        </p>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <p className="w-8 h-8 border flex justify-center items-center m-auto">
          {data?.quantity}
        </p>
      </td>
      <td className="pt-5 border-b border-[#CACACA]">
        <div className="flex items-center gap-12 justify-center">
          <p>$ {data?.quantity * data?.productData?.price}</p>
        </div>
      </td>
    </tr>
  );
};

export default CartItems;
