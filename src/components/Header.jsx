import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = ({ stick }) => {
  const {cartItems} = useCartStore();
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
              <button className="border border-black px-4 py-1 rounded">
                Cart
              </button>
              <span className="absolute text-xs px-1 text-white  bg-red-500 rounded top-0 right-0 -translate-y-1/2 translate-x-1/2">
                {
                  cartItems.length
                }
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
