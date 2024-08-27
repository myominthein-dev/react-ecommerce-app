import React, { useState } from "react";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
import { useParams } from "react-router-dom";
import RatingStar from "./RatingStar";
import useCartStore from "../store/useCartStore";

const ProductCardDetail = () => {
  const { products } = useProductStore();
  const { cartItems,addCartItem } = useCartStore();

  const { cardId } = useParams();
  const currentProduct = products.find((product) => product.id == cardId);
  const existItem = cartItems.find(
    (item) => item.productId == currentProduct.id
  );

  const addBtnHandler = () => {
    const obj = {
      id : Date.now(),
      productId : currentProduct.id,
      quantity : 1
    }
    addCartItem(obj)
  }

  return (
    <div className="my-auto">
      <h3 className="text-2xl my-3 font-serif">Product Details</h3>
      <div className="border border-gray-200 rounded-lg shadow p-5 sm:grid grid-cols-5 border-black">
        <div className="col-span-2 sm:col-span-2 flex flex-col items-center justify-center ">
          <img className="h-28" src={currentProduct.image} alt="" />
          <div className="flex my-3 gap-3">
            <img className="h-14" src={currentProduct.image} alt="" />
            <img className="h-14" src={currentProduct.image} alt="" />
            <img className="h-14" src={currentProduct.image} alt="" />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-3 px-5">
          <h3 className="text-3xl">{currentProduct.title}</h3>
          <h5 className="bg-slate-500 rounded text-slate-200 inline-flex px-2 py-1 my-2">
            {currentProduct.category}
          </h5>
          <p className="text-sm">{currentProduct.description}</p>
          <RatingStar rate={currentProduct.rating.rate} />
          <div className="flex justify-between">
            <p>${currentProduct.price}</p>
            {existItem ? (
              <button
                disabled
              
                className="text-slate-300 text-nowrap bg-gray-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800"
              >
                Added
              </button>
            ) : (
              <button
                onClick={addBtnHandler}
                className="text-white text-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetail;
