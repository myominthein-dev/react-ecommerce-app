import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = ({ stick }) => {
  const { cartItems } = useCartStore();
  return (
    <div
      className={`dark:bg-gray-800 bg-gray-100 sticky  transition-all duration-400 ${
        stick && "top-0"
      }  border-slate-400 border-b py-3`}
    >
      <Container>
        <div className="flex dark:text-white justify-between ">
          <div>
            <Link to="/">
              <h1 className="text-xl font-semibold">E-commerce</h1>
            </Link>
          </div>
          <Link to={"/cart"}>
            <div className="relative">
              <button className="border border-black hover:bg-gray-700 transition-all duration-300 active:scale-90 hover:text-white px-4 py-1 rounded">
                Cart
              </button>
              {/* <span className="absolute text-xs px-1 text-white  bg-red-500 rounded top-0 right-0 -translate-y-1/2 translate-x-1/2">
                {
                  cartItems.length
                }
              </span> */}

              <div className="absolute inline-flex items-center justify-center size-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                8
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
