import React from "react";
import useCartStore from "../store/useCartStore";
import CartItem from "./CartItem";

const CartSection = () => {
  const { cartItems } = useCartStore();
  return (
    <div className=" overflow-scroll cartGroup  flex flex-col">
      <div className="my-4 pb-20 overflow-scroll cartGroup  ">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div >

      <div className="py-4 border-t-2 absolute  bg-gray-50 px-2 bottom-0 left-0 right-0 ">
        <div className="flex justify-between">
          <button className="border rounded dark:text-white text-slate-800 font-semibold border-gray-700 px-4  hover:bg-gray-700 transition-all duration-300 active:scale-90 hover:text-white text-nowrap">
            Order Now
          </button>
          <div className="   flex items-end  justify-end gap-10 ">
          <div className=" text-right">
            <p className=" text-gray-500 pb-1 font-semibold">Total</p>
            <p className=" font-bold">43.28</p>
          </div>
          <div className=" text-right">
            <p className=" text-gray-500 pb-1 font-semibold">Tax(5%)</p>
            <p className=" font-bold">2.16</p>
          </div>
          <div className=" text-right">
            <p className=" text-gray-500 font-semibold text-lg">Net Total</p>
            <p className=" text-xl font-bold">45.44</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
