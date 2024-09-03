import React, { useState } from "react";
import useCartStore from "../store/useCartStore";
import CartItem from "./CartItem";
import useProductStore from "../store/useProductStore";
import emptyCart from "../assets/empty_cart.svg"

const CartSection = () => {
  const { cartItems } = useCartStore();
  const {products} = useProductStore();

  const total = cartItems.reduce((pv,cv) => {
    const price = products.find(product => product.id == cv.productId).price;
    const cost = cv.quantity * price;
    return pv + cost
  },0)

  const taxPercent = total * 0.05;
  const netTotal = total + taxPercent;
  return (
    <div className=" overflow-scroll  cartGroup flex flex-col">
      <div className="pb-20">
        {
          cartItems.length == 0 ? <><img className="size-40 mt-14 mx-auto" src={emptyCart} /> <p className="text-center font-semibold text-sm">Cart is Empty!</p></>: cartItems.map((item) => (
           
               <CartItem key={item.id}  item={item} />
         
          ))
        }
      </div >

      <div className="py-4 border-t-2 absolute  bg-gray-50 px-2 bottom-0 left-0 right-0 ">
        <div className="sm:flex justify-between">
          <button className="border rounded none sm:block dark:text-white text-slate-800 font-semibold border-gray-700 px-4  hover:bg-gray-700 transition-all duration-300 active:scale-90 hover:text-white text-nowrap">
            Order Now
          </button>
          <div className="   flex items-end  justify-end gap-10 ">
          <div className=" text-right">
            <p className=" text-gray-500 pb-1 font-semibold">Total</p>
            <p className=" font-bold">{total.toFixed(2)}</p>
          </div>
          <div className=" text-right">
            <p className=" text-gray-500 pb-1 font-semibold">Tax(5%)</p>
            <p className=" font-bold">{taxPercent.toFixed(2)}</p>
          </div>
          <div className=" text-right">
            <p className=" text-gray-500 font-semibold text-lg">Net Total</p>
            <p className=" text-xl font-bold">{netTotal.toFixed(2)}</p>
          </div>
        </div>
        <button className="border rounded w-full sm:none dark:text-white text-slate-800 font-semibold border-gray-700 px-4  hover:bg-gray-700 transition-all duration-300 active:scale-90 hover:text-white text-nowrap">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
