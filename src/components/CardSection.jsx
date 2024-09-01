import React, { useEffect, useState } from "react";
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

  const [animationKey, setAnimationKey] = useState(0);

    // Use an effect or some condition to trigger re-render
    useEffect(() => {
        // This can be any condition based on your requirements
        // Here, we simulate it with a time-based example
       
            setAnimationKey(prevKey => prevKey + 1);
       // Trigger re-render every 5 seconds

       
    }, [currentCate]);

    const containerVariants = {
      hidden: { opacity: 1 },
      show: {
          opacity: 1,
          transition: {
              staggerChildren: 0.3, // Controls the delay between each child animation
          },
      },
  };
  return (
   
      <motion.div key={animationKey} variants={containerVariants} initial="hidden"  animate="show" className="grid grid-cols-1 gap-3 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-4 py-2">
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
