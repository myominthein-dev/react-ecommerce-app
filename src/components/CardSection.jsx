import React from "react";
import ProductCard from "./ProductCard";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";

const CardSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();
  const currentCate = categories.find((cate) => cate.isActive == true);
  const filteredProducts = products.filter(
    (product) => product.category == currentCate.category
  );
  return (
   
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-4 py-2">
        {currentCate.category == "all"
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    
  );
};

export default CardSection;
