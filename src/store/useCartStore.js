import { create } from "zustand";

const useCartStore = create((set) => ({
    cartItems : [
        {
            id : 1,
            productId : 3,
            quantity : 2
        },
        {
            id : 2,
            productId : 1,
            quantity : 1
        }
    ],
    addCartItem : (obj) => set((state)=> ({
        cartItems : [...state.cartItems,obj]
    })),
    removeCartItem : (id) => set((state) => ({
        cartItems : state.cartItems.filter(cartItem => cartItem.id != id)
    })),
    increaseQty : (id) => set((state) => ({
        cartItems : state.cartItems.map(item => item.id == id ? {...item,quantity : item.quantity + 1 } : item)
    })),
    decreaseQty : (id) => set(state => ({
        cartItems : state.cartItems.map(item => item.id == id ? {...item,quantity : item.quantity - 1} : item)
    }))

}))

export default useCartStore;