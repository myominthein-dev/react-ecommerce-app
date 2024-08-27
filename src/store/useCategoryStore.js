import { create } from "zustand";
import { categories } from "../data/data";

const useCategoryStore = create((set)=> ({
    categories : categories,
    changeActive : (id) => set(state => (
        {
            categories : state.categories.map(category => category.id == id ? {...category, isActive : true} : {...category, isActive : false})
        }
    ))
    
}))

export default useCategoryStore;
