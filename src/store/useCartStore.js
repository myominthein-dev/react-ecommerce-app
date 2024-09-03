import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  totalCost: "00.00",
  addCartItem: (obj) =>
    set((state) => ({
      cartItems: [...state.cartItems, obj],
    })),
  removeCartItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id != id),
    })),
  increaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    })),
}));

export default useCartStore;
