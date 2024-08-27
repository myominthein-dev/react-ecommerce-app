import { create } from "zustand";
import { products } from "../data/data";

const useProductStore = create((set) =>({
    products : products
    
}))

export default  useProductStore