import React from "react";
import ProductCard from "./ProductCard";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";
import { motion } from "framer-motion";

const CardSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();
  const currentCate = categories.find((cate) => cate.isActive == true);
  const filteredProducts = products.filter(
    (product) => product.category == currentCate.category
  );

  const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.5
        }
    }
};
  return (
   
      <motion.div variants={containerVariants}  initial="hidden"  animate="visible" className="grid grid-cols-1 gap-3 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-4 py-2">
        {currentCate.category == "all"
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </motion.div>
    
  );
};

export default CardSection;
