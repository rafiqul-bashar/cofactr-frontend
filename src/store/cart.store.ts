import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cartItems: [];
  addItemToCart: (item: any) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeItemFromCart: (productId: number) => void;
  getCartTotal: () => void;
}
const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cartItems: [],
      addItemToCart: (item) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === item.id
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        } else {
          set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
      },
      // increase or decrease quantity
      increaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        }
      },
      decreaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            if (itemExists.quantity === 1) {
              const updatedCartItems = get().cartItems.filter(
                (item) => item.id !== productId
              );
              set({ cartItems: updatedCartItems });
            } else {
              itemExists.quantity--;
              set({ cartItems: [...get().cartItems] });
            }
          }
        }
      },

      //  get cart total

      getCartTotal: () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        get().cartItems.forEach((item) => {
          totalQuantity += item.quantity!;
          totalPrice += item.price! * item.quantity!;
        });
        return { totalPrice, totalQuantity };
      },

      // remove Item
      removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            const updatedCartItems = get().cartItems.filter(
              (item) => item.id !== productId
            );
            set({ cartItems: updatedCartItems });
          }
        }
      },
    }),
    { name: "cart" }
  )
);

export default useCartStore;
